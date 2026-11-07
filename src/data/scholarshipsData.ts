import { Scholarship } from '../types/scholarship';

export const SCHOLARSHIPS_DATA: Scholarship[] = [
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
      minPercentage: 80, // Above 80th percentile in Class 12 board
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
      maxAnnualIncome: 1500000, // Preference to under 2.5 Lakhs
      gender: 'all',
      eligibleStates: ['All India']
    },
    requiredDocuments: [
      'Class 12th board marksheet',
      'Current college bonafide certificate or student identity card',
      'Family Income certificate or ITR copy (≤ ₹15 Lakhs)',
      'Valid Government Photo ID proof (Aadhaar or Voter ID)',
      'Passport size photograph'
    ],
    applicationProcedure: [
      'Complete online application form on the official Reliance Foundation portal',
      'Take the mandatory online aptitude test (60 minutes, MCQ)',
      'Evaluation based on combined aptitude test score and household economic need',
      'Final selection announcement with direct disbursement'
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
      'Annual Income certificate (Salary slip / Form 16 / Tehsildar certificate)',
      'Student bank account details with canceled cheque'
    ],
    applicationProcedure: [
      'Register online on Buddy4Study / Tata Capital Pankh scholarship portal',
      'Complete personal, academic, and financial background details',
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
    tags: ['Tata Capital', 'CSR', 'Tuition Reimbursement', 'Buddy4Study']
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
      'College Bonafide and Fee Structure Receipt',
      'Aadhaar Seeding with NPCI Bank Account confirmation'
    ],
    applicationProcedure: [
      'Create account on Karnataka State Scholarship Portal (SSP)',
      'Enter 15-digit RD Number for automated Caste/Income validation',
      'Fetch college enrollment details via State University Student ID',
      'Hostel verification through e-Hostel portal integration'
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
      'Competent Tahsildar Income Certificate (Barcode valid)',
      'Caste Certificate & Caste Validity Certificate (for reserved categories)',
      'CAP allotment letter and college fee receipt',
      'Ration Card / Declaration of family members'
    ],
    applicationProcedure: [
      'Register on MahaDBT portal with biometric or OTP Aadhaar authentication',
      'Select relevant Department scheme (Social Justice / DTE / Tribal Welfare)',
      'Upload verified documents and submit for scrutiny by College Principal',
      'Sanctioned grant disbursed in 2 installments via PFMS'
    ],
    applicationStartDate: '2025-08-15',
    deadline: '2026-12-20',
    status: 'open',
    officialUrl: 'https://mahadbt.maharashtra.gov.in',
    applicationUrl: 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DD4FA4812C44B9B8808E413C53DF83',
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
      'One Letter of Recommendation (LoR) from professor or academic mentor',
      'Four essay responses outlining technical vision and passion for CS'
    ],
    applicationProcedure: [
      'Submit detailed application on Adobe Careers & Student Programs portal',
      'Technical committee screens essays, GitHub repositories and academic scores',
      'Shortlisted applicants undergo virtual technical interviews with Adobe scientists',
      'Recipients announced in ceremony'
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
    tags: ['Adobe', 'STEM', 'Women in Tech', 'Computer Science', 'Internship']
  },
  {
    id: 'hdfc-badhte-kadam-2025',
    name: 'HDFC Bank Parivartan’s Badhte Kadam Scholarship',
    slug: 'hdfc-parivartan-badhte-kadam',
    provider: 'HDFC Bank CSR Parivartan',
    providerCategory: 'corporate',
    categories: ['corporate', 'need'],
    description: 'HDFC Bank Parivartan’s Badhte Kadam aims to provide financial support to high-need students who are at risk of dropping out due to personal or financial crises, ensuring their educational continuity.',
    briefSummary: 'HDFC Bank emergency crisis support granting up to ₹1,00,000 for students facing severe economic hardship.',
    amount: 100000,
    formattedAmount: 'Up to ₹1,00,000',
    awardFrequency: 'annual',
    awardCoverage: 'Annual educational expenditure, boarding, books, and examination fees',
    benefits: [
      'Scholarship grant up to ₹1,00,000 for professional degree students',
      'Special preference for students who have suffered loss of family breadwinner',
      'Direct bank account transfer'
    ],
    educationLevels: ['high_school', 'undergraduate', 'postgraduate', 'diploma'],
    coursesAndStreams: ['General Degree', 'Professional Degree', 'Vocational'],
    requirements: {
      educationLevels: ['high_school', 'undergraduate', 'postgraduate', 'diploma'],
      minPercentage: 60,
      maxAnnualIncome: 600000,
      gender: 'all',
      eligibleStates: ['All India']
    },
    requiredDocuments: [
      'Previous year examination marksheet',
      'Current year admission proof and fee structure',
      'Proof of family income (Salary slips, Form 16, or BPL card)',
      'Proof of crisis/adversity (medical reports or death certificate of earner, if applicable)'
    ],
    applicationProcedure: [
      'Apply online on Buddy4Study HDFC Parivartan portal',
      'Complete socioeconomic profile and specify hardship context',
      'Document tele-verification and home-verification audit',
      'Award disbursement'
    ],
    applicationStartDate: '2025-07-15',
    deadline: '2026-11-28',
    status: 'open',
    officialUrl: 'https://www.hdfcbank.com/personal/about-us/corporate-social-responsibility',
    applicationUrl: 'https://www.buddy4study.com/page/hdfc-bank-parivartans-badhte-kadam-scholarship',
    sourceName: 'Buddy4Study Verified Partner Integration',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-29',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['HDFC Bank', 'CSR Parivartan', 'Crisis Support', 'Need-Based']
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
      'Generous monthly living stipend adhering to US cost-of-living index',
      'Sickness and accident coverage conforming to US federal regulations'
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
      'Employer Endorsement Form if currently employed',
      'Valid Indian Passport'
    ],
    applicationProcedure: [
      'Complete online application on USIEF Embark portal',
      'Regional screening committees evaluate academic and community leadership',
      'National interviews in New Delhi or virtual before bilateral US-India board',
      'Selected finalists placed at accredited US graduate programs'
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
  },
  {
    id: 'rhodes-scholarship-india-2026',
    name: 'Rhodes Scholarship for India at the University of Oxford',
    slug: 'rhodes-scholarship-india-oxford',
    provider: 'The Rhodes Trust, Oxford',
    providerCategory: 'international',
    categories: ['international', 'merit', 'research'],
    description: 'The Rhodes Scholarship is the oldest and perhaps the most prestigious international scholarship programme, enabling outstanding young people from across India to study at the University of Oxford.',
    briefSummary: 'Preeminent international scholarship covering all Oxford University fees, generous stipend, and airfare.',
    amount: 5500000,
    formattedAmount: 'Fully Funded (~₹55,00,000+ value)',
    awardFrequency: 'variable',
    awardCoverage: 'Full Oxford University & college fees, personal stipend of £19,092/year, flights, and visa',
    benefits: [
      'Full payment of all University of Oxford tuition and college fees',
      'Personal living stipend of £19,092 per annum',
      'Private health insurance and student visa application reimbursement',
      'Lifelong fellowship at Rhodes House with worldwide alumni cohort'
    ],
    educationLevels: ['postgraduate', 'phd'],
    coursesAndStreams: ['All Academic Disciplines taught at University of Oxford'],
    requirements: {
      educationLevels: ['postgraduate', 'phd'],
      minPercentage: 75,
      minAge: 19,
      maxAge: 25,
      gender: 'all',
      eligibleStates: ['All India'],
      specialConditions: ['Must hold first-class undergraduate degree by October 2026']
    },
    requiredDocuments: [
      'Formal academic transcripts',
      'Comprehensive Curriculum Vitae (CV)',
      'Personal Statement (maximum 1,000 words)',
      'Academic statement of study (maximum 350 words)',
      'Five to six letters of reference (at least 3 academic)'
    ],
    applicationProcedure: [
      'Submit comprehensive dossier on the Rhodes Trust India portal',
      'Preliminary shortlisting followed by preliminary panel interviews',
      'Final weekend social engagement and final panel interview in New Delhi',
      '5 Rhodes Scholars selected from India annually'
    ],
    applicationStartDate: '2025-06-01',
    deadline: '2026-08-01',
    status: 'coming_soon',
    officialUrl: 'https://www.rhodeshouse.ox.ac.uk/scholarships/the-rhodes-scholarship/',
    applicationUrl: 'https://www.rhodeshouse.ox.ac.uk/scholarships/apply/india/',
    sourceName: 'The Rhodes Trust Oxford',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-20',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['Oxford', 'Rhodes Trust', 'UK', 'Fully Funded', 'Postgraduate']
  },
  {
    id: 'dr-ambedkar-post-matric-ebc-2025',
    name: 'Dr. Ambedkar Post-Matric Scholarship for Economically Backward Classes (EBC)',
    slug: 'dr-ambedkar-post-matric-ebc',
    provider: 'Ministry of Social Justice and Empowerment, Govt of India',
    providerCategory: 'central_gov',
    categories: ['central_gov', 'need'],
    description: 'A Centrally Sponsored Scheme to provide financial assistance to General Category Economically Backward Class (EBC) students studying at post-matriculation or post-secondary stage.',
    briefSummary: 'Central government scheme providing maintenance allowance and fee support for General/EBC students.',
    amount: 15000,
    formattedAmount: '₹8,000 to ₹18,000 / year',
    awardFrequency: 'annual',
    awardCoverage: 'Maintenance allowance, study tour charges, and thesis typing charges',
    benefits: [
      'Maintenance allowance up to ₹1,200 per month for hostellers and ₹750/month for day scholars',
      'Reimbursement of compulsory non-refundable fees',
      'Book allowance and thesis grant for postgraduate/research students'
    ],
    educationLevels: ['undergraduate', 'postgraduate', 'diploma', 'phd'],
    coursesAndStreams: ['All recognized post-matric degree & diploma courses'],
    requirements: {
      educationLevels: ['undergraduate', 'postgraduate', 'diploma', 'phd'],
      minPercentage: 50,
      maxAnnualIncome: 250000,
      socialCategories: ['EWS', 'General'],
      gender: 'all',
      eligibleStates: ['All India']
    },
    requiredDocuments: [
      'Income Certificate from competent revenue officer showing income ≤ ₹2.5 Lakhs',
      'Proof of admission in recognized institution',
      'Previous examination marksheets',
      'Bank passbook copy with IFSC and Aadhaar linkage proof'
    ],
    applicationProcedure: [
      'Apply online on National Scholarship Portal (NSP)',
      'Select Ministry of Social Justice & Empowerment dropdown',
      'Submit verification form to college nodal desk'
    ],
    applicationStartDate: '2025-07-15',
    deadline: '2026-11-30',
    status: 'open',
    officialUrl: 'https://socialjustice.gov.in/schemes/42',
    applicationUrl: 'https://scholarships.gov.in',
    sourceName: 'Ministry of Social Justice & NSP',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-22',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['EBC', 'Social Justice', 'NSP', 'Need-Based']
  },
  {
    id: 'saksham-differently-abled-2025',
    name: 'AICTE Saksham Scholarship Scheme for Specially-Abled Students',
    slug: 'aicte-saksham-scholarship-differently-abled',
    provider: 'All India Council for Technical Education (AICTE)',
    providerCategory: 'central_gov',
    categories: ['central_gov', 'stem', 'need'],
    description: 'Saksham is an AICTE initiative providing ₹50,000 per annum to specially-abled students who have a disability of not less than 40% to pursue technical degree or diploma courses.',
    briefSummary: '₹50,000 per year dedicated financial support for students with ≥40% disability in technical programs.',
    amount: 50000,
    formattedAmount: '₹50,000 / year',
    awardFrequency: 'annual',
    awardCoverage: 'Lump-sum grant of ₹50,000 for each year of study towards tuition and assistive devices',
    benefits: [
      '₹50,000 per year assistance for college fee reimbursement and learning software/hardware',
      'Covers purchase of assistive devices, braille displays, and mobility apparatus',
      'All eligible applicants fulfilling criteria are accommodated without numerical cap'
    ],
    educationLevels: ['undergraduate', 'diploma'],
    coursesAndStreams: ['Engineering & Technology', 'Pharmacy', 'Architecture', 'Applied Arts', 'Design'],
    requirements: {
      educationLevels: ['undergraduate', 'diploma'],
      minPercentage: 50,
      maxAnnualIncome: 800000,
      disabilityOnly: true,
      minDisabilityPercentage: 40,
      gender: 'all',
      eligibleStates: ['All India']
    },
    requiredDocuments: [
      'Disability Certificate / UDID card issued by competent medical authority indicating ≥40% benchmark disability',
      'Class 10th / 12th board marksheet',
      'Tuition fee receipt of current academic session',
      'Income Certificate (ceiling ₹8 Lakhs/year)',
      'College bonafide signed by Principal'
    ],
    applicationProcedure: [
      'Apply online on National Scholarship Portal (NSP)',
      'Upload UDID verification barcode / scanned medical board certificate',
      'College nodal officer confirms enrollment in AICTE-approved degree'
    ],
    applicationStartDate: '2025-08-01',
    deadline: '2026-12-15',
    status: 'open',
    officialUrl: 'https://www.aicte-india.org/schemes/students-development-schemes/saksham',
    applicationUrl: 'https://scholarships.gov.in',
    sourceName: 'AICTE & NSP Official Portal',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-25',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['AICTE', 'Saksham', 'PwD', 'Disability Support', 'STEM']
  },
  {
    id: 'infosys-foundation-stem-girls-2025',
    name: 'Infosys Foundation STEM Stars Scholarship for Girls',
    slug: 'infosys-foundation-stem-stars-girls',
    provider: 'Infosys Foundation',
    providerCategory: 'corporate',
    categories: ['corporate', 'stem', 'need'],
    description: 'The Infosys Foundation STEM Stars scholarship aims to encourage and support young women from economically underprivileged backgrounds to pursue higher education in STEM fields at NIRF-ranked institutions.',
    briefSummary: 'Infosys Foundation grant of up to ₹1,00,000/yr for female students in NIRF-ranked STEM colleges.',
    amount: 100000,
    formattedAmount: 'Up to ₹1,00,000 / year',
    awardFrequency: 'annual',
    awardCoverage: 'Tuition fees, living expenses, books, and educational supplies up to ₹1,00,000 annually',
    benefits: [
      'Financial assistance up to ₹1 Lakh per year for the full 4-year degree course',
      'Access to tech workshops, coding mentorship and learning pathways curated by Infosys',
      'Recognition at annual Infosys Foundation STEM Stars summit'
    ],
    educationLevels: ['undergraduate'],
    coursesAndStreams: ['Computer Science', 'Information Science', 'AI & Machine Learning', 'Electronics & Communication', 'Mechanical', 'Civil'],
    requirements: {
      educationLevels: ['undergraduate'],
      minPercentage: 70,
      maxAnnualIncome: 800000,
      gender: 'female',
      eligibleStates: ['All India'],
      institutionTypes: ['Government', 'Private', 'Aided']
    },
    requiredDocuments: [
      'Class 12th board marksheet with minimum 70% in science subjects',
      'Government Family Income Certificate (≤ ₹8 Lakhs)',
      'Admission allotment letter in NIRF-ranked institute',
      'Government Photo ID proof',
      'Electricity bill of residence for verification'
    ],
    applicationProcedure: [
      'Apply online on the official Infosys Foundation scholarship portal or partner portal',
      'Provide academic details and upload supporting certificates',
      'Document validation followed by telephone interview for shortlisted candidates'
    ],
    applicationStartDate: '2025-07-01',
    deadline: '2026-11-25',
    status: 'open',
    officialUrl: 'https://www.infosys.com/infosys-foundation/initiatives/education/stem-stars.html',
    applicationUrl: 'https://www.infosys.com/infosys-foundation/initiatives/education/stem-stars.html',
    sourceName: 'Infosys Foundation Official Portal',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-31',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['Infosys', 'STEM Stars', 'Girls in Engineering', 'Corporate Foundation']
  },
  {
    id: 'swami-vivekananda-merit-wb-2025',
    name: 'Swami Vivekananda Merit-cum-Means Scholarship (SVMCM)',
    slug: 'swami-vivekananda-merit-wb-svmcm',
    provider: 'Higher Education Department, Govt of West Bengal',
    providerCategory: 'state_gov',
    categories: ['state_gov', 'merit', 'need'],
    description: 'Premier state scholarship for meritorious and economically backward students of West Bengal pursuing higher secondary, undergraduate, postgraduate, and doctoral studies.',
    briefSummary: 'Flagship West Bengal state scholarship granting ₹12,000 to ₹60,000 per year for domicile students.',
    amount: 30000,
    formattedAmount: '₹12,000 to ₹60,000 / year',
    awardFrequency: 'annual',
    awardCoverage: 'Course fee support and monthly maintenance stipend up to ₹5,000/month for medical students',
    benefits: [
      '₹1,000 to ₹5,000 per month depending on degree and stream',
      'Engineering and Medical students receive ₹60,000 per annum',
      'Direct disbursement through Banglar Uchhashiksha portal'
    ],
    educationLevels: ['high_school', 'undergraduate', 'postgraduate', 'diploma', 'phd'],
    coursesAndStreams: ['Higher Secondary', 'Undergraduate Degree', 'Postgraduate Degree', 'Engineering', 'Medical', 'Polytechnic'],
    requirements: {
      educationLevels: ['high_school', 'undergraduate', 'postgraduate', 'diploma', 'phd'],
      minPercentage: 60,
      maxAnnualIncome: 250000,
      eligibleStates: ['West Bengal'],
      eligibleDomicile: ['West Bengal'],
      gender: 'all'
    },
    requiredDocuments: [
      'Marksheet of qualifying Madhyamik/Higher Secondary/Graduation examination',
      'Income Certificate issued by Joint BDO / Executive Officer / Municipality',
      'West Bengal Domicile Certificate (Ration card / Voter card / Aadhaar)',
      'Admission receipt of current institution'
    ],
    applicationProcedure: [
      'Register on SVMCM portal (svmcm.wbhed.gov.in)',
      'Select relevant Directorate (DPI, DTE, DME, or School Education)',
      'Upload signed documents and submit to institutional verification desk'
    ],
    applicationStartDate: '2025-09-10',
    deadline: '2026-12-31',
    status: 'open',
    officialUrl: 'https://svmcm.wbhed.gov.in',
    applicationUrl: 'https://svmcm.wbhed.gov.in/page/application_procedure.php',
    sourceName: 'Govt of West Bengal Higher Education Portal',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-11-04',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['West Bengal', 'SVMCM', 'State Government', 'Merit-Cum-Means']
  },
  {
    id: 'sitaram-jindal-foundation-2025',
    name: 'Sitaram Jindal Foundation Scholarship Scheme',
    slug: 'sitaram-jindal-foundation-scholarship',
    provider: 'Sitaram Jindal Foundation',
    providerCategory: 'ngo',
    categories: ['ngo', 'merit', 'need'],
    description: 'Charitable foundation scholarship to assist poor and deserving students pursuing higher education across India, from high school to postgraduation and professional courses.',
    briefSummary: 'Reputed non-governmental foundation scholarship offering monthly stipends to needy students nationwide.',
    amount: 38400,
    formattedAmount: '₹14,400 to ₹38,400 / year',
    awardFrequency: 'monthly',
    awardCoverage: 'Monthly maintenance stipend disbursed quarterly directly by cheque / NEFT',
    benefits: [
      'Monthly scholarship between ₹1,200 and ₹3,200 depending on course level and hostel status',
      'Additional allowance for physically challenged scholars and students staying in paid hostels',
      'Reliable financial assistance without bond or obligation'
    ],
    educationLevels: ['high_school', 'diploma', 'undergraduate', 'postgraduate'],
    coursesAndStreams: ['General Graduation', 'Post Graduation', 'Engineering', 'Medicine', 'Polytechnic', 'ITI'],
    requirements: {
      educationLevels: ['high_school', 'diploma', 'undergraduate', 'postgraduate'],
      minPercentage: 65, // 65% for boys, 60% for girls
      maxAnnualIncome: 400000,
      gender: 'all',
      eligibleStates: ['All India']
    },
    requiredDocuments: [
      'Marksheet of qualifying examination',
      'Annual Income Certificate issued by Revenue Authority',
      'Hostel certificate signed by warden (for hostel stipend)',
      'Fee structure and receipts of payments made to college'
    ],
    applicationProcedure: [
      'Download prescribed application form from Sitaram Jindal Foundation website',
      'Get application verified and certified by Principal of College / Institute',
      'Mail hard copy with attached certificates to Foundation Office in Bengaluru'
    ],
    applicationStartDate: '2025-01-01',
    deadline: '2026-12-31',
    status: 'open',
    officialUrl: 'https://www.sitaramjindalfoundation.org/scholarships.php',
    applicationUrl: 'https://www.sitaramjindalfoundation.org/scholarships-apply-offline.php',
    sourceName: 'Sitaram Jindal Foundation Official',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-10',
    lastSynchronizedDate: '2026-11-06',
    dataProvenance: 'verified_curated',
    tags: ['NGO', 'Sitaram Jindal', 'Monthly Stipend', 'Pan-India']
  }
];
