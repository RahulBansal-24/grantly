"""
Indian Central Government Scholarship Schemes (NSP, AICTE, UGC, DST, CSIR, ICMR, ICAR, etc.)
"""

CENTRAL_SCHEMES = [
    {
        "name": "Central Sector Scheme of Scholarship for College and University Students (PM-USP)",
        "provider": "Department of Higher Education, Ministry of Education, Govt of India",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "merit", "need"],
        "description": "Financial assistance to meritorious students from low-income families to meet day-to-day expenses while pursuing graduate and professional studies.",
        "briefSummary": "Central government merit-cum-means scholarship for top-percentile 12th passouts pursuing degree programs.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 20000,
        "formattedAmount": "₹12,000 to ₹20,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "₹12,000/yr for graduation (first 3 years) and ₹20,000/yr for post-graduation",
        "benefits": [
            "₹12,000 per annum for the first 3 years of Undergraduate studies",
            "₹20,000 per annum for 4th & 5th year / Postgraduate courses",
            "Direct Benefit Transfer (DBT) via PFMS to Aadhaar-seeded bank account",
            "Renewable every year subject to 50% marks and minimum 75% attendance"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["Engineering", "Medical", "Arts", "Science", "Commerce", "Law", "Management"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 80,
            "maxAnnualIncome": 450000,
            "gender": "all",
            "socialCategories": ["Any"],
            "eligibleStates": ["All India"],
            "institutionTypes": ["Government", "Private", "Aided"]
        },
        "requiredDocuments": [
            "Class 12th Board Marksheet",
            "Income Certificate issued by competent revenue authority (≤ ₹4.5 Lakh)",
            "Bonafide Student Certificate from College / University",
            "Bank Account passbook copy (Aadhaar linked)",
            "Domicile Certificate"
        ],
        "applicationProcedure": [
            "Register on National Scholarship Portal (NSP) with One-Time Registration (OTR)",
            "Fill in academic credentials, admission details and family income",
            "Upload institutional Bonafide certificate and required revenue documents",
            "Institute nodal officer conducts verification",
            "State Nodal Officer conducts 2nd tier verification before DBT sanction"
        ],
        "applicationStartDate": "2025-07-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://scholarships.gov.in",
        "applicationUrl": "https://scholarships.gov.in/fresh",
        "sourceUrl": "https://scholarships.gov.in",
        "sourceName": "National Scholarship Portal (NSP)",
        "sourceType": "government_portal",
        "tags": ["NSP", "Ministry of Education", "Central Sector", "Merit-Cum-Means"]
    },
    {
        "name": "AICTE Pragati Scholarship Scheme for Girl Students (Degree & Diploma)",
        "provider": "All India Council for Technical Education (AICTE)",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "stem", "need"],
        "description": "Financial support of ₹50,000 per annum to aid female students pursuing technical education in AICTE-approved institutions.",
        "briefSummary": "AICTE initiative awarding ₹50,000 per annum to young women pursuing technical degrees or diplomas.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 50000,
        "formattedAmount": "₹50,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition fees, equipment, software, books and laptop purchase assistance",
        "benefits": [
            "₹50,000 lump sum per annum for every year of technical course duration",
            "Covers college fee reimbursement and learning equipment contingency",
            "10,000 scholarships disbursed nationwide per academic year"
        ],
        "educationLevels": ["undergraduate", "diploma"],
        "coursesAndStreams": ["Engineering & Technology", "Pharmacy", "Architecture", "Applied Arts", "Computer Applications"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "diploma"],
            "minPercentage": 60,
            "maxAnnualIncome": 800000,
            "gender": "female",
            "institutionTypes": ["Government", "Private", "Aided"],
            "specialConditions": ["Admitted in AICTE approved technical institution in 1st year or 2nd year via lateral entry"]
        },
        "requiredDocuments": [
            "Mark sheet of qualifying exam (10th / 12th / ITI)",
            "Tuition fee receipt of current academic session",
            "Valid Annual Family Income Certificate (≤ ₹8 Lakh)",
            "AICTE institute admission letter & allotment order",
            "Signed declaration affirming not more than 2 daughters are availing scheme"
        ],
        "applicationProcedure": [
            "Register on National Scholarship Portal (NSP) with Aadhaar OTR",
            "Choose AICTE Pragati Scholarship under Central Schemes tab",
            "Verify technical college AICTE approval code and course registration",
            "Submit institutional bonafide endorsed by Head of Institution"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-12-15",
        "officialUrl": "https://www.aicte-india.org/schemes/students-development-schemes/pragati",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://scholarships.gov.in",
        "sourceName": "National Scholarship Portal (NSP)",
        "sourceType": "regulatory_authority",
        "tags": ["AICTE", "Women in STEM", "Technical Education", "Engineering"]
    },
    {
        "name": "AICTE Saksham Scholarship Scheme for Specially-Abled Students",
        "provider": "All India Council for Technical Education (AICTE)",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "stem", "need"],
        "description": "Financial assistance of ₹50,000 per annum to specially-abled students with ≥40% disability pursuing technical degree or diploma courses.",
        "briefSummary": "₹50,000 per year dedicated financial support for students with ≥40% disability in technical programs.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 50000,
        "formattedAmount": "₹50,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition fees, assistive devices, software, books and study equipment",
        "benefits": [
            "₹50,000 per year assistance for college fee reimbursement and learning equipment",
            "Covers purchase of assistive devices, braille displays, and mobility apparatus",
            "All eligible applicants fulfilling criteria are accommodated without numerical cap"
        ],
        "educationLevels": ["undergraduate", "diploma"],
        "coursesAndStreams": ["Engineering & Technology", "Pharmacy", "Architecture", "Applied Arts", "Design"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 800000,
            "disabilityOnly": True,
            "minDisabilityPercentage": 40,
            "gender": "all",
            "eligibleStates": ["All India"]
        },
        "requiredDocuments": [
            "Disability Certificate / UDID card issued by competent medical authority (≥40% benchmark)",
            "Class 10th / 12th board marksheet",
            "Tuition fee receipt of current academic session",
            "Income Certificate (ceiling ₹8 Lakhs/year)",
            "College bonafide signed by Principal"
        ],
        "applicationProcedure": [
            "Apply online on National Scholarship Portal (NSP)",
            "Upload UDID verification barcode / scanned medical board certificate",
            "College nodal officer confirms enrollment in AICTE-approved degree"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-12-15",
        "officialUrl": "https://www.aicte-india.org/schemes/students-development-schemes/saksham",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://scholarships.gov.in",
        "sourceName": "AICTE Official Schemes Portal",
        "sourceType": "regulatory_authority",
        "tags": ["AICTE", "Saksham", "PwD", "Disability Support", "STEM"]
    },
    {
        "name": "AICTE Swanath Scholarship Scheme for Orphans and COVID-Affected Wards",
        "provider": "All India Council for Technical Education (AICTE)",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "need"],
        "description": "Financial assistance of ₹50,000 per year to provide financial support to orphans, wards of parents who died of COVID-19, and wards of Armed Forces martyrs.",
        "briefSummary": "₹50,000 per year for orphaned and COVID-affected children pursuing technical education.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 50000,
        "formattedAmount": "₹50,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition fees, hostel, boarding, and book allowances",
        "benefits": [
            "₹50,000 per year assistance for technical degree or diploma courses",
            "2,000 scholarships available annually (1,000 degree + 1,000 diploma)",
            "Covers orphans and children of martyrs"
        ],
        "educationLevels": ["undergraduate", "diploma"],
        "coursesAndStreams": ["Engineering", "Pharmacy", "Architecture", "Design"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 800000,
            "gender": "all",
            "specialConditions": ["Orphan child OR either/both parents died due to COVID-19 OR ward of Armed Forces martyr"]
        },
        "requiredDocuments": [
            "Death Certificate of parents (or COVID-19 death proof)",
            "Orphan certificate issued by District Magistrate / Tahsildar",
            "Bonafide certificate of AICTE institute admission",
            "Marksheet of previous qualifying exam"
        ],
        "applicationProcedure": [
            "Apply via National Scholarship Portal under AICTE Swanath Scheme",
            "Submit verified death certificates and orphan certificates",
            "Verification by Institute Principal and State Nodal Desk"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-12-15",
        "officialUrl": "https://www.aicte-india.org/schemes/students-development-schemes/swanath",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://scholarships.gov.in",
        "sourceName": "National Scholarship Portal",
        "sourceType": "regulatory_authority",
        "tags": ["AICTE", "Swanath", "Orphan Support", "COVID Assistance"]
    },
    {
        "name": "Prime Minister's Research Fellowship (PMRF)",
        "provider": "Ministry of Education, Govt of India",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "research", "merit", "stem"],
        "description": "Scheme designed for improving the quality of research in higher educational institutions in India, offering attractive fellowships to doctoral scholars in IITs, IISc, IISERs, and central universities.",
        "briefSummary": "India's highest research fellowship offering ₹70,000-₹80,000/month plus ₹2 Lakh annual research grant.",
        "country": "India",
        "state": "All India",
        "fundingType": "stipend",
        "currency": "INR",
        "amount": 960000,
        "formattedAmount": "₹70,000 - ₹80,000 / month + ₹2L Grant",
        "awardFrequency": "monthly",
        "awardCoverage": "Stipend of ₹70,000/mo (years 1-2), ₹75,000/mo (year 3), ₹80,000/mo (years 4-5) plus ₹2,00,000/yr research grant",
        "benefits": [
            "₹70,000 per month for the first two years of PhD",
            "₹75,000 per month for the 3rd year",
            "₹80,000 per month for 4th and 5th years",
            "Contingency research grant of ₹2,00,000 per annum for five years (Total ₹10 Lakhs)"
        ],
        "educationLevels": ["phd"],
        "coursesAndStreams": ["Engineering", "Technology", "Science", "Mathematics", "Computer Science"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["phd"],
            "minPercentage": 75,
            "minCgpa": 8.0,
            "gender": "all",
            "eligibleStates": ["All India"],
            "institutionTypes": ["Government"],
            "specialConditions": ["Admitted to PhD program in PMRF granting institution (IITs, IISc, IISERs, select Central Universities)"]
        },
        "requiredDocuments": [
            "Detailed research proposal and abstract",
            "Qualifying degree transcripts (minimum 8.0 CGPA on a 10-point scale or 75% marks)",
            "Recommendation letters from department head and research supervisor",
            "GATE / JAM scorecard (if applicable)"
        ],
        "applicationProcedure": [
            "Nominations submitted through the host PMRF granting institution",
            "National discipline review committees review written research proposals",
            "Shortlisted candidates present project proposals before National Steering Committee"
        ],
        "applicationStartDate": "2025-05-01",
        "deadline": "2026-11-20",
        "officialUrl": "https://www.pmrf.in",
        "applicationUrl": "https://www.pmrf.in",
        "sourceUrl": "https://www.pmrf.in",
        "sourceName": "Ministry of Education & IIT Council",
        "sourceType": "government_portal",
        "tags": ["PMRF", "PhD Fellowship", "IIT", "IISc", "Research"]
    },
    {
        "name": "INSPIRE Scholarship for Higher Education (SHE)",
        "provider": "Department of Science & Technology (DST), Govt of India",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "stem", "merit"],
        "description": "Innovation in Science Pursuit for Inspired Research (INSPIRE) scheme to attract youth to the study of basic and natural sciences at bachelor's and master's levels.",
        "briefSummary": "DST scholarship offering ₹80,000/year for top 1% Class 12 board scorers pursuing Natural & Basic Sciences.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 80000,
        "formattedAmount": "₹80,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "₹60,000/yr scholarship + ₹20,000/yr mentorship project grant",
        "benefits": [
            "₹5,000 per month (₹60,000 annually) direct cash assistance for 5 years",
            "₹20,000 annual mentorship grant for summer research projects at national laboratories",
            "Total benefit value of ₹4,00,000 over 5 years (B.Sc / M.Sc integrated)"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["Physics", "Chemistry", "Mathematics", "Biology", "Statistics", "Geology", "Astrophysics"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate"],
            "minPercentage": 85,
            "minAge": 17,
            "maxAge": 22,
            "gender": "all",
            "eligibleStates": ["All India"],
            "specialConditions": ["Within top 1% in Class 12th board exams OR ranked in top 10,000 in JEE/NEET and pursuing B.Sc / BS-MS"]
        },
        "requiredDocuments": [
            "Class 12th marksheet indicating top 1% cutoff clearance",
            "Endorsement Certificate signed by Head of College/Institute",
            "Aadhaar Card",
            "SBI Bank Account passbook"
        ],
        "applicationProcedure": [
            "Register online on DST INSPIRE web portal (online-inspire.gov.in)",
            "Upload marksheet, eligibility advisory note, and college bonafide",
            "Selected scholars receive direct DBT disbursement through PFMS"
        ],
        "applicationStartDate": "2025-09-01",
        "deadline": "2026-12-31",
        "officialUrl": "https://online-inspire.gov.in",
        "applicationUrl": "https://online-inspire.gov.in",
        "sourceUrl": "https://dst.gov.in",
        "sourceName": "Department of Science and Technology (DST)",
        "sourceType": "government_research_council",
        "tags": ["DST", "INSPIRE", "Basic Sciences", "Research", "SHE"]
    },
    {
        "name": "Post Matric Scholarships Scheme for Minorities",
        "provider": "Ministry of Minority Affairs, Govt of India",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "minority", "need"],
        "description": "Centrally sponsored scholarship scheme to award scholarships to meritorious students belonging to economically weaker sections of minority communities.",
        "briefSummary": "Central scholarship providing admission, course fee and maintenance allowance for minority students in class 11 to PhD.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 15000,
        "formattedAmount": "₹6,000 to ₹15,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Admission and tuition fees reimbursement up to ₹10,000/yr plus maintenance allowance up to ₹1,200/mo",
        "benefits": [
            "Actual course fee reimbursed up to ceiling limits",
            "Hostel maintenance allowance of ₹1,200/month; Day scholar allowance of ₹600/month",
            "30% of total scholarships earmarked for girl students"
        ],
        "educationLevels": ["high_school", "diploma", "undergraduate", "postgraduate", "phd"],
        "coursesAndStreams": ["All recognized higher secondary, degree and post-graduate disciplines"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["high_school", "diploma", "undergraduate", "postgraduate", "phd"],
            "minPercentage": 50,
            "maxAnnualIncome": 200000,
            "socialCategories": ["Minority"],
            "gender": "all",
            "eligibleStates": ["All India"]
        },
        "requiredDocuments": [
            "Minority community self-declaration certificate (Muslim, Christian, Sikh, Buddhist, Jain, Parsi)",
            "Annual family income certificate (≤ ₹2 Lakhs)",
            "Previous qualifying examination marksheet (min 50% marks)",
            "Aadhaar linked bank account details"
        ],
        "applicationProcedure": [
            "Register on National Scholarship Portal (NSP)",
            "Complete student profile and upload minority declaration",
            "Verification by School/College Nodal Officer and District Minority Welfare Officer"
        ],
        "applicationStartDate": "2025-07-15",
        "deadline": "2026-11-30",
        "officialUrl": "https://www.minorityaffairs.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://scholarships.gov.in",
        "sourceName": "National Scholarship Portal",
        "sourceType": "government_portal",
        "tags": ["Minority Affairs", "NSP", "Post-Matric", "DBT"]
    },
    {
        "name": "Top Class Education Scheme for SC Students",
        "provider": "Ministry of Social Justice and Empowerment, Govt of India",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "need", "merit"],
        "description": "Recognizing and promoting quality education amongst Scheduled Caste (SC) students by providing full financial support for education in premier institutions (IITs, IIMs, NITs, AIIMS, NLUs).",
        "briefSummary": "Full tuition fee waiver, living expenses, book grant, and computer allowance for SC students in premier institutes.",
        "country": "India",
        "state": "All India",
        "fundingType": "fully_funded",
        "currency": "INR",
        "amount": 250000,
        "formattedAmount": "Full Tuition + ₹86,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Full non-refundable tuition fee + ₹3,000/mo living expenses + ₹5,000/yr books + ₹45,000 one-time computer grant",
        "benefits": [
            "100% tuition and institutional non-refundable fee paid directly to the institute",
            "Living expense allowance of ₹3,000 per month (₹36,000/year)",
            "Books and stationery grant of ₹5,000 per annum",
            "Latest computer / laptop allowance of ₹45,000 one-time"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["Engineering", "Medicine", "Law", "Management", "Design", "Aviation"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 50,
            "maxAnnualIncome": 800000,
            "socialCategories": ["SC"],
            "gender": "all",
            "eligibleStates": ["All India"],
            "specialConditions": ["Admitted to notified top-tier institutes (IITs, NITs, IIMs, AIIMS, NLUs, etc.)"]
        },
        "requiredDocuments": [
            "Caste Certificate issued by designated competent revenue officer",
            "Income Certificate (ceiling ₹8.00 Lakhs per annum)",
            "Admission letter and fee receipt of notified institution",
            "10th and 12th board marksheets"
        ],
        "applicationProcedure": [
            "Register on National Scholarship Portal (NSP)",
            "Select 'Top Class Education for SC' under Ministry of Social Justice",
            "Institution nodal desk approves verified admission and fee structure",
            "DBT remitted directly to college and student"
        ],
        "applicationStartDate": "2025-07-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://socialjustice.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://scholarships.gov.in",
        "sourceName": "Ministry of Social Justice & Empowerment",
        "sourceType": "government_portal",
        "tags": ["Top Class", "SC", "Social Justice", "NSP", "IIT", "IIM"]
    },
    {
        "name": "National Fellowship and Scholarship for Higher Education of ST Students",
        "provider": "Ministry of Tribal Affairs, Govt of India",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "research", "need"],
        "description": "Supports meritorious ST students to pursue higher studies such as M.Phil and PhD in Indian universities and graduation/post-graduation in identified premier institutions.",
        "briefSummary": "Full tuition fee and JRF/SRF stipend for Scheduled Tribe students pursuing doctoral research or professional degrees.",
        "country": "India",
        "state": "All India",
        "fundingType": "fully_funded",
        "currency": "INR",
        "amount": 420000,
        "formattedAmount": "Full Tuition + ₹31,000 - ₹35,000 / month",
        "awardFrequency": "monthly",
        "awardCoverage": "Full tuition fee reimbursement + monthly stipend (₹31,000/mo JRF, ₹35,000/mo SRF) + contingency grant",
        "benefits": [
            "Full tuition fee paid directly to the university",
            "Monthly fellowship: ₹31,000/mo for first 2 years; ₹35,000/mo for remaining period",
            "Contingency allowance up to ₹25,000/yr for science and ₹20,000/yr for humanities",
            "750 fresh fellowships awarded annually for PhD/M.Phil"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "phd"],
        "coursesAndStreams": ["All academic disciplines, STEM, Humanities, Social Sciences, Medicine, Engineering"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "phd"],
            "minPercentage": 50,
            "maxAnnualIncome": 600000,
            "socialCategories": ["ST"],
            "gender": "all",
            "eligibleStates": ["All India"]
        },
        "requiredDocuments": [
            "Scheduled Tribe (ST) certificate",
            "Valid annual family income certificate",
            "PhD registration / admission letter from recognized university",
            "Synopsis of research proposal and guide allocation letter"
        ],
        "applicationProcedure": [
            "Apply via National Scholarship Portal under Ministry of Tribal Affairs",
            "Upload research registration certificate and guide recommendation",
            "Scrutiny by Ministry of Tribal Affairs fellowship selection committee"
        ],
        "applicationStartDate": "2025-07-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://tribal.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://scholarships.gov.in",
        "sourceName": "Ministry of Tribal Affairs",
        "sourceType": "government_portal",
        "tags": ["Tribal Affairs", "ST", "Fellowship", "PhD", "NSP"]
    },
    {
        "name": "PG Indira Gandhi Scholarship for Single Girl Child",
        "provider": "University Grants Commission (UGC)",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "merit", "need"],
        "description": "UGC scheme to support higher education of single girl children by awarding fellowships for non-professional postgraduate degrees.",
        "briefSummary": "UGC fellowship granting ₹36,200/year to single girl children pursuing postgraduate master's degrees.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 36200,
        "formattedAmount": "₹36,200 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Monthly stipend of ₹3,100 disbursed for 10 months each academic year",
        "benefits": [
            "₹3,100 per month for 10 months each year for 2 years of Master's study",
            "No tuition fee deductions",
            "3,000 fresh girl scholars selected every academic cycle"
        ],
        "educationLevels": ["postgraduate"],
        "coursesAndStreams": ["Master of Arts (M.A)", "Master of Science (M.Sc)", "Master of Commerce (M.Com)"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["postgraduate"],
            "minAge": 19,
            "maxAge": 30,
            "gender": "female",
            "singleGirlChildOnly": True,
            "eligibleStates": ["All India"],
            "specialConditions": ["Must be only child / only girl child in family without brothers"]
        },
        "requiredDocuments": [
            "Affidavit on ₹100 stamp paper attested by First Class Magistrate / SDM affirming single girl child status",
            "Undergraduate degree marksheet and passing certificate",
            "Admission verification certificate in regular Master's program",
            "Aadhaar card"
        ],
        "applicationProcedure": [
            "Apply online through National Scholarship Portal under UGC Schemes tab",
            "Submit attested stamp paper affidavit to University registrar for portal e-verification"
        ],
        "applicationStartDate": "2025-07-15",
        "deadline": "2026-11-30",
        "officialUrl": "https://www.ugc.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://scholarships.gov.in",
        "sourceName": "University Grants Commission (UGC)",
        "sourceType": "regulatory_authority",
        "tags": ["UGC", "Single Girl Child", "Postgraduate", "Women Empowerment"]
    },
    {
        "name": "CSIR-UGC NET Junior Research Fellowship (JRF) in Sciences",
        "provider": "Council of Scientific and Industrial Research (CSIR) & UGC",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "research", "merit", "stem"],
        "description": "National level examination awarding fellowships to eligible candidates for research in chemical, earth, life, mathematical, and physical sciences.",
        "briefSummary": "Prestigious national fellowship offering ₹37,000/month + HRA + contingency for PhD scholars in Science & Technology.",
        "country": "India",
        "state": "All India",
        "fundingType": "stipend",
        "currency": "INR",
        "amount": 444000,
        "formattedAmount": "₹37,000 / month + HRA + Contingency",
        "awardFrequency": "monthly",
        "awardCoverage": "₹37,000/mo JRF (first 2 years) upgraded to ₹42,000/mo SRF (years 3-5) + 24% HRA + ₹20,000/yr contingency",
        "benefits": [
            "Monthly stipend of ₹37,000 for years 1-2; ₹42,000 for years 3-5",
            "House Rent Allowance (HRA) up to 27% as per city classification",
            "Annual contingency grant of ₹20,000 for books and research chemicals",
            "Recognized across all IITs, IISc, CSIR labs, and Central Universities"
        ],
        "educationLevels": ["phd"],
        "coursesAndStreams": ["Chemical Sciences", "Earth Sciences", "Life Sciences", "Mathematical Sciences", "Physical Sciences"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["phd", "postgraduate"],
            "minPercentage": 55,
            "maxAge": 28,
            "gender": "all",
            "eligibleStates": ["All India"],
            "specialConditions": ["Must qualify Joint CSIR-UGC NET exam with JRF rank"]
        },
        "requiredDocuments": [
            "M.Sc / BS-MS degree certificate with minimum 55% marks (50% for SC/ST/PwD)",
            "CSIR-UGC JRF Award Letter with valid roll number",
            "PhD joining report from recognized university / CSIR national laboratory"
        ],
        "applicationProcedure": [
            "Appear and qualify for Joint CSIR-UGC NET national examination conducted by NTA",
            "Enrol in PhD programme within two years of JRF award letter validity",
            "Submit joining report and HRA declaration through CSIR HRDG portal"
        ],
        "applicationStartDate": "2025-03-01",
        "deadline": "2026-06-30",
        "officialUrl": "https://csirhrdg.res.in",
        "applicationUrl": "https://csirnet.nta.ac.in",
        "sourceUrl": "https://csirhrdg.res.in",
        "sourceName": "CSIR Human Resource Development Group",
        "sourceType": "government_research_council",
        "tags": ["CSIR", "UGC", "JRF", "PhD Fellowship", "Science"]
    },
    {
        "name": "Ishan Uday Special Scholarship Scheme for North Eastern Region (NER)",
        "provider": "University Grants Commission (UGC) & Ministry of DoNER",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "need", "merit"],
        "description": "Special scheme to promote higher education and encourage children from North Eastern states to pursue general and professional undergraduate courses.",
        "briefSummary": "₹5,400 to ₹7,800 per month for North Eastern students pursuing general and professional undergraduate degrees.",
        "country": "India",
        "state": "North Eastern States",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 78000,
        "formattedAmount": "₹54,000 to ₹78,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "₹5,400/month for General Degree courses; ₹7,800/month for Technical and Professional courses",
        "benefits": [
            "₹5,400 per month for general degree programs (BA, B.Sc, B.Com)",
            "₹7,800 per month for professional / technical / medical degree courses",
            "10,000 fresh scholarships awarded every year exclusively to NE students"
        ],
        "educationLevels": ["undergraduate"],
        "coursesAndStreams": ["General Degree", "Engineering", "Medical", "Paramedical", "Law", "Agriculture"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate"],
            "minPercentage": 60,
            "maxAnnualIncome": 450000,
            "eligibleStates": ["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura"],
            "gender": "all"
        },
        "requiredDocuments": [
            "Domicile Certificate of any of the 8 North Eastern States",
            "Income certificate issued by competent authority (≤ ₹4.50 Lakhs)",
            "Class 12th board marksheet",
            "Admission letter in first year of regular degree program"
        ],
        "applicationProcedure": [
            "Register on National Scholarship Portal (NSP)",
            "Select 'Ishan Uday Special Scholarship for NER' under UGC tab",
            "Online verification by Head of Institution"
        ],
        "applicationStartDate": "2025-07-15",
        "deadline": "2026-11-30",
        "officialUrl": "https://www.ugc.gov.in/ner",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://scholarships.gov.in",
        "sourceName": "University Grants Commission (UGC)",
        "sourceType": "regulatory_authority",
        "tags": ["UGC", "Ishan Uday", "North East", "NER", "Assam", "Nagaland"]
    }
]
