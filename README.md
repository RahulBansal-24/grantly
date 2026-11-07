# GRANTLY — Rethinking the Scholarship Experience

> **"Discover opportunities. Know where you stand. Fund your future."**

GRANTLY is a personalized scholarship discovery and application management platform built for **THE OUTPOST – 6-Hour Frontend Hackathon**. It brings together central government, state government, corporate CSR, private foundation, NGO, and international scholarship opportunities into one unified, transparent, and deterministic platform.

---

## 🌟 Key Product Differentiators

1. **Deterministic Rule-Based Eligibility Engine (Zero AI / LLM Black Boxes)**
   - High-stakes financial assistance decisions cannot rely on AI hallucinations.
   - Evaluates applicant profile attributes using mathematical and policy rules with 100% precision.
   - Produces three distinct, deterministic verdicts: `ELIGIBLE`, `NEEDS INFORMATION`, and `NOT ELIGIBLE`.
   - **Core Invariant**: Missing student information is **never** treated as a failure; it transitions to `NEEDS INFORMATION` and highlights the exact missing fields.

2. **Guest-First & Local-First Architecture**
   - No mandatory account creation or passwords.
   - Local storage powered by **IndexedDB (Dexie.js)** ensures student profile details, bookmarked scholarships, document checklists, and application notes persist across browser sessions on the client device.
   - Complete data sovereignty: export your data as JSON, restore backups, or wipe all records in one click.

3. **Installable Progressive Web App (PWA) with Offline Capability**
   - Fully compliant Web App Manifest (`manifest.webmanifest`) and Workbox service worker caching.
   - Prominent, working **"Install GRANTLY"** header button utilizing `beforeinstallprompt` with automatic iOS Safari fallback instructions.
   - Operates 100% offline using precached application assets and locally cached scholarship catalogues.

4. **Authentic Provider Integrations & Curated Provenance**
   - Modular adapter architecture for India's premier scholarship platforms: **myScheme / API Setu**, **data.gov.in**, **National Scholarship Portal (NSP)**, **Buddy4Study**, and **State Government Portals** (Karnataka SSP, MahaDBT, West Bengal SVMCM).
   - Every opportunity is explicitly labeled with its data provenance (`Live Synchronized` vs `Verified Curated Scheme`).

---

## 🚀 Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript & Vite
- **Styling**: Tailwind CSS with custom navy, indigo, and status palettes
- **Local Database**: IndexedDB via Dexie.js (`dexie`, `dexie-react-hooks`)
- **PWA & Offline**: `vite-plugin-pwa` with custom service worker caching
- **Visualizations**: Recharts for dashboard analytics
- **Icons**: Lucide React
- **Testing**: Vitest, React Testing Library, JSDOM

### Backend
- **Runtime**: Node.js & Express.js with TypeScript
- **Validation**: Zod schema validation
- **Security**: Helmet security headers, CORS origin protection, express-rate-limit
- **Testing**: Supertest, Vitest

---

## 📂 Project Architecture

```
grantly/
├── backend/
│   ├── src/
│   │   ├── integrations/
│   │   │   ├── baseProvider.ts           # Standard adapter interface
│   │   │   ├── mySchemeProvider.ts       # myScheme / API Setu adapter
│   │   │   ├── dataGovProvider.ts        # Open Government Data adapter
│   │   │   ├── nspProvider.ts            # National Scholarship Portal adapter
│   │   │   ├── buddy4studyProvider.ts    # Buddy4Study partner feed adapter
│   │   │   ├── stateSchemeProvider.ts    # Unified state gateway adapter
│   │   │   └── providerRegistry.ts       # Registry & status reporting
│   │   ├── services/
│   │   │   └── scholarshipAggregator.ts  # Fallback merge & caching
│   │   ├── data/
│   │   │   └── fallbackScholarships.ts   # 15+ rich verified real schemes
│   │   ├── routes/
│   │   │   ├── scholarshipRoutes.ts      # REST API for scholarships
│   │   │   └── providerRoutes.ts         # Provider adapter health & sync
│   │   ├── validators/                   # Zod query & payload schemas
│   │   ├── middleware/                   # Centralized error handler
│   │   └── index.ts                      # Express app entry point
│   ├── .env.example
│   └── package.json
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                    # Header with PWA install & status
│   │   ├── Footer.tsx                    # Sources attribution & privacy
│   │   ├── EligibilityBadge.tsx          # Status & match % badge
│   │   ├── ScholarshipCard.tsx           # Reusable scholarship card
│   │   ├── EligibilityBreakdown.tsx      # Explainable criteria comparison
│   │   └── PwaInstallModal.tsx           # iOS Safari install instructions
│   ├── pages/
│   │   ├── HomePage.tsx                  # Landing page with live metrics
│   │   ├── OnboardingPage.tsx            # Multi-step guest profile wizard
│   │   ├── DashboardPage.tsx             # Analytics & deadline tracker
│   │   ├── DiscoverPage.tsx              # Deep search, categories, filters
│   │   ├── ScholarshipDetailsPage.tsx    # Detailed breakdown & checklist
│   │   ├── ApplicationsPage.tsx          # Pipeline & status manager
│   │   ├── SavedScholarshipsPage.tsx     # Bookmarked scholarships
│   │   ├── ProfilePage.tsx               # Profile editor & live matching
│   │   └── SettingsPage.tsx              # Backup, restore & API health
│   ├── services/
│   │   ├── eligibilityEngine.ts          # Deterministic matching engine
│   │   └── db.ts                         # Dexie.js IndexedDB schema
│   ├── hooks/
│   │   ├── usePWA.ts                     # PWA prompt & online status
│   │   ├── useStudentProfile.ts          # Profile hook with completeness
│   │   └── useScholarships.ts            # Filter, sort & evaluation hook
│   ├── types/                            # TypeScript schemas & contracts
│   ├── data/                             # Curated fallback dataset
│   ├── App.tsx                           # Routing & layout
│   └── main.tsx                          # App initialization
├── public/                               # PWA icons & manifest assets
├── vite.config.ts                        # Vite & PWA configuration
├── tailwind.config.js                    # Design system theme
└── package.json
```

