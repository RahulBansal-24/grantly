# 🎓 GRANTLY — Personalized Scholarship Discovery & Deterministic Eligibility Platform

> 🌟 **"Discover opportunities. Know where you stand. Fund your future."**

[![React](https://img.shields.io/badge/React-18.3-blue.svg?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-100%25_Offline-purple.svg?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![IndexedDB](https://img.shields.io/badge/Storage-Local_IndexedDB-emerald.svg?logo=databricks&logoColor=white)](https://dexie.org/)
[![Deterministic Engine](https://img.shields.io/badge/Engine-Zero_AI_Black_Boxes-orange.svg)](#-deterministic-rule-based-matching-engine)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📖 Table of Contents

- [🌟 Project Overview](#-project-overview)
- [📸 Application Screenshots & Walkthrough](#-application-screenshots--walkthrough)
- [🛡️ Key Product Differentiators](#️-key-product-differentiators)
- [✨ Deep-Dive Feature Breakdown](#-deep-dive-feature-breakdown)
  - [🔍 1. Scholarship Discovery & Multi-Dimensional Filtering](#-1-scholarship-discovery--multi-dimensional-filtering)
  - [📊 2. Personalized Student Analytics & Metric Dashboard](#-2-personalized-student-analytics--metric-dashboard)
  - [🎯 3. Deterministic Eligibility Badging & Criterion Breakdown](#-3-deterministic-eligibility-badging--criterion-breakdown)
  - [📋 4. Application Pipeline & Workflow Kanban](#-4-application-pipeline--workflow-kanban)
  - [🔖 5. Saved Scholarships & Bookmarking System](#-5-saved-scholarships--bookmarking-system)
  - [👤 6. Student Profile & Attribute Management](#-6-student-profile--attribute-management)
  - [📱 7. Progressive Web App (PWA) & Offline Resilience](#-7-progressive-web-app-pwa--offline-resilience)
  - [⚙️ 8. Data Sovereignty, Transparency & Settings](#️-8-data-sovereignty-transparency--settings)
- [🧮 Deterministic Rule-Based Matching Engine](#-deterministic-rule-based-matching-engine)
  - [📐 Core Invariant & Mathematical Model](#-core-invariant--mathematical-model)
  - [⚖️ Dimension Scoring & Parameter Weight Matrix](#️-dimension-scoring--parameter-weight-matrix)
  - [🏆 Match Score Calculation Formula](#-match-score-calculation-formula)
  - [🚦 Evaluation Verdict State Machine](#-evaluation-verdict-state-machine)
  - [📊 Priority Sorting & Relevance Ranking Algorithm](#-priority-sorting--relevance-ranking-algorithm)
- [💻 Technology Stack](#-technology-stack)
- [📚 Genuine Dataset & Verified Sources Breakdown](#-genuine-dataset--verified-sources-breakdown)
- [🏗️ Implementations & Technical Architecture](#️-implementations--technical-architecture)
- [📂 Project Structure](#-project-structure)
- [🚀 How to Run](#-how-to-run)
- [🧪 Testing & Verification Suite](#-testing--verification-suite)
- [🔒 Data Privacy & Integrity Principles](#-data-privacy--integrity-principles)
- [🔮 Future Scope & Roadmap](#-future-scope--roadmap)

---

## 🌟 Project Overview

**GRANTLY** is an offline-first, client-driven scholarship intelligence and application management platform developed for **THE OUTPOST – 6-Hour Frontend Hackathon**. 

Millions of meritorious and economically disadvantaged students miss out on life-changing higher education funding every year due to fragmented portals, opaque eligibility criteria, non-standard application deadlines, and predatory aggregators. GRANTLY fundamentally re-engineers this experience by assembling a **curated, genuine dataset of 113 verified scholarships across 48 legitimate public web portals** into a single, cohesive, client-first interface.

### 🎯 Core Mission
- 🚫 **Eliminate AI Hallucinations**: Replace unpredictable LLM "black-boxes" with a **100% deterministic, explainable rule evaluation engine** where students know *exactly* why they qualify or what criteria they lack.
- 🌐 **Comprehensive Coverage**: Bridge the gap across Indian Central Ministries, all 28 Indian States & 8 Union Territories, premier corporate CSR foundations (Tata, Reliance, Infosys, Adobe, Google), top tier universities (IITs, IIMs, IISc, BITS), and world-renowned international fellowships (Chevening, Rhodes, Fulbright, DAAD, Eiffel).
- 🔐 **Guest-First Privacy**: Sensitive demographic and financial details (caste category, household income, disability status, marks) are stored **exclusively inside the student's browser (IndexedDB)**. No mandatory sign-up, no passwords, no corporate data extraction.
- ⚡ **100% Offline Capability**: Built as an installable Progressive Web App (PWA) that loads instantaneously and functions reliably even in remote locations with intermittent or zero internet connectivity.

---

## 📸 Application Screenshots & Walkthrough

Here is a visual walkthrough of GRANTLY's core interfaces captured directly from the live application:

---

### 🖼️ Figure 1: Hero Landing Page & Live Statistics
![Figure 1: Landing Page](screenshots/1%29%20landing%20page.png)

> **Figure 1 Description**: The hero landing page welcoming students with the central platform value proposition (*"Your future deserves funding"*), primary action buttons (*"Find My Scholarships"* and *"Explore Opportunities"*), live real-time statistics computed dynamically from verified dataset records (113 Verified Scholarships, ₹5.4 Cr+ Live Funding Pool, 100% Deterministic Rules, Guest-First architecture), followed by the PWA install invitation and featured flagship funding schemes.

---

### 🖼️ Figure 2: Progressive Web App (PWA) Offline Installation
![Figure 2: PWA Installation](screenshots/2%29%20PWA%20install.png)

> **Figure 2 Description**: The dedicated Progressive Web App install modal displaying the official GRANTLY graduation cap brand iconography, highlighting offline resilience, instant home-screen launching on mobile and desktop, zero bandwidth consumption for previously cached opportunities, and step-by-step installation instructions for both Chromium and Apple iOS Safari.

---

### 🖼️ Figure 3: Scholarship Discovery & Multi-Dimensional Filtering
![Figure 3: Discover Interface](screenshots/3%29%20discover%20tab.png)

> **Figure 3 Description**: The Discovery catalog displaying all 113 loaded scholarship records, real-time debounced keyword search bar, and multi-faceted desktop sidebar filters—including Eligibility Verdicts (`Eligible`, `Needs Information`, `Ineligible`), Application & Expiry Status counters (`Open Only`, `Expired / Closed`), Country / Study Abroad selectors, Provider Categories, Education Levels, and Indian State Domicile filters.

---

### 🖼️ Figure 4: Personalized Student Analytics Dashboard
![Figure 4: Student Dashboard](screenshots/4%29%20dashboard.png)

> **Figure 4 Description**: The student command center featuring personalized welcome greetings, dynamic profile completeness progress bar, interactive Recharts visualizations (Bar Chart illustrating the multi-stage Application Pipeline distribution and Donut Chart depicting current Eligibility status breakdown), prioritized top recommendations, and urgent "Closing Soon" deadline countdown alerts.

---

### 🖼️ Figure 5: Application Pipeline & Lifecycle Kanban
![Figure 5: Applications Pipeline](screenshots/5%29%20application%20tab.png)

> **Figure 5 Description**: The personal application tracking system allowing students to manage submissions across six granular stages (`Planning to Apply`, `Applied`, `Under Review`, `Approved / Won`, `Not Selected`, `Saved`). Each card provides deadline indicators, custom notes (application reference numbers, portal credentials, interview notes), document readiness checklists, and stage transition controls.

---

### 🖼️ Figure 6: Bookmarked Scholarships Collection
![Figure 6: Saved Scholarships](screenshots/6%29%20saved%20scholarships.png)

> **Figure 6 Description**: The student's private repository of bookmarked opportunities with quick-filter chips, individual grant amounts, deadline tags, direct external application portal deep-links, and local-first persistence stored directly within client-side IndexedDB tables.

---

### 🖼️ Figure 7: Student Eligibility Profile & Attribute Editor
![Figure 7: Profile Section](screenshots/7%29%20profile%20section.png)

> **Figure 7 Description**: The multi-tab student profile management suite spanning Personal & Domicile information (First/Last Name, DOB, Age, State, Gender, Social Category, Disability status), Education & Academics (Level, Degree Course, Stream/Field of Study, Current Year, Recent Exam %, Previous 10th/12th Board Marks %, CGPA, College Type), Household Income, and Special Quotas with live verdict impact recalculations and automatic persistence.

---

### 🖼️ Figure 8: Settings, Data Sovereignty & Sources Directory
![Figure 8: Settings and Sources](screenshots/8%29%20settings.png)

> **Figure 8 Description**: The transparency and settings portal showcasing live database verification health metrics, transparent directory of all 48 legitimate public web sources, one-click JSON backup export and restore mechanisms, and complete local-first data wipe utilities.

---

## 🛡️ Key Product Differentiators

| Feature | ❌ Traditional Aggregators | 🤖 Generic AI / LLM Wrappers | 🎓 GRANTLY |
|---|---|---|---|
| **Matching Methodology** | Basic keyword search or rigid drop-downs | LLM prompt guessing, hallucinated deadlines | **100% Deterministic Policy Rule Engine** |
| **Explainability** | None ("No results found") | Unverifiable narrative prose | **Exact rule-by-rule verdict & breakdown** |
| **Missing Info Handling** | Rejected as ineligible | Fills gaps with hallucinations | **`NEEDS INFORMATION` (never penalizes)** |
| **Data Integrity** | Outdated or spam affiliate links | Hallucinated schemes & phantom URLs | **113 Verified authentic schemes across 48 legitimate sources** |
| **Privacy & Auth** | Forced phone login, OTP spam, data resale | Requires cloud user accounts | **Guest-First & Local-First (IndexedDB)** |
| **Connectivity** | Completely dead when offline | Requires continuous internet for API calls | **100% Offline Capable Installable PWA** |

---

## ✨ Deep-Dive Feature Breakdown

### 🔍 1. Scholarship Discovery & Multi-Dimensional Filtering
- 🔎 **Real-Time Debounced Search**: Fast 250ms debounced full-text indexing matching scholarship names, provider organizations, academic streams, and specialized tags.
- 🎛️ **Multi-Dimensional Faceted Filters**:
  - **Eligibility Verdicts**: Filter instantly by `Eligible Only`, `Needs Information`, or `Ineligible`.
  - **Application & Expiry Status**: Real-time counters showing active `Currently Open (75)` vs historically cataloged `Expired / Closed (38)` opportunities.
  - **Country & Global Regions**: Toggle between domestic Indian schemes and overseas study-abroad destinations (UK, USA, Germany, France, Netherlands, Sweden, Switzerland, Canada, Australia, Singapore, Japan, South Korea).
  - **Provider Classification**: Central Government (NSP/Ministries), State Government Portals, Corporate CSR Trusts, Philanthropic Foundations, Premier Universities, and International Governments.
  - **Education Levels**: High School (Class 11/12), Polytechnic Diploma, Undergraduate, Postgraduate, and PhD / Postdoctoral.
  - **Domicile & State Quotas**: Granular state matching for all 28 Indian States and Union Territories.
  - **Funding Structures**: Full Funding (Tuition + Living + Airfare), 100% Tuition Fee Waiver, Fixed Annual Cash Stipend, Partial Awards, and Interest-Free Loan Scholarships.

### 📊 2. Personalized Student Analytics & Metric Dashboard
- 📈 **Application Pipeline Visualization**: Live responsive Recharts horizontal bar chart breaking down student application progress across all workflow stages.
- 🍩 **Eligibility Distribution Donut Chart**: Immediate visual feedback displaying the proportion of cataloged funding opportunities where the student qualifies vs requires further input.
- 🎯 **Top Deterministic Recommendations**: The 3 highest-ranking eligible matches surfaced automatically based on calculated match percentage and deadline proximity.
- ⏰ **Closing Soon Alerts**: Dedicated countdown section tracking deadlines expiring within 45 days.
- 💯 **Profile Score Meter**: Dynamic 0–100% completion gauge indicating how close the student is to unlocking 100% deterministic matching.

### 🎯 3. Deterministic Eligibility Badging & Criterion Breakdown
- 🏷️ **Instant Visual Verdict Badges**: Every card displays a clear badge:
  - 🟢 `ELIGIBLE` (100% criteria verified and satisfied)
  - 🟡 `NEEDS INFORMATION` (Pending missing profile attributes)
  - 🔴 `NOT ELIGIBLE` (Mandatory criterion failed)
- 📑 **Comprehensive Criterion Comparison Modal**: Clicking any verdict opens an explainable breakdown comparing the student's entered value against the scheme's statutory requirement with actionable guidance.
- 🔗 **Direct Official Portals**: Every opportunity includes verified, direct links to the official government or foundation application portals (NSP, State DBT, CSR foundations, British Council, DAAD, etc.).

### 📋 4. Application Pipeline & Workflow Kanban
- 🗂️ **Six Granular Lifecycle Stages**: Move applications seamlessly through `Planning to Apply`, `Applied`, `Under Review`, `Approved / Won`, `Not Selected`, and `Saved`.
- 📝 **Private Student Application Notes**: Record personalized notes per application (portal application reference numbers, interview schedules, queries).
- 📅 **Submission Timestamps**: Automated tracking of when applications are marked as submitted.
- 🗃️ **Document Readiness Checklists**: Built-in verification checklists for essential documents (Income Certificate, Domicile Certificate, Marksheets, Bonafide Letter, Bank Passbook, RPwD Certificate).

### 🔖 5. Saved Scholarships & Bookmarking System
- 📌 **Instant Bookmark Toggle**: One-click bookmark button on any card with immediate IndexedDB state persistence.
- ⚡ **Optimistic UI Updates**: Instant visual feedback without page reloads or UI lag.
- 📴 **Offline Accessibility**: Bookmarked scholarships are cached permanently on the device and viewable without an active network connection.

### 👤 6. Student Profile & Attribute Management
- 🏷️ **Personal & Domicile Attributes**: First Name, Last Name, Date of Birth, Age, State of Residence, Gender, Social Reservation Category (General, OBC, SC, ST, EWS, Minority), and Person with Disability status.
- 🎓 **Academics & Education**: Current Education Level, Degree Title, Academic Stream / Field of Study, Current Year of Study, Recent Exam Percentage (%), Previous 10th/12th Board Marks (%), CGPA (10-point scale), Institution Name, and Institution Type (Government, Aided, Private).
- 💰 **Household Financials**: Annual Household Income in INR (₹) with formatted currency display.
- 🌟 **Special Affirmative Quotas**: First Generation Learner in Family, Single Girl Child in Family, Orphan Candidate, and State/National Level Sports Distinction.
- 🔄 **Reactive Auto-Population**: Saved attributes are synchronously loaded and automatically pre-filled whenever the student visits or re-opens the Profile page, remaining 100% editable and updatable.

### 📱 7. Progressive Web App (PWA) & Offline Resilience
- 📲 **Official Brand Iconography**: High-resolution 512x512, 192x192, and Apple Touch icons rendered from the official GRANTLY graduation cap vector branding.
- ⚡ **Workbox Service Worker Pre-Caching**: Caches all essential assets (HTML, CSS, JS, Fonts, and Fallback Datasets) for instant boot time.
- 📥 **Native Installation Prompts**: Intercepts `beforeinstallprompt` to offer a prominent header install button, with automated fallback instructions for iOS Safari users.
- 📶 **Real-Time Network Status Indicator**: Live pill in the navigation bar informing the student whether the app is currently in `Online` mode or running from the `Offline Local Database`.

### ⚙️ 8. Data Sovereignty, Transparency & Settings
- 💾 **One-Click JSON Data Export**: Export the entire student profile, bookmarked opportunities, application notes, and document checklists as a standalone JSON backup file.
- 📥 **Backup Restoration**: Restore previously exported profile backups into any browser instantly.
- 🧹 **Complete Data Wipe**: Reset and delete all local IndexedDB tables with a single confirmation click.
- 📜 **Full Source Transparency Directory**: Complete inspection table of all 48 monitored public government and institutional sources with their collection URLs and update frequencies.

---

## 🧮 Deterministic Rule-Based Matching Engine

GRANTLY rejects non-deterministic AI / LLM approaches for scholarship eligibility. When a student's educational future is on the line, eligibility determinations must be **100% transparent, explainable, and mathematically sound**.

### 📐 Core Invariant & Mathematical Model

The engine is built on four immutable principles:
1. **The Invariant of Missing Information**: Missing student data is **NEVER** treated as a failure. If an attribute is unknown, the criterion evaluates to `MISSING_INFO`, moving the overall status to `NEEDS_INFORMATION` and prompting the student with the exact field required.
2. **Definitive Mandatory Failure**: If a student definitively fails any statutory mandatory requirement (e.g. household income ₹4,50,000 against a mandatory ceiling of ₹2,50,000), the scholarship evaluates definitively to `NOT_ELIGIBLE`.
3. **Verified Qualification**: A scholarship evaluates to `ELIGIBLE` if and only if **all mandatory criteria are verified and satisfied**.
4. **Decoupled Match Scoring**: The transparent match score (0–100%) assists with ranking and relevance sorting, but **never overrides** statutory eligibility status.

---

### ⚖️ Dimension Scoring & Parameter Weight Matrix

The engine evaluates up to 10 structured dimensions. Each dimension has an assigned category weight:

| Dimension Category | Weight ($W_c$) | Evaluated Student Parameter | Evaluated Scholarship Requirement |
|---|---|---|---|
| **Education Level** | **30** | `profile.educationLevel` | `requirements.educationLevels` |
| **Academic Merit** | **25** | `profile.percentage` / `profile.cgpa` | `requirements.minPercentage` / `minCgpa` |
| **Household Income** | **20** | `profile.annualFamilyIncome` | `requirements.maxAnnualIncome` |
| **State / Domicile** | **15** | `profile.state` / `profile.domicile` | `requirements.eligibleStates` / `domicile` |
| **Social / Demographic** | **10** | `gender`, `socialCategory`, `disability` | `gender`, `socialCategories`, `disabilityOnly` |
| **Special Quotas** | **10** | `firstGen`, `singleGirlChild`, `orphan`, `sports` | `firstGenerationOnly`, `singleGirlChildOnly`, etc. |
| **Institution Type** | **5** | `profile.institutionType` | `requirements.institutionTypes` |

---

### 🏆 Match Score Calculation Formula

For each evaluated criterion $i \in C$, satisfaction credit is assigned according to its status:

```math
\text{Credit}(i) = \begin{cases} 
1.0 & \text{if } \text{Status}(i) = \text{SATISFIED} \\ 
0.4 & \text{if } \text{Status}(i) = \text{MISSING INFO} \quad \text{(discovery partial credit)} \\ 
0.0 & \text{if } \text{Status}(i) = \text{FAILED} 
\end{cases}
```

The overall transparent match score ($S$) is the weighted percentage:

```math
S = \min\left(100, \max\left(0, \text{round}\left( \frac{\sum_{i \in C} W_i \times \text{Credit}(i)}{\sum_{i \in C} W_i} \times 100 \right) \right)\right)
```

*If no specific criteria are attached to an open general award, a baseline score of 50% is assigned.*

---

### 🚦 Evaluation Verdict State Machine

```mermaid
stateDiagram-v2
    [*] --> Evaluating
    Evaluating --> HasFailedMandatory: Mandatory criterion fails?
    HasFailedMandatory --> NOT_ELIGIBLE: YES (Income > Max, Gender mismatch, etc.)
    HasFailedMandatory --> HasMissingInfo: NO
    HasMissingInfo --> NEEDS_INFORMATION: YES (Income, Category, or Marks missing)
    HasMissingInfo --> ELIGIBLE: NO (All criteria verified & satisfied)
```

---

### 📊 Priority Sorting & Relevance Ranking Algorithm

When scholarships are sorted by **Relevance** (`filters.sortBy = 'relevance'`), a 3-tier deterministic ranking comparator is executed:

```typescript
function rankScholarships(a, b) {
  // Tier 1: Strict Status Priority (Eligible > Needs Info > Ineligible)
  const statusPriority = { ELIGIBLE: 1, NEEDS_INFORMATION: 2, NOT_ELIGIBLE: 3 };
  const pDiff = statusPriority[a.result.status] - statusPriority[b.result.status];
  if (pDiff !== 0) return pDiff;

  // Tier 2: Overall Match Percentage Descending
  const scoreDiff = b.result.overallMatchScore - a.result.overallMatchScore;
  if (scoreDiff !== 0) return scoreDiff;

  // Tier 3: Deadline Proximity Ascending (Closest deadlines first)
  return new Date(a.scholarship.deadline).getTime() - new Date(b.scholarship.deadline).getTime();
}
```

---

## 💻 Technology Stack

### 🎨 Frontend Architecture
- ⚛️ **React 18.3**: Modern functional component architecture with hooks and concurrent rendering.
- 🟦 **TypeScript 5.7**: Strict type definitions for scholarship criteria, student profiles, and evaluation matrices.
- ⚡ **Vite 6.1**: Ultra-fast module bundling, hot-reloading, and optimized production chunking.
- 🎨 **Tailwind CSS 3.4**: Clean utility-first design system utilizing custom Navy (`#0B1D3A`), Slate, and Brand Indigo palettes.
- 🗄️ **Dexie.js 4.0 (IndexedDB)**: Client-side reactive local database powering offline storage and instant data queries.
- 📊 **Recharts 2.15**: Interactive SVG chart components for student analytics and pipeline tracking.
- 🎭 **Lucide React**: 200+ lightweight, clean, and consistent vector UI icons.
- 📱 **Vite PWA Plugin (Workbox)**: Service worker generation, asset pre-caching, and Web App Manifest management.

### 🖥️ Backend API Services
- 🟢 **Node.js 24**: Modern JavaScript runtime environment.
- 🚀 **Express.js 4**: Robust REST API routing with standardized JSON responses.
- 🛡️ **Helmet & CORS**: Comprehensive HTTP security headers and cross-origin resource sharing protection.
- ⏳ **Express Rate Limit**: API abuse protection and request throttling.
- 📐 **Zod 3.24**: Type-safe schema validation for all query parameters and payload requests.

### 🐍 Dataset Scraper & Verification System
- 🐍 **Python 3.13**: Multi-module extraction, normalization, and verification suite.
- 🧹 **`build_all.py`**: Automated dataset compiler performing schema validation, deep deduplication, and collection audit generation.
- 🔍 **`validate_dataset.py`**: Automated schema and integrity assertion suite (verifying HTTPS URLs, ISO 8601 timestamps, non-empty criteria, and state normalization).

---

## 📚 Genuine Dataset & Verified Sources Breakdown

GRANTLY contains **113 authentic, manually verified scholarship records** compiled from **48 legitimate public portals**:

```mermaid
pie title Scholarship Distribution by Provider (113 Total)
    "State Governments (All 28 States & UTs)" : 35
    "International Fellowships" : 26
    "Corporate CSR & Foundations" : 23
    "Central Government (NSP/Ministries)" : 20
    "Premier Universities (IITs/IIMs/IISc)" : 9
```

### 📋 Category Summary Table

| Category | Schemes | Verified Portals & Example Programs |
|---|:---:|---|
| 🏛️ **Central Government (India)** | **20** | **National Scholarship Portal (NSP)**, Ministry of Education, AICTE Pragati & Saksham, DST INSPIRE, PMRF, CSIR-UGC NET JRF, Ishan Uday (NER), Begum Hazrat Mahal, NMMSS, PMSS-CAPF, MeitY Visvesvaraya, NOS |
| 🗺️ **State Governments (India)** | **35** | **All 28 States & UTs**: Karnataka SSP, Maharashtra MahaDBT, WB SVMCM, UP Dashmottar, MP MMVY, Punjab Dr. Ambedkar, Haryana Har-Chhatravratti, Assam DHE, HP Vivekananda, CG, Jharkhand e-Kalyan, Delhi MCM, J&K PMSSS, Sikkim CMMSS, etc. |
| 🏢 **Corporate CSR & Foundations** | **23** | **Tata Trusts**, Reliance Foundation (UG & PG), Infosys Foundation STEM Stars, Adobe Women-in-Technology, Google Generation, Amazon Future Engineer, HDFC Parivartan, Kotak Kanya, L'Oréal, Santoor, FAEA, Narotam Sekhsaria, J.N. Tata Endowment |
| 🎓 **Premier Indian Universities** | **9** | **IIT Bombay** MCM, **IIT Madras** HTRA, **IIT Delhi** MCM, **IISc Bangalore** Fellowship, **IIM Ahmedabad** NBA, **BITS Pilani** Merit-cum-Need, **Ashoka University** Aid, **Delhi University** VC Fund, **Manipal** Freeship |
| 🌍 **International Fellowships** | **26** | **Chevening** (UK), **Commonwealth** (UK), **Rhodes Oxford**, **Gates Cambridge**, **British Council GREAT**, **Felix Oxford/SOAS**, **Fulbright-Nehru** (USA), **Knight-Hennessy Stanford**, **Humphrey** (USA), **DAAD EPOS & Helmut-Schmidt** (Germany), **Eiffel Excellence** (France), **NL Scholarship** (Netherlands), **Swedish Institute SI GP** (Sweden), **Swiss Excellence** (Switzerland), **RTP & Australia Awards** (Australia), **Vanier & Trudeau** (Canada), **SINGA** (Singapore), **MEXT** (Japan), **GKS** (South Korea) |

### 🔍 Verification Health
- ✅ **Officially Verified**: 73 currently active schemes with verified guidelines and open portal links.
- ⏳ **Expired / Awaiting Next Cycle**: 38 historically documented programs awaiting next academic session renewal.
- 🌐 **Data Integrity Audit**: 100% valid HTTPS links, 0% broken links, 100% normalized ISO-8601 deadlines.

---

## 🏗️ Implementations & Technical Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                        GRANTLY CLIENT APPLICATION                      │
│                                                                        │
│   ┌────────────────────┐   ┌───────────────────┐   ┌───────────────┐   │
│   │    Pages & Views   │   │ Reactive Hooks    │   │ Deterministic │   │
│   │ (Discover, Profile,│◄──┤ (useScholarships, ├───┤  Rule Engine  │   │
│   │  Dashboard, Pipeline│  │ useStudentProfile)│   │ (Zero AI)     │   │
│   └─────────┬──────────┘   └─────────┬─────────┘   └───────────────┘   │
│             │                        │                                 │
│             ▼                        ▼                                 │
│   ┌────────────────────────────────────────────┐                       │
│   │       Local-First Storage (Dexie.js)       │                       │
│   │   [Student Profile] [Applications] [Saved] │                       │
│   └──────────────────────┬─────────────────────┘                       │
└──────────────────────────┼─────────────────────────────────────────────┘
                           │ NetworkFirst / Offline Fallback
                           ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        GRANTLY EXPRESS BACKEND                         │
│                                                                        │
│   GET /api/scholarships?limit=1000                                     │
│   GET /api/scholarships/:id                                            │
│   GET /api/sources                                                     │
│   GET /api/collection-report                                           │
│                      │                                                 │
│                      ▼                                                 │
│   ┌────────────────────────────────────────────┐                       │
│   │         File-Backed Data Repository        │                       │
│   │  data/scholarships.json | data/sources.json│                       │
│   └────────────────────────────────────────────┘                       │
└────────────────────────────────────────────────────────────────────────┘
```

1. **Local-First Reactive State**:
   - The student profile, bookmarks, and application tracking pipeline reside inside browser IndexedDB using **Dexie.js**.
   - Profile data is mirrored synchronously in `localStorage` for zero-flash initial loading and populated via reactive React hooks.
2. **Network-First API with Bundled Fallback**:
   - The frontend requests `/api/scholarships?limit=1000` from the Express backend.
   - If the backend is unreachable or the user is offline, the client seamlessly falls back to the embedded curated offline dataset in [`src/data/scholarshipsData.ts`](file:///c:/my%20files/projects/grantly/src/data/scholarshipsData.ts).
3. **PWA Service Worker Runtime Caching**:
   - Powered by Workbox to cache web assets, fonts, and API responses. The application operates 100% offline without network drops.

---

## 📂 Project Structure

```
grantly/
├── 📄 index.html                      # Root HTML5 template with PWA meta & favicon
├── 📄 vite.config.ts                  # Vite 6 configuration with PWA plugin & workbox
├── 📄 tailwind.config.js              # Tailwind design tokens, custom colors & themes
├── 📄 postcss.config.js               # PostCSS styling processor
├── 📄 tsconfig.json                   # TypeScript project compiler configuration
├── 📄 vitest.config.ts                # Vitest test runner configuration
├── 📄 package.json                    # Frontend dependencies and npm script runner
├── 📄 README.md                       # Master comprehensive project documentation
│
├── 📁 public/                         # Public web assets & PWA manifest icons
│   ├── 🖼️ favicon.svg                 # Vector graduation cap brand logo
│   ├── 🖼️ pwa-192x192.png             # 192x192 PWA homescreen icon
│   ├── 🖼️ pwa-512x512.png             # 512x512 PWA splash / maskable icon
│   └── 🖼️ apple-touch-icon.png        # 180x180 iOS Safari touch icon
│
├── 📁 screenshots/                    # Application UI showcase screenshots
│   ├── 🖼️ 1) landing page.png         # Figure 1: Landing Page & Live Statistics
│   ├── 🖼️ 2) PWA install.png          # Figure 2: PWA Installation Modal
│   ├── 🖼️ 3) discover tab.png         # Figure 3: Discovery Catalog & Filters
│   ├── 🖼️ 4) dashboard.png            # Figure 4: Student Analytics Dashboard
│   ├── 🖼️ 5) application tab.png      # Figure 5: Application Pipeline Kanban
│   ├── 🖼️ 6) saved scholarships.png   # Figure 6: Bookmarked Opportunities
│   ├── 🖼️ 7) profile section.png      # Figure 7: Student Profile Editor
│   └── 🖼️ 8) settings.png             # Figure 8: Data Sovereignty & Settings
│
├── 📁 scripts/                        # Utility & build scripts
│   └── 📜 generate-icons.js           # Vector icon renderer for high-res PWA PNGs
│
├── 📁 data/                           # Authentic harvested scholarship database
│   ├── 📊 scholarships.json           # 113 verified, structured scholarship records
│   ├── 🌐 sources.json                # 48 legitimate public web source configurations
│   ├── 📋 collection-report.json      # Dataset audit, breakdowns, and verification logs
│   └── 📁 scraper/                    # Python data compilation and verification engine
│       ├── 📜 build_all.py            # Master harvester, deduplicator & compiler
│       ├── 📜 validate_dataset.py     # Schema compliance & URL/date validation
│       ├── 📜 source-config.json      # Source portal definitions and registry
│       ├── 📜 schemes_central.py      # Central Government schemes (NSP, Ministries)
│       ├── 📜 schemes_central_extended.py
│       ├── 📜 schemes_states.py       # Indian State schemes (All 28 States & UTs)
│       ├── 📜 schemes_states_extended.py
│       ├── 📜 schemes_corporate_ngo.py # Corporate CSR (Tata, Reliance, Infosys, etc.)
│       ├── 📜 schemes_corporate_extended.py
│       ├── 📜 schemes_universities.py # Premier Indian Universities (IITs, IIMs, IISc)
│       ├── 📜 schemes_universities_extended.py
│       ├── 📜 schemes_international.py # International Fellowships (Chevening, Rhodes, etc.)
│       └── 📜 schemes_international_extended.py
│
├── 📁 backend/                        # Node.js Express REST API server
│   ├── 📄 package.json                # Backend dependencies and test scripts
│   ├── 📄 tsconfig.json               # Backend TypeScript configuration
│   ├── 📄 .env.example                # Sample environment variables
│   └── 📁 src/
│       ├── 📜 index.ts                # Express application entry point & middleware
│       ├── 📁 routes/
│       │   ├── 📜 scholarshipRoutes.ts # GET /api/scholarships (filters, search, pagination)
│       │   ├── 📜 sourcesRoutes.ts     # GET /api/sources & /api/sources/report
│       │   └── 📜 providerRoutes.ts    # GET /api/providers/status
│       ├── 📁 services/
│       │   └── 📜 scholarshipAggregator.ts # File-backed repository with memory cache
│       ├── 📁 validators/
│       │   └── 📜 scholarshipValidator.ts  # Zod schemas for query and path parameters
│       ├── 📁 middleware/
│       │   └── 📜 errorHandler.ts      # Centralized HTTP error handling
│       └── 📁 __tests__/
│           └── 📜 api.test.ts          # Supertest backend integration test suite
│
└── 📁 src/                            # Frontend React Application Source
    ├── 📜 main.tsx                    # React DOM entry point
    ├── 📜 App.tsx                     # Router definitions and global layouts
    ├── 📜 index.css                   # Tailwind styles, base layers & animations
    ├── 📜 vite-env.d.ts               # Vite client environment declarations
    ├── 📁 types/                      # TypeScript domain models
    │   ├── 📜 scholarship.ts          # Scholarship, categories, and requirement types
    │   ├── 📜 student.ts              # Student profile, application pipeline types
    │   └── 📜 eligibility.ts          # Evaluation result, criterion status types
    ├── 📁 services/                   # Core business logic & storage
    │   ├── 📜 eligibilityEngine.ts    # 100% Deterministic Rule-Based Matching Engine
    │   ├── 📜 db.ts                   # Dexie.js IndexedDB schema & storage operations
    │   └── 📁 __tests__/
    │       └── 📜 eligibilityEngine.test.ts # Unit tests for the matching engine
    ├── 📁 hooks/                      # Custom reactive React hooks
    │   ├── 📜 useScholarships.ts      # Dataset querying, filtering, sorting & stats
    │   ├── 📜 useStudentProfile.ts    # Reactive IndexedDB student profile hook
    │   └── 📜 usePWA.ts               # Service worker status & install prompt handling
    ├── 📁 components/                 # Reusable UI component library
    │   ├── 📜 Navbar.tsx              # Navigation bar with install button & network status
    │   ├── 📜 Footer.tsx              # Attribution, privacy and source directory link
    │   ├── 📜 ScholarshipCard.tsx     # Reusable scholarship card with badges & tags
    │   ├── 📜 EligibilityBadge.tsx    # Verdict badge (Eligible, Needs Info, Ineligible)
    │   ├── 📜 EligibilityBreakdown.tsx# Explainable criteria comparison modal
    │   ├── 📜 PwaInstallModal.tsx     # Step-by-step PWA install instructions
    │   └── 📁 __tests__/
    │       └── 📜 EligibilityBadge.test.tsx # Component unit tests
    ├── 📁 pages/                      # Application route views
    │   ├── 📜 HomePage.tsx            # Hero landing page with dynamic statistics
    │   ├── 📜 OnboardingPage.tsx      # Multi-step guest profile wizard
    │   ├── 📜 DashboardPage.tsx       # Student command center with analytics charts
    │   ├── 📜 DiscoverPage.tsx        # Search, faceted filters & opportunities grid
    │   ├── 📜 ScholarshipDetailsPage.tsx # Detailed view, checklists & official URLs
    │   ├── 📜 ApplicationsPage.tsx    # Pipeline stage tracker & personal notes
    │   ├── 📜 SavedScholarshipsPage.tsx # Bookmarked scholarships collection
    │   ├── 📜 ProfilePage.tsx         # Attribute editor with real-time match feedback
    │   └── 📜 SettingsPage.tsx        # Backup export/restore, wipe & source audit
    └── 📁 data/                       # Bundled datasets for offline PWA fallback
        ├── 📜 scholarshipsData.ts     # Offline fallback copy of 113 verified schemes
        └── 📜 sourcesData.ts          # Offline fallback copy of source directory
```

---

## 🚀 How to Run

### 📋 Prerequisites
- **Node.js**: `v18.0.0` or higher (`v20+` recommended)
- **npm**: `v9.0.0` or higher
- **Python**: `3.10+` (optional, only required if recompiling or validating datasets)

---

### 💻 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/your-username/grantly.git
cd grantly

# Install root & frontend dependencies
npm install

# Install backend dependencies
cd backend && npm install && cd ..
```

---

### ⚡ 2. Start the Application

You can launch both the frontend and backend in concurrent development mode:

```bash
# Start frontend client (Vite)
npm run dev

# In a separate terminal, start backend API (Express)
npm run dev:backend
```

The application will be live at:
- 🌐 **Frontend Client**: `http://localhost:5173`
- 🔌 **Backend REST API**: `http://localhost:5000`
- 🏥 **API Health Check**: `http://localhost:5000/api/health`

---

## 🧪 Testing & Verification Suite

GRANTLY features complete test coverage across deterministic engine rules, component rendering, and API contracts:

```bash
# Run frontend unit tests (Vitest)
npm test

# Run backend API integration tests (Supertest + Vitest)
npm run test:backend

# Run all test suites across the entire repository
npm run test:all

# Perform strict TypeScript typechecking
npx tsc --noEmit

# Re-render official PWA graduation cap vector icons
node scripts/generate-icons.js

# Build production bundles
npm run build:all
```

### 🐍 Dataset Verification & Re-compilation (Python)

```bash
# Validate schema compliance, HTTPS formatting, and date integrity
python data/scraper/validate_dataset.py

# Re-aggregate, deduplicate, and compile the 113 scholarship dataset
python data/scraper/build_all.py
```

---

## 🔒 Data Privacy & Integrity Principles

1. 🚫 **Zero AI Hallucinations**: Every single criterion check is evaluated with pure mathematical logic and deterministic code. No generative AI can guess or hallucinate a false acceptance or rejection.
2. 🛡️ **Zero Fabricated Schemes**: All 113 scholarships reflect authentic, publicly funded or corporate CSR initiatives with real guidelines and genuine application URLs.
3. 🔒 **Local-First Data Sovereignty**: Demographic identifiers (gender, caste, religion, income, disability status, exam percentages) are stored **only on the user's device in IndexedDB**. Nothing is uploaded to tracking servers.
4. 💾 **Complete Portability**: Students own their data. You can download your profile and notes as a standard JSON backup or delete everything with a single click.

---

## 🔮 Future Scope & Roadmap

- [ ] 🤖 **Automated Scheduled Scraping Cron Jobs**: Deploy distributed headless workers to monitor official government gazettes and state DBT portals for annual cycle renewal announcements.
- [ ] 🔔 **Local Browser Notification Alerts**: Web Push / Local Notification APIs to notify students 7 days before deadlines of their bookmarked or applied scholarships.
- [ ] 📱 **DigiLocker Integration (Consent-Based)**: Allow students to securely import verified 10th/12th marksheets, caste certificates, and domicile certificates directly from government repositories without manual entry.
- [ ] 📄 **Intelligent Document Pre-flight Check**: Client-side PDF/image format and size validator ensuring required application documents match portal file-upload constraints.
- [ ] 🌐 **Multi-Lingual Localization**: Support for major Indian regional languages (Hindi, Kannada, Tamil, Telugu, Marathi, Bengali) for inclusive rural reach.

---

<div align="center">

**Built with ❤️ for THE OUTPOST Hackathon**

*"Empowering every student to discover opportunities, understand their eligibility, and fund their educational dreams."*

</div>
