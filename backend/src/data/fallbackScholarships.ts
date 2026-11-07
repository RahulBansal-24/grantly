import { Scholarship } from '../types/index.js';

export const FALLBACK_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'nsp-central-sector-2025',
    name: 'Central Sector Scheme of Scholarship for College and University Students (PM-USP)',
    slug: 'central-sector-scheme-pm-usp',
    provider: 'Department of Higher Education, Ministry of Education, Govt of India',
    providerCategory: 'central_gov',
    categories: ['central_gov', 'merit', 'need'],
    description: 'The Central Sector Scheme of Scholarship for College and University Students aims to provide financial assistance to meritorious students from low-income families to meet a part of their day-to-day expenses while pursuing higher studies.',
    briefSummary: 'Central government merit-cum-means scholarship for top-percentile 12th passouts pursuing degree programs.',
    amount: 20000,
    formattedAmount: '₹12,000 to ₹20,000 / year',
    awardFrequency: 'annual',
    awardCoverage: '₹12,000/yr for graduation (first 3 years) and ₹20,000/yr for post-graduation',
    benefits: [
      '₹12,000 per annum for the first 3 years of Undergraduate studies',
      '₹20,000 per annum for 4th & 5th year / Postgraduate courses',
      'Direct Benefit Transfer (DBT) via PFMS to Aadhaar-seeded bank account',
      'Renewable every year subject to 50% marks and minimum 75% attendance'
    ],
    educationLevels: ['undergraduate', 'postgraduate'],
    coursesAndStreams: ['Engineering', 'Medical', 'Arts', 'Science', 'Commerce', 'Law', 'Management'],
    requirements: {
      educationLevels: ['undergraduate', 'postgraduate'],
      minPercentage: 80,
      maxAnnualIncome: 450000,
      gender: 'all',
      socialCategories: ['Any'],
      eligibleStates: ['All India'],
      institutionTypes: ['Government', 'Private', 'Aided']
    },
    requiredDocuments: [
      'Class 12th Board Marksheet',
      'Income Certificate issued by competent revenue authority (≤ ₹4.5 Lakh)',
      'Bonafide Student Certificate from College / University',
      'Bank Account passbook copy (Aadhaar linked)',
      'Domicile Certificate'
    ],
    applicationProcedure: [
      'Register on the National Scholarship Portal (NSP) with One-Time Registration (OTR)',
      'Fill in student academic credentials, admission details and family income',
      'Upload institutional Bonafide certificate and required revenue documents',
      'Institute nodal officer verifies the application physically & digitally',
      'State Nodal Officer conducts 2nd tier verification before DBT sanction'
    ],
    applicationStartDate: '2025-07-01',
    deadline: '2026-11-30',
    status: 'open',
    officialUrl: 'https://scholarships.gov.in',
    applicationUrl: 'https://scholarships.gov.in/fresh',
    sourceName: 'National Scholarship Portal (NSP)',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-25',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['NSP', 'Ministry of Education', 'Central Sector', 'Merit-Cum-Means']
  },
  {
    id: 'aicte-pragati-girls-2025',
    name: 'AICTE Pragati Scholarship Scheme for Girl Students',
    slug: 'aicte-pragati-scholarship-girls',
    provider: 'All India Council for Technical Education (AICTE)',
    providerCategory: 'central_gov',
    categories: ['central_gov', 'stem', 'need'],
    description: 'Pragati is an AICTE Scheme envisaging financial support of ₹50,000 per annum to aid female students to advance technical education. Maximum two girls per family are eligible.',
    briefSummary: 'AICTE initiative awarding ₹50,000 per annum to young women pursuing technical degrees or diplomas.',
    amount: 50000,
    formattedAmount: '₹50,000 / year',
    awardFrequency: 'annual',
    awardCoverage: 'Tuition fees, equipment, software, books and laptop purchase assistance',
    benefits: [
      '₹50,000 lump sum per annum for every year of technical course duration',
      'Covers college fee reimbursement and learning equipment contingency',
      '10,000 scholarships disbursed nationwide per academic year'
    ],
    educationLevels: ['undergraduate', 'diploma'],
    coursesAndStreams: ['Engineering & Technology', 'Pharmacy', 'Architecture', 'Applied Arts', 'Computer Applications'],
    requirements: {
      educationLevels: ['undergraduate', 'diploma'],
      minPercentage: 60,
      maxAnnualIncome: 800000,
      gender: 'female',
      institutionTypes: ['Government', 'Private', 'Aided'],
      specialConditions: ['Admitted in AICTE approved technical institution in 1st year or 2nd year via lateral entry']
    },
    requiredDocuments: [
      'Mark sheet of qualifying exam (10th / 12th / ITI)',
      'Tuition fee receipt of current academic session',
      'Valid Annual Family Income Certificate (≤ ₹8 Lakh)',
      'AICTE institute admission letter & allotment order',
      'Signed declaration by parents affirming not more than 2 daughters are availing scheme'
    ],
    applicationProcedure: [
      'Register on National Scholarship Portal (NSP) with Aadhaar OTR',
      'Choose AICTE Pragati Scholarship under Central Schemes tab',
      'Verify technical college AICTE approval code and course registration',
      'Submit institutional bonafide endorsed by Head of Institution'
    ],
    applicationStartDate: '2025-08-01',
    deadline: '2026-12-15',
    status: 'open',
    officialUrl: 'https://www.aicte-india.org/schemes/students-development-schemes/pragati',
    applicationUrl: 'https://scholarships.gov.in',
    sourceName: 'AICTE & NSP Official Portal',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-28',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['AICTE', 'Women in STEM', 'Technical Education', 'Engineering']
  },
  {
    id: 'reliance-foundation-ug-2025',
    name: 'Reliance Foundation Undergraduate Scholarship',
    slug: 'reliance-foundation-undergraduate-scholarship',
    provider: 'Reliance Foundation',
    providerCategory: 'corporate',
    categories: ['corporate', 'merit', 'need'],
    description: 'Empowering India’s youth to become next-generation leaders. The Reliance Foundation Undergraduate Scholarship provides up to ₹2 Lakhs over the course of undergraduate study alongside holistic leadership development programs.',
    briefSummary: 'Prestigious corporate scholarship granting up to ₹2 Lakhs with mentorship for high-potential undergraduates.',
    amount: 200000,
    formattedAmount: 'Up to ₹2,00,000',
    awardFrequency: 'variable',
    awardCoverage: 'Up to ₹2,00,000 total across the degree duration plus alumni mentorship',
    benefits: [
      'Financial support up to ₹2,00,000 over the complete undergraduate degree',
      'Leadership training webinars, personal development modules and mentorship',
      'Exclusive membership into the vibrant Reliance Foundation Scholar Alumni network',
      '5,000 undergraduate scholars selected annually'
    ],
    educationLevels: ['undergraduate'],
    coursesAndStreams: ['Engineering', 'Commerce', 'Medicine', 'Law', 'Natural Sciences', 'Humanities'],
    requirements: {
      educationLevels: ['undergraduate'],
      minPercentage: 60,
      maxAnnualIncome: 1500000,
      gender: 'all',
      eligibleStates: ['All India']
    },
    requiredDocuments: [
      'Class 12th board marksheet',
      'Current college bonafide certificate or student identity card',
      'Family Income certificate or ITR copy (≤ ₹15 Lakhs)',
      'Valid Government Photo ID proof (Aadhaar or Voter ID)'
    ],
    applicationProcedure: [
      'Complete online application form on the official Reliance Foundation portal',
      'Take the mandatory online aptitude test (60 minutes, MCQ)',
      'Evaluation based on combined aptitude test score and household economic need'
    ],
    applicationStartDate: '2025-08-15',
    deadline: '2026-10-31',
    isDeadlinePassed: true,
    status: 'closed',
    officialUrl: 'https://www.scholarships.reliancefoundation.org',
    applicationUrl: 'https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx',
    sourceName: 'Reliance Foundation Corporate Portal',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-11-01',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['Reliance', 'Corporate CSR', 'Aptitude Test', 'Leadership']
  },
  {
    id: 'tata-capital-pankh-2025',
    name: 'Tata Capital Pankh Scholarship Programme for General & Professional Courses',
    slug: 'tata-capital-pankh-scholarship',
    provider: 'Tata Capital Limited',
    providerCategory: 'corporate',
    categories: ['corporate', 'need', 'merit'],
    description: 'An initiative of Tata Capital to support the higher education of youth belonging to underprivileged families. Covers up to 80% of tuition fees or fixed financial assistance up to ₹50,000.',
    briefSummary: 'Tata Capital CSR grant providing up to ₹50,000 or 80% course fees for undergraduate and professional students.',
    amount: 50000,
    formattedAmount: 'Up to ₹50,000 (80% fees)',
    awardFrequency: 'annual',
    awardCoverage: 'Up to 80% of annual course fees or ₹50,000, whichever is lower',
    benefits: [
      'Financial grant up to ₹50,000 towards institutional tuition fee',
      'Support throughout professional degree trajectory',
      'One-on-one life skills sessions and career counseling by Tata mentors'
    ],
    educationLevels: ['undergraduate', 'diploma'],
    coursesAndStreams: ['B.Com', 'B.Sc', 'B.A', 'B.Tech', 'MBBS', 'BBA', 'BCA', 'Diploma'],
    requirements: {
      educationLevels: ['undergraduate', 'diploma'],
      minPercentage: 60,
      maxAnnualIncome: 400000,
      gender: 'all',
      eligibleStates: ['All India']
    },
    requiredDocuments: [
      'Previous academic year marksheet (min 60% marks)',
      'Government issued identity card (Aadhaar Card)',
      'Current year admission receipt or college bonafide certificate',
      'Annual Income certificate'
    ],
    applicationProcedure: [
      'Register online on Buddy4Study / Tata Capital Pankh scholarship portal',
      'Upload scanned verification records and latest marksheets',
      'Telephonic interview and document verification by program team'
    ],
    applicationStartDate: '2025-06-01',
    deadline: '2026-11-15',
    status: 'open',
    officialUrl: 'https://www.tatacapital.com/csr/pankh-scholarship.html',
    applicationUrl: 'https://www.buddy4study.com/page/tata-capital-pankh-scholarship-programme',
    sourceName: 'Buddy4Study Verified Feed',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-30',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['Tata Capital', 'CSR', 'Tuition Reimbursement']
  },
  {
    id: 'karnataka-post-matric-ssp-2025',
    name: 'Karnataka State Scholarship Portal (SSP) Post-Matric Fee Reimbursement',
    slug: 'karnataka-ssp-post-matric-scholarship',
    provider: 'Social Welfare Department, Government of Karnataka',
    providerCategory: 'state_gov',
    categories: ['state_gov', 'need', 'minority'],
    description: 'Unified state government portal for pre-matric and post-matric fee reimbursement and maintenance allowances for students belonging to SC, ST, OBC, EWS, and minority communities domiciled in Karnataka.',
    briefSummary: 'Comprehensive Karnataka state scholarship covering full college fee reimbursement & maintenance allowance.',
    amount: 35000,
    formattedAmount: '₹15,000 to ₹60,000 / year',
    awardFrequency: 'annual',
    awardCoverage: '100% tuition fee reimbursement + monthly hostel maintenance stipend',
    benefits: [
      'Full tuition fee reimbursement remitted directly to the college',
      'Monthly maintenance allowance credited directly to student bank account via e-KSHANA',
      'Hostel fee reimbursement for day scholars and hostellers'
    ],
    educationLevels: ['undergraduate', 'postgraduate', 'diploma', 'phd'],
    coursesAndStreams: ['Engineering', 'Medical', 'Dental', 'Nursing', 'Science', 'Arts', 'Commerce', 'Polytechnic'],
    requirements: {
      educationLevels: ['undergraduate', 'postgraduate', 'diploma', 'phd'],
      minPercentage: 50,
      maxAnnualIncome: 250000,
      eligibleStates: ['Karnataka'],
      eligibleDomicile: ['Karnataka'],
      gender: 'all',
      socialCategories: ['SC', 'ST', 'OBC', 'Minority', 'EWS']
    },
    requiredDocuments: [
      'Karnataka SSP Student SATS/Registration ID',
      'Caste and Income RD Certificate Number issued by Karnataka Nadakacheri',
      'College Bonafide and Fee Structure Receipt'
    ],
    applicationProcedure: [
      'Create account on Karnataka State Scholarship Portal (SSP)',
      'Enter 15-digit RD Number for automated Caste/Income validation',
      'Fetch college enrollment details via State University Student ID'
    ],
    applicationStartDate: '2025-09-01',
    deadline: '2026-12-31',
    status: 'open',
    officialUrl: 'https://ssp.postmatric.karnataka.gov.in',
    applicationUrl: 'https://ssp.postmatric.karnataka.gov.in/homepage.aspx',
    sourceName: 'Karnataka State Scholarship Portal (SSP)',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-11-02',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['Karnataka', 'SSP', 'State Government', 'Fee Concession']
  },
  {
    id: 'mahadbt-post-matric-2025',
    name: 'Maharashtra Post-Matric Scholarship Scheme (MahaDBT)',
    slug: 'maharashtra-mahadbt-post-matric-scholarship',
    provider: 'Social Justice & Special Assistance Department, Govt of Maharashtra',
    providerCategory: 'state_gov',
    categories: ['state_gov', 'need', 'merit'],
    description: 'State government initiative on the MahaDBT portal to provide financial assistance, exam fee waivers, and maintenance support for higher education to domiciled students of Maharashtra.',
    briefSummary: 'Maharashtra state scholarship providing 50% to 100% tuition waiver and hostel allowance.',
    amount: 40000,
    formattedAmount: '₹20,000 to ₹75,000 / year',
    awardFrequency: 'annual',
    awardCoverage: 'Full or half tuition waiver, exam fee waiver, and living allowance',
    benefits: [
      '100% tuition and development fee reimbursement for SC/ST students',
      '50% tuition fee reimbursement for OBC / SEBC / EBC categories',
      'Direct maintenance allowance for rural & hostel students'
    ],
    educationLevels: ['undergraduate', 'postgraduate', 'diploma'],
    coursesAndStreams: ['Engineering', 'Pharmacy', 'Architecture', 'Arts', 'Commerce', 'Science', 'Law', 'Polytechnic'],
    requirements: {
      educationLevels: ['undergraduate', 'postgraduate', 'diploma'],
      minPercentage: 50,
      maxAnnualIncome: 800000,
      eligibleStates: ['Maharashtra'],
      eligibleDomicile: ['Maharashtra'],
      gender: 'all',
      socialCategories: ['SC', 'ST', 'OBC', 'EWS', 'General']
    },
    requiredDocuments: [
      'Maharashtra Domicile Certificate',
      'Competent Tahsildar Income Certificate',
      'Caste Certificate & Caste Validity Certificate'
    ],
    applicationProcedure: [
      'Register on MahaDBT portal with biometric or OTP Aadhaar authentication',
      'Upload verified documents and submit for scrutiny by College Principal'
    ],
    applicationStartDate: '2025-08-15',
    deadline: '2026-12-20',
    status: 'open',
    officialUrl: 'https://mahadbt.maharashtra.gov.in',
    applicationUrl: 'https://mahadbt.maharashtra.gov.in',
    sourceName: 'MahaDBT Official Portal',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-11-03',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['Maharashtra', 'MahaDBT', 'State Government', 'Fee Waiver']
  },
  {
    id: 'adobe-women-tech-2025',
    name: 'Adobe India Women-in-Technology Scholarship',
    slug: 'adobe-women-in-technology-scholarship',
    provider: 'Adobe India Research',
    providerCategory: 'corporate',
    categories: ['corporate', 'stem', 'merit'],
    description: 'The Adobe India Women-in-Technology Scholarship strives to recognize outstanding female students in technology and computer science fields across Indian universities and institutions.',
    briefSummary: 'Elite global tech scholarship covering full tuition fees and an internship interview opportunity with Adobe Research.',
    amount: 250000,
    formattedAmount: '₹2,50,000 + Tech Gear',
    awardFrequency: 'one-time',
    awardCoverage: 'Tuition fees, research grant, Adobe mentor pairing, and interview opportunity for summer internship',
    benefits: [
      'Substantial financial grant of ₹2,50,000 towards academic tuition',
      'Opportunity to interview for an internship at Adobe India Research',
      'Mentorship from senior female researchers and technical leaders at Adobe',
      'Complimentary travel and registration for Grace Hopper Celebration India (GHCI)'
    ],
    educationLevels: ['undergraduate', 'postgraduate'],
    coursesAndStreams: ['Computer Science', 'Information Technology', 'Data Science', 'Electrical & Electronics', 'Mathematics & Computing'],
    requirements: {
      educationLevels: ['undergraduate', 'postgraduate'],
      minPercentage: 75,
      gender: 'female',
      eligibleStates: ['All India']
    },
    requiredDocuments: [
      'Resume/Curriculum Vitae highlighting coding projects, hackathons & research papers',
      'Academic transcripts of all completed semesters',
      'One Letter of Recommendation (LoR)',
      'Four essay responses outlining technical vision'
    ],
    applicationProcedure: [
      'Submit detailed application on Adobe Careers & Student Programs portal',
      'Technical committee screens essays and projects',
      'Virtual technical interviews with Adobe scientists'
    ],
    applicationStartDate: '2025-08-01',
    deadline: '2026-11-20',
    status: 'open',
    officialUrl: 'https://research.adobe.com/scholarship/adobe-india-women-in-technology-scholarship',
    applicationUrl: 'https://research.adobe.com/scholarship/adobe-india-women-in-technology-scholarship/',
    sourceName: 'Adobe Research Official Site',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-18',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['Adobe', 'STEM', 'Women in Tech', 'Computer Science']
  },
  {
    id: 'fulbright-nehru-masters-2026',
    name: 'Fulbright-Nehru Master’s Fellowships for Study in the United States',
    slug: 'fulbright-nehru-masters-fellowships',
    provider: 'United States-India Educational Foundation (USIEF)',
    providerCategory: 'international',
    categories: ['international', 'merit', 'research'],
    description: 'Designed for highly motivated Indian graduates with substantial leadership potential and professional experience to pursue a fully-funded Master’s degree at select U.S. colleges and universities.',
    briefSummary: 'Fully funded U.S. Master’s fellowship covering tuition, airfare, living stipend, and health insurance.',
    amount: 4500000,
    formattedAmount: 'Fully Funded (~₹45,00,000+ value)',
    awardFrequency: 'variable',
    awardCoverage: 'Full university tuition, J-1 visa sponsorship, economy airfare, monthly living allowance, and health benefit plan',
    benefits: [
      '100% waiver of tuition and mandatory university fees at top US institutions',
      'Round-trip international air travel between India and the United States',
      'Generous monthly living stipend adhering to US cost-of-living index'
    ],
    educationLevels: ['postgraduate'],
    coursesAndStreams: ['Public Health', 'Environmental Science', 'Public Administration', 'International Affairs', 'Urban Planning', 'Economics'],
    requirements: {
      educationLevels: ['postgraduate'],
      minPercentage: 60,
      gender: 'all',
      eligibleStates: ['All India'],
      specialConditions: ['Must have completed at least 3 years of full-time professional work experience after bachelor degree']
    },
    requiredDocuments: [
      'Academic transcripts of all university degrees',
      'Three confidential Letters of Reference (LoR)',
      'Statement of Purpose (SoP) and Personal Statement',
      'Valid Indian Passport'
    ],
    applicationProcedure: [
      'Complete online application on USIEF Embark portal',
      'Regional screening committees evaluate academic and community leadership',
      'National interviews in New Delhi or virtual before bilateral US-India board'
    ],
    applicationStartDate: '2025-02-01',
    deadline: '2026-05-15',
    status: 'open',
    officialUrl: 'https://www.usief.org.in/Fulbright-Nehru-Master-Fellowships.aspx',
    applicationUrl: 'https://www.usief.org.in/Fellowships/Fellowships-for-Indian-Citizens.aspx',
    sourceName: 'USIEF Official Government Exchange',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['USIEF', 'Fulbright', 'Study in USA', 'Fully Funded', 'International']
  }
];
