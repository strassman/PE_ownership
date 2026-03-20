const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Uses Supabase if env vars set, otherwise falls back to providers.js
let supabase = null;
if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY) {
  const { createClient } = require('@supabase/supabase-js');
  supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  console.log('Using Supabase for data');
} else {
  console.log('No Supabase env vars — using local providers.js');
}

async function getProviders(filters = {}) {
  if (supabase) {
    let q = supabase.from('providers').select('*').eq('verified', true);
    if (filters.city) q = q.ilike('city', filters.city);
    if (filters.type && filters.type !== 'all') q = q.eq('type', filters.type);
    const { data, error } = await q.order('name');
    if (error) throw error;
    return data;
  } else {
    let data = require('./data/providers.js');
    if (filters.city) data = data.filter(p => p.city.toLowerCase() === filters.city.toLowerCase());
    if (filters.type && filters.type !== 'all') data = data.filter(p => p.type === filters.type);
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }
}

async function getCities() {
  if (supabase) {
    const { data, error } = await supabase.from('providers').select('city, state').eq('verified', true);
    if (error) throw error;
    const seen = new Set();
    return data.filter(r => { const k = `${r.city},${r.state}`; if (seen.has(k)) return false; seen.add(k); return true; }).sort((a,b) => a.city.localeCompare(b.city));
  } else {
    const data = require('./data/providers.js');
    const seen = new Set();
    return data.map(p => ({ city: p.city, state: p.state })).filter(r => { const k = `${r.city},${r.state}`; if (seen.has(k)) return false; seen.add(k); return true; }).sort((a,b) => a.city.localeCompare(b.city));
  }
}

app.get('/api/providers', async (req, res) => {
  try { res.json(await getProviders({ city: req.query.city, type: req.query.type })); }
  catch (err) { console.error(err); res.status(500).json({ error: 'Failed to fetch providers' }); }
});

app.get('/api/cities', async (req, res) => {
  try { res.json(await getCities()); }
  catch (err) { res.status(500).json({ error: 'Failed to fetch cities' }); }
});

app.post('/api/corrections', async (req, res) => {
  if (!supabase) return res.status(200).json({ message: 'Correction noted' });
  try {
    const { error } = await supabase.from('corrections').insert([req.body]);
    if (error) throw error;
    res.json({ message: 'Thank you — we will review your correction.' });
  } catch (err) { res.status(500).json({ error: 'Failed to save correction' }); }
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`OwnedBy running on port ${PORT}`));
