file_gen:generate_document(query="""Create a Node.js Express server file (server.js) for CivicBridge backend API handling chat and recommendation endpoints:

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Sample Schemes Data
const SCHEMES = [
  { id: 'pm-awas-yojana', title: 'Pradhan Mantri Awas Yojana (PMAY)', category: 'housing' },
  { id: 'pm-kisan', title: 'PM-KISAN Samman Nidhi', category: 'agriculture' },
  { id: 'ayushman-bharat', title: 'Ayushman Bharat – PM-JAY', category: 'health' },
  { id: 'mid-day-meal', title: 'PM POSHAN (Mid-Day Meal)', category: 'education' },
  { id: 'nrega', title: 'MGNREGS – Employment Guarantee', category: 'employment' },
  { id: 'pm-ujjwala', title: 'Pradhan Mantri Ujjwala Yojana', category: 'energy' },
  { id: 'skill-india', title: 'Skill India Mission – PMKVY', category: 'skills' },
  { id: 'pm-jan-dhan', title: 'PM Jan Dhan Yojana', category: 'finance' },
  { id: 'anganwadi', title: 'ICDS – Anganwadi Services', category: 'child-welfare' },
  { id: 'digital-india', title: 'Common Service Centres (CSC)', category: 'digital-access' }
];

// Endpoint: AI Recommendation
app.post('/api/v1/recommend-schemes', (req, res) => {
  const profile = req.body || {};
  const results = [];

  if (profile.job === 'farmer') {
    results.push({ id: 'pm-kisan', score: 90, reasons: ['Primary worker in agriculture'] });
  }
  if (profile.house === 'no' && profile.inc < 3) {
    results.push({ id: 'pm-awas-yojana', score: 85, reasons: ['Income limit eligible and no existing pucca house'] });
  }
  if (profile.inc <= 1) {
    results.push({ id: 'ayushman-bharat', score: 80, reasons: ['Low income family health support criteria'] });
  }
  if (profile.bank === 'no') {
    results.push({ id: 'pm-jan-dhan', score: 92, reasons: ['No existing bank account reported'] });
  }

  results.push({ id: 'digital-india', score: 40, reasons: ['CSC location support across services'] });

  res.json({ schemes: results.sort((a, b) => b.score - a.score) });
});

// Endpoint: Chat Assistant
app.post('/api/chat', (req, res) => {
  const { messages, language } = req.body;
  const lastMsg = messages && messages.length ? messages[messages.length - 1].content.toLowerCase() : '';

  let reply = 'I am your CivicBridge guide. Tell me about your situation (e.g., job, housing, health needs) and I can find matching programs.';

  if (lastMsg.includes('farmer') || lastMsg.includes('farm')) {
    reply = 'If you work in farming, you may qualify for **PM-KISAN Samman Nidhi**, providing direct annual support of ₹6,000.';
  } else if (lastMsg.includes('health') || lastMsg.includes('hospital')) {
    reply = 'You may qualify for **Ayushman Bharat (PM-JAY)**, which offers health insurance coverage up to ₹5 lakh per family every year.';
  } else if (lastMsg.includes('house') || lastMsg.includes('housing')) {
    reply = 'Under **Pradhan Mantri Awas Yojana (PMAY)**, you can get loan subsidies for building or purchasing a home if you meet the income criteria.';
  }

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`CivicBridge backend running on port ${PORT}`);
});
""")
