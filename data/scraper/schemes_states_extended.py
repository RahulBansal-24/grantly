"""
GRANTLY — Extended Indian State Government Scholarship Schemes
Covers all remaining Indian States and Union Territories with authentic, verified public schemes:
Madhya Pradesh, Punjab, Haryana, Assam, Himachal Pradesh, Uttarakhand, Jharkhand,
Chhattisgarh, Goa, Delhi, Jammu & Kashmir, Ladakh, Sikkim, Tripura, Meghalaya,
Manipur, Mizoram, Nagaland, Arunachal Pradesh, Puducherry, Chandigarh, Andaman & Nicobar,
Dadra & Nagar Haveli and Daman & Diu.
"""

EXTENDED_STATE_SCHEMES = [
    # 1. MADHYA PRADESH
    {
        "name": "Mukhya Mantri Medhavi Vidyarthi Yojana (MMVY) Madhya Pradesh",
        "provider": "Department of Technical Education & Skill Development, Government of Madhya Pradesh",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit", "need"],
        "description": "Prestigious Madhya Pradesh scheme providing 100% course fee reimbursement for students who scored 70%+ in MP Board or 85%+ in CBSE/ICSE 12th exams and secured admission to engineering, medical, law, or degree colleges.",
        "briefSummary": "100% college tuition fee waiver for meritorious MP 12th board students enrolled in higher education.",
        "country": "India",
        "state": "Madhya Pradesh",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 150000,
        "formattedAmount": "Full Tuition Fee (Up to ₹1.5 Lakhs/yr)",
        "awardFrequency": "annual",
        "awardCoverage": "100% tuition and academic fee reimbursement directly to institution",
        "benefits": [
            "Complete tuition fee waiver for degree programmes",
            "Covers JEE, NEET, CLAT, and state university entrance admissions",
            "Direct institutional transfer via MP State Scholarship 2.0"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["Engineering", "MBBS", "BDS", "Law (NLU)", "Management", "Science", "Commerce", "Arts"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 70,
            "maxAnnualIncome": 600000,
            "eligibleStates": ["Madhya Pradesh"],
            "eligibleDomicile": ["Madhya Pradesh"],
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "MP Domicile / Resident Certificate",
            "Samagra ID and MP Board / CBSE 12th Marksheet",
            "Admission Allotment Letter / Fee Receipt",
            "Family Income Certificate (under ₹6 Lakhs)",
            "Aadhaar card linked with active bank account"
        ],
        "applicationProcedure": [
            "Register on MP State Scholarship Portal (scholarshipportal.mp.nic.in)",
            "Link Samagra ID and Aadhaar eKYC",
            "Submit MMVY application with 12th roll number and college admission code",
            "College verification and sanction order by Sanctioning Authority"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-12-15",
        "officialUrl": "http://scholarshipportal.mp.nic.in/MedhaviChhatra/Default.aspx",
        "applicationUrl": "http://scholarshipportal.mp.nic.in/MedhaviChhatra/Default.aspx",
        "sourceUrl": "http://scholarshipportal.mp.nic.in",
        "sourceName": "Madhya Pradesh State Scholarship Portal 2.0",
        "tags": ["Madhya Pradesh", "MMVY", "Merit", "Tuition Waiver", "Undergraduate"]
    },

    # 2. PUNJAB
    {
        "name": "Dr. B.R. Ambedkar Post Matric Scholarship Scheme Punjab",
        "provider": "Department of Social Justice, Empowerment & Minorities, Government of Punjab",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Comprehensive fee concession and maintenance stipend scheme for post-matric Scheduled Caste and underprivileged students in Punjab pursuing post-secondary courses.",
        "briefSummary": "100% non-refundable fee waiver and monthly stipend for post-matric SC students in Punjab.",
        "country": "India",
        "state": "Punjab",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 35000,
        "formattedAmount": "Full Tuition + ₹1,200/month stipend",
        "awardFrequency": "annual",
        "awardCoverage": "100% compulsory non-refundable fees reimbursement + monthly maintenance allowance",
        "benefits": [
            "Zero admission fee under freeship card facility",
            "Direct DBT payment of maintenance allowance",
            "Book allowance and study tour assistance"
        ],
        "educationLevels": ["diploma", "undergraduate", "postgraduate", "phd"],
        "coursesAndStreams": ["All Disciplines", "Technical", "Vocational", "Professional"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["diploma", "undergraduate", "postgraduate", "phd"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Punjab"],
            "eligibleDomicile": ["Punjab"],
            "gender": "all",
            "socialCategories": ["SC"]
        },
        "requiredDocuments": [
            "Punjab Domicile Certificate",
            "SC Caste Certificate issued by competent authority",
            "Valid Income Certificate (family income under ₹2.5 Lakhs)",
            "College admission letter and Punjab Scholarship Freeship Card"
        ],
        "applicationProcedure": [
            "Apply for Freeship Card on Dr. Ambedkar Scholarship Portal (scholarships.punjab.gov.in)",
            "Present Freeship Card to college at time of admission for zero-fee admission",
            "Complete online post-matric scholarship registration"
        ],
        "applicationStartDate": "2025-07-15",
        "deadline": "2026-11-30",
        "officialUrl": "https://scholarships.punjab.gov.in",
        "applicationUrl": "https://scholarships.punjab.gov.in",
        "sourceUrl": "https://scholarships.punjab.gov.in",
        "sourceName": "Punjab Dr. Ambedkar Scholarship Portal",
        "tags": ["Punjab", "Post-Matric", "SC", "Freeship", "Fee Reimbursement"]
    },

    # 3. HARYANA
    {
        "name": "Haryana State Meritorious Incentive Scheme & Post Matric Scheme",
        "provider": "Department of Higher Education, Government of Haryana",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit", "need"],
        "description": "Financial incentive and fee reimbursement for undergraduate and postgraduate students studying in government and aided colleges across Haryana.",
        "briefSummary": "Merit incentive awards up to ₹15,000/yr and fee concession for college students in Haryana.",
        "country": "India",
        "state": "Haryana",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 15000,
        "formattedAmount": "₹5,000 to ₹15,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Annual cash incentive based on academic university ranking + fee subsidy",
        "benefits": [
            "Top 3 rankers in university examinations receive direct cash prize",
            "Additional book and examination fee concessions",
            "Seamless Parivar Pehchan Patra (PPP) verification"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["Arts", "Science", "Commerce", "B.Tech", "Management"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 60,
            "maxAnnualIncome": 300000,
            "eligibleStates": ["Haryana"],
            "eligibleDomicile": ["Haryana"],
            "gender": "all",
            "socialCategories": ["General", "SC", "OBC", "EWS"]
        },
        "requiredDocuments": [
            "Haryana Parivar Pehchan Patra (Family ID)",
            "Haryana Resident / Domicile Certificate",
            "Marksheets of previous qualifying examinations",
            "College Bonafide Certificate"
        ],
        "applicationProcedure": [
            "Login to Har-Chhatravratti portal (harchhatravratti.highereduhry.ac.in) using Family ID (PPP)",
            "Select Higher Education Meritorious Incentive Scheme",
            "Institute verifies college roll number and university result rank",
            "Direct disbursement via DBT to Aadhaar-linked account"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-12-31",
        "officialUrl": "https://harchhatravratti.highereduhry.ac.in",
        "applicationUrl": "https://harchhatravratti.highereduhry.ac.in",
        "sourceUrl": "https://highereduhry.ac.in",
        "sourceName": "Haryana Har-Chhatravratti Portal",
        "tags": ["Haryana", "Merit", "Higher Education", "Parivar Pehchan Patra"]
    },

    # 4. ASSAM
    {
        "name": "Assam State Post-Matric & Combined Merit Scholarship",
        "provider": "Directorate of Higher Education, Government of Assam",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit", "need"],
        "description": "State merit and post-matric scholarship awarded to domiciled students of Assam pursuing general degree, professional, technical, and master's degree courses.",
        "briefSummary": "Merit and need-based financial assistance for college and university students of Assam.",
        "country": "India",
        "state": "Assam",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 18000,
        "formattedAmount": "₹12,000 to ₹18,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Annual stipend for tuition, book allowance and study maintenance",
        "benefits": [
            "Annual scholarship for general and professional degree students",
            "Special incentives for meritorious girl students in higher education",
            "Direct benefit transfer through Assam DHE portal"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["Arts", "Science", "Commerce", "Engineering", "Medical", "Law"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 60,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Assam"],
            "eligibleDomicile": ["Assam"],
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "Minority"]
        },
        "requiredDocuments": [
            "Permanent Resident Certificate (PRC) of Assam",
            "HSLC / 12th Marksheet with minimum 60% marks",
            "Income Certificate issued by Circle Officer",
            "College Bonafide and active bank account details"
        ],
        "applicationProcedure": [
            "Apply online through Directorate of Higher Education Assam portal (dhe-operations.assam.gov.in)",
            "Upload PRC and marksheet verification",
            "College Principal/Registrar counter-signs and submits recommendations"
        ],
        "applicationStartDate": "2025-09-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://directorateofhighereducation.assam.gov.in",
        "applicationUrl": "https://dhe-operations.assam.gov.in",
        "sourceUrl": "https://directorateofhighereducation.assam.gov.in",
        "sourceName": "Directorate of Higher Education Assam",
        "tags": ["Assam", "Combined Merit", "Higher Education", "North East"]
    },

    # 5. HIMACHAL PRADESH
    {
        "name": "Swami Vivekananda Utkrisht Chhatravritti Yojana Himachal Pradesh",
        "provider": "Department of Higher Education, Government of Himachal Pradesh",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit"],
        "description": "Scholarship awarded to the top 2,000 meritorious students from general categories who passed the 10th/12th examination of the Himachal Pradesh Board of School Education.",
        "briefSummary": "₹10,000/year merit scholarship for top Himachal Board 10th and 12th students.",
        "country": "India",
        "state": "Himachal Pradesh",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 10000,
        "formattedAmount": "₹10,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Annual monetary award for 2-3 years of subsequent post-matric education",
        "benefits": [
            "Top 2,000 meritorious students selected on HP Board merit list",
            "Continuously renewable for undergraduate degree upon passing with 50%+",
            "Sanctioned through HP e-Pass / National Scholarship Portal"
        ],
        "educationLevels": ["undergraduate", "diploma"],
        "coursesAndStreams": ["All Disciplines", "Science", "Commerce", "Arts"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "diploma"],
            "minPercentage": 75,
            "maxAnnualIncome": 400000,
            "eligibleStates": ["Himachal Pradesh"],
            "eligibleDomicile": ["Himachal Pradesh"],
            "gender": "all",
            "socialCategories": ["General", "OBC", "EWS"]
        },
        "requiredDocuments": [
            "Himachali Bonafide / Domicile Certificate",
            "HP Board 10th / 12th Merit List Certificate",
            "Current Institution Bonafide Certificate",
            "Aadhaar-seeded bank account passbook"
        ],
        "applicationProcedure": [
            "Apply via HP e-Pass / NSP Portal under State Scheme Himachal Pradesh",
            "Provide HPBOSE roll number to auto-verify merit ranking",
            "Institution verification through college portal login"
        ],
        "applicationStartDate": "2025-08-15",
        "deadline": "2026-11-15",
        "officialUrl": "https://hpepass.cgg.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://hpepass.cgg.gov.in",
        "sourceName": "Himachal Pradesh ePass Portal",
        "tags": ["Himachal Pradesh", "Swami Vivekananda", "HPBOSE", "Merit"]
    },

    # 6. UTTARAKHAND
    {
        "name": "Uttarakhand Post-Matric Scholarship Scheme for SC/ST/OBC",
        "provider": "Social Welfare Department, Government of Uttarakhand",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "State scheme providing full tuition fee reimbursement and maintenance allowances to domiciled students of Uttarakhand enrolled in recognized technical and general degree colleges.",
        "briefSummary": "Tuition fee reimbursement and monthly stipend for Uttarakhand college students.",
        "country": "India",
        "state": "Uttarakhand",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 30000,
        "formattedAmount": "Full Tuition + ₹1,000/mo allowance",
        "awardFrequency": "annual",
        "awardCoverage": "Compulsory non-refundable fee reimbursement + maintenance allowance",
        "benefits": [
            "100% tuition reimbursement across affiliated universities",
            "Hostel and day scholar differential maintenance grants",
            "Direct bank transfer via PFMS"
        ],
        "educationLevels": ["diploma", "undergraduate", "postgraduate"],
        "coursesAndStreams": ["All Disciplines", "Engineering", "Pharmacy", "Polytechnic", "Degree"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["diploma", "undergraduate", "postgraduate"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Uttarakhand"],
            "eligibleDomicile": ["Uttarakhand"],
            "gender": "all",
            "socialCategories": ["SC", "ST", "OBC"]
        },
        "requiredDocuments": [
            "Uttarakhand Permanent Resident Certificate",
            "Caste Certificate issued by Tehsildar",
            "Income Certificate issued by Revenue Authority",
            "College Fee receipt and Bonafide"
        ],
        "applicationProcedure": [
            "Apply online through Uttarakhand Scholarship Portal (ekalyan.uk.gov.in) / NSP",
            "Complete institute-level verification",
            "District Social Welfare Officer sanction and disbursement"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-12-15",
        "officialUrl": "https://ekalyan.uk.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://socialwelfare.uk.gov.in",
        "sourceName": "Uttarakhand Social Welfare Department",
        "tags": ["Uttarakhand", "Post-Matric", "SC/ST/OBC", "Tuition Reimbursement"]
    },

    # 7. JHARKHAND
    {
        "name": "e-Kalyan Jharkhand Post-Matric Scholarship Scheme",
        "provider": "Scheduled Tribe, Scheduled Caste, Minority and Backward Class Welfare Department, Government of Jharkhand",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Flagship Jharkhand scholarship offering comprehensive college fee reimbursement and food/hostel maintenance allowances for SC, ST, and BC students studying in-state and out-of-state.",
        "briefSummary": "Comprehensive fee reimbursement & living stipend for Jharkhand college students on e-Kalyan.",
        "country": "India",
        "state": "Jharkhand",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 40000,
        "formattedAmount": "Up to ₹50,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition fees reimbursement + monthly maintenance allowance (hosteller/day scholar)",
        "benefits": [
            "Reimbursement of tuition, library, exam, and laboratory charges",
            "Monthly maintenance stipend up to ₹1,200/month",
            "Valid for recognized institutions inside and outside Jharkhand"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma"],
        "coursesAndStreams": ["Engineering", "Medical", "B.Sc", "B.Com", "B.A", "Polytechnic", "Law"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Jharkhand"],
            "eligibleDomicile": ["Jharkhand"],
            "gender": "all",
            "socialCategories": ["SC", "ST", "OBC"]
        },
        "requiredDocuments": [
            "Jharkhand Residential Certificate issued online with JHARSEWA barcode",
            "Caste Certificate issued online with barcode",
            "Income Certificate issued on or after valid financial year",
            "College Bonafide Certificate with fee structure breakdown"
        ],
        "applicationProcedure": [
            "Register on Jharkhand e-Kalyan portal (ekalyan.cgg.gov.in)",
            "Enter online JHARSEWA certificate numbers for instant digital validation",
            "Upload scanned Bonafide and marksheets",
            "Multi-stage verification: Institute, District Welfare Officer, and Treasury"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://ekalyan.cgg.gov.in",
        "applicationUrl": "https://ekalyan.cgg.gov.in",
        "sourceUrl": "https://ekalyan.cgg.gov.in",
        "sourceName": "Jharkhand e-Kalyan Portal",
        "tags": ["Jharkhand", "e-Kalyan", "Post-Matric", "Fee Reimbursement"]
    },

    # 8. CHHATTISGARH
    {
        "name": "Chhattisgarh Post-Matric Scholarship Scheme for SC/ST/OBC",
        "provider": "Tribal and Scheduled Caste Development Department, Government of Chhattisgarh",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Tuition fee reimbursement and maintenance grant for students belonging to SC, ST, and OBC communities of Chhattisgarh enrolled in post-matric and higher educational institutions.",
        "briefSummary": "Full course fee reimbursement and monthly stipend for Chhattisgarh college students.",
        "country": "India",
        "state": "Chhattisgarh",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 32000,
        "formattedAmount": "Tuition Fee + ₹1,000/mo allowance",
        "awardFrequency": "annual",
        "awardCoverage": "Full tuition fee reimbursement + monthly maintenance allowance",
        "benefits": [
            "Comprehensive tuition fee coverage for government and private colleges",
            "Direct Aadhaar payment through Chhattisgarh State Scholarship Portal",
            "Hostel allowance for resident students"
        ],
        "educationLevels": ["diploma", "undergraduate", "postgraduate"],
        "coursesAndStreams": ["All Disciplines", "Technical", "Professional", "General Degree"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["diploma", "undergraduate", "postgraduate"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Chhattisgarh"],
            "eligibleDomicile": ["Chhattisgarh"],
            "gender": "all",
            "socialCategories": ["SC", "ST", "OBC"]
        },
        "requiredDocuments": [
            "Chhattisgarh Domicile Certificate",
            "Permanent Caste Certificate issued by Revenue Authority",
            "Annual Income Certificate",
            "College Admission and Fee Receipt"
        ],
        "applicationProcedure": [
            "Apply online through CG State Scholarship Portal (postmatric-scholarship.cg.nic.in)",
            "College online verification",
            "Approval by Assistant Commissioner / District Collectorate"
        ],
        "applicationStartDate": "2025-09-01",
        "deadline": "2026-12-15",
        "officialUrl": "https://postmatric-scholarship.cg.nic.in",
        "applicationUrl": "https://postmatric-scholarship.cg.nic.in",
        "sourceUrl": "https://tribal.cg.gov.in",
        "sourceName": "Chhattisgarh Post-Matric Portal",
        "tags": ["Chhattisgarh", "Post-Matric", "SC/ST/OBC", "Higher Education"]
    },

    # 9. GOA
    {
        "name": "Dayanand Bandaodkar Scheme for Higher Education Goa",
        "provider": "Directorate of Higher Education, Government of Goa",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Financial assistance scheme to orphans and children of underprivileged parents in Goa to pursue degree and professional courses in higher education.",
        "briefSummary": "Tuition fee waiver and financial support for Goa higher education students.",
        "country": "India",
        "state": "Goa",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 25000,
        "formattedAmount": "Full Tuition + Book Allowance",
        "awardFrequency": "annual",
        "awardCoverage": "Reimbursement of tuition, examination, and laboratory fees",
        "benefits": [
            "100% course fee reimbursement",
            "Financial security for vulnerable and single-parent wards",
            "Direct transfer to student bank account"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["Arts", "Science", "Commerce", "Engineering", "Medicine"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 50,
            "maxAnnualIncome": 300000,
            "eligibleStates": ["Goa"],
            "eligibleDomicile": ["Goa"],
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "15 years Goa Residence Certificate",
            "Income Certificate issued by Mamlatdar",
            "Marksheet of 12th / Qualifying examination",
            "College Fee receipt"
        ],
        "applicationProcedure": [
            "Apply via Goa Directorate of Higher Education portal (dhe.goa.gov.in)",
            "Submit bonafide certificate verified by college principal",
            "State DHE scrutiny and sanction"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-15",
        "officialUrl": "https://dhe.goa.gov.in",
        "applicationUrl": "https://dhe.goa.gov.in",
        "sourceUrl": "https://dhe.goa.gov.in",
        "sourceName": "Directorate of Higher Education Goa",
        "tags": ["Goa", "Dayanand Bandaodkar", "Higher Education", "Tuition Waiver"]
    },

    # 10. DELHI
    {
        "name": "Delhi Merit-cum-Means Financial Assistance Scheme for State Universities",
        "provider": "Department of Higher Education, Government of NCT of Delhi",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit", "need"],
        "description": "Progressive fee waiver scheme providing 100%, 50%, or 25% tuition fee waiver to students pursuing undergraduate programs in Delhi State Universities based on family income.",
        "briefSummary": "Up to 100% tuition fee reimbursement for students in Delhi State Universities.",
        "country": "India",
        "state": "Delhi",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 75000,
        "formattedAmount": "Up to 100% Fee Waiver (Up to ₹1 Lakh)",
        "awardFrequency": "annual",
        "awardCoverage": "100% fee waiver for NFSA/Ration Card holders (income under ₹1 Lakh), 50% for income under ₹2.5 Lakhs, 25% for income under ₹6 Lakhs",
        "benefits": [
            "Covers DTU, NSUT, IP University (GGSIPU), Ambedkar University, IIITD, DSEU",
            "Tiered assistance ensuring equitable support across income brackets",
            "Direct fee reimbursement via Delhi e-District"
        ],
        "educationLevels": ["undergraduate"],
        "coursesAndStreams": ["B.Tech", "BBA", "B.Com", "B.A", "B.Sc", "Design", "Management"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate"],
            "minPercentage": 60,
            "maxAnnualIncome": 600000,
            "eligibleStates": ["Delhi"],
            "eligibleDomicile": ["Delhi"],
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Delhi Domicile / Residence Proof",
            "Ration Card (NFSA) or Valid Income Certificate issued by Revenue Department GNCTD",
            "Marksheets of Class 12th / previous semester with 60%+",
            "State University Fee Receipt and Student ID"
        ],
        "applicationProcedure": [
            "Apply online through Delhi e-District Portal (edistrict.delhigovt.nic.in)",
            "University Nodal Officer scrutinizes academic record and attendance",
            "Directorate of Higher Education approves and reimburses tuition fee"
        ],
        "applicationStartDate": "2025-09-01",
        "deadline": "2026-12-31",
        "officialUrl": "https://edistrict.delhigovt.nic.in",
        "applicationUrl": "https://edistrict.delhigovt.nic.in",
        "sourceUrl": "https://higheredn.delhi.gov.in",
        "sourceName": "Delhi e-District Higher Education",
        "tags": ["Delhi", "Merit-cum-Means", "DTU", "NSUT", "GGSIPU", "Fee Waiver"]
    },

    # 11. JAMMU & KASHMIR & LADAKH
    {
        "name": "Prime Minister's Special Scholarship Scheme (PMSSS) for J&K and Ladakh",
        "provider": "All India Council for Technical Education (AICTE) & Ministry of Education",
        "providerCategory": "central_gov",
        "categories": ["central_gov", "merit", "need"],
        "description": "Prestigious national scholarship for 5,000 students of Jammu & Kashmir and Ladakh each year to pursue undergraduate degrees in top colleges outside J&K, with full tuition fees and maintenance.",
        "briefSummary": "100% tuition fees + ₹1,00,000/yr hostel/maintenance allowance for J&K and Ladakh students.",
        "country": "India",
        "state": "Jammu and Kashmir",
        "fundingType": "full_funding",
        "currency": "INR",
        "amount": 225000,
        "formattedAmount": "Full Tuition (up to ₹1.25L) + ₹1,00,000 Maintenance",
        "awardFrequency": "annual",
        "awardCoverage": "100% academic fees directly to college + ₹1,00,000 annual maintenance in 10 installments",
        "benefits": [
            "Full tuition fee waiver up to ₹1.25 Lakhs for Engineering/Professional and ₹3 Lakhs for Medical",
            "₹10,000/month (₹1,00,000/year) maintenance allowance for living, books, and hostel",
            "Dedicated supernumerary seats in leading institutes across India"
        ],
        "educationLevels": ["undergraduate"],
        "coursesAndStreams": ["General Degree", "Engineering (B.Tech)", "Nursing", "Pharmacy", "Hotel Management", "Medical (MBBS/BDS)"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate"],
            "minPercentage": 50,
            "maxAnnualIncome": 800000,
            "eligibleStates": ["Jammu and Kashmir", "Ladakh"],
            "eligibleDomicile": ["Jammu and Kashmir", "Ladakh"],
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Domicile Certificate of UT of J&K or UT of Ladakh",
            "Class 12th Marksheet from JKBOSE / CBSE schools in J&K/Ladakh",
            "Income Certificate issued by Tehsildar (family income under ₹8 Lakhs)",
            "Aadhaar Card and active bank account seeded with NPCI"
        ],
        "applicationProcedure": [
            "Online registration on AICTE PMSSS portal (aicte-jk-scholarship-gov.in)",
            "Document verification at designated Facilitation Centers in J&K / Ladakh",
            "Choice filling and centralized online seat counselling allocation",
            "Direct DBT disbursement of tuition to college and hostel allowance to student"
        ],
        "applicationStartDate": "2025-05-15",
        "deadline": "2026-10-31",
        "officialUrl": "https://www.aicte-india.org/bureaus/jk",
        "applicationUrl": "https://aicte-jk-scholarship-gov.in",
        "sourceUrl": "https://www.aicte-india.org",
        "sourceName": "AICTE J&K PMSSS Portal",
        "tags": ["Jammu and Kashmir", "Ladakh", "PMSSS", "AICTE", "Full Funding", "Undergraduate"]
    },

    # 12. SIKKIM
    {
        "name": "Chief Minister's Merit Scholarship Scheme (CMMSS) Sikkim",
        "provider": "Education Department, Government of Sikkim",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit"],
        "description": "Premier scholarship scheme of the Government of Sikkim supporting talented local students with full financial sponsorship for premier boarding and higher educational studies across India.",
        "briefSummary": "Comprehensive state sponsorship for meritorious students of Sikkim.",
        "country": "India",
        "state": "Sikkim",
        "fundingType": "full_funding",
        "currency": "INR",
        "amount": 80000,
        "formattedAmount": "Full Academic & Boarding Fees",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition, institutional charges, and residential hostel maintenance",
        "benefits": [
            "Full educational sponsorship in premier institutions",
            "Book and clothing allowances",
            "State recognition and mentorship"
        ],
        "educationLevels": ["school", "undergraduate"],
        "coursesAndStreams": ["All Disciplines", "Science", "Commerce", "Humanities", "Engineering"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["school", "undergraduate"],
            "minPercentage": 70,
            "maxAnnualIncome": 450000,
            "eligibleStates": ["Sikkim"],
            "eligibleDomicile": ["Sikkim"],
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST"]
        },
        "requiredDocuments": [
            "Certificate of Identification (COI) / Sikkim Subject Certificate",
            "Previous qualifying marksheet with 70%+",
            "Income declaration",
            "School / College verification certificate"
        ],
        "applicationProcedure": [
            "Apply through Sikkim Education Department Scholarship Cell",
            "Appear for state-level merit assessment / selection",
            "Institutional confirmation and disbursement"
        ],
        "applicationStartDate": "2025-06-01",
        "deadline": "2026-10-30",
        "officialUrl": "https://sikkim.gov.in",
        "applicationUrl": "https://sikkim.gov.in",
        "sourceUrl": "https://sikkim.gov.in",
        "sourceName": "Government of Sikkim Education Department",
        "tags": ["Sikkim", "CMMSS", "Merit", "North East"]
    },

    # 13. TRIPURA
    {
        "name": "Tripura Mukhyamantri Yuba Yogayog Yojana & Post-Matric Scheme",
        "provider": "Directorate of Higher Education, Government of Tripura",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need", "merit"],
        "description": "Financial grants and post-matric assistance for undergraduate degree final-year students and meritorious students across colleges in Tripura.",
        "briefSummary": "Post-matric and educational grants for college students in Tripura.",
        "country": "India",
        "state": "Tripura",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 20000,
        "formattedAmount": "₹10,000 to ₹25,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition support and academic learning grant",
        "benefits": [
            "Annual financial support for tuition and study materials",
            "Digital device support under Yuba Yogayog scheme",
            "Direct credit via Tripura State Scholarship portal"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma"],
        "coursesAndStreams": ["All Disciplines", "Technical", "General Degree"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Tripura"],
            "eligibleDomicile": ["Tripura"],
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST"]
        },
        "requiredDocuments": [
            "Permanent Resident of Tripura Certificate (PRTC)",
            "Caste Certificate (if applicable)",
            "Family Income Certificate",
            "College marksheets and admission receipt"
        ],
        "applicationProcedure": [
            "Apply via National Scholarship Portal / Tripura Higher Education portal",
            "Institute-level verification by college nodal officer",
            "Direct disbursement through state treasury"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://highereducation.tripura.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://highereducation.tripura.gov.in",
        "sourceName": "Tripura Higher Education Department",
        "tags": ["Tripura", "Post-Matric", "North East", "Yuba Yogayog"]
    },

    # 14. MEGHALAYA
    {
        "name": "Meghalaya Post-Matric Scholarship for ST/SC Students",
        "provider": "Directorate of Higher & Technical Education, Government of Meghalaya",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Central and state funded post-matric scholarship ensuring free higher education and maintenance stipends for tribal and underprivileged students of Meghalaya.",
        "briefSummary": "Tuition fee reimbursement & living stipend for Meghalaya college students.",
        "country": "India",
        "state": "Meghalaya",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 30000,
        "formattedAmount": "Tuition Fee + ₹1,200/mo allowance",
        "awardFrequency": "annual",
        "awardCoverage": "Full tuition fees + monthly maintenance allowance",
        "benefits": [
            "100% compulsory fee waiver across all recognized institutions",
            "Hostel allowance for students living away from home",
            "Direct DBT payment via PFMS"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma"],
        "coursesAndStreams": ["All Disciplines", "Technical", "Arts", "Science", "Commerce"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Meghalaya"],
            "eligibleDomicile": ["Meghalaya"],
            "gender": "all",
            "socialCategories": ["ST", "SC"]
        },
        "requiredDocuments": [
            "Meghalaya Permanent Residence / Scheduled Tribe Certificate",
            "Income Certificate issued by Deputy Commissioner / SDO",
            "Marksheets of previous examinations",
            "College Bonafide and fee structure certificate"
        ],
        "applicationProcedure": [
            "Apply online through National Scholarship Portal under State Scheme Meghalaya",
            "College verification and submission to DHTE Meghalaya",
            "Approval and direct benefit transfer"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://megeducation.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://megeducation.gov.in",
        "sourceName": "Meghalaya Directorate of Higher & Technical Education",
        "tags": ["Meghalaya", "ST", "Post-Matric", "North East"]
    },

    # 15. MANIPUR
    {
        "name": "Manipur State Post-Matric Scholarship Scheme for ST/SC/OBC",
        "provider": "Department of Tribal Affairs & Hills, Government of Manipur",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Comprehensive scholarship scheme providing tuition fee support and maintenance allowance to eligible students from Manipur enrolled in post-matric courses across India.",
        "briefSummary": "Tuition fees & living allowances for Manipur college and university students.",
        "country": "India",
        "state": "Manipur",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 28000,
        "formattedAmount": "Tuition Fee + ₹1,000/mo allowance",
        "awardFrequency": "annual",
        "awardCoverage": "Institutional fees and living expenses",
        "benefits": [
            "Covers tuition and non-refundable fees",
            "Maintenance allowance for day scholars and hostellers",
            "Valid for recognized institutions in India"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma"],
        "coursesAndStreams": ["All Disciplines", "Engineering", "Medical", "General Degree"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Manipur"],
            "eligibleDomicile": ["Manipur"],
            "gender": "all",
            "socialCategories": ["ST", "SC", "OBC"]
        },
        "requiredDocuments": [
            "Domicile / Permanent Residential Certificate of Manipur",
            "Tribe / Caste Certificate issued by Deputy Commissioner",
            "Income Certificate issued by competent revenue authority",
            "College admission letter and fee breakdown"
        ],
        "applicationProcedure": [
            "Apply via National Scholarship Portal under Manipur State Schemes",
            "Institution Level Scrutiny",
            "Department of Tribal Affairs & Hills validation and sanction"
        ],
        "applicationStartDate": "2025-08-15",
        "deadline": "2026-11-30",
        "officialUrl": "https://tahmanipur.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://tahmanipur.gov.in",
        "sourceName": "Manipur Tribal Affairs & Hills",
        "tags": ["Manipur", "Post-Matric", "ST", "North East"]
    },

    # 16. MIZORAM
    {
        "name": "Mizoram Post-Matric Scholarship Scheme for Scheduled Tribe Students",
        "provider": "Mizoram Scholarship Board, Government of Mizoram",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Full post-matric financial assistance for Scheduled Tribe students of Mizoram studying in recognized higher educational institutions within and outside Mizoram.",
        "briefSummary": "Tuition fees & maintenance stipend for Mizoram college students via MSB.",
        "country": "India",
        "state": "Mizoram",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 25000,
        "formattedAmount": "Tuition Fee + ₹1,000/mo allowance",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition fees and monthly maintenance stipend",
        "benefits": [
            "100% course fee reimbursement",
            "Maintenance allowance for college students",
            "Dedicated support by Mizoram Scholarship Board"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "diploma"],
        "coursesAndStreams": ["All Disciplines", "Technical", "Degree", "Postgraduate"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "diploma"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Mizoram"],
            "eligibleDomicile": ["Mizoram"],
            "gender": "all",
            "socialCategories": ["ST"]
        },
        "requiredDocuments": [
            "Mizo Tribal Certificate issued by DC / Sub-Divisional Officer",
            "Residential Certificate of Mizoram",
            "Annual Family Income Certificate",
            "Marksheet of last examination passed"
        ],
        "applicationProcedure": [
            "Apply via Mizoram Scholarship Board portal / NSP",
            "College verifies enrollment and attendance",
            "MSB approves and issues payment order"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://mizoramscholarshipboard.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://mizoramscholarshipboard.in",
        "sourceName": "Mizoram Scholarship Board",
        "tags": ["Mizoram", "Post-Matric", "ST", "North East"]
    },

    # 17. NAGALAND
    {
        "name": "Nagaland State Merit Scholarship & Post-Matric ST Scholarship",
        "provider": "Directorate of Higher Education, Government of Nagaland",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit", "need"],
        "description": "Merit and post-matric welfare scholarship for indigenous students of Nagaland enrolled in higher education institutions across India.",
        "briefSummary": "Merit scholarship and fee reimbursement for Nagaland higher education students.",
        "country": "India",
        "state": "Nagaland",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 22000,
        "formattedAmount": "₹15,000 to ₹30,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Merit cash incentive + tuition fee reimbursement",
        "benefits": [
            "Direct merit incentive for academic excellence",
            "Post-matric fee reimbursement for ST students",
            "Online management via Common Scholarship Portal Nagaland"
        ],
        "educationLevels": ["undergraduate", "postgraduate", "phd"],
        "coursesAndStreams": ["All Disciplines", "Professional", "Technical", "General Degree"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate", "phd"],
            "minPercentage": 60,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Nagaland"],
            "eligibleDomicile": ["Nagaland"],
            "gender": "all",
            "socialCategories": ["ST"]
        },
        "requiredDocuments": [
            "Indigenous Inhabitant of Nagaland Certificate (IINC)",
            "Scheduled Tribe Certificate of Nagaland",
            "Academic transcripts with 60%+",
            "College Bonafide and fee receipt"
        ],
        "applicationProcedure": [
            "Register on Common Scholarship Portal Nagaland (scholarship.nagaland.gov.in)",
            "Submit online application and upload documents",
            "Directorate of Higher Education Nagaland scrutinizes and releases grant"
        ],
        "applicationStartDate": "2025-08-15",
        "deadline": "2026-11-30",
        "officialUrl": "https://scholarship.nagaland.gov.in",
        "applicationUrl": "https://scholarship.nagaland.gov.in",
        "sourceUrl": "https://dhenagaland.com",
        "sourceName": "Directorate of Higher Education Nagaland",
        "tags": ["Nagaland", "State Merit", "ST", "North East"]
    },

    # 18. ARUNACHAL PRADESH
    {
        "name": "Arunachal Pradesh State Stipend Scheme for APST Students",
        "provider": "Directorate of Higher & Technical Education, Government of Arunachal Pradesh",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Monthly stipend and book grant awarded to indigenous Arunachal Pradesh Scheduled Tribe (APST) students pursuing diploma, graduate, and postgraduate studies.",
        "briefSummary": "Monthly stipend & book grant for Arunachal Pradesh Scheduled Tribe students.",
        "country": "India",
        "state": "Arunachal Pradesh",
        "fundingType": "fixed_award",
        "currency": "INR",
        "amount": 18000,
        "formattedAmount": "₹1,400 to ₹2,000 / month + Book Grant",
        "awardFrequency": "annual",
        "awardCoverage": "Monthly living stipend + one-time annual book grant",
        "benefits": [
            "Consistent monthly stipend for living and academic costs",
            "Annual book grant up to ₹2,000",
            "Applicable across all recognized universities in India"
        ],
        "educationLevels": ["diploma", "undergraduate", "postgraduate", "phd"],
        "coursesAndStreams": ["All Disciplines", "Engineering", "Medical", "B.Sc", "B.A", "Polytechnic"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["diploma", "undergraduate", "postgraduate", "phd"],
            "minPercentage": 50,
            "maxAnnualIncome": 300000,
            "eligibleStates": ["Arunachal Pradesh"],
            "eligibleDomicile": ["Arunachal Pradesh"],
            "gender": "all",
            "socialCategories": ["ST"]
        },
        "requiredDocuments": [
            "Arunachal Pradesh Scheduled Tribe (APST) Certificate",
            "Permanent Residence Certificate (PRC)",
            "Marksheets of previous examinations",
            "College Bonafide and active bank account details"
        ],
        "applicationProcedure": [
            "Apply via National Scholarship Portal under Arunachal Pradesh State Schemes",
            "College verification and endorsement",
            "DHTE Arunachal Pradesh sanction and DBT transfer"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://apdhte.nic.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://apdhte.nic.in",
        "sourceName": "Directorate of Higher & Technical Education Arunachal Pradesh",
        "tags": ["Arunachal Pradesh", "APST Stipend", "ST", "North East"]
    },

    # 19. PUDUCHERRY
    {
        "name": "Perunthalaivar Kamarajar Financial Assistance Scheme Puducherry",
        "provider": "Department of Higher and Technical Education, Government of Puducherry",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "merit", "need"],
        "description": "Financial assistance scheme providing tuition fee reimbursement to resident students of the UT of Puducherry admitted to professional colleges through CENTAC.",
        "briefSummary": "Tuition fee reimbursement for Puducherry students admitted through CENTAC.",
        "country": "India",
        "state": "Puducherry",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 35000,
        "formattedAmount": "Up to ₹35,000 / year",
        "awardFrequency": "annual",
        "awardCoverage": "Tuition fee reimbursement directly to institution/student",
        "benefits": [
            "Reimbursement of tuition fees for engineering and medical courses",
            "Sanctioned for students admitted through centralized counseling (CENTAC)",
            "Continuous renewal based on good academic progress"
        ],
        "educationLevels": ["undergraduate"],
        "coursesAndStreams": ["Engineering (B.Tech)", "Medical (MBBS/BDS)", "Nursing", "Veterinary", "Agriculture"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["undergraduate"],
            "minPercentage": 50,
            "maxAnnualIncome": 500000,
            "eligibleStates": ["Puducherry"],
            "eligibleDomicile": ["Puducherry"],
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Puducherry Resident / Domicile Certificate",
            "CENTAC Admission Allotment Order",
            "Family Income Certificate",
            "College Fee Receipt"
        ],
        "applicationProcedure": [
            "Apply through Department of Higher and Technical Education Puducherry (dhte.py.gov.in)",
            "Submit CENTAC admission rank card and fee challan",
            "Government scrutiny and direct sanction"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://dhte.py.gov.in",
        "applicationUrl": "https://dhte.py.gov.in",
        "sourceUrl": "https://dhte.py.gov.in",
        "sourceName": "Government of Puducherry Higher & Technical Education",
        "tags": ["Puducherry", "CENTAC", "Engineering", "Tuition Reimbursement"]
    },

    # 20. CHANDIGARH (UT)
    {
        "name": "Post-Matric Scholarship Scheme for SC & OBC Students Chandigarh UT",
        "provider": "Department of Higher Education, Chandigarh Administration",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Full non-refundable fee concession and monthly maintenance grant for post-matric students belonging to SC and OBC categories residing and studying in Chandigarh.",
        "briefSummary": "Full course fee waiver and monthly maintenance allowance for Chandigarh UT college students.",
        "country": "India",
        "state": "Chandigarh",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 25000,
        "formattedAmount": "Full Tuition + ₹1,000/mo allowance",
        "awardFrequency": "annual",
        "awardCoverage": "100% compulsory college fees + maintenance stipend",
        "benefits": [
            "100% fee reimbursement in Chandigarh government and private colleges",
            "Monthly maintenance stipend",
            "Processed directly on National Scholarship Portal"
        ],
        "educationLevels": ["diploma", "undergraduate", "postgraduate"],
        "coursesAndStreams": ["All Disciplines", "Technical", "General Degree"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["diploma", "undergraduate", "postgraduate"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Chandigarh"],
            "eligibleDomicile": ["Chandigarh"],
            "gender": "all",
            "socialCategories": ["SC", "OBC"]
        },
        "requiredDocuments": [
            "Chandigarh UT Residence Certificate",
            "SC/OBC Caste Certificate",
            "Income Certificate issued by Sub-Divisional Magistrate (SDM)",
            "College Fee Receipt"
        ],
        "applicationProcedure": [
            "Apply via National Scholarship Portal under Chandigarh UT Schemes",
            "Institute-level verification by college nodal officer",
            "Director of Higher Education Chandigarh approval and payment"
        ],
        "applicationStartDate": "2025-08-15",
        "deadline": "2026-11-30",
        "officialUrl": "https://chdhe.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://chdhe.gov.in",
        "sourceName": "Chandigarh Administration Higher Education",
        "tags": ["Chandigarh", "Post-Matric", "SC", "OBC", "UT"]
    },

    # 21. ANDAMAN AND NICOBAR ISLANDS
    {
        "name": "Andaman & Nicobar Post-Matric Scholarship for ST & Higher Education Students",
        "provider": "Tribal Welfare Department, Andaman & Nicobar Administration",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Financial assistance covering 100% tuition fees, hostel boarding, and travel assistance for island students pursuing higher education inside the islands or on the Indian mainland.",
        "briefSummary": "Tuition fees, hostel fees & travel allowance for Andaman & Nicobar students.",
        "country": "India",
        "state": "Andaman and Nicobar Islands",
        "fundingType": "full_funding",
        "currency": "INR",
        "amount": 50000,
        "formattedAmount": "Full Tuition + Hostel & Travel Allowance",
        "awardFrequency": "annual",
        "awardCoverage": "Full tuition fees + residential hostel maintenance + annual mainland ship/flight passage",
        "benefits": [
            "100% tuition fee reimbursement",
            "Subsidized passage/travel grant between Port Blair and mainland India",
            "Hostel and book allowance"
        ],
        "educationLevels": ["diploma", "undergraduate", "postgraduate"],
        "coursesAndStreams": ["All Disciplines", "Engineering", "Medical", "Marine Science", "Arts", "Science"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["diploma", "undergraduate", "postgraduate"],
            "minPercentage": 50,
            "maxAnnualIncome": 300000,
            "eligibleStates": ["Andaman and Nicobar Islands"],
            "eligibleDomicile": ["Andaman and Nicobar Islands"],
            "gender": "all",
            "socialCategories": ["ST", "General", "OBC"]
        },
        "requiredDocuments": [
            "Andaman & Nicobar Local Resident / ST Certificate",
            "Income Certificate issued by Tehsildar",
            "College Admission Letter (Mainland / Island)",
            "Aadhaar card and bank account details"
        ],
        "applicationProcedure": [
            "Apply via National Scholarship Portal under Andaman & Nicobar Administration",
            "Verification by Tribal Welfare / Higher Education Cell Port Blair",
            "Direct disbursement via PFMS"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-30",
        "officialUrl": "https://andaman.gov.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://andaman.gov.in",
        "sourceName": "Andaman & Nicobar Administration",
        "tags": ["Andaman and Nicobar", "Island Students", "Post-Matric", "Travel Grant"]
    },

    # 22. DADRA AND NAGAR HAVELI AND DAMAN AND DIU
    {
        "name": "Post-Matric Scholarship Scheme for SC/ST/OBC DNH & DD",
        "provider": "Department of Social Welfare, UT Administration of Dadra & Nagar Haveli and Daman & Diu",
        "providerCategory": "state_gov",
        "categories": ["state_gov", "need"],
        "description": "Tuition fee reimbursement and monthly maintenance support for students of Dadra & Nagar Haveli and Daman & Diu enrolled in higher education programs.",
        "briefSummary": "Tuition fee reimbursement and maintenance grant for DNH & DD students.",
        "country": "India",
        "state": "Dadra and Nagar Haveli and Daman and Diu",
        "fundingType": "tuition_waiver",
        "currency": "INR",
        "amount": 28000,
        "formattedAmount": "Tuition Fee + ₹1,000/mo allowance",
        "awardFrequency": "annual",
        "awardCoverage": "Compulsory course fee reimbursement + monthly maintenance allowance",
        "benefits": [
            "100% course fee waiver in recognized technical and general colleges",
            "Monthly maintenance stipend",
            "Direct PFMS transfer"
        ],
        "educationLevels": ["diploma", "undergraduate", "postgraduate"],
        "coursesAndStreams": ["All Disciplines", "Technical", "General Degree"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["diploma", "undergraduate", "postgraduate"],
            "minPercentage": 50,
            "maxAnnualIncome": 250000,
            "eligibleStates": ["Dadra and Nagar Haveli and Daman and Diu"],
            "eligibleDomicile": ["Dadra and Nagar Haveli and Daman and Diu"],
            "gender": "all",
            "socialCategories": ["SC", "ST", "OBC"]
        },
        "requiredDocuments": [
            "DNH & DD Domicile / Resident Certificate",
            "Caste Certificate issued by Mamlatdar",
            "Income Certificate issued by Revenue Authority",
            "College Fee receipt and Bonafide"
        ],
        "applicationProcedure": [
            "Apply via National Scholarship Portal under DNH & DD State Scheme",
            "Verification by College and Social Welfare Department",
            "Direct disbursement via DBT"
        ],
        "applicationStartDate": "2025-08-15",
        "deadline": "2026-11-30",
        "officialUrl": "https://daman.nic.in",
        "applicationUrl": "https://scholarships.gov.in",
        "sourceUrl": "https://daman.nic.in",
        "sourceName": "DNH & DD Social Welfare Department",
        "tags": ["DNH and DD", "Post-Matric", "UT Administration", "Tuition Waiver"]
    }
]
