"""
GRANTLY — Extended International Scholarship & Fellowship Schemes
Covers world-class international government and university fellowships across
UK, USA, Germany, France, Netherlands, Sweden, Switzerland, Canada, Australia, New Zealand, Taiwan.
"""

EXTENDED_INTERNATIONAL_SCHEMES = [
    {
        "name": "British Council GREAT Scholarships for Indian Students",
        "provider": "British Council & UK Government GREAT Britain Campaign",
        "providerCategory": "international_government",
        "categories": ["international_government", "merit"],
        "description": "Scholarships jointly funded by the UK Government's GREAT Britain Campaign and British Council partnering with over 25 UK universities, offering £10,000 towards tuition fees for one-year postgraduate taught courses in the UK.",
        "briefSummary": "£10,000 tuition fee scholarship for one-year postgraduate Master's in the UK.",
        "country": "United Kingdom",
        "state": "International",
        "fundingType": "partial_funding",
        "currency": "GBP",
        "amount": 10000,
        "formattedAmount": "£10,000 Tuition Contribution",
        "awardFrequency": "one_time",
        "awardCoverage": "£10,000 credited directly towards university tuition fees for 1-year Master's degree",
        "benefits": [
            "£10,000 discount on tuition fees across premier UK universities",
            "Access to British Council networking and UK alumni events",
            "Opportunity to attend welcoming reception and connect with other GREAT scholars"
        ],
        "educationLevels": ["postgraduate"],
        "coursesAndStreams": ["Law", "Business", "Engineering", "Arts and Design", "Information Technology", "Climate Change and Sustainability"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["postgraduate"],
            "minPercentage": 60,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Indian Passport holding citizenship",
            "Undergraduate Degree Certificate and Academic Transcripts",
            "Offer of admission from a participating UK university",
            "English language proficiency test results (IELTS / PTE) or university waiver",
            "Statement of Purpose"
        ],
        "applicationProcedure": [
            "Apply for admission to an eligible Master's programme at a participating UK university",
            "Upon receiving an offer, apply for the GREAT Scholarship directly through the university's scholarship portal",
            "University selection committee evaluates and notifies successful recipients"
        ],
        "applicationStartDate": "2025-10-01",
        "deadline": "2026-05-31",
        "officialUrl": "https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships",
        "applicationUrl": "https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships",
        "sourceUrl": "https://study-uk.britishcouncil.org",
        "sourceName": "British Council Study UK",
        "tags": ["GREAT Scholarships", "United Kingdom", "British Council", "Master's", "Study Abroad"]
    },
    {
        "name": "Felix Scholarships for Indian Students (Oxford, Reading & SOAS)",
        "provider": "Felix Scholarship Trust",
        "providerCategory": "international_university",
        "categories": ["international_university", "merit", "need"],
        "description": "Full financial support enabling gifted underprivileged students from India to pursue postgraduate education (Master's or DPhil/PhD) at the University of Oxford, University of Reading, or SOAS University of London.",
        "briefSummary": "100% course fees, £19,000+ annual living stipend, and return airfare to the UK.",
        "country": "United Kingdom",
        "state": "International",
        "fundingType": "full_funding",
        "currency": "GBP",
        "amount": 42000,
        "formattedAmount": "Full Tuition + £19,000/yr Living + Flight",
        "awardFrequency": "annual",
        "awardCoverage": "100% university and college fees + generous living stipend + one return flight to the UK + books and clothing grant",
        "benefits": [
            "Complete tuition fee waiver at Oxford, Reading, or SOAS London",
            "Annual living stipend of over £19,000 to cover all accommodation and food",
            "Return economy airfare from India to the United Kingdom"
        ],
        "educationLevels": ["postgraduate", "phd"],
        "coursesAndStreams": ["All Disciplines", "Humanities", "Social Sciences", "Natural Sciences", "Law", "Development Studies"],
        "eligibleNationalities": ["Indian"],
        "requirements": {
            "educationLevels": ["postgraduate", "phd"],
            "minPercentage": 65,
            "maxAge": 30,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "First class Bachelor's or Master's degree from a recognized Indian University",
            "Evidence that the candidate has not previously studied outside India",
            "Felix Scholarship questionnaire and financial statement",
            "Two academic references and curriculum vitae"
        ],
        "applicationProcedure": [
            "Apply for graduate admission at Oxford, Reading, or SOAS before January course deadlines",
            "Tick the Felix Scholarship box in the university graduate application form",
            "Shortlisted candidates invited for personal interviews in India conducted by Trustees"
        ],
        "applicationStartDate": "2025-09-01",
        "deadline": "2026-01-31",
        "officialUrl": "https://www.felixscholarship.org",
        "applicationUrl": "https://www.felixscholarship.org",
        "sourceUrl": "https://www.felixscholarship.org",
        "sourceName": "Felix Scholarship Trust",
        "tags": ["Felix", "Oxford", "SOAS", "Reading", "United Kingdom", "Full Funding", "PhD", "Master's"]
    },
    {
        "name": "DAAD Helmut-Schmidt-Programme (Public Policy & Good Governance)",
        "provider": "German Academic Exchange Service (DAAD) & Federal Foreign Office of Germany",
        "providerCategory": "international_government",
        "categories": ["international_government", "merit"],
        "description": "Supports future leaders from developing countries in politics, law, economics, and administration who want to actively contribute to the social and political development of their home countries with a master's degree in Germany.",
        "briefSummary": "Full tuition waiver, €934/month stipend, health insurance, and travel allowance in Germany.",
        "country": "Germany",
        "state": "International",
        "fundingType": "full_funding",
        "currency": "EUR",
        "amount": 20000,
        "formattedAmount": "Full Tuition + €934/mo Stipend + Insurance",
        "awardFrequency": "monthly",
        "awardCoverage": "Monthly scholarship installment of €934 + health, accident, and liability insurance + travel allowance + 6-month preparatory German language course",
        "benefits": [
            "100% tuition-free master's degree at selected German universities",
            "Monthly stipend of €934 to cover accommodation and living costs",
            "Intensive German language course prior to master's studies",
            "Research grant and family allowance where applicable"
        ],
        "educationLevels": ["postgraduate"],
        "coursesAndStreams": ["Public Policy", "Good Governance", "International Relations", "Public Management", "Development Studies", "Law"],
        "eligibleNationalities": ["Indian", "International"],
        "requirements": {
            "educationLevels": ["postgraduate"],
            "minPercentage": 65,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "DAAD Application Form completed in English or German",
            "Hand-signed letter of motivation detailing political/social engagement",
            "University Degree Certificate and detailed transcripts",
            "Language certificate in English (TOEFL/IELTS) or German",
            "Two letters of recommendation from academic or employer sources"
        ],
        "applicationProcedure": [
            "Select up to two eligible master's courses from Helmut-Schmidt list",
            "Submit application directly to the respective universities via their online portals",
            "University selection committee and DAAD review applications and award fellowships"
        ],
        "applicationStartDate": "2025-06-01",
        "deadline": "2026-07-31",
        "officialUrl": "https://www.daad.de/en/information-services-for-higher-education-institutions/programme-priority-areas/helmut-schmidt-programme/",
        "applicationUrl": "https://www.daad.de",
        "sourceUrl": "https://www.daad.de",
        "sourceName": "DAAD Germany",
        "tags": ["DAAD", "Helmut Schmidt", "Germany", "Public Policy", "Full Funding", "Master's"]
    },
    {
        "name": "Eiffel Excellence Scholarship Programme (Campus France)",
        "provider": "Ministry for Europe and Foreign Affairs (France) & Campus France",
        "providerCategory": "international_government",
        "categories": ["international_government", "merit"],
        "description": "Prestigious French Government scholarship designed to attract top foreign students for master's and PhD programs at French higher education institutions in Science & Technology, Management, and Law.",
        "briefSummary": "€1,181/month (Master's) or €1,800/month (PhD) stipend + return flights and insurance in France.",
        "country": "France",
        "state": "International",
        "fundingType": "full_funding",
        "currency": "EUR",
        "amount": 25000,
        "formattedAmount": "€1,181 to €1,800 / month + Flight + Insurance",
        "awardFrequency": "monthly",
        "awardCoverage": "Monthly living allowance of €1,181 (Master's) or €1,800 (Doctorate) + international return airfare + domestic travel + social security insurance + cultural activities allowance",
        "benefits": [
            "Substantial monthly living allowance throughout duration of study in France",
            "Return international flight between home country and France",
            "Priority access to CROUS student public housing",
            "Exemption from French public university tuition fees"
        ],
        "educationLevels": ["postgraduate", "phd"],
        "coursesAndStreams": ["Biology and Health", "Ecological Transition", "Mathematics and Digital", "Engineering Sciences", "History and French Civilization", "Law and Political Science", "Economics and Management"],
        "eligibleNationalities": ["Indian", "International"],
        "requirements": {
            "educationLevels": ["postgraduate", "phd"],
            "minPercentage": 70,
            "maxAge": 30,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Curriculum Vitae in French or English",
            "Cover letter explaining academic project and career goals in relation to France",
            "Academic transcripts and diploma translations",
            "Language proficiency certificates (French DELF/DALF or English IELTS)",
            "Institutional nomination letter from French university"
        ],
        "applicationProcedure": [
            "Contact French higher education institution of choice to secure admission nomination",
            "The French institution approves and submits the Eiffel application to Campus France on student's behalf",
            "Campus France jury evaluates applications and announces winners in April"
        ],
        "applicationStartDate": "2025-10-01",
        "deadline": "2026-01-10",
        "officialUrl": "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence",
        "applicationUrl": "https://www.campusfrance.org",
        "sourceUrl": "https://www.campusfrance.org",
        "sourceName": "Campus France",
        "tags": ["Eiffel Excellence", "France", "Campus France", "Full Funding", "Master's", "PhD"]
    },
    {
        "name": "NL Scholarship (Formerly Holland Scholarship) - Government of the Netherlands",
        "provider": "Dutch Ministry of Education, Culture and Science & Nuffic",
        "providerCategory": "international_government",
        "categories": ["international_government", "merit"],
        "description": "Financed by the Dutch Ministry of Education, Culture and Science along with Dutch research universities and universities of applied sciences for international students from outside the EEA wishing to do a bachelor's or master's in the Netherlands.",
        "briefSummary": "€5,000 to €15,000 scholarship for Bachelor's or Master's studies in the Netherlands.",
        "country": "Netherlands",
        "state": "International",
        "fundingType": "partial_funding",
        "currency": "EUR",
        "amount": 10000,
        "formattedAmount": "€5,000 to €15,000",
        "awardFrequency": "one_time",
        "awardCoverage": "One-time contribution towards living expenses and study costs during first year in the Netherlands",
        "benefits": [
            "Direct cash award of €5,000 (often renewable or paired with institutional waivers)",
            "Available across world-renowned Dutch research institutions (Delft, Amsterdam, Utrecht, Leiden, Wageningen)",
            "Gateway to post-study 'Orientation Year' (zoekjaar) work visa in the Netherlands"
        ],
        "educationLevels": ["undergraduate", "postgraduate"],
        "coursesAndStreams": ["All Disciplines", "Engineering", "Data Science", "Agriculture", "Environmental Sciences", "Economics"],
        "eligibleNationalities": ["Indian", "International"],
        "requirements": {
            "educationLevels": ["undergraduate", "postgraduate"],
            "minPercentage": 65,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Citizenship of a non-EEA country",
            "Conditional or unconditional letter of admission from participating Dutch university",
            "Academic transcripts and degree diplomas",
            "Motivation letter and English proficiency certificate (IELTS / TOEFL)"
        ],
        "applicationProcedure": [
            "Apply to a participating Dutch university via Studielink and the university application portal",
            "Apply for the NL Scholarship directly through the university's scholarship application system",
            "University selection committee selects recipients based on academic excellence"
        ],
        "applicationStartDate": "2025-10-15",
        "deadline": "2026-05-01",
        "officialUrl": "https://www.studyinnl.org/finances/nl-scholarship",
        "applicationUrl": "https://www.studyinnl.org",
        "sourceUrl": "https://www.studyinnl.org",
        "sourceName": "Nuffic Study in NL",
        "tags": ["NL Scholarship", "Netherlands", "Nuffic", "Study in Europe", "Master's"]
    },
    {
        "name": "Swedish Institute Scholarship for Global Professionals (SI GP)",
        "provider": "Swedish Institute, Government of Sweden",
        "providerCategory": "international_government",
        "categories": ["international_government", "merit"],
        "description": "Fully funded scholarship funded by the Swedish Ministry for Foreign Affairs for ambitious future leaders with proven work experience to pursue full-time master's degree programs in Sweden.",
        "briefSummary": "100% tuition fees, SEK 12,000/month living stipend, travel grant and insurance in Sweden.",
        "country": "Sweden",
        "state": "International",
        "fundingType": "full_funding",
        "currency": "SEK",
        "amount": 350000,
        "formattedAmount": "Full Tuition + SEK 12,000/mo + Travel",
        "awardFrequency": "monthly",
        "awardCoverage": "Full tuition fees paid directly to Swedish university + SEK 12,000 monthly living allowance + SEK 15,000 travel grant + health and accident insurance",
        "benefits": [
            "100% coverage of all tuition fees across Swedish universities (KTH, Lund, Uppsala, Chalmers, Stockholm)",
            "SEK 12,000 per month for living expenses throughout the master's programme",
            "Membership in the SI Network for Future Global Leaders and lifelong alumni network"
        ],
        "educationLevels": ["postgraduate"],
        "coursesAndStreams": ["All Disciplines", "Sustainability", "Innovation", "Engineering", "Public Health", "Computer Science", "Human Rights"],
        "eligibleNationalities": ["Indian", "International"],
        "requirements": {
            "educationLevels": ["postgraduate"],
            "minPercentage": 60,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Proof of work experience (minimum 3,000 demonstrated hours)",
            "Proof of leadership experience form signed by employer/organization",
            "Curriculum Vitae on official SI template",
            "Two letters of reference on official SI template",
            "Application confirmation from University Admissions in Sweden"
        ],
        "applicationProcedure": [
            "Apply for up to four eligible master's programmes through universityadmissions.se by mid-January",
            "Submit the SI Scholarship application during the dedicated portal window in February",
            "Notification of master's admission and SI Scholarship results published in April"
        ],
        "applicationStartDate": "2025-10-15",
        "deadline": "2026-02-28",
        "officialUrl": "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
        "applicationUrl": "https://si.se",
        "sourceUrl": "https://si.se",
        "sourceName": "Swedish Institute",
        "tags": ["Swedish Institute", "Sweden", "Global Professionals", "Full Funding", "Master's"]
    },
    {
        "name": "Swiss Government Excellence Scholarships for Foreign Scholars",
        "provider": "Federal Commission for Scholarships for Foreign Students (FCS), Government of Switzerland",
        "providerCategory": "international_government",
        "categories": ["international_government", "research", "merit"],
        "description": "Prestigious government scholarships aimed at young foreign researchers who have completed a master's degree or PhD to pursue research or doctoral degrees at Swiss public cantonal universities or Federal Institutes of Technology (ETH Zurich, EPFL).",
        "briefSummary": "CHF 1,920/month stipend, tuition waiver, health insurance, and Swiss flight allowance.",
        "country": "Switzerland",
        "state": "International",
        "fundingType": "full_funding",
        "currency": "CHF",
        "amount": 25000,
        "formattedAmount": "CHF 1,920 / month + Tuition Waiver + Airfare",
        "awardFrequency": "monthly",
        "awardCoverage": "Monthly stipend of CHF 1,920 + full university tuition waiver + mandatory Swiss health insurance + return flight ticket to home country + CHF 300 housing allowance",
        "benefits": [
            "Conduct cutting-edge doctoral or postdoctoral research at ETH Zurich, EPFL, or Swiss universities",
            "Complete exemption from semester tuition fees",
            "Comprehensive Swiss health and accident insurance covered by FCS"
        ],
        "educationLevels": ["phd"],
        "coursesAndStreams": ["All Disciplines", "Physical Sciences", "Engineering", "Life Sciences", "Medicine", "Humanities"],
        "eligibleNationalities": ["Indian", "International"],
        "requirements": {
            "educationLevels": ["phd"],
            "minPercentage": 70,
            "maxAge": 35,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Official Swiss Government Scholarship application form",
            "Letter from an academic host professor in Switzerland confirming willingness to supervise research",
            "Detailed research proposal (maximum 5 pages)",
            "Two confidential letters of recommendation on official FCS form",
            "Health certificate on official Swiss form"
        ],
        "applicationProcedure": [
            "Contact a Swiss university professor and obtain a signed confirmation of supervision",
            "Obtain application package from Swiss Embassy in New Delhi",
            "Submit 3 sets of physical application dossiers to the Swiss Embassy by November deadline"
        ],
        "applicationStartDate": "2025-08-01",
        "deadline": "2026-11-12",
        "officialUrl": "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
        "applicationUrl": "https://www.eda.admin.ch/newdelhi",
        "sourceUrl": "https://www.sbfi.admin.ch",
        "sourceName": "State Secretariat for Education, Research and Innovation (SERI Switzerland)",
        "tags": ["Switzerland", "ETH Zurich", "EPFL", "PhD Research", "Full Funding", "Excellence"]
    },
    {
        "name": "Australian Government Research Training Program (RTP) Stipend",
        "provider": "Department of Education, Australian Government & Participating Universities",
        "providerCategory": "international_government",
        "categories": ["international_government", "research", "merit"],
        "description": "Australian Government Research Training Program (RTP) scholarships provided to domestic and international students of exceptional research potential to undertake a Research Doctorate or Research Master's degree in Australia.",
        "briefSummary": "100% tuition offset + AUD $35,000 to $40,000/year living stipend + overseas student health cover.",
        "country": "Australia",
        "state": "International",
        "fundingType": "full_funding",
        "currency": "AUD",
        "amount": 42000,
        "formattedAmount": "Full Tuition + AUD $35,000-$40,000/yr Living",
        "awardFrequency": "annual",
        "awardCoverage": "100% RTP Tuition Fee Offset + RTP Living Stipend paid fortnightly + Overseas Student Health Cover (OSHC) + relocation allowance",
        "benefits": [
            "Complete tuition fee waiver for up to 3.5 to 4 years of PhD research",
            "Tax-free annual living stipend of AUD $35,000 - $40,000",
            "Available across top Australian Group of Eight (Go8) universities (ANU, Melbourne, Sydney, UNSW, Queensland, Monash, Adelaide, UWA)"
        ],
        "educationLevels": ["phd", "postgraduate"],
        "coursesAndStreams": ["All Disciplines", "Science", "Technology", "Engineering", "Medicine", "Humanities", "Social Sciences"],
        "eligibleNationalities": ["Indian", "International"],
        "requirements": {
            "educationLevels": ["phd", "postgraduate"],
            "minPercentage": 75,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Four-year Bachelor's with First Class Honours or Master's degree with research thesis component",
            "Research Proposal outlining project scope and methodology",
            "Curriculum Vitae including publications and research output",
            "English language proficiency (IELTS / TOEFL)",
            "Two Academic Referees reports"
        ],
        "applicationProcedure": [
            "Identify and contact a potential research supervisor at participating Australian university",
            "Submit online application for PhD candidature and tick the box to be considered for RTP scholarship",
            "Centrally assessed and awarded by university graduate research committee"
        ],
        "applicationStartDate": "2025-06-01",
        "deadline": "2026-08-31",
        "officialUrl": "https://www.education.gov.au/research-block-grants/research-training-program",
        "applicationUrl": "https://www.education.gov.au",
        "sourceUrl": "https://www.education.gov.au",
        "sourceName": "Australian Government Department of Education",
        "tags": ["Australia", "RTP", "PhD", "Group of Eight", "Full Funding", "Research"]
    },
    {
        "name": "Pierre Elliott Trudeau Foundation Doctoral Scholarships (Canada)",
        "provider": "Pierre Elliott Trudeau Foundation",
        "providerCategory": "international_university",
        "categories": ["international_university", "research", "merit"],
        "description": "Three-year leadership and research program supporting exceptional PhD students in the humanities and social sciences at Canadian universities who are committed to public engagement and addressing critical social issues.",
        "briefSummary": "CAD $40,000/year stipend + $20,000/year research & travel allowance for 3 years in Canada.",
        "country": "Canada",
        "state": "International",
        "fundingType": "full_funding",
        "currency": "CAD",
        "amount": 60000,
        "formattedAmount": "CAD $40,000/yr Stipend + $20,000/yr Travel",
        "awardFrequency": "annual",
        "awardCoverage": "Annual allowance of CAD $40,000 for living costs + CAD $20,000 research and networking allowance for 3 years",
        "benefits": [
            "Total funding of CAD $180,000 over 3 years",
            "One-on-one mentorship by appointed Trudeau Foundation Fellows and Mentors",
            "Participation in annual leadership institutes and retreats across Canada"
        ],
        "educationLevels": ["phd"],
        "coursesAndStreams": ["Human Rights", "Responsible Citizenship", "Canada and the World", "People and their Natural Environment", "Humanities", "Social Sciences"],
        "eligibleNationalities": ["Indian", "International"],
        "requirements": {
            "educationLevels": ["phd"],
            "minPercentage": 75,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Enrolled in or accepted to 1st or 2nd year of full-time doctoral program at Canadian university",
            "Doctoral research project description and public engagement vision",
            "Transcripts of all post-secondary education",
            "Three reference letters (two academic, one non-academic leadership)"
        ],
        "applicationProcedure": [
            "Apply directly through the Pierre Elliott Trudeau Foundation application portal",
            "Semi-finalists participate in digital group discussions and individual interviews",
            "Final selection of 16 Scholars announced in spring"
        ],
        "applicationStartDate": "2025-09-15",
        "deadline": "2026-12-02",
        "officialUrl": "https://www.trudeaufoundation.ca/scholarship",
        "applicationUrl": "https://www.trudeaufoundation.ca",
        "sourceUrl": "https://www.trudeaufoundation.ca",
        "sourceName": "Pierre Elliott Trudeau Foundation",
        "tags": ["Trudeau Foundation", "Canada", "PhD", "Humanities", "Leadership", "Full Funding"]
    },
    {
        "name": "Hubert H. Humphrey Fellowship Program (United States)",
        "provider": "U.S. Department of State, Bureau of Educational and Cultural Affairs",
        "providerCategory": "international_government",
        "categories": ["international_government", "merit"],
        "description": "Fulbright exchange activity that brings accomplished mid-career professionals from designated countries to the United States for a year of non-degree graduate-level study, leadership development, and professional collaboration.",
        "briefSummary": "100% tuition, monthly maintenance stipend, health insurance, airfare & computer subsidy.",
        "country": "United States",
        "state": "International",
        "fundingType": "full_funding",
        "currency": "USD",
        "amount": 50000,
        "formattedAmount": "Full Tuition + Living Stipend + Airfare + Tech",
        "awardFrequency": "annual",
        "awardCoverage": "Payment of tuition and fees at assigned host university + monthly living stipend + accident and sickness insurance + international and domestic travel + book allowance + one-time computer subsidy",
        "benefits": [
            "Complete financial coverage for 10-month professional fellowship in the United States",
            "Placement at top US universities with tailored professional affiliation / internship",
            "Global alumni network of leaders across government, media, and public policy"
        ],
        "educationLevels": ["postgraduate"],
        "coursesAndStreams": ["Public Policy", "Communications and Journalism", "Human Rights", "Public Health", "Climate Change", "Educational Administration", "Economic Development"],
        "eligibleNationalities": ["Indian", "International"],
        "requirements": {
            "educationLevels": ["postgraduate"],
            "minPercentage": 60,
            "gender": "all",
            "socialCategories": ["General", "OBC", "SC", "ST", "EWS"]
        },
        "requiredDocuments": [
            "Undergraduate degree marksheets with minimum 5 years of full-time professional experience",
            "Demonstrated commitment to public service and potential for leadership",
            "Written essays on professional goals and US affiliation plan",
            "Valid Indian Passport and employer NOC / support letter"
        ],
        "applicationProcedure": [
            "Apply through United States-India Educational Foundation (USIEF) portal in India",
            "USIEF national screening and interview panel in New Delhi",
            "J. William Fulbright Foreign Scholarship Board final approval in Washington D.C."
        ],
        "applicationStartDate": "2025-02-01",
        "deadline": "2026-06-15",
        "officialUrl": "https://www.humphreyfellowship.org",
        "applicationUrl": "https://www.usief.org.in/Hubert-H-Humphrey-Fellowship-Program.aspx",
        "sourceUrl": "https://www.humphreyfellowship.org",
        "sourceName": "U.S. Department of State - Humphrey Fellowship",
        "tags": ["Humphrey Fellowship", "United States", "USIEF", "Public Policy", "Full Funding"]
    }
]
