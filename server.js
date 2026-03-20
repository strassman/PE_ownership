const express = require('express');
const path = require('path');
const providers = require('./data/providers.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API: get all providers (optional filters via query params)
// e.g. /api/providers?type=vet&city=charlotte
app.get('/api/providers', (req, res) => {
  const { type, city } = req.query;
  let results = providers;

  if (city) {
    results = results.filter(p => p.city.toLowerCase() === city.toLowerCase());
  }
  if (type && type !== 'all') {
    results = results.filter(p => p.type === type);
  }

  res.json(results);
});

// API: get list of available cities
app.get('/api/cities', (req, res) => {
  const cities = [...new Set(providers.map(p => p.city))].sort();
  res.json(cities);
});

// All other routes serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`OwnedBy running on port ${PORT}`);
});
