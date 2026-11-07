"""
Premier Indian University and Higher Education Institution Scholarships.
"""

UNIVERSITY_SCHEMES = [
    {
        "name": "IIT Bombay Institute Merit-cum-Means (MCM) Scholarship & Free Messing",
        "provider": "Indian Institute of Technology Bombay (IITB)",
        "providerCategory": "university",
        "categories": ["university", "merit", "need", "stem"],
        "description": "Tuition fee waiver and monthly stipend for undergraduate B.Tech, Dual Degree, and BS students at IIT Bombay whose annual parental income does not exceed ₹5 Lakhs.",
        "briefSummary": "100% tuition waiver + ₹1,000/month stipend and free basic messing for eligible IIT Bombay undergraduates.",
        "country": "India",
        "state": "Maharashtra",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 212000,
        "formattedAmount": "Full Tuition (₹2L) + ₹12,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "100% tuition fee waiver (₹2,00,000/yr) + pocket allowance of ₹1,000/month",
        "benefits": [
            "Complete tuition fee waiver of ₹2,00,000 per academic year",
            "Pocket allowance of ₹1,000 per month for 10 months",
            "Free basic messing and hostel room seat rent exemption for SC/ST scholars",
            "Awarded to up to 25% of sanctioned undergraduate batch strength"
        ],
        "educationLevels": ["undergraduate"],
        "coursesAndStreams": ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical", "Aerospace", "Engineering Physics"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate"],
            "minPercentage": 60,
            "minCgpa": 6.0,
            "maxAnnualIncome": 500000,
            "gender": "all",
            "eligibleStates": ["All India"],
            "institutionTypes": ["Government"],
            "specialConditions": ["Admitted to undergraduate programme at IIT Bombay via JEE Advanced; minimum 6.0 CPI in subsequent years"]
        },
        "requiredDocuments": [
            "Parental Income Certificate (ITR acknowledgement / Form 16 / Revenue Officer certificate ≤ ₹5.00 Lakhs)",
            "JEE Advanced rank card and IIT Bombay admission allotment letter",
            "Affidavit on non-judicial stamp paper stating non-receipt of other scholarships",
            "Bank account passbook copy"
        ],
        "applicationProcedure": [
            "Apply via IIT Bombay Student Portal / Academic ERP (ASC)",
            "Submit physical copies of income documents to Deputy Registrar (Academic Desk)",
            "Institute Senate Committee sanctions fee waiver and stipend"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-10-15",
        "officialUrl": "https://www.iitb.ac.in/en/education/scholarships",
        "applicationUrl": "https://asc.iitb.ac.in",
        "sourceUrl": "https://www.iitb.ac.in",
        "sourceName": "IIT Bombay Academic Office",
        "sourceType": "premier_university",
        "tags": ["IIT Bombay", "IIT", "MCM", "Engineering", "JEE Advanced", "Tuition Waiver"]
    },
    {
        "name": "BITS Pilani Institute Merit and Need-Based Tuition Fee Concession",
        "provider": "Birla Institute of Technology and Science (BITS Pilani)",
        "providerCategory": "university",
        "categories": ["university", "merit", "need", "stem"],
        "description": "Large-scale institutional scholarship programme covering 15% to 100% of semester tuition fees for students studying at Pilani, Goa, and Hyderabad campuses based on academic performance and family income.",
        "briefSummary": "15% to 100% semester tuition fee waiver for over 30% of students across BITS Pilani campuses.",
        "country": "India",
        "state": "All India",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 250000,
        "formattedAmount": "15% to 100% Tuition Fee Concession",
        "awardFrequency": "per-semester",
        "awardCoverage": "Direct deduction from semester fee: 100%, 80%, 40%, 25%, or 15% tuition concession",
        "benefits": [
            "Top 1% students by CGPA receive 100% tuition fee waiver regardless of income",
            "Students with family income ≤ ₹11 Lakhs receive 25% to 80% tuition concession based on CGPA",
            "Over ₹50 Crores disbursed across Pilani, K.K. Birla Goa, and Hyderabad campuses annually"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["B.E.", "M.Sc. Integrated Dual Degree", "B.Pharm", "M.E.", "M.Pharm"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 60,
            "minCgpa": 6.5,
            "maxAnnualIncome": 1100000,
            "gender": "all",
            "eligibleStates": ["All India"],
            "specialConditions": ["Enrolled as a full-time regular student at BITS Pilani (Pilani, Goa, or Hyderabad campus)"]
        },
        "requiredDocuments": [
            "Parents' ITR-V with computation of income (ceiling ₹11.00 Lakhs for need-based)",
            "Salary slip / Form 16 / Tehsildar income certificate",
            "Current CGPA transcript generated from SWD portal"
        ],
        "applicationProcedure": [
            "Apply each semester through the Student Welfare Division (SWD) online portal",
            "Upload verified ITR forms and computation of income",
            "Automated merit-cum-means matrix assigns scholarship concession tier"
        ],
        "applicationStartDate": "2025-08-15",
        "deadline": "2026-11-20",
        "officialUrl": "https://www.bits-pilani.ac.in/financial-assistance/",
        "applicationUrl": "https://swd.bits-pilani.ac.in",
        "sourceUrl": "https://www.bits-pilani.ac.in",
        "sourceName": "BITS Pilani Student Welfare Division",
        "sourceType": "premier_university",
        "tags": ["BITS Pilani", "BITSAT", "Fee Concession", "Merit-Cum-Means", "Engineering"]
    },
    {
        "name": "Ashoka University Need-Based Financial Aid Programme",
        "provider": "Ashoka University",
        "providerCategory": "university",
        "categories": ["university", "need"],
        "description": "Comprehensive need-based financial assistance designed to ensure no admitted student is turned away due to financial constraints. Grants range from 25% tuition waiver to 100% tuition, residence, and meals coverage.",
        "briefSummary": "100% need-based financial aid covering up to full tuition, residence, and meals at Ashoka University.",
        "country": "India",
        "state": "Haryana",
        "fundingType": "fully_funded",
        "currency": "INR",
        "amount": 750000,
        "formattedAmount": "Up to 100% Tuition & Residence (~₹7.5L / year)",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition fees, on-campus accommodation, meal plan, and study material assistance",
        "benefits": [
            "Financial aid is assessed purely on family financial circumstances, completely independent of admission offer",
            "Covers up to full cost of attendance (tuition, residence, meals)",
            "Approximately 47% of Ashoka students receive financial aid"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["Computer Science", "Economics", "History", "Psychology", "Biology", "Philosophy", "English", "Political Science"],
        "eligibleNationalities": ["Indian", "International"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 60,
            "maxAnnualIncome": 1500000,
            "gender": "all",
            "eligibleStates": ["All India"],
            "specialConditions": ["Must have received a provisional or firm offer of admission to Ashoka University"]
        },
        "requiredDocuments": [
            "Income tax returns (ITR) of both parents for the last three financial years",
            "Bank statements for the last 12 months for all bank accounts held by family",
            "Audited balance sheets, P&L accounts (for business owners)",
            "Proof of investments, real estate, and vehicle registrations"
        ],
        "applicationProcedure": [
            "Apply via the Ashoka University Financial Aid portal after receiving admission offer",
            "Financial aid committee conducts detailed financial audit and home/telephonic consultation",
            "Aid package awarded along with final admission acceptance"
        ],
        "applicationStartDate": "2025-10-01",
        "deadline": "2026-06-15",
        "officialUrl": "https://www.ashoka.edu.in/financial-aid/",
        "applicationUrl": "https://admissions.ashoka.edu.in",
        "sourceUrl": "https://www.ashoka.edu.in",
        "sourceName": "Ashoka University Financial Aid Committee",
        "sourceType": "premier_university",
        "tags": ["Ashoka University", "Financial Aid", "Liberal Arts", "Need-Based", "Computer Science"]
    },
    {
        "name": "Delhi University Vice-Chancellor's Student Fund & Merit Scholarships",
        "provider": "University of Delhi (DU)",
        "providerCategory": "university",
        "categories": ["university", "merit", "need"],
        "description": "Financial assistance for meritorious undergraduate and postgraduate students enrolled in regular colleges and departments of the University of Delhi who face economic hardship.",
        "briefSummary": "Tuition and examination fee concession plus annual grant for University of Delhi students.",
        "country": "India",
        "state": "Delhi",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 25000,
        "formattedAmount": "Up to ₹25,000 / year + Full Fee Waiver",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition fee waiver, examination fee refund, and annual maintenance book grant",
        "benefits": [
            "100% tuition and examination fee concession for students with family income ≤ ₹4 Lakhs",
            "Additional book and hostel grant for visually impaired and PwD scholars",
            "Awarded across St. Stephen's, Hindu, SRCC, Miranda House, and North/South campus departments"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["All regular degree courses in Commerce, Arts, Sciences, and Law at Delhi University"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 60,
            "maxAnnualIncome": 400000,
            "gender": "all",
            "eligibleStates": ["All India"],
            "institutionTypes": ["Government"],
            "specialConditions": ["Enrolled as a regular full-time student in a constituent college/department of University of Delhi"]
        },
        "requiredDocuments": [
            "Delhi University college enrollment ID card and fee receipt",
            "Income certificate issued by SDM / competent executive magistrate (≤ ₹4.00 Lakhs)",
            "Previous qualifying exam marksheets",
            "Recommendation by College Principal / Department Head"
        ],
        "applicationProcedure": [
            "Obtain prescribed application from Dean Students' Welfare (DSW) office",
            "Submit application endorsed by College Principal to DSW office",
            "University selection committee approves disbursement via direct bank credit"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-15",
        "officialUrl": "https://www.du.ac.in",
        "applicationUrl": "https://dsw.du.ac.in",
        "sourceUrl": "https://www.du.ac.in",
        "sourceName": "University of Delhi Dean Students' Welfare",
        "sourceType": "premier_university",
        "tags": ["Delhi University", "DU", "Vice Chancellor Fund", "Undergraduate", "Merit-Cum-Means"]
    }
]
