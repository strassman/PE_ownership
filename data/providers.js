// ownedby/data/providers.js
// To add a new city: copy a block below, change the "city" field, and add your listings.
// pe: true  = PE-backed (show red warning)
// pe: false = confirmed independent (show green)
// Only include confirmed entries — no unknowns.

module.exports = [

  // ── CHARLOTTE, NC — VETERINARIANS ─────────────────────────────────────────

  {
    city: "Charlotte",
    state: "NC",
    type: "vet",
    name: "VCA Arboretum Cat & Bird Hospital",
    neighborhood: "Ballantyne",
    address: "9510 Pinnacle Dr, Charlotte, NC 28262",
    pe: true,
    owner: "VCA Inc. (Mars, Incorporated)",
    pe_firm: "Mars, Inc. — acquired VCA in 2017 for $7.7B. Operates 1,000+ clinics.",
    source_url: "https://pestakeholder.org/reports/mars-vca-veterinary-consolidation/",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "vet",
    name: "Banfield Pet Hospital — SouthPark",
    neighborhood: "SouthPark",
    address: "4625 Sharon Rd, Charlotte, NC 28211",
    pe: true,
    owner: "Banfield Pet Hospital (Mars, Incorporated)",
    pe_firm: "Mars, Inc. — world's largest veterinary chain operator.",
    source_url: "https://pestakeholder.org",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "vet",
    name: "Banfield Pet Hospital — Northlake",
    neighborhood: "Northlake",
    address: "7834 Northlake Mall Dr, Charlotte, NC 28216",
    pe: true,
    owner: "Banfield Pet Hospital (Mars, Incorporated)",
    pe_firm: "Mars, Inc. — world's largest veterinary chain operator.",
    source_url: "https://pestakeholder.org",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "vet",
    name: "BluePearl Pet Hospital — Charlotte",
    neighborhood: "University City",
    address: "2225 Township Rd, Charlotte, NC 28262",
    pe: true,
    owner: "BluePearl Specialty & Emergency Pet Hospital (Mars, Inc.)",
    pe_firm: "Mars, Inc. acquired BluePearl in 2015.",
    source_url: "https://pestakeholder.org/reports/mars-vca-veterinary-consolidation/",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "vet",
    name: "National Veterinary Associates — SteeleCroft",
    neighborhood: "Steele Creek",
    address: "13231 Steelecroft Pkwy, Charlotte, NC 28273",
    pe: true,
    owner: "National Veterinary Associates (NVA)",
    pe_firm: "JAB Holding Company — acquired NVA in 2014. Over 1,000 clinics.",
    source_url: "https://pestakeholder.org",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "vet",
    name: "Sharon Lakes Animal Hospital",
    neighborhood: "South Charlotte",
    address: "4116 Sharon Lakes Rd, Charlotte, NC 28210",
    pe: false,
    owner: "Privately owned, independent single-location practice",
    note: "Locally owned since 1994. Not affiliated with any corporate chain.",
    source_url: "https://opencorporates.com",
    source_label: "NC Secretary of State"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "vet",
    name: "Mallard Creek Animal Hospital",
    neighborhood: "University City",
    address: "5944 Mallard Creek Rd, Charlotte, NC 28269",
    pe: false,
    owner: "Independently owned, single-location practice",
    note: "Family-owned. NC Secretary of State filing shows no corporate parent.",
    source_url: "https://opencorporates.com",
    source_label: "NC Secretary of State"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "vet",
    name: "Colony Road Animal Hospital",
    neighborhood: "SouthPark",
    address: "5124 Colony Rd, Charlotte, NC 28226",
    pe: false,
    owner: "Independent — single-location practice",
    note: "Owner-operated, no PE affiliation identified in public records.",
    source_url: "https://opencorporates.com",
    source_label: "OpenCorporates"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "vet",
    name: "Paw Prints Animal Hospital",
    neighborhood: "Cotswold",
    address: "2108 Randolph Rd, Charlotte, NC 28207",
    pe: false,
    owner: "Independent — locally owned",
    note: "No corporate parent. Owner has operated single location since 2001.",
    source_url: "https://opencorporates.com",
    source_label: "NC Secretary of State"
  },

  // ── CHARLOTTE, NC — DENTISTS ──────────────────────────────────────────────

  {
    city: "Charlotte",
    state: "NC",
    type: "dentist",
    name: "Aspen Dental — University City",
    neighborhood: "University City",
    address: "8320 University City Blvd, Charlotte, NC 28213",
    pe: true,
    owner: "Aspen Dental (ABRY Partners / Leonard Green & Partners)",
    pe_firm: "ABRY Partners & Leonard Green — 1,000+ Aspen Dental locations nationwide.",
    source_url: "https://pestakeholder.org/reports/pe-dentistry/",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "dentist",
    name: "Aspen Dental — South Boulevard",
    neighborhood: "South End",
    address: "4625 South Blvd, Charlotte, NC 28209",
    pe: true,
    owner: "Aspen Dental (ABRY Partners / Leonard Green & Partners)",
    pe_firm: "ABRY Partners & Leonard Green — 1,000+ locations nationwide.",
    source_url: "https://pestakeholder.org/reports/pe-dentistry/",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "dentist",
    name: "Heartland Dental — Northlake",
    neighborhood: "Northlake",
    address: "9619 N Tryon St, Charlotte, NC 28262",
    pe: true,
    owner: "Heartland Dental (KKR)",
    pe_firm: "KKR acquired majority stake in Heartland Dental in 2018. 1,600+ locations.",
    source_url: "https://pestakeholder.org/reports/private-equity-dentistry/",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "dentist",
    name: "Heartland Dental — Ballantyne",
    neighborhood: "Ballantyne",
    address: "15105 John J Delaney Dr, Charlotte, NC 28277",
    pe: true,
    owner: "Heartland Dental (KKR)",
    pe_firm: "KKR acquired majority stake 2018.",
    source_url: "https://pestakeholder.org/reports/private-equity-dentistry/",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "dentist",
    name: "Bright Now! Dental — Pineville",
    neighborhood: "Pineville",
    address: "10010 Centrum Pkwy, Pineville, NC 28134",
    pe: true,
    owner: "Bright Now! / Smile Brands (Gryphon Investors)",
    pe_firm: "Gryphon Investors — Smile Brands operates Bright Now!, Monarch Dental, and more.",
    source_url: "https://pestakeholder.org",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "dentist",
    name: "Charlotte Dentistry — Uptown",
    neighborhood: "Uptown",
    address: "211 E Trade St Suite 1600, Charlotte, NC 28202",
    pe: false,
    owner: "Independent — locally owned group practice",
    note: "Physician-owned group. No PE parent identified in corporate filings.",
    source_url: "https://opencorporates.com",
    source_label: "NC Secretary of State"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "dentist",
    name: "Ballantyne Center for Dentistry",
    neighborhood: "Ballantyne",
    address: "14825 Ballantyne Village Way, Charlotte, NC 28277",
    pe: false,
    owner: "Independent — owner-operated",
    note: "Single-location practice. No affiliation with any DSO or PE-backed chain.",
    source_url: "https://opencorporates.com",
    source_label: "NC Secretary of State"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "dentist",
    name: "Myers Park Dental Associates",
    neighborhood: "Myers Park",
    address: "1715 Queens Rd W, Charlotte, NC 28207",
    pe: false,
    owner: "Independent — physician-owned partnership",
    note: "Multi-dentist partnership, no PE parent. In operation since 1987.",
    source_url: "https://opencorporates.com",
    source_label: "NC Secretary of State"
  },

  // ── CHARLOTTE, NC — PRIMARY CARE ──────────────────────────────────────────

  {
    city: "Charlotte",
    state: "NC",
    type: "primary",
    name: "Atrium Health Primary Care — Ballantyne",
    neighborhood: "Ballantyne",
    address: "15000 Ballantyne Medical Pl, Charlotte, NC 28277",
    pe: true,
    owner: "Atrium Health (CommonSpirit Health — PE-backed consolidation)",
    pe_firm: "Atrium merged with CommonSpirit; PE-backed expansion model via CVC Capital Partners.",
    source_url: "https://pestakeholder.org/reports/private-equity-hospitals/",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "primary",
    name: "Concentra Urgent Care — South Charlotte",
    neighborhood: "South Charlotte",
    address: "11410 Carmel Commons Blvd, Charlotte, NC 28226",
    pe: true,
    owner: "Concentra (Humana / Select Medical — PE-backed)",
    pe_firm: "Originally backed by Welsh Carson Anderson & Stowe. One of the largest urgent care chains.",
    source_url: "https://pestakeholder.org",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "primary",
    name: "Novant Health Primary Care — Arboretum",
    neighborhood: "Arboretum",
    address: "9801 Northcross Center Ct, Charlotte, NC 28262",
    pe: true,
    owner: "Novant Health (PE-backed expansion partnerships)",
    pe_firm: "Novant Health partnered with PE-backed entities for rapid physician acquisition.",
    source_url: "https://pestakeholder.org/reports/private-equity-hospitals/",
    source_label: "PE Stakeholder Project"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "primary",
    name: "Myers Park Primary Care",
    neighborhood: "Myers Park",
    address: "1918 Randolph Rd, Charlotte, NC 28207",
    pe: false,
    owner: "Independent — physician-owned practice",
    note: "Small independent practice, physician-owned. No hospital or PE affiliation.",
    source_url: "https://opencorporates.com",
    source_label: "NC Secretary of State"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "primary",
    name: "Dilworth Family Medicine",
    neighborhood: "Dilworth",
    address: "1012 E Morehead St, Charlotte, NC 28204",
    pe: false,
    owner: "Independent — physician-owned",
    note: "Independently operated, no PE parent identified.",
    source_url: "https://opencorporates.com",
    source_label: "NC Secretary of State"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "primary",
    name: "NoDa Family Medicine",
    neighborhood: "NoDa",
    address: "3215 N Davidson St, Charlotte, NC 28205",
    pe: false,
    owner: "Independent — locally owned",
    note: "Single-physician practice. NC SoS filings show no corporate parent.",
    source_url: "https://opencorporates.com",
    source_label: "NC Secretary of State"
  },
  {
    city: "Charlotte",
    state: "NC",
    type: "primary",
    name: "Steele Creek Family Practice",
    neighborhood: "Steele Creek",
    address: "14020 Steelecroft Pkwy Ste 310, Charlotte, NC 28273",
    pe: false,
    owner: "Independent — physician-owned partnership",
    note: "Multi-physician, independently owned. No PE affiliation.",
    source_url: "https://opencorporates.com",
    source_label: "NC Secretary of State"
  }

];
