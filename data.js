let users = [
    {
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer"
    },
    {
        name: "Jane Smith",
        age: 25,
        occupation: "Graphic Designer"
    },
    {
        name: "Sam",
        age: 21,
        occupation: "Master student"
    },
    {
        name: "Amy",
        age: 21,
        occupation: "Senior year student"
    },
    {
        name: "Mishelle",
        age: 21,
        occupation: "Master student"
    },
    {
        name: "Mia",
        age: 21,
        occupation: "Senior year student"
    },
    {
        name: "Ken",
        age: 21,
        occupation: "Master student"
    },
    {
        name: "Jane Smith",
        age: 25,
        occupation: "Graphic Designer"
    },
    {
        name: "Emily Johnson",
        age: 28,
        occupation: "Teacher"
    },
    {
        name: "Michael Brown",
        age: 32,
        occupation: "Civil Engineer"
    },
    {
        name: "Sarah Davis",
        age: 29,
        occupation: "Marketing Specialist"
    },
    {
        name: "David Wilson",
        age: 35,
        occupation: "Data Scientist"
    },
    {
        name: "Laura Martinez",
        age: 27,
        occupation: "Social Worker"
    },
    {
        name: "Robert Garcia",
        age: 40,
        occupation: "Business Analyst"
    },
    {
        name: "Sophia Taylor",
        age: 24,
        occupation: "Content Writer"
    },
    {
        name: "James Moore",
        age: 31,
        occupation: "IT Support Technician"
    },
    {
        name: "Olivia Harris",
        age: 26,
        occupation: "Accountant"
    },
    {
        name: "Daniel Clark",
        age: 34,
        occupation: "Architect"
    },
    {
        name: "Mia Rodriguez",
        age: 23,
        occupation: "Research Assistant"
    },
    {
        name: "Christopher Lewis",
        age: 36,
        occupation: "Project Manager"
    },
    {
        name: "Ava Walker",
        age: 28,
        occupation: "Event Planner"
    },
    {
        name: "Ethan Hall",
        age: 30,
        occupation: "Mechanical Engineer"
    },
    {
        name: "Chloe Young",
        age: 27,
        occupation: "UX Designer"
    },
    {
        name: "Noah Allen",
        age: 33,
        occupation: "Environmental Scientist"
    },
    {
        name: "Isabella King",
        age: 25,
        occupation: "HR Specialist"
    },
    {
        name: "Alexander Wright",
        age: 29,
        occupation: "Web Developer"
    },
    {
        name: "Liam Scott",
        age: 38,
        occupation: "Operations Manager"
    },
    {
        name: "Zoe Adams",
        age: 22,
        occupation: "Intern"
    },
    {
        name: "Benjamin Carter",
        age: 31,
        occupation: "Financial Analyst"
    },
    {
        name: "Ella Mitchell",
        age: 28,
        occupation: "Nurse"
    },
    {
        name: "Lucas Perez",
        age: 26,
        occupation: "Chemist"
    },
    {
        name: "Grace Rivera",
        age: 24,
        occupation: "Freelance Writer"
    },
    {
        name: "Henry Phillips",
        age: 35,
        occupation: "Electrical Engineer"
    },
    {
        name: "Victoria Evans",
        age: 29,
        occupation: "Journalist"
    },
    {
        name: "Jack Turner",
        age: 32,
        occupation: "Product Manager"
    },
    {
        name: "Lily Campbell",
        age: 23,
        occupation: "Paralegal"
    },
    {
        name: "Ryan Hughes",
        age: 37,
        occupation: "Entrepreneur"
    }

]

