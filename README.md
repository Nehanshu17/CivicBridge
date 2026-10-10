# 🌐 CivicBridge — AI-Powered Community Access Navigator

<div align="center">

![CivicBridge Banner](https://img.shields.io/badge/CivicBridge-Community%20Navigator-0f7b5e?style=for-the-badge&logo=globe&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-e8821a.svg?style=flat-square)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![IBM Watsonx](https://img.shields.io/badge/IBM%20Watsonx.ai-Granite-0f7b5e?style=flat-square&logo=ibm&logoColor=white)](https://www.ibm.com/watsonx)
[![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-5A0FC8?style=flat-square&logo=pwa&logoColor=white)](frontend/manifest.json)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-00539f?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Hackathon](https://img.shields.io/badge/Track-Communities%20%26%20Public%20Impact-e8821a?style=flat-square)](https://github.com/Nehanshu17/CivicBridge)

**An AI-powered navigator helping citizens discover government schemes, social programs, and skill opportunities — in their own language, with voice, even on 2G.**

[🚀 Live Demo](#-quick-start) · [📋 View Schemes](#-covered-schemes) · [🤝 Contribute](CONTRIBUTING.md) · [🐛 Report Bug](.github/ISSUE_TEMPLATE/bug_report.md)

</div>

---

## 🎯 The Problem

> Over **800 million Indians** are eligible for at least one government scheme they haven't claimed.  
> Awareness gaps, language barriers, and digital complexity leave **₹1.5 lakh crore in benefits unclaimed annually.**

A farmer in rural Odisha doesn't know about PM-KISAN. A woman in a BPL household in MP has never heard of PM Ujjwala. A school dropout in Bihar doesn't know PMKVY training is free.

CivicBridge bridges this gap.

---

## ✨ The Solution

Ask CivicBridge in plain language — *"I am a farmer"* or *"I need help with housing"* — and it instantly matches you to the right government programs with step-by-step guidance and helpline numbers.

```
User:  "I am a farmer with small land"
Bot:   You may be eligible for PM-KISAN (₹6,000/year income support).
       How to apply: Register at pmkisan.gov.in or nearest CSC.
       Helpline: 155261
```

---

## 🌟 Key Features

| Feature | Description |
|---|---|
| 🤖 **AI Chat Navigator** | Conversational AI — describe your situation, get matched schemes instantly |
| 🗣️ **Voice-First** | Speak your question using Web Speech API; hear the answer via TTS |
| 📶 **Low-Bandwidth Mode** | No framework, no heavy assets — works reliably on 2G networks |
| 🌐 **7 Regional Languages** | English, हिंदी, বাংলা, தமிழ், తెలుగు, मराठी, ગુજરાતી |
| ♿ **WCAG 2.1 AA** | Skip links, ARIA labels, keyboard nav, screen reader compatible |
| 📱 **PWA / Offline** | Service Worker — fully functional offline with embedded data |
| 📋 **10 Govt Schemes** | Housing, health, farming, employment, skills, banking, energy, children |
| 🎓 **8 Skill Programs** | PMKVY-linked vocational, digital, agricultural, entrepreneurship tracks |
| 📞 **12 Helplines** | Direct call-to-action for every scheme and national helpline |
| 🔌 **Dual AI Backend** | IBM Watsonx.ai (Granite 13B) or OpenAI, with offline rule-based fallback |

---

## 📋 Covered Schemes

| Category | Scheme | Helpline |
|---|---|---|
| 🏠 Housing | Pradhan Mantri Awas Yojana (PMAY) | 1800-11-6163 |
| 🌾 Agriculture | PM-KISAN Samman Nidhi | 155261 |
| 🏥 Health | Ayushman Bharat PM-JAY | 14555 |
| 💼 Employment | MGNREGS 100-Day Work | 1800-111-555 |
| 🎓 Skills | Skill India — PMKVY | 1800-123-9626 |
| 🏦 Finance | PM Jan Dhan Yojana | 1800-11-0001 |
| 🔥 Energy | PM Ujjwala Yojana | 1906 |
| 📚 Education | PM POSHAN (Mid-Day Meal) | 1800-180-8004 |
| 👶 Child Welfare | ICDS Anganwadi | 1098 |
| 💻 Digital Access | Common Service Centres | 1800-121-3468 |

---

## 🏗️ Architecture

```
CivicBridge/
├── frontend/                   # Vanilla JS PWA — no framework, low bandwidth
│   ├── index.html              # Full SPA: chat, schemes, skills, helplines, about
│   ├── sw.js                   # Service Worker for offline support
│   └── manifest.json           # PWA manifest (installable)
│
├── backend/                    # Node.js + Express REST API
│   ├── server.js               # Entry point — compression, CORS, rate limiting
│   ├── aiProvider.js           # AI abstraction: Watsonx.ai | OpenAI | fallback
│   ├── .env.example            # Environment variable template
│   ├── routes/
│   │   ├── chat.js             # POST /api/chat — multilingual AI conversation
│   │   ├── schemes.js          # GET /api/schemes — filterable scheme list
│   │   ├── skills.js           # GET /api/skills — skill programs
│   │   └── health.js           # GET /api/health — status check
│   └── data/
│       ├── schemes.json        # 10 government schemes with full metadata
│       └── skills.json         # 8 skill development programs
│
├── .github/
│   ├── workflows/ci.yml        # GitHub Actions CI
│   ├── ISSUE_TEMPLATE/         # Bug, feature, data issue templates
│   └── PULL_REQUEST_TEMPLATE.md
│
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

---

## 🚀 Quick Start

### Option A — Frontend Only (No Setup)

Just open `frontend/index.html` in any browser. It works completely offline using embedded data and a rule-based AI fallback. No server, no API key needed.

### Option B — Full Stack with AI

#### 1. Clone the repo
```bash
git clone https://github.com/Nehanshu17/CivicBridge.git
cd CivicBridge
```

#### 2. Set up the backend
```bash
cd backend
npm install
cp .env.example .env
```

#### 3. Configure your AI provider
Edit `.env`:
```env
# Option A: IBM Watsonx.ai (recommended for production)
AI_PROVIDER=watsonx
WATSONX_API_KEY=your_api_key_here
WATSONX_PROJECT_ID=your_project_id_here
WATSONX_URL=https://us-south.ml.cloud.ibm.com

# Option B: OpenAI
AI_PROVIDER=openai
OPENAI_API_KEY=sk-your_key_here

# Option C: No key — rule-based offline fallback (great for demos)
AI_PROVIDER=fallback
```

#### 4. Start the backend
```bash
npm start
# Server running at http://localhost:3001
```

#### 5. Open the frontend
Open `frontend/index.html` in your browser. It auto-connects to the backend at `http://localhost:3001`.

---

## 📡 API Reference

| Endpoint | Method | Body / Params | Description |
|---|---|---|---|
| `/api/health` | GET | — | Service status and AI provider |
| `/api/chat` | POST | `{ messages: [], language: "hi" }` | AI conversation |
| `/api/schemes` | GET | `?category=&q=&language=` | List/search schemes |
| `/api/schemes/:id` | GET | — | Single scheme detail |
| `/api/skills` | GET | `?category=&q=&level=` | List/search skills |
| `/api/skills/:id` | GET | — | Single skill detail |

#### Example chat request
```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"I am a farmer"}],"language":"hi"}'
```

---

## 🎨 Design Principles

| Principle | Implementation |
|---|---|
| **Zero prior knowledge** | Users never need to know a scheme's name — describe your situation |
| **Plain language** | No government jargon; clear step-by-step instructions |
| **Always a next step** | Every response includes a helpline number or CSC referral |
| **Voice-first** | Designed for low-literacy users who prefer speaking to typing |
| **Regional languages** | AI responds in the user's chosen language |
| **Offline-first** | Full functionality without internet via Service Worker + embedded data |
| **Progressive enhancement** | Core content accessible even without JavaScript |
| **Privacy-first** | No Aadhaar, phone numbers, or personal data collected |

---

## 📊 Impact at Scale

| Metric | Value |
|---|---|
| Indians eligible for unclaimed schemes | 800M+ |
| Benefits unclaimed annually | ₹1.5 lakh crore |
| Common Service Centres (last-mile delivery) | 5.5 lakh+ |
| Languages supported | 7 |
| Target scheme-citizen matches/month | 10,000+ |

---

## 🤝 Contributing

We welcome contributions! The easiest way to help is by **adding new government schemes** to the data files — every scheme added potentially helps millions.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

**Good first issues:**
- Add a new state-level scheme (use the [Add Scheme issue template](.github/ISSUE_TEMPLATE/add_scheme.md))
- Translate scheme descriptions to a regional language
- Improve accessibility on the frontend
- Add a new skill program to `skills.json`

---

## 🛡️ Privacy & Security

- No personal data, Aadhaar, or phone numbers collected in chat
- All AI queries are stateless — nothing logged server-side
- Rate limited (30 requests/minute) to prevent API abuse
- API keys stored only in environment variables, never in code
- See [SECURITY.md](SECURITY.md) for the vulnerability reporting process

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- **IBM Watsonx.ai** — Granite 13B Instruct model for AI responses
- **Government of India** — Scheme data sourced from official portals
- **Web Speech API** — Browser-native voice input/output
- Built for the **Communities, Access & Public Impact** hackathon track

---

<div align="center">

Made with ❤️ for the citizens of India

[⭐ Star this repo](https://github.com/Nehanshu17/CivicBridge) · [🐛 Report a Bug](.github/ISSUE_TEMPLATE/bug_report.md) · [💡 Request a Feature](.github/ISSUE_TEMPLATE/feature_request.md)

</div>
