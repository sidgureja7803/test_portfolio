// Mock data for Gunheer Kaur's Portfolio
// Images removed as requested

export const personalInfo = {
  name: "GUNHEER KAUR",
  title: "Full Stack & AI Developer",
  tagline: "Building AI-powered products and scalable full-stack applications",
  email: "gunheerahuja@gmail.com",
  phone: "+91 7009734180",
  location: "Punjab, India",
  bio: "Full Stack and AI Developer skilled in building scalable web applications, Retrieval Augmented Generation (RAG) systems, and real-time collaborative platforms. Experienced in React.js, Node.js, LangChain, Vector Databases, and cloud deployment with a strong foundation in DSA, DBMS, OS, and system design."
};

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gunheer/", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/gunheerahuja", icon: "github" },
  { name: "LeetCode", url: "https://leetcode.com", icon: "code" }
];

export const skills = {
  programming: ["C++", "Python", "Java", "JavaScript"],
  frontend: ["React.js", "Redux", "Next.js", "HTML", "CSS", "GSAP"],
  backend: ["Node.js", "Express.js", "Fastify", "gRPC", "LangChain", "Autogen"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Vector DB"],
  ai: ["LLMs", "RAG", "OpenAI API", "LangChain", "Prompt Engineering"],
  tools: ["Git", "GitHub", "Postman", "AWS", "MATLAB", "Arduino", "AutoCAD"],
  core: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "OOP"]
};

export const experience = [
  {
    id: 1,
    company: "Bonn Nutrients Pvt. Ltd.",
    position: "Summer Intern",
    duration: "Feb 2026 – Jun 2026",
    description: [
      "Developed an end-to-end Power BI dashboard analyzing multi-channel FMCG sales data from Blinkit, Zepto, and Swiggy.",
      "Designed a Star Schema data model and performed ETL using Power Query to process and integrate 50M+ records.",
      "Implemented advanced DAX measures for KPI tracking including MoM growth, revenue contribution, and product ranking.",
      "Performed descriptive and diagnostic analytics to identify high-performing regions and optimize channel strategies."
    ],
    technologies: ["Power BI", "Power Query", "DAX", "ETL", "Data Analytics"]
  }
];

export const openSource = [
  {
    id: 1,
    title: "Code for GovTech (C4GT)",
    project: "Open Source Contributor",
    duration: "Aug 2025 – Sep 2025",
    description: [
      "Contributed to Digital Public Goods projects including Medic and Mifos under the C4GT initiative.",
      "Implemented UI enhancements and bug fixes using JavaScript and explored feature development in Kotlin.",
      "Collaborated with 100+ contributors through PR reviews, debugging, and documentation improvements.",
      "Gained practical exposure to GitHub workflows and CI/CD practices."
    ],
    technologies: ["JavaScript", "Kotlin", "Git", "GitHub", "CI/CD"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Insightify - AI Powered YouTube Chat Platform",
    description: "A RAG-based web application enabling intelligent conversations with YouTube video content.",
    longDescription:
      "Engineered a full-stack Retrieval Augmented Generation (RAG) web application enabling intelligent conversations with YouTube video content through automated transcript processing and semantic search capabilities. Implemented LangChain framework with OpenAI API integration for context-aware response generation, achieving 90% answer relevance and reducing AI hallucination errors by 25% through vector database optimization.",
    technologies: ["React.js", "Node.js", "LangChain", "Vector DB", "OpenAI API"],
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "CodeFusion",
    description: "A real-time collaborative coding platform for solving DSA problems together.",
    longDescription:
      "Built a real-time collaborative coding platform for solving DSA problems together using Liveblocks. Integrated a Dockerized Judge0 backend for secure multi-language code execution and added AI-powered debugging using LLaMA, scaling reliably to 100+ live sessions.",
    technologies: ["React.js", "Docker", "Liveblocks", "Judge0", "LLaMA API"],
    liveUrl: "https://www.code-fusion.live/",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "QueryCraft - Natural Language SQL Generator",
    description: "An AI-powered assistant that converts natural language into executable SQL queries.",
    longDescription:
      "Created AI-powered assistant transforming natural language questions into executable SQL queries using Large Language Models and LangChain for database interaction and learning support. Deployed production-ready application on Streamlit Cloud with real-time query execution, syntax highlighting, error handling, and comprehensive feedback system for SQL learning enhancement.",
    technologies: ["Streamlit", "SQLite", "LangChain", "LLMs"],
    liveUrl: "https://streamlit.io/",
    githubUrl: "https://github.com"
  }
];

export const education = [
  {
    id: 1,
    institution: "Thapar Institute of Engineering and Technology",
    degree: "Bachelor of Engineering in Electronics and Computer Engineering",
    duration: "Sep 2022 – 2026",
    description: "Patiala, Punjab"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Myntra Hackerramp 2024 Finalist",
    description:
      "Developed a Virtual Wardrobe AR try-on system using React, Flask, and OpenCV achieving 90% garment mapping precision, boosting user engagement by 40% and reducing product return rates by 15%."
  },
  {
    id: 2,
    title: "LeetCode Knight Badge Achievement",
    description:
      "Consistent Top 4% ranking in Weekly Programming Contests with 1900+ competitive programming rating demonstrating advanced algorithmic problem-solving skills."
  },
  {
    id: 3,
    title: "Graph Theory Programming Excellence",
    description:
      "2nd place winner in AlgoUniversity competition, selected as mentee from 80,000+ students for advanced Graphs Camp by Codeforces Master, mastered 17+ complex graph algorithms."
  }
];

export const leadership = [
  {
    id: 1,
    organization: "AIESEC in Patiala",
    role: "Marketing Team Member",
    duration: "2023 – 2025",
    description: [
      "Led digital marketing campaigns for international exchange programs.",
      "Increased student participation through strategic social media outreach and engagement campaigns."
    ]
  }
];