let jobs =[
    {
        employer: "Amazing Software",
        type: "Full Time",
        title: "Software Engineer",
        description:"Build code to help enhance and maintain software",
        salary:"130,000 -160,000 / year"
    },
    {
        employer: "Ideative Design",
        type: "Full Time",
        title: "Product Designer",
        description:"Design product to enhance user experience",
        salary:"120,000 - 150,000 / year"
    },
    {
        employer: "Best Marketing Company",
        type: "Intern",
        title: "Marketing assistant",
        description:"Assist marketing team to coordinate marketing tasks",
        salary:"40,000 - 60,000 / year"
    },
    {
        employer: "Social Camp",
        type: "Part Time",
        title: "Social Media program assistant",
        description:"Assist Social Media team to maintain program operation",
        salary:"30 - 40 / hour"
    },
    {
        employer: "Product Design Group",
        type: "Entry Level",
        title: "UX Designer",
        description:"Enhance user experience through design",
        salary:"90,000 - 120,000 / year"
    },
    {
        employer: "Beauty Salon",
        type: "Entry Level",
        title: "UX Designer",
        description:"Beautify user experience through design a more attrative salon",
        salary:"90,000 - 120,000 / year"
    },
    {
        employer: "Chat Heaven",
        type: "Part Time",
        title: "Chat support representative",
        description:"Assist chat program operation",
        salary:"30 - 40 / hour"
    },
    {
        employer: "Coffee Making Ltd",
        type: "Intern",
        title: "Coffee processing assistant",
        description:"Assist coffee making process with product team",
        salary:"40,000 - 60,000 / year"
    },
    {
        employer: "Roadside Management",
        type: "Full Time",
        title: "Product Designer",
        description:"Design roadside product to enhance user experience for drivers",
        salary:"120,000 - 150,000 / year"
    },
    {
        employer: "Fun Coding Company",
        type: "Full Time",
        title: "Software Engineer",
        description:"Build code to help others in communities and have fun",
        salary:"130,000 -160,000 / year"
    },
    {
    employer: "Roadside Management",
    type: "Full Time",
    title: "Product Designer",
    description: "Design roadside products to enhance user experience for drivers",
    salary: "120,000 - 150,000 / year"
    },
    {
        employer: "TechHub Innovations",
        type: "Part Time",
        title: "Software Engineer",
        description: "Develop and maintain scalable web applications for startups",
        salary: "80,000 - 100,000 / year"
    },
    {
        employer: "Green Future Solutions",
        type: "Full Time",
        title: "Environmental Scientist",
        description: "Conduct research and develop solutions for sustainable energy",
        salary: "95,000 - 125,000 / year"
    },
    {
        employer: "Urban Creatives",
        type: "Contract",
        title: "Graphic Designer",
        description: "Create visual content for marketing campaigns and social media",
        salary: "60,000 - 85,000 / year"
    },
    {
        employer: "NextGen Finance",
        type: "Full Time",
        title: "Financial Analyst",
        description: "Analyze financial data to support investment decisions",
        salary: "90,000 - 110,000 / year"
    },
    {
        employer: "HealthFirst",
        type: "Full Time",
        title: "Nurse",
        description: "Provide patient care and support in a fast-paced hospital environment",
        salary: "70,000 - 95,000 / year"
    },
    {
        employer: "Skyline Architects",
        type: "Full Time",
        title: "Architect",
        description: "Design and oversee the construction of innovative building projects",
        salary: "100,000 - 140,000 / year"
    },
    {
        employer: "WebWizards Agency",
        type: "Freelance",
        title: "UX Designer",
        description: "Improve user experience for mobile and web applications",
        salary: "50,000 - 70,000 / project"
    },
    {
        employer: "AcademiaPlus",
        type: "Part Time",
        title: "Teacher",
        description: "Instruct high school students in mathematics and science subjects",
        salary: "50,000 - 60,000 / year"
    },
    {
        employer: "MarketLeads Inc.",
        type: "Full Time",
        title: "Marketing Specialist",
        description: "Develop and execute marketing strategies to boost brand awareness",
        salary: "80,000 - 100,000 / year"
    },
    {
        employer: "BlueSky Systems",
        type: "Full Time",
        title: "Mechanical Engineer",
        description: "Design and develop mechanical components for aerospace projects",
        salary: "110,000 - 135,000 / year"
    },
    {
        employer: "EcoWorld",
        type: "Full Time",
        title: "Social Worker",
        description: "Support and advocate for community welfare initiatives",
        salary: "60,000 - 75,000 / year"
    },
    {
        employer: "VistaTech Solutions",
        type: "Full Time",
        title: "Data Scientist",
        description: "Analyze large datasets to provide actionable business insights",
        salary: "120,000 - 160,000 / year"
    },
    {
        employer: "MedCare Inc.",
        type: "Part Time",
        title: "Research Assistant",
        description: "Assist in conducting medical research and clinical trials",
        salary: "40,000 - 60,000 / year"
    },
    {
        employer: "FutureVision Media",
        type: "Full Time",
        title: "Content Writer",
        description: "Produce engaging content for blogs, websites, and social platforms",
        salary: "55,000 - 75,000 / year"
    },
    {
        employer: "CoreLogic Analytics",
        type: "Full Time",
        title: "Business Analyst",
        description: "Identify business needs and propose solutions for process improvement",
        salary: "85,000 - 115,000 / year"
    },
    {
        employer: "SkyLine Events",
        type: "Part Time",
        title: "Event Planner",
        description: "Organize and manage corporate and social events",
        salary: "45,000 - 65,000 / year"
    },
    {
        employer: "Bright Minds Learning Center",
        type: "Part Time",
        title: "Tutor",
        description: "Provide academic support to students in various subjects",
        salary: "25 - 40 / hour"
    },
    {
        employer: "CodeMasters LLC",
        type: "Contract",
        title: "Web Developer",
        description: "Build and maintain responsive websites for clients",
        salary: "75,000 - 100,000 / project"
    },
    {
        employer: "Energy Solutions Group",
        type: "Full Time",
        title: "Operations Manager",
        description: "Oversee daily operations and implement company policies",
        salary: "100,000 - 130,000 / year"
    },
    {
        employer: "Innovate Labs",
        type: "Full Time",
        title: "Product Manager",
        description: "Lead product development from ideation to launch",
        salary: "120,000 - 150,000 / year"
    },
    {
        employer: "UrbanGreen Initiatives",
        type: "Full Time",
        title: "Environmental Planner",
        description: "Design sustainable city layouts and infrastructure",
        salary: "85,000 - 110,000 / year"
    },
    {
        employer: "LegalEase",
        type: "Part Time",
        title: "Paralegal",
        description: "Support attorneys with legal research and case preparation",
        salary: "50,000 - 65,000 / year"
    },
    {
        employer: "SilverEdge Tech",
        type: "Full Time",
        title: "IT Support Technician",
        description: "Troubleshoot and resolve technical issues for clients",
        salary: "60,000 - 80,000 / year"
    },
    {
        employer: "BrightSpace Media",
        type: "Full Time",
        title: "Journalist",
        description: "Report and write articles on current events and trends",
        salary: "55,000 - 85,000 / year"
    },
    {
        employer: "FastTrack Logistics",
        type: "Full Time",
        title: "Supply Chain Analyst",
        description: "Optimize supply chain operations for efficiency",
        salary: "70,000 - 95,000 / year"
    },
    {
        employer: "Prime Solutions",
        type: "Freelance",
        title: "Freelance Writer",
        description: "Create written content for various industries and clients",
        salary: "30,000 - 50,000 / project"
    },
    {
        employer: "SkyBright Electronics",
        type: "Full Time",
        title: "Electrical Engineer",
        description: "Design and test electrical systems and components",
        salary: "110,000 - 140,000 / year"
    },
    {
        employer: "StartupWorks",
        type: "Full Time",
        title: "Entrepreneur",
        description: "Build and grow innovative business ventures",
        salary: "Varies based on business success"
    }

]