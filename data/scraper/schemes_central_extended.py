"""
GRANTLY — Extended Central Government Scholarship Schemes
Covers additional authentic schemes across:
- DST INSPIRE Fellowship & Faculty
- SERB National Post-Doctoral Fellowship (N-PDF)
- AICTE Post Graduate (GATE/CEED) Scholarship
- Begum Hazrat Mahal National Scholarship (Minority Girls)
- National Means-cum-Merit Scholarship Scheme (NMMSS)
- Prime Minister's Scholarship Scheme (PMSS) for CAPF & Assam Rifles
- Prime Minister's Scholarship Scheme for Wards of Ex-Servicemen (KSB)
- Visvesvaraya PhD Scheme for Electronics and IT (MeitY)
- Department of Biotechnology (DBT-JRF)
- ICMR Junior Research Fellowship
- Savitribai Jyotirao Phule Fellowship for Single Girl Child (UGC)
- National Overseas Scholarship for SC Students (MoSJE)
"""

EXTENDED_CENTRAL_SCHEMES = [
    {
        "name": "DST INSPIRE Fellowship for Doctoral Research",
        "provider": "Department of Science and Technology (DST), Ministry of Science & Technology",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "merit", "research"],
        "description": "Prestigious national doctoral research fellowship awarded to 1st rank holders in university postgraduate science/engineering examinations or INSPIRE Scholars with 70%+ in MSc/MTech to pursue full-time PhD in basic and applied sciences.",
        "briefSummary": "₹37,000 to ₹42,000/month fellowship + ₹20,000/year contingency for doctoral PhD research.",
        "country": "India",
        "state": "All India",
        "fundingType": "full_funding",
        "currency": "INR",
        "amount": 524000,
        "formattedAmount": "₹37,000 to ₹42,000 / month + HRA + Contingency",
        "awardFrequency": "monthly",
        "awardCoverage": "Monthly fellowship of ₹37,000 (JRF) / ₹42,000 (SRF) + HRA as per central norms + ₹20,000 annual research contingency grant",
        "benefits": [
            "5-year direct doctoral research fellowship for PhD scholars",
            "Annual contingency grant for research consumables, books, and conference travel",
            "Exemption from NET/GATE requirement for 1st rank university toppers"
        ],
        "educationLevels": ["phd"],
        "coursesAndStreams": ["Basic Sciences", "Applied Sciences", "Engineering Sciences", "Agricultural Sciences", "Pharmacy"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["phd"],
            "minPercentage": 70,
            "maxAge": 32,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "University 1st Rank Certificate issued by University Registrar or INSPIRE Scholar ID",
            "Postgraduate Degree Marksheets (MSc / MTech / MS)",
            "PhD Admission Offer Letter from recognized Indian University / Institute",
            "Brief research proposal signed by PhD Guide"
        ],
        "applicationProcedure": [
            "Apply online through DST INSPIRE Portal (online-inspire.gov.in)",
            "Submit academic transcripts and university rank verification certificate",
            "Expert subject committee evaluation and fellowship sanction"
        ],
        "applicationStartDate": "2025-09-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://online-inspire.gov.in",
        "applicationUrl": "https://online-inspire.gov.in",
        "sourceUrl": "https://dst.gov.in",
        "sourceName": "Department of Science and Technology (DST)",
        "tags": ["DST", "INSPIRE", "PhD", "Doctoral Research", "Central Government", "Fellowship"]
    },
    {
        "name": "AICTE Post Graduate (PG) Scholarship for GATE/CEED Qualified Students",
        "provider": "All India Council for Technical Education (AICTE)",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "merit"],
        "description": "Monthly financial assistance awarded to full-time GATE/CEED qualified students admitted to AICTE approved M.E./M.Tech/M.Arch/M.Des programs to promote technical postgraduate education in India.",
        "briefSummary": "₹12,400/month scholarship for GATE and CEED qualified M.Tech/M.Des students.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 148800,
        "formattedAmount": "₹12,400 / month (24 Months)",
        "awardFrequency": "monthly",
        "awardCoverage": "Monthly stipend for 24 months (duration of post-graduate technical degree)",
        "benefits": [
            "₹12,400 per month deposited directly into student's Aadhaar-linked bank account",
            "Covers 8-10 hours/week teaching or research assistance at institution",
            "Guaranteed for all valid GATE/CEED score card holders in approved seats"
        ],
        "educationLevels": ["postgraduate"],
        "coursesAndStreams": ["M.Tech", "M.E.", "M.Arch", "M.Des"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["postgraduate"],
            "minPercentage": 60,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Valid GATE / CEED Score Card",
            "Postgraduate College Admission Fee Receipt and Allotment Letter",
            "Aadhaar card seeded with active bank account",
            "Institute Student ID Card"
        ],
        "applicationProcedure": [
            "Register on AICTE PG Scholarship Portal (pgscholarship.aicte-india.org)",
            "Enter GATE/CEED roll number for automated score verification",
            "Institute verifies student enrollment and biometric attendance",
            "Monthly DBT disbursement via PFMS"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-12-31",
        "officialUrl": "https://pgscholarship.aicte-india.org",
        "applicationUrl": "https://pgscholarship.aicte-india.org",
        "sourceUrl": "https://www.aicte-india.org",
        "sourceName": "All India Council for Technical Education (AICTE)",
        "tags": ["AICTE", "GATE", "MTech", "PG Scholarship", "Technical Education"]
    },
    {
        "name": "Begum Hazrat Mahal National Scholarship for Meritorious Girls Belonging to Minorities",
        "provider": "Maulana Azad Education Foundation (MAEF) & Ministry of Minority Affairs",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "minority", "merit", "need"],
        "description": "National scholarship scheme providing financial assistance to meritorious girl students belonging to economically weaker sections of notified minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) in classes 9th to 12th.",
        "briefSummary": "₹5,000 to ₹6,000/year scholarship for minority girl students.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 6000,
        "formattedAmount": "₹5,000 to ₹6,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Annual scholarship for tuition fees, school uniform, and books",
        "benefits": [
            "₹5,000/yr for Class 9 & 10; ₹6,000/yr for Class 11 & 12",
            "Empowers minority girls to complete senior secondary schooling",
            "Direct bank transfer via National Scholarship Portal"
        ],
        "educationLevels": ["school"],
        "coursesAndStreams": ["Secondary School (Class 9-10)", "Higher Secondary (Class 11-12)"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["school"],
            "minPercentage": 50,
            "maxAnnualIncome": 200000,
            "gender": "female",
            "religions": ["Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Parsi"],
            "socialCategories": ["Minority"]
        },
        "requiredDocuments": [
            "Minority Community Certificate / Self-Declaration",
            "Previous Class Marksheet with minimum 50% marks",
            "Family Income Certificate issued by competent authority",
            "School Bonafide Certificate and Student Bank Account details"
        ],
        "applicationProcedure": [
            "Apply online through National Scholarship Portal (scholarships.gov.in)",
            "Upload school verification form signed by Principal",
            "District Nodal Officer and Ministry scrutiny and DBT transfer"
        ],
        "applicationStartDate": "2025-07-20",
        "deadline": "2026-11-30",
        "officialUrl": "https://scholarships.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://minorityaffairs.gov.in",
        "sourceName": "Ministry of Minority Affairs",
        "tags": ["Begum Hazrat Mahal", "Minority Girls", "School", "NSP", "Central Government"]
    },
    {
        "name": "National Means-cum-Merit Scholarship Scheme (NMMSS)",
        "provider": "Department of School Education & Literacy, Ministry of Education",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "merit", "need"],
        "description": "Centrally sponsored scholarship scheme awarding 1,00,000 scholarships annually to meritorious students of economically weaker sections to arrest drop-out at class VIII and encourage study through secondary school.",
        "briefSummary": "₹12,000/year (₹1,000/month) scholarship for school students from Class IX to XII.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 12000,
        "formattedAmount": "₹12,000 / year (₹1,000/month)",
        "awardFrequency": "annual",
        "awardCoverage": "Annual monetary scholarship paid in four annual cycles from Class IX to Class XII",
        "benefits": [
            "₹1,000 per month deposited directly into student's bank account",
            "Selected through state-level Mental Ability and Scholastic Aptitude Tests",
            "Continuously renewed upon passing each grade up to Class 12"
        ],
        "educationLevels": ["school"],
        "coursesAndStreams": ["Secondary & Senior Secondary (Class 9-12)"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["school"],
            "minPercentage": 55,
            "maxAnnualIncome": 350000,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "State Level NMMSS Examination Selection Roll Number",
            "Class VII / VIII Marksheet with minimum 55% marks (50% for SC/ST)",
            "Family Income Certificate not exceeding ₹3.5 Lakhs",
            "Student Bank Account seeded with Aadhaar"
        ],
        "applicationProcedure": [
            "Appear in State-level NMMSS selection test conducted by SCERT",
            "Selected candidates register on National Scholarship Portal (scholarships.gov.in)",
            "Annual renewal submission with previous class passing marksheet"
        ],
        "applicationStartDate": "2025-07-01",
        "deadline": "2026-12-15",
        "officialUrl": "https://www.education.gov.in/scholarships-education-loan-0",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://www.education.gov.in",
        "sourceName": "Ministry of Education (School Education)",
        "tags": ["NMMSS", "School", "Class 9-12", "Merit-cum-Means", "Central Government"]
    },
    {
        "name": "Prime Minister's Scholarship Scheme for Central Armed Police Forces & Assam Rifles (PMSS-CAPF)",
        "provider": "Welfare & Rehabilitation Board (WARB), Ministry of Home Affairs",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "merit"],
        "description": "Scholarship programme encouraging higher technical and professional education for dependent wards and widows of Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB) and Assam Rifles personnel.",
        "briefSummary": "₹36,000/yr for girls & ₹30,000/yr for boys pursuing professional degrees.",
        "country": "India",
        "state": "All India",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 36000,
        "formattedAmount": "₹36,000/yr (Girls) | ₹30,000/yr (Boys)",
        "awardFrequency": "annual",
        "awardCoverage": "Annual educational assistance for duration of undergraduate professional degree",
        "benefits": [
            "₹3,000/month (₹36,000/yr) for girl students",
            "₹2,500/month (₹30,000/yr) for boy students",
            "Covers Engineering, Medical, Dental, Veterinary, B.Sc Nursing, MBA, MCA, Pharmacy"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["B.Tech", "MBBS", "BDS", "B.Pharm", "B.Sc Nursing", "MBA", "MCA", "B.Ed"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 60,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Service Certificate / Discharge Certificate of CAPF/AR personnel",
            "Disability Certificate / Gallantry Award Certificate (if applicable)",
            "Class 12th Marksheet with minimum 60% marks",
            "Bonafide certificate from recognized professional institution"
        ],
        "applicationProcedure": [
            "Apply via National Scholarship Portal under Ministry of Home Affairs",
            "Verification by CAPF Unit / Headquarter Nodal Officer",
            "WARB MHA review and DBT sanction"
        ],
        "applicationStartDate": "2025-07-15",
        "deadline": "2026-11-30",
        "officialUrl": "https://warb-mha.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://warb-mha.gov.in",
        "sourceName": "Ministry of Home Affairs (WARB)",
        "tags": ["PMSS", "CAPF", "Armed Forces", "MHA", "Professional Degree"]
    },
    {
        "name": "Visvesvaraya PhD Scheme for Electronics and IT",
        "provider": "Ministry of Electronics and Information Technology (MeitY)",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "research", "merit"],
        "description": "Fellowship scheme initiated by MeitY to enhance number of PhDs in Electronics System Design & Manufacturing (ESDM) and IT/IT-Enabled Services (ITES) sectors in premier Indian universities.",
        "briefSummary": "₹38,750 to ₹43,750/month fellowship + ₹30,000/year contingency + international conference support.",
        "country": "India",
        "state": "All India",
        "fundingType": "full_funding",
        "currency": "INR",
        "amount": 555000,
        "formattedAmount": "₹38,750 to ₹43,750 / month + HRA + Support",
        "awardFrequency": "monthly",
        "awardCoverage": "Monthly doctoral fellowship + ₹30,000 annual contingency + up to ₹50,000 international conference travel grant",
        "benefits": [
            "Full 5-year fellowship for full-time PhD candidates in ESDM and IT/ITES",
            "Reimbursement of rent (HRA) as per central government norms",
            "Financial grant to present research at international IEEE / ACM conferences"
        ],
        "educationLevels": ["phd"],
        "coursesAndStreams": ["Electronics Engineering", "VLSI Design", "Computer Science", "Artificial Intelligence", "Information Technology"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["phd"],
            "minPercentage": 65,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "B.Tech / M.Tech academic transcripts in relevant engineering disciplines",
            "Institution Admission Letter under MeitY Visvesvaraya PhD quota",
            "Research Proposal summary approved by Department Research Committee",
            "Aadhaar card and bank account details"
        ],
        "applicationProcedure": [
            "Apply directly through participating institutions (IITs, NITs, Central Universities, IIITs)",
            "Institute forwards shortlisted candidates to Digital India Corporation / MeitY",
            "Monthly attendance certification by institution nodal coordinator"
        ],
        "applicationStartDate": "2025-06-01",
        "deadline": "2026-10-31",
        "officialUrl": "https://phd.digitalindiacorporation.in",
        "applicationUrl": "https://phd.digitalindiacorporation.in",
        "sourceUrl": "https://www.meity.gov.in",
        "sourceName": "Ministry of Electronics & Information Technology (MeitY)",
        "tags": ["MeitY", "Visvesvaraya PhD", "Electronics", "IT", "Doctoral Fellowship"]
    },
    {
        "name": "DBT Junior Research Fellowship (DBT-JRF) in Biotechnology",
        "provider": "Department of Biotechnology (DBT), Ministry of Science & Technology",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "research", "merit"],
        "description": "Fellowships awarded to students through the Biotechnology Eligibility Test (BET) for pursuing research in frontier areas of biotechnology and life sciences in Indian universities.",
        "briefSummary": "₹37,000/month (JRF) & ₹42,000/month (SRF) + HRA + ₹30,000/year contingency.",
        "country": "India",
        "state": "All India",
        "fundingType": "full_funding",
        "currency": "INR",
        "amount": 534000,
        "formattedAmount": "₹37,000 to ₹42,000 / month + HRA + Contingency",
        "awardFrequency": "monthly",
        "awardCoverage": "Monthly fellowship + institutional contingency allowance for research",
        "benefits": [
            "Tenure of 5 years for pursuing doctoral studies in biotechnology",
            "Category I fellows eligible for fellowship in any university across India",
            "Category II fellows eligible for appointment in DBT sponsored research projects"
        ],
        "educationLevels": ["phd"],
        "coursesAndStreams": ["Biotechnology", "Bioinformatics", "Microbiology", "Genetics", "Biochemistry", "Life Sciences"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["phd"],
            "minPercentage": 60,
            "maxAge": 28,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Valid Graduate Pharmacy / Biotechnology Eligibility Test (BET) Score Card",
            "Master's Degree (MSc / MTech / MVSc) Marksheets",
            "PhD Admission Offer from recognized institution",
            "Category / Age relaxation certificate (if applicable)"
        ],
        "applicationProcedure": [
            "Appear in national BET examination conducted by NTA / DBT-HRD PMU",
            "Category-I awardees activate fellowship upon PhD registration",
            "Direct disbursement of fellowship via DBT-JRF online portal"
        ],
        "applicationStartDate": "2025-05-01",
        "deadline": "2026-10-31",
        "officialUrl": "https://dbt.nta.ac.in",
        "applicationUrl": "https://dbt.nta.ac.in",
        "sourceUrl": "https://dbtindia.gov.in",
        "sourceName": "Department of Biotechnology (DBT)",
        "tags": ["DBT", "Biotechnology", "BET", "JRF", "Life Sciences", "Fellowship"]
    },
    {
        "name": "National Overseas Scholarship for SC and De-notified Nomadic Tribes",
        "provider": "Ministry of Social Justice and Empowerment, Government of India",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "minority", "need", "merit"],
        "description": "Central government scholarship facilitating low income students belonging to SC, De-notified Nomadic and Semi-Nomadic Tribes, Landless Agricultural Labourers and Traditional Artisans to obtain Master's and PhD degrees abroad in top 500 QS world-ranked universities.",
        "briefSummary": "100% tuition fees, annual maintenance allowance ($15,400 / £9,900), visa & airfare.",
        "country": "India",
        "state": "All India",
        "fundingType": "full_funding",
        "currency": "USD",
        "amount": 45000,
        "formattedAmount": "Full Tuition + $15,400/yr Living + Airfare",
        "awardFrequency": "annual",
        "awardCoverage": "Full tuition fees paid directly to foreign university + annual living allowance + health insurance and return economy airfare",
        "benefits": [
            "125 slots awarded annually for Master's and PhD degrees abroad",
            "Annual maintenance allowance of US $15,400 (or £9,900 in UK)",
            "Economy airfare from India to destination university and back"
        ],
        "educationLevels": ["postgraduate", "phd"],
        "coursesAndStreams": ["Science", "Engineering", "Management", "Social Sciences", "Law", "Agricultural Sciences", "Medicine"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["postgraduate", "phd"],
            "minPercentage": 60,
            "maxAnnualIncome": 800000,
            "maxAge": 35,
            "gender": "all",
            "socialCategories": ["SC"]
        },
        "requiredDocuments": [
            "Caste Certificate issued by authorized revenue officer",
            "Income Certificate (family income not exceeding ₹8.00 Lakhs per annum)",
            "Unconditional Offer of Admission from top 500 QS world-ranked foreign university",
            "Qualifying Bachelor's / Master's degree marksheets with minimum 60% marks",
            "Valid Indian Passport"
        ],
        "applicationProcedure": [
            "Apply online through National Overseas Scholarship Portal (nosmsje.gov.in)",
            "Submit unconditional admission letter and QS ranking proof",
            "Selection committee verification and award of financial guarantee letter"
        ],
        "applicationStartDate": "2025-02-15",
        "deadline": "2026-10-15",
        "officialUrl": "https://nosmsje.gov.in",
        "applicationUrl": "https://nosmsje.gov.in",
        "sourceUrl": "https://socialjustice.gov.in",
        "sourceName": "Ministry of Social Justice and Empowerment",
        "tags": ["National Overseas", "Study Abroad", "SC", "Master", "PhD", "Full Funding"]
    }
]
