"""
GRANTLY — Extended Premier University Institutional Scholarship Schemes
Covers verified institutional financial aid, fellowships, and merit waivers at top institutions:
IIT Madras, IIT Delhi, IISc Bangalore, IIM Ahmedabad, AIIMS New Delhi, MAHE Manipal, Amrita.
"""

EXTENDED_UNIVERSITY_SCHEMES = [
    {
        "name": "IIT Madras Institute Merit-cum-Means (MCM) & HTRA Fellowship",
        "provider": "Indian Institute of Technology Madras (IIT Madras)",
        "providerCategory": "premier_university",
        "categories": ["premier_university", "merit", "need", "research"],
        "description": "Tuition fee waiver and monthly stipend for undergraduate B.Tech students with parental income below ₹5 Lakhs, plus Half-Time Teaching/Research Assistantship (HTRA) of ₹12,400 to ₹37,000/month for M.Tech/MS/PhD scholars.",
        "briefSummary": "100% tuition waiver for UG B.Tech + up to ₹37,000/month HTRA for postgraduate research.",
        "country": "India",
        "state": "Tamil Nadu",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 200000,
        "formattedAmount": "100% Tuition Waiver + ₹1,000/mo allowance (UG) / HTRA (PG)",
        "awardFrequency": "annual",
        "awardCoverage": "100% tuition fee waiver + monthly pocket allowance for UG; monthly HTRA fellowship for PG research scholars",
        "benefits": [
            "Complete tuition fee waiver for undergraduate students",
            "₹1,000 per month pocket allowance for eligible UG students",
            "M.Tech / PhD scholars receive monthly HTRA research stipend directly from institute"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "phd"],
        "coursesAndStreams": ["B.Tech", "Dual Degree", "M.Tech", "M.S. (by Research)", "Ph.D."],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "phd"],
            "minPercentage": 60,
            "maxAnnualIncome": 500000,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "IIT Madras Student Roll Number and ID Card",
            "JEE Advanced / GATE rank card",
            "Family Income Certificate issued by Revenue Authority (under ₹5 Lakhs)",
            "Parental ITR / Form 16 / Salary slips"
        ],
        "applicationProcedure": [
            "Apply via IIT Madras Academic Workflow portal during start of autumn semester",
            "Upload income documents verified by Academic Section",
            "Dean of Academic Courses committee sanction"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-10-31",
        "officialUrl": "https://www.iitm.ac.in/academics/scholarships-and-awards",
        "applicationUrl": "https://workflow.iitm.ac.in",
        "sourceUrl": "https://www.iitm.ac.in",
        "sourceName": "Indian Institute of Technology Madras",
        "tags": ["IIT Madras", "MCM", "HTRA", "B.Tech", "M.Tech", "Tuition Waiver"]
    },
    {
        "name": "IIT Delhi Merit-cum-Means & Donor Alumni Scholarships",
        "provider": "Indian Institute of Technology Delhi (IIT Delhi)",
        "providerCategory": "premier_university",
        "categories": ["premier_university", "merit", "need"],
        "description": "Tuition fee waiver and monthly allowance for up to 25% of undergraduate students admitted to B.Tech programs, complemented by dozens of endowed alumni donor scholarships providing up to ₹1,00,000/year.",
        "briefSummary": "100% tuition fee waiver + ₹1,000/month pocket allowance for IIT Delhi B.Tech students.",
        "country": "India",
        "state": "Delhi",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 200000,
        "formattedAmount": "100% Tuition Waiver + ₹1,000/mo",
        "awardFrequency": "annual",
        "awardCoverage": "Full tuition fee waiver of ₹2,00,000/year + ₹1,000 monthly pocket allowance for 10 months",
        "benefits": [
            "Full tuition fee waiver for B.Tech students with parental income below ₹5 Lakhs",
            "Donor alumni scholarships covering laptop purchases, books, and international exchange",
            "Renewable every year based on CGPA of 6.0+"
        ],
        "educationLevels": ["undergraduate"],
        "coursesAndStreams": ["B.Tech", "Dual Degree (B.Tech + M.Tech)"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate"],
            "minPercentage": 60,
            "maxAnnualIncome": 500000,
            "gender": "all",
            "socialCategories": ["General", "OBC", "EWS"]
        },
        "requiredDocuments": [
            "IIT Delhi Student Entry Number",
            "JEE Advanced Rank Card",
            "Family Income Certificate (ITR or Tehsildar certificate under ₹5 Lakhs)",
            "Declaration of not receiving any other scholarship"
        ],
        "applicationProcedure": [
            "Submit online application through IIT Delhi Academics portal",
            "Scrutiny of income affidavits by Student Affairs Section",
            "Office of Dean of Student Affairs notification and fee adjustment"
        ],
        "applicationStartDate": "2025-08-15",
        "deadline": "2026-11-15",
        "officialUrl": "https://home.iitd.ac.in/scholarships.php",
        "applicationUrl": "https://ecampus.iitd.ac.in",
        "sourceUrl": "https://home.iitd.ac.in",
        "sourceName": "Indian Institute of Technology Delhi",
        "tags": ["IIT Delhi", "MCM", "B.Tech", "Tuition Waiver", "Premier University"]
    },
    {
        "name": "IISc Bangalore Institute Research Fellowship for M.Tech & Ph.D.",
        "provider": "Indian Institute of Science (IISc), Bangalore",
        "providerCategory": "premier_university",
        "categories": ["premier_university", "research", "merit"],
        "description": "Fellowships provided by the Ministry of Education and IISc to all regular students admitted to M.Tech, M.Des, and Ph.D. research programmes at the Indian Institute of Science Bangalore.",
        "briefSummary": "₹12,400/mo (M.Tech) and ₹37,000 to ₹42,000/mo (Ph.D.) fellowship at IISc Bangalore.",
        "country": "India",
        "state": "Karnataka",
        "fundingType": "full_funding",
        "currency": "INR",
        "amount": 504000,
        "formattedAmount": "₹12,400 to ₹42,000 / month + HRA + Contingency",
        "awardFrequency": "monthly",
        "awardCoverage": "Monthly fellowship + contingency grant for research books, equipment, and consumables",
        "benefits": [
            "Guaranteed fellowship for all admitted postgraduate and doctoral researchers",
            "Direct campus hostel accommodation and healthcare at IISc Health Centre",
            "Travel grants to present research at top international symposia"
        ],
        "educationLevels": ["postgraduate", "phd"],
        "coursesAndStreams": ["M.Tech", "M.Des", "Ph.D. in Science", "Ph.D. in Engineering"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["postgraduate", "phd"],
            "minPercentage": 65,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "IISc Student SR Number",
            "Valid GATE / CSIR-UGC NET / CEED scorecard or national exam qualification",
            "B.Tech / M.Sc academic transcripts",
            "Aadhaar card and bank account details"
        ],
        "applicationProcedure": [
            "Granted automatically upon admission and registration at IISc Bangalore",
            "Fellowship activated through IISc Academic Section",
            "Monthly disbursement via direct bank credit"
        ],
        "applicationStartDate": "2025-07-01",
        "deadline": "2026-12-31",
        "officialUrl": "https://iisc.ac.in/admissions/financial-assistance/",
        "applicationUrl": "https://iisc.ac.in",
        "sourceUrl": "https://iisc.ac.in",
        "sourceName": "Indian Institute of Science (IISc) Bangalore",
        "tags": ["IISc Bangalore", "PhD", "M.Tech", "Science Research", "Full Fellowship"]
    },
    {
        "name": "IIM Ahmedabad Need-Based Financial Aid Scheme (NBA)",
        "provider": "Indian Institute of Management Ahmedabad (IIMA)",
        "providerCategory": "premier_university",
        "categories": ["premier_university", "need"],
        "description": "Committed to ensuring that no student admitted to the flagship PGP (MBA) or PGP-FABM is prevented from pursuing the program due to financial constraints, providing up to 100% financial aid covering tuition and living expenses.",
        "briefSummary": "Up to 100% tuition and living expense financial aid for MBA students at IIM Ahmedabad.",
        "country": "India",
        "state": "Gujarat",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 1200000,
        "formattedAmount": "Up to 100% Tuition Fee & Living Aid",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition fees, hostel, books, and living expenses based on transparent financial assessment matrix",
        "benefits": [
            "Need-based financial aid covering substantial portion or 100% of two-year program fees",
            "Evaluated strictly on family gross income, net worth, and household liabilities",
            "No repayment required (grant, not a loan)"
        ],
        "educationLevels": ["postgraduate"],
        "coursesAndStreams": ["Post Graduate Programme in Management (PGP - MBA)", "PGP-FABM"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["postgraduate"],
            "minPercentage": 60,
            "maxAnnualIncome": 1500000,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "IIMA Admission Offer Letter and Roll Number",
            "Parental Income Tax Returns (ITR) for past 3 years",
            "Bank statements of all family members for past 12 months",
            "Details of immovable property, investments, and educational loan sanctions"
        ],
        "applicationProcedure": [
            "Submit online NBA application form upon accepting admission offer to IIMA",
            "Independent financial audit and verification of submitted documentation",
            "Financial Aid Committee determines grant amount prior to fee payment deadline"
        ],
        "applicationStartDate": "2025-05-01",
        "deadline": "2026-07-31",
        "officialUrl": "https://www.iima.ac.in/academics/pgp/financial-aid",
        "applicationUrl": "https://www.iima.ac.in",
        "sourceUrl": "https://www.iima.ac.in",
        "sourceName": "Indian Institute of Management Ahmedabad",
        "tags": ["IIM Ahmedabad", "MBA", "PGP", "Need-Based Aid", "Full Tuition Aid"]
    },
    {
        "name": "Manipal Academy of Higher Education (MAHE) Freeship & Merit Scholarships",
        "provider": "Manipal Academy of Higher Education (MAHE)",
        "providerCategory": "premier_university",
        "categories": ["premier_university", "merit"],
        "description": "Comprehensive scholarship scheme awarding 100% and 50% tuition freeships to top rankers in MET / NEET admitted to MBBS, BDS, and B.Tech programmes at Manipal (MIT Manipal and KMC Manipal).",
        "briefSummary": "100% and 50% tuition fee waiver for top rankers at MIT and KMC Manipal.",
        "country": "India",
        "state": "Karnataka",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 350000,
        "formattedAmount": "50% to 100% Course Fee Waiver",
        "awardFrequency": "annual",
        "awardCoverage": "100% Freeship (full tuition fee waiver) or 50% Merit Scholarship throughout degree duration",
        "benefits": [
            "Full tuition fee waiver for top 100 rankers in MET (B.Tech) and top NEET rankers (MBBS)",
            "Renewable every year based on maintaining minimum 8.0 CGPA and clear academic record",
            "Additional Konkani speaking, defence personnel, and sibling scholarships"
        ],
        "educationLevels": ["undergraduate"],
        "coursesAndStreams": ["B.Tech", "MBBS", "BDS", "B.Pharm", "B.Sc Nursing"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate"],
            "minPercentage": 80,
            "maxAnnualIncome": 1200000,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Manipal Entrance Test (MET) / NEET Score and Rank Card",
            "Class 12th Board marksheet with minimum 80% marks in PCB/PCM",
            "Parental Income Certificate / ITR",
            "MAHE Admission Allotment Letter"
        ],
        "applicationProcedure": [
            "Opt for Freeship / Merit Scholarship during MAHE online counseling",
            "Verification of rank and eligibility by MAHE Admissions Committee",
            "Fee concession reflected directly on student fee invoice"
        ],
        "applicationStartDate": "2025-06-01",
        "deadline": "2026-08-31",
        "officialUrl": "https://manipal.edu/mu/admission/scholarships.html",
        "applicationUrl": "https://manipal.edu",
        "sourceUrl": "https://manipal.edu",
        "sourceName": "Manipal Academy of Higher Education (MAHE)",
        "tags": ["Manipal", "MAHE", "Freeship", "B.Tech", "MBBS", "Merit Waiver"]
    }
]
