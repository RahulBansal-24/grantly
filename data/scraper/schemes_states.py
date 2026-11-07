"""
Indian State Government Scholarship Schemes across all states and union territories.
"""

STATE_SCHEMES = [
    {
        "name": "Karnataka State Scholarship Portal (SSP) Post-Matric Fee Concession",
        "provider": "Department of Social Welfare, Government of Karnataka",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need", "minority"],
        "description": "Unified Karnataka state portal scheme providing 100% tuition and laboratory fee reimbursement and maintenance stipend for post-matric students.",
        "briefSummary": "Comprehensive Karnataka state scholarship covering full college fee reimbursement & monthly maintenance.",
        "country": "India",
        "state": "Karnataka",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 45000,
        "formattedAmount": "₹15,000 to ₹60,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "100% tuition fee reimbursement + monthly maintenance allowance via e-KSHANA",
        "benefits": [
            "Full tuition fee reimbursement remitted directly to college",
            "Monthly hostel / day-scholar maintenance allowance",
            "Automatic validation through Nadakacheri RD Caste/Income database"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma", "phd"],
        "coursesAndStreams": ["Engineering", "Medical", "Dental", "Nursing", "Science", "Commerce", "Arts", "Polytechnic"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma", "phd"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Karnataka"],
            "eligibleDomicile": ["Karnataka"],
            "gender": "all",
            "socialCategories": ["SC", "ST", "OBC", "Minority", "EWS"]
        },
        "requiredDocuments": [
            "Karnataka SSP Student SATS/Registration ID",
            "Caste and Income RD Certificate Number issued by Karnataka Nadakacheri",
            "College Bonafide and Fee Structure Receipt",
            "Aadhaar Seeding with NPCI Bank Account confirmation"
        ],
        "applicationProcedure": [
            "Create account on Karnataka State Scholarship Portal (SSP)",
            "Enter 15-digit RD Number for automated Caste/Income validation",
            "Fetch college enrollment details via State University Student ID",
            "Hostel verification through e-Hostel portal integration"
        ],
        "applicationStartDate": "2025-09-01",
        "deadline": "2026-12-31",
        "officialUrl": "https://ssp.postmatric.karnataka.gov.in",
        "applicationUrl": "https://ssp.postmatric.karnataka.gov.in/homepage.aspx",
        "sourceUrl": "https://ssp.postmatric.karnataka.gov.in",
        "sourceName": "Karnataka State Scholarship Portal (SSP)",
        "sourceType": "state_portal",
        "tags": ["Karnataka", "SSP", "State Government", "Fee Concession", "Post-Matric"]
    },
    {
        "name": "Karnataka Vidyasiri (Food & Accommodation) Scheme",
        "provider": "Department of Backward Classes Welfare, Govt of Karnataka",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Monthly financial assistance of ₹1,500 for 10 months to rural and underprivileged students who do not secure admission in department post-matric hostels.",
        "briefSummary": "₹15,000 per year food and accommodation maintenance stipend for Karnataka OBC/EWS students.",
        "country": "India",
        "state": "Karnataka",
        "fundingType": "stipend",
        "currency": "INR",
        "amount": 15000,
        "formattedAmount": "₹15,000 / year (₹1,500/month)",
        "awardFrequency": "annual",
        "awardCoverage": "Monthly living stipend of ₹1,500 for 10 months towards room rent and food",
        "benefits": [
            "Direct cash DBT of ₹1,500 per month directly to student account",
            "Addresses hostel shortage in urban educational hubs like Bengaluru, Mysuru, Hubballi"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma"],
        "coursesAndStreams": ["All post-matric diploma, degree, and postgraduate courses"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Karnataka"],
            "eligibleDomicile": ["Karnataka"],
            "gender": "all",
            "socialCategories": ["OBC", "EWS"],
            "specialConditions": ["Permanent residence must be at least 5 km away from college town"]
        },
        "requiredDocuments": [
            "Karnataka Nadakacheri Income and Caste RD number",
            "Rental agreement / Hostel certificate signed by landlord",
            "Aadhaar and bank passbook seeded with DBT"
        ],
        "applicationProcedure": [
            "Apply via Karnataka SSP portal under Vidyasiri scheme tab",
            "Local taluk officer conducts electronic verification of distance criteria"
        ],
        "applicationStartDate": "2025-09-01",
        "deadline": "2026-12-31",
        "officialUrl": "https://bcwd.karnataka.gov.in",
        "applicationUrl": "https://ssp.postmatric.karnataka.gov.in",
        "sourceUrl": "https://ssp.postmatric.karnataka.gov.in",
        "sourceName": "Karnataka Backward Classes Welfare Dept",
        "sourceType": "state_portal",
        "tags": ["Karnataka", "Vidyasiri", "Hostel Stipend", "OBC"]
    },
    {
        "name": "Maharashtra Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC)",
        "provider": "Directorate of Higher & Technical Education, Govt of Maharashtra",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need", "merit"],
        "description": "50% tuition fee and exam fee concession for economically backward open category (EBC) students pursuing professional and non-professional higher education in Maharashtra.",
        "briefSummary": "Maharashtra state scheme reimbursing 50% tuition and exam fees for students with family income ≤ ₹8 Lakhs.",
        "country": "India",
        "state": "Maharashtra",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 50000,
        "formattedAmount": "50% of Tuition & Exam Fees",
        "awardFrequency": "annual",
        "awardCoverage": "50% tuition fee waiver and 50% exam fee reimbursement remitted to institute",
        "benefits": [
            "Substantial reduction of professional degree fees (Engineering, Pharmacy, MBA, Architecture)",
            "Disbursed through MahaDBT in two annual installments"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma"],
        "coursesAndStreams": ["Engineering", "Technology", "Pharmacy", "Architecture", "Medicine", "Arts", "Commerce", "Science"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 800000,
            "eligibleStates": ["Maharashtra"],
            "eligibleDomicile": ["Maharashtra"],
            "gender": "all",
            "socialCategories": ["General", "EWS"],
            "specialConditions": ["Admitted through Centralized Admission Process (CAP) round"]
        },
        "requiredDocuments": [
            "Maharashtra State Domicile Certificate",
            "Tahsildar Income Certificate (barcode verified showing income ≤ ₹8.00 Lakhs)",
            "CAP allotment letter and college fee receipt",
            "Family declaration stating not more than two beneficiaries"
        ],
        "applicationProcedure": [
            "Register on MahaDBT portal with Aadhaar OTP authentication",
            "Select DTE/DHE scheme and fill in CAP enrollment credentials",
            "Principal of college conducts scrutiny and forwards to state directorate"
        ],
        "applicationStartDate": "2025-08-15",
        "deadline": "2026-12-20",
        "officialUrl": "https://mahadbt.maharashtra.gov.in",
        "applicationUrl": "https://mahadbt.maharashtra.gov.in",
        "sourceUrl": "https://mahadbt.maharashtra.gov.in",
        "sourceName": "MahaDBT Official Portal",
        "sourceType": "state_portal",
        "tags": ["Maharashtra", "MahaDBT", "EBC", "Fee Waiver", "CAP"]
    },
    {
        "name": "Maharashtra Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna (Hostel Allowance)",
        "provider": "Directorate of Higher & Technical Education, Govt of Maharashtra",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Financial assistance of ₹20,000 to ₹30,000 per year towards hostel maintenance for children of registered marginal farmers and EBC students in Maharashtra.",
        "briefSummary": "Up to ₹30,000 annual hostel stipend for children of small farmers and EBC students in Maharashtra.",
        "country": "India",
        "state": "Maharashtra",
        "fundingType": "stipend",
        "currency": "INR",
        "amount": 30000,
        "formattedAmount": "₹20,000 to ₹30,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "₹3,000/mo for 10 months in MMRDA/Pune area; ₹2,000/mo in other district places",
        "benefits": [
            "₹30,000 per annum for students studying in Mumbai, Pune, Nagpur, Aurangabad",
            "₹20,000 per annum for students studying in other district headquarters",
            "Credited directly to student bank account"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma"],
        "coursesAndStreams": ["Engineering", "Medicine", "Agriculture", "Veterinary", "Polytechnic"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 800000,
            "eligibleStates": ["Maharashtra"],
            "eligibleDomicile": ["Maharashtra"],
            "gender": "all",
            "specialConditions": ["Parent must be small/marginal landholder farmer OR family annual income ≤ ₹8 Lakhs"]
        },
        "requiredDocuments": [
            "Maharashtra Domicile Certificate",
            "7/12 land extract or small landholder farmer certificate",
            "Hostel admission receipt or certified rental agreement",
            "College Bonafide certificate"
        ],
        "applicationProcedure": [
            "Apply online through MahaDBT under Technical Education Department",
            "Upload 7/12 farmer extract and registered rental agreement"
        ],
        "applicationStartDate": "2025-08-15",
        "deadline": "2026-12-20",
        "officialUrl": "https://mahadbt.maharashtra.gov.in",
        "applicationUrl": "https://mahadbt.maharashtra.gov.in",
        "sourceUrl": "https://mahadbt.maharashtra.gov.in",
        "sourceName": "MahaDBT Official Portal",
        "sourceType": "state_portal",
        "tags": ["Maharashtra", "Hostel Allowance", "Farmers", "MahaDBT"]
    },
    {
        "name": "West Bengal Swami Vivekananda Merit-cum-Means Scholarship (SVMCM)",
        "provider": "Department of Higher Education, Govt of West Bengal",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit", "need"],
        "description": "Flagship West Bengal scholarship providing monthly assistance between ₹1,000 and ₹5,000 for meritorious students pursuing HS, UG, PG, and doctoral studies.",
        "briefSummary": "Flagship West Bengal state scholarship granting ₹12,000 to ₹60,000 per year for domicile students.",
        "country": "India",
        "state": "West Bengal",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 30000,
        "formattedAmount": "₹12,000 to ₹60,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "₹1,000 to ₹5,000/month based on course level and discipline",
        "benefits": [
            "Higher Secondary students: ₹12,000 per annum (min 60% in Madhyamik)",
            "UG Degree Arts/Commerce/Science: ₹12,000 to ₹18,000 per annum",
            "Engineering & Medical students: ₹60,000 per annum",
            "Non-NET M.Phil and PhD scholars: ₹60,000 to ₹96,000 per annum"
        ],
        "educationLevels": ["high_school", "undergraduate", "postgraduate", "diploma", "phd"],
        "coursesAndStreams": ["Arts", "Science", "Commerce", "Engineering", "Medical", "Polytechnic"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["high_school", "undergraduate", "postgraduate", "diploma", "phd"],
            "minPercentage": 60,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["West Bengal"],
            "eligibleDomicile": ["West Bengal"],
            "gender": "all"
        },
        "requiredDocuments": [
            "Marksheet of Madhyamik/Higher Secondary/Graduation qualifying exam",
            "Income certificate issued by Joint BDO / Executive Officer / Municipality",
            "West Bengal Domicile proof (Ration card / Voter ID / Aadhaar)",
            "Institutional admission receipt"
        ],
        "applicationProcedure": [
            "Register on SVMCM portal (svmcm.wbhed.gov.in)",
            "Select directorate (DPI, DTE, DME, or School Education)",
            "Upload certified documents and submit to institutional verification desk"
        ],
        "applicationStartDate": "2025-09-10",
        "deadline": "2026-12-31",
        "officialUrl": "https://svmcm.wbhed.gov.in",
        "applicationUrl": "https://svmcm.wbhed.gov.in",
        "sourceUrl": "https://svmcm.wbhed.gov.in",
        "sourceName": "Govt of West Bengal Higher Education Dept",
        "sourceType": "state_portal",
        "tags": ["West Bengal", "SVMCM", "Merit-Cum-Means", "State Scholarship"]
    },
    {
        "name": "West Bengal Kanyashree Prakalpa (K3 for Postgraduate Girls)",
        "provider": "Department of Women & Child Development and Social Welfare, Govt of West Bengal",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit"],
        "description": "UN-awarded girls' education scheme providing ₹2,000 to ₹2,500 per month for unmarried female students of West Bengal pursuing regular Master's degrees.",
        "briefSummary": "₹24,000 to ₹30,000 per year for female graduate students in West Bengal with no family income ceiling.",
        "country": "India",
        "state": "West Bengal",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 30000,
        "formattedAmount": "₹24,000 to ₹30,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "₹2,500/month for PG Science; ₹2,000/month for PG Arts/Commerce",
        "benefits": [
            "₹2,500 per month for M.Sc students",
            "₹2,000 per month for M.A and M.Com students",
            "No family income bar for female scholars who passed out of K1/K2"
        ],
        "educationLevels": ["postgraduate"],
        "coursesAndStreams": ["Master of Arts", "Master of Science", "Master of Commerce"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["postgraduate"],
            "minPercentage": 45,
            "gender": "female",
            "eligibleStates": ["West Bengal"],
            "eligibleDomicile": ["West Bengal"],
            "specialConditions": ["Unmarried female student enrolled in regular post-graduation in West Bengal"]
        },
        "requiredDocuments": [
            "Undergraduate degree marksheet (min 45% marks)",
            "Kanyashree ID (from school K1/K2 registration) or university admission card",
            "Unmarried declaration endorsed by local panchayat / municipality",
            "Bank passbook copy"
        ],
        "applicationProcedure": [
            "Apply via SVMCM K3 portal tab (svmcm.wbhed.gov.in)",
            "University department head authenticates admission and marital status"
        ],
        "applicationStartDate": "2025-09-10",
        "deadline": "2026-12-31",
        "officialUrl": "https://wbkanyashree.gov.in",
        "applicationUrl": "https://svmcm.wbhed.gov.in",
        "sourceUrl": "https://wbkanyashree.gov.in",
        "sourceName": "Govt of West Bengal Kanyashree",
        "sourceType": "state_portal",
        "tags": ["West Bengal", "Kanyashree", "K3", "Girls Education", "Postgraduate"]
    },
    {
        "name": "Uttar Pradesh Dashmottar Scholarship & Fee Reimbursement Scheme",
        "provider": "Social Welfare & Backward Classes Dept, Government of Uttar Pradesh",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Comprehensive fee reimbursement and monthly maintenance support for students enrolled in post-matriculation courses across Uttar Pradesh colleges and universities.",
        "briefSummary": "100% college fee reimbursement + maintenance allowance for General, OBC, SC, ST and Minority students in UP.",
        "country": "India",
        "state": "Uttar Pradesh",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 50000,
        "formattedAmount": "Full Tuition + ₹6,000 - ₹12,000 Maintenance",
        "awardFrequency": "annual",
        "awardCoverage": "Non-refundable tuition fee reimbursement + monthly stipend",
        "benefits": [
            "Full tuition fee reimbursement remitted via PFMS directly to student account",
            "Covers professional courses: B.Tech, MBBS, B.Ed, MBA, Polytechnic, BA, B.Sc",
            "Over 40 lakh students funded each academic cycle across UP"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma", "phd"],
        "coursesAndStreams": ["Engineering", "Medical", "Management", "Law", "Arts", "Science", "Commerce", "Polytechnic"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma", "phd"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Uttar Pradesh"],
            "eligibleDomicile": ["Uttar Pradesh"],
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "Minority"]
        },
        "requiredDocuments": [
            "UP Domicile / Niwas Praman Patra",
            "Valid Revenue Board Income Certificate (ceiling ₹2L for Gen/OBC; ₹2.5L for SC/ST)",
            "Caste Certificate (Jati Praman Patra)",
            "Previous exam marksheet and fee receipt with counseling roll number"
        ],
        "applicationProcedure": [
            "Register on UP Scholarship Portal (scholarships.up.gov.in)",
            "Complete online registration and link Aadhaar with OTP",
            "Print final application and submit hard copy with documents to college within 7 days",
            "District Scholarship Committee verifies and approves for treasury DBT release"
        ],
        "applicationStartDate": "2025-07-01",
        "deadline": "2026-12-15",
        "officialUrl": "https://scholarship.up.gov.in",
        "applicationUrl": "https://scholarship.up.gov.in",
        "sourceUrl": "https://scholarship.up.gov.in",
        "sourceName": "Uttar Pradesh Scholarship Portal (SAMS)",
        "sourceType": "state_portal",
        "tags": ["Uttar Pradesh", "UP Scholarship", "Dashmottar", "Fee Reimbursement"]
    },
    {
        "name": "Tamil Nadu Pudhumai Penn Scheme (Moovalur Ramamirtham Ammaiyar)",
        "provider": "Social Welfare & Women Empowerment Dept, Government of Tamil Nadu",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Monthly financial grant of ₹1,000 directly transferred to girl students who studied classes 6 to 12 in Government Schools of Tamil Nadu and pursue higher education.",
        "briefSummary": "₹12,000 per year (₹1,000/month) for girl students from Tamil Nadu government schools pursuing higher studies.",
        "country": "India",
        "state": "Tamil Nadu",
        "fundingType": "stipend",
        "currency": "INR",
        "amount": 12000,
        "formattedAmount": "₹12,000 / year (₹1,000/month)",
        "awardFrequency": "monthly",
        "awardCoverage": "Monthly direct benefit transfer of ₹1,000 until completion of degree",
        "benefits": [
            "₹1,000 deposited every month into student's bank account",
            "Covers general degrees, engineering, medicine, agriculture, and diploma",
            "No family income restriction"
        ],
        "educationLevels": ["undergraduate", "diploma"],
        "coursesAndStreams": ["All recognized undergraduate degrees and polytechnic diplomas"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "diploma"],
            "gender": "female",
            "eligibleStates": ["Tamil Nadu"],
            "eligibleDomicile": ["Tamil Nadu"],
            "specialConditions": ["Must have studied Classes 6 to 12 in Tamil Nadu Government Schools"]
        },
        "requiredDocuments": [
            "EMIS School Transfer Certificate verifying Classes 6-12 in Govt School",
            "College admission ID card and Bonafide certificate",
            "Aadhaar card and bank account details"
        ],
        "applicationProcedure": [
            "College nodal officer registers student through Penkalvi (Pudhumai Penn) portal",
            "Automated EMIS verification of government school attendance"
        ],
        "applicationStartDate": "2025-07-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://www.penkalvi.tn.gov.in",
        "applicationUrl": "https://www.penkalvi.tn.gov.in",
        "sourceUrl": "https://www.penkalvi.tn.gov.in",
        "sourceName": "Government of Tamil Nadu",
        "sourceType": "state_portal",
        "tags": ["Tamil Nadu", "Pudhumai Penn", "Girls Higher Education", "DBT"]
    },
    {
        "name": "Andhra Pradesh Jagananna Vidya Deevena (Full Fee Reimbursement)",
        "provider": "Department of Higher Education, Government of Andhra Pradesh",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "100% full fee reimbursement provided directly to the bank accounts of mothers of poor and backward class students pursuing polytechnic, ITI, degree, and engineering courses.",
        "briefSummary": "100% full college tuition fee reimbursement for students belonging to low-income families in AP.",
        "country": "India",
        "state": "Andhra Pradesh",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 55000,
        "formattedAmount": "100% Tuition Fee Reimbursement",
        "awardFrequency": "annual",
        "awardCoverage": "100% institutional tuition fee disbursed quarterly to student's mother's account",
        "benefits": [
            "Complete tuition fee waiver across engineering, medicine, pharmacy, MBA, and degree courses",
            "Combined with Jagananna Vasathi Deevena for boarding/hostel allowance up to ₹20,000/yr"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma"],
        "coursesAndStreams": ["Engineering", "Medicine", "Degree", "Polytechnic", "Pharmacy", "MBA", "MCA"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Andhra Pradesh"],
            "eligibleDomicile": ["Andhra Pradesh"],
            "gender": "all",
            "socialCategories": ["SC", "ST", "OBC", "EWS", "Minority"]
        },
        "requiredDocuments": [
            "Rice Card (BPL card) or Tahsildar Income Certificate (≤ ₹2.5 Lakhs)",
            "MeeSeva Caste Certificate",
            "Mother's Aadhaar linked bank account details",
            "Minimum 75% college biometric attendance record"
        ],
        "applicationProcedure": [
            "Registration via Jnanabhumi AP portal or Village/Ward Secretariat desk",
            "Quarterly attendance audit before installment release"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-12-31",
        "officialUrl": "https://jnanabhumi.ap.gov.in",
        "applicationUrl": "https://jnanabhumi.ap.gov.in",
        "sourceUrl": "https://jnanabhumi.ap.gov.in",
        "sourceName": "Andhra Pradesh Jnanabhumi Portal",
        "sourceType": "state_portal",
        "tags": ["Andhra Pradesh", "Jnanabhumi", "Vidya Deevena", "Fee Waiver"]
    },
    {
        "name": "Telangana ePASS Post-Matric Scholarship & Fee Reimbursement",
        "provider": "Scheduled Castes Development & BC Welfare Dept, Govt of Telangana",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Comprehensive Post-Matric Scholarship Scheme providing full tuition fee reimbursement (RTF) and maintenance charges (MTF) for eligible students of Telangana.",
        "briefSummary": "Complete tuition reimbursement and monthly maintenance for Telangana SC/ST/BC/EBC/Minority students.",
        "country": "India",
        "state": "Telangana",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 40000,
        "formattedAmount": "Full Tuition + ₹1,000 - ₹2,000 / month MTF",
        "awardFrequency": "annual",
        "awardCoverage": "100% Tuition Fee Reimbursement + Monthly Maintenance Fee (MTF)",
        "benefits": [
            "Covers actual college fee approved by Fee Regulatory Committee",
            "Maintenance allowance for college attached hostels and day scholars"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma", "phd"],
        "coursesAndStreams": ["Engineering", "Medicine", "Management", "Science", "Commerce", "Arts"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma", "phd"],
            "minPercentage": 50,
            "maxAnnualIncome": 200000,
            "eligibleStates": ["Telangana"],
            "eligibleDomicile": ["Telangana"],
            "gender": "all",
            "socialCategories": ["SC", "ST", "OBC", "EWS", "Minority"]
        },
        "requiredDocuments": [
            "MeeSeva Income Certificate (income ≤ ₹2 Lakhs in urban; ≤ ₹1.5L in rural)",
            "Caste Certificate issued by Tahsildar",
            "Allotment order through TS EAMCET / ICET / ECET counseling",
            "Aadhaar card with NPCI mapper"
        ],
        "applicationProcedure": [
            "Register on Telangana ePASS portal (telanganaepass.cgg.gov.in)",
            "Upload verified documents and submit hard copy to college nodal officer"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-12-31",
        "officialUrl": "https://telanganaepass.cgg.gov.in",
        "applicationUrl": "https://telanganaepass.cgg.gov.in",
        "sourceUrl": "https://telanganaepass.cgg.gov.in",
        "sourceName": "Telangana ePASS Official Portal",
        "sourceType": "state_portal",
        "tags": ["Telangana", "ePASS", "RTF", "MTF", "State Scholarship"]
    },
    {
        "name": "Gujarat Mukhyamantri Yuva Swavalamban Yojana (MYSY)",
        "provider": "Education Department, Government of Gujarat",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit", "need"],
        "description": "50% tuition fee assistance (up to ₹2,00,000/yr for Medical, ₹50,000/yr for Engineering), hostel grant of ₹1,200/mo, and book/equipment allowance of ₹10,000.",
        "briefSummary": "Prestigious Gujarat state scheme offering up to ₹2 Lakhs tuition waiver plus hostel grant for top scorers.",
        "country": "India",
        "state": "Gujarat",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 75000,
        "formattedAmount": "Up to ₹2,00,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "50% tuition fees + ₹1,200/mo hostel allowance + ₹5,000 - ₹10,000 book/equipment grant",
        "benefits": [
            "Medical (MBBS/BDS): 50% tuition assistance up to ₹2,00,000 per year",
            "Engineering & Professional Courses: 50% tuition assistance up to ₹50,000 per year",
            "Degree Courses (B.Sc, B.Com, B.A): Up to ₹10,000 per year",
            "Hostel and food assistance of ₹12,000 per year for students staying away from home"
        ],
        "educationLevels": ["undergraduate", "diploma"],
        "coursesAndStreams": ["Medical", "Dental", "Engineering", "Pharmacy", "Architecture", "Diploma", "General Degree"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "diploma"],
            "minPercentage": 80,
            "maxAnnualIncome": 600000,
            "eligibleStates": ["Gujarat"],
            "eligibleDomicile": ["Gujarat"],
            "gender": "all"
        },
        "requiredDocuments": [
            "Class 10th or 12th board marksheet (minimum 80 percentile)",
            "Competent Mamlatdar / TDO Income Certificate (≤ ₹6.00 Lakhs)",
            "Admission letter in first year of diploma/degree program",
            "Hostel admission certificate (for hostel allowance)"
        ],
        "applicationProcedure": [
            "Register on MYSY portal (mysy.guj.nic.in)",
            "Submit online application and take printout",
            "Document verification at designated Help Centers across Gujarat"
        ],
        "applicationStartDate": "2025-07-15",
        "deadline": "2026-12-15",
        "officialUrl": "https://mysy.guj.nic.in",
        "applicationUrl": "https://mysy.guj.nic.in",
        "sourceUrl": "https://mysy.guj.nic.in",
        "sourceName": "Government of Gujarat Education Dept",
        "sourceType": "state_portal",
        "tags": ["Gujarat", "MYSY", "Merit-Cum-Means", "Engineering", "Medical"]
    },
    {
        "name": "Rajasthan Chief Minister Higher Education Scholarship Scheme",
        "provider": "Department of College Education, Government of Rajasthan",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit", "need"],
        "description": "Financial assistance of ₹5,000 per year (₹10,000 per year for specially-abled) to meritorious Class 12 pass-outs belonging to low-income families pursuing degree education.",
        "briefSummary": "Rajasthan state merit assistance granting ₹5,000 to ₹10,000 annually for top 1 lakh board scorers.",
        "country": "India",
        "state": "Rajasthan",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 10000,
        "formattedAmount": "₹5,000 to ₹10,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Annual educational assistance for up to 5 years (UG + PG)",
        "benefits": [
            "₹500 per month (for 10 months, total ₹5,000/year) for general meritorious students",
            "₹1,000 per month (total ₹10,000/year) for students with disability",
            "Renewable for up to five years of higher education"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["All recognized regular undergraduate and postgraduate disciplines"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate"],
            "minPercentage": 60,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Rajasthan"],
            "eligibleDomicile": ["Rajasthan"],
            "gender": "all",
            "specialConditions": ["Must figure in the first 1,00,000 merit list of RBSE Board Exam"]
        },
        "requiredDocuments": [
            "Rajasthan Mool Niwas (Domicile) Certificate",
            "RBSE Board marksheet (minimum 60% marks and in top 1 lakh list)",
            "Income certificate showing family income ≤ ₹2.50 Lakhs",
            "Jan Aadhaar card and bank account details"
        ],
        "applicationProcedure": [
            "Apply online through Rajasthan Single Sign-On (SSO) Portal under Scholarship CE app",
            "Verified by College Principal and forwarded to District Nodal Officer"
        ],
        "applicationStartDate": "2025-07-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://hte.rajasthan.gov.in",
        "applicationUrl": "https://sso.rajasthan.gov.in",
        "sourceUrl": "https://hte.rajasthan.gov.in",
        "sourceName": "Rajasthan Higher Education Portal",
        "sourceType": "state_portal",
        "tags": ["Rajasthan", "Higher Education", "SSO", "Merit Assistance"]
    },
    {
        "name": "Bihar Post-Matric Scholarship (PMS Online) for SC, ST, BC & EBC",
        "provider": "Backward & Extremely Backward Classes Welfare Dept, Govt of Bihar",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "State scholarship portal for Bihar domiciled students studying in recognized institutions within Bihar or across India.",
        "briefSummary": "Bihar state scholarship reimbursing non-refundable college fees and maintenance allowance.",
        "country": "India",
        "state": "Bihar",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 35000,
        "formattedAmount": "Up to ₹15,000 to ₹50,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Compulsory non-refundable fee + monthly maintenance grant",
        "benefits": [
            "Full tuition fee reimbursement for government colleges; approved ceiling for private colleges",
            "Maintenance allowance of up to ₹1,200 per month"
        ],
        "educationLevels": ["high_school", "undergraduate", "postgraduate", "diploma"],
        "coursesAndStreams": ["Inter", "Graduation", "Post Graduation", "Engineering", "Medical", "ITI", "Polytechnic"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["high_school", "undergraduate", "postgraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 300000,
            "eligibleStates": ["Bihar"],
            "eligibleDomicile": ["Bihar"],
            "gender": "all",
            "socialCategories": ["SC", "ST", "OBC", "EWS"]
        },
        "requiredDocuments": [
            "Bihar Domicile (Awasiya) Certificate",
            "Caste Certificate (Jati Praman Patra)",
            "Income Certificate (Aay Praman Patra showing income ≤ ₹3 Lakhs)",
            "College Bonafide certificate and fee structure"
        ],
        "applicationProcedure": [
            "Register on PMS Online Bihar portal (pmsonline.bih.nic.in)",
            "Submit online application with scanned receipts and Bonafide"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-12-15",
        "officialUrl": "https://pmsonline.bih.nic.in",
        "applicationUrl": "https://pmsonline.bih.nic.in",
        "sourceUrl": "https://pmsonline.bih.nic.in",
        "sourceName": "Government of Bihar PMS Online",
        "sourceType": "state_portal",
        "tags": ["Bihar", "PMS Online", "Post-Matric", "BC", "EBC", "SC", "ST"]
    },
    {
        "name": "Odisha Medhabruti Merit-cum-Means Scholarship",
        "provider": "Department of Higher Education, Government of Odisha",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit", "need"],
        "description": "Financial assistance of ₹10,000 per year for UG degree students and ₹20,000 per year for technical & professional students across Odisha.",
        "briefSummary": "Odisha state scholarship awarding ₹10,000 to ₹20,000 per year for general, technical, and professional students.",
        "country": "India",
        "state": "Odisha",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 20000,
        "formattedAmount": "₹10,000 to ₹20,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Direct cash benefit transferred to bank accounts of meritorious scholars",
        "benefits": [
            "Junior Merit: ₹3,000/yr for Class 11-12",
            "Senior Merit: ₹10,000/yr for BA, B.Sc, B.Com, BCA, BBA",
            "Technical/Professional Merit: ₹20,000/yr for Engineering, Medical, Agriculture, MBA, MCA",
            "Special Merit for Girls"
        ],
        "educationLevels": ["high_school", "undergraduate", "postgraduate"],
        "coursesAndStreams": ["Arts", "Science", "Commerce", "Engineering", "Medicine", "Agriculture", "Management"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["high_school", "undergraduate", "postgraduate"],
            "minPercentage": 60,
            "maxAnnualIncome": 600000,
            "eligibleStates": ["Odisha"],
            "eligibleDomicile": ["Odisha"],
            "gender": "all"
        },
        "requiredDocuments": [
            "Resident Certificate issued by Revenue Officer",
            "Annual Family Income Certificate (ceiling ₹6.00 Lakhs)",
            "Previous qualifying examination marksheet (min 60% marks)",
            "Aadhaar card linked with active bank account"
        ],
        "applicationProcedure": [
            "Register on Odisha State Scholarship Portal (scholarship.odisha.gov.in)",
            "Select Medhabruti scheme and upload verified marksheets",
            "Institutional approval by College Nodal Officer"
        ],
        "applicationStartDate": "2025-08-15",
        "deadline": "2026-11-30",
        "officialUrl": "https://scholarship.odisha.gov.in",
        "applicationUrl": "https://scholarship.odisha.gov.in",
        "sourceUrl": "https://scholarship.odisha.gov.in",
        "sourceName": "Odisha State Scholarship Portal",
        "sourceType": "state_portal",
        "tags": ["Odisha", "Medhabruti", "Merit-Cum-Means", "Technical", "PRERANA"]
    },
    {
        "name": "Kerala Aspire Scholarship for Postgraduate Students",
        "provider": "Directorate of Collegiate Education (DCE), Government of Kerala",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "research", "merit"],
        "description": "Fellowship to encourage research projects of post-graduate students in universities, national institutes, and prestigious research labs.",
        "briefSummary": "Kerala government research stipend of ₹8,000 to ₹10,000/month for PG students doing research internships.",
        "country": "India",
        "state": "Kerala",
        "fundingType": "stipend",
        "currency": "INR",
        "amount": 30000,
        "formattedAmount": "₹8,000 to ₹10,000 / month",
        "awardFrequency": "monthly",
        "awardCoverage": "Monthly fellowship of ₹8,000 for research within Kerala; ₹10,000/mo for research outside Kerala",
        "benefits": [
            "Encourages high-impact master's thesis work",
            "Covers travel and research expenses at IISc, IITs, TIFR, or national labs"
        ],
        "educationLevels": ["postgraduate"],
        "coursesAndStreams": ["All Master's degree disciplines in Science, Arts, and Commerce"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["postgraduate"],
            "minPercentage": 60,
            "eligibleStates": ["Kerala"],
            "eligibleDomicile": ["Kerala"],
            "gender": "all",
            "specialConditions": ["Undertaking approved research project in a recognized university or research institution"]
        },
        "requiredDocuments": [
            "Kerala Domicile Certificate",
            "Recommendation letter from research guide and PG department head",
            "Project approval letter from host institution",
            "Degree marksheets"
        ],
        "applicationProcedure": [
            "Apply via DCE Kerala Scholarship portal (dcescholarship.kerala.gov.in)",
            "University scrutinizes project proposal and sanctions stipend"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-25",
        "officialUrl": "https://dcescholarship.kerala.gov.in",
        "applicationUrl": "https://dcescholarship.kerala.gov.in",
        "sourceUrl": "https://dcescholarship.kerala.gov.in",
        "sourceName": "Kerala Directorate of Collegiate Education",
        "sourceType": "state_portal",
        "tags": ["Kerala", "Aspire", "PG Research", "DCE", "Fellowship"]
    }
]