---

## ⚡ Quick Start Guide

### 1. Prerequisites
- Node.js (v18.0.0 or higher recommended, tested on v24.11.0)
- npm (v9.0.0+)

### 2. Install Dependencies
```bash
# Install frontend packages
npm install

# Install backend packages
npm --prefix backend install
```

### 3. Start Development Servers
You can run the frontend and backend in separate terminal windows:

**Terminal 1 — Backend API Server (Port 5000):**
```bash
npm run dev:backend
```

**Terminal 2 — Frontend Application (Port 5173):**
```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## 🧪 Running Automated Tests

All critical business logic, matching rules, boundary conditions, and API endpoints are thoroughly tested.

```bash
# Run frontend unit and component tests (Vitest)
npm test

# Run backend API integration tests (Supertest + Vitest)
npm run test:backend

# Run all test suites
npm run test:all
```

---

## 📱 Progressive Web App (PWA) Verification

1. **Building for Production:**
   ```bash
   npm run build
   ```
2. **Previewing the Built PWA:**
   ```bash
   npm run preview
   ```
3. **Installation Flow:**
   - Open Chrome or Edge.
   - Click the prominent **"Install GRANTLY"** button in the header or hero banner.
   - Accept the browser's install prompt.
   - GRANTLY launches in a standalone window without browser chrome.
   - In Safari on iOS, click the button to see visual step-by-step instructions (*Share → Add to Home Screen*).
4. **Offline Test:**
   - Turn off Wi-Fi or set network throttling in Chrome DevTools to "Offline".
   - Reload the page. GRANTLY loads instantly from the service worker cache and Dexie IndexedDB!

---

## 🔌 API Integrations & Credential Configuration

The backend contains modular adapter classes in `backend/src/integrations/`:

| Provider | Description | Required Credentials | Official Portal |
| :--- | :--- | :--- | :--- |
| **myScheme (API Setu)** | Central/State schemes API via Ministry of Electronics & IT | `MYSHEME_API_KEY`, `MYSHEME_CLIENT_ID` | [apisetu.gov.in](https://apisetu.gov.in/) |
| **Open Government Data (OGD)** | Ministry of Education datasets | `DATA_GOV_API_KEY`, `DATA_GOV_RESOURCE_ID` | [data.gov.in](https://data.gov.in/) |
| **National Scholarship Portal** | Primary Central Government scholarship portal | Nodal authorization (Restricted API) | [scholarships.gov.in](https://scholarships.gov.in/) |
| **Buddy4Study** | CSR and corporate foundation partner feed | Partner Client ID & API Key | [buddy4study.com](https://www.buddy4study.com/) |
| **State Government Portals** | Karnataka SSP / MahaDBT / Bengal SVMCM | State Data Centre (SDC) API Gateway | [ssp.postmatric.karnataka.gov.in](https://ssp.postmatric.karnataka.gov.in/) |

### Obtaining Credentials
1. **API Setu / myScheme**: Register as a developer or consumer organization on [partners.apisetu.gov.in](https://partners.apisetu.gov.in/). Subscribe to the myScheme service to receive an API Key and Client ID.
2. **data.gov.in**: Register a developer account on [data.gov.in](https://data.gov.in/). Generate your API key under *My Account > Web Services APIs*, then locate the scholarship resource ID from the public catalog.
3. **Graceful Fallback**: If no environment variables are configured, GRANTLY **seamlessly falls back to the verified, curated dataset** of 15+ real schemes with zero downtime or broken UI.

---

## 🔒 Security & Privacy

- **No Secrets in Frontend**: All API requests requiring credentials occur strictly on the backend.
- **Server Hardening**: Uses Helmet for secure HTTP headers, CORS origin locks, and rate limiting (300 requests per 15 minutes per IP).
- **Zod Validation**: All URL queries, routes, and JSON imports are strictly parsed through Zod schemas.
- **Safe External Links**: All external portal links use `rel="noopener noreferrer"`.
- **Decentralized Storage**: Sensitive income and demographic information stays strictly in the student's browser IndexedDB.

---

## 🏆 Summary of Challenge Requirements Met

- [x] **Product Vision**: "Discover opportunities. Know where you stand. Fund your future."
- [x] **Deterministic Rule-Based Eligibility Engine**: Pure TypeScript, zero AI/LLM hallucination, fully explainable.
- [x] **Guest-First Onboarding**: Multi-step wizard without mandatory sign-in.
- [x] **Persistent Storage**: IndexedDB via Dexie.js for profiles, bookmarks, checklists, and pipeline milestones.
- [x] **Comprehensive Discovery**: 12+ categories, multi-parameter filters, debounced search, transparent sorting.
- [x] **Detailed Scholarship Pages**: Benefit breakdown, document checklist, official application links.
- [x] **Application Pipeline**: Full tracker for Planning, Applied, Under Review, Approved, and Rejected states.
- [x] **Real Data & 5 Provider Adapters**: myScheme, data.gov.in, NSP, Buddy4Study, and State Portals.
- [x] **Mandatory PWA Install Button**: Functional browser prompt invocation and iOS Safari guidance.
- [x] **Production Quality & Accessibility**: WCAG AA color contrasts, keyboard navigable, full responsive design.
