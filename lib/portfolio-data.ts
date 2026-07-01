export interface TimelineEntry {
  id: string;
  type: "work" | "education" | "research";
  title: string;
  organization: string;
  dateRange: string;
  bullets?: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface SkillItem {
  name: string;
  iconClass?: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
}

export const timelineData: TimelineEntry[] = [
  {
    id: "exp-1",
    type: "research",
    title: "Named Entity Recognition in Resource-Constrained Languages",
    organization: "SRM University-AP",
    dateRange: "May 2026 – Present",
    bullets: [
      "Researched NLP techniques for Named Entity Recognition (NER) in low-resource languages with limited annotated training data.",
      "Explored transfer learning approaches using multilingual transformer models (mBERT, XLM-R) to improve entity detection across resource-constrained linguistic contexts.",
      "Investigated data augmentation strategies and cross-lingual transfer to address scarcity of labeled datasets in regional and minority languages."
    ]
  },
  {
    id: "exp-2",
    type: "work",
    title: "Full Stack(MERN) Intern",
    organization: "Edunet Foundation via IBM SkillsBuild",
    dateRange: "June 23, 2025 – Aug. 04, 2025",
    bullets: [
      "Developed a role-based full-stack web application for managing blood donations, requests, and inventory for donors, recipients, and admins.",
      "Built with Node.js, Express.js, HTML, CSS, JavaScript, and MongoDB Atlas; deployed on Render."
    ]
  },
  {
    id: "exp-3",
    type: "education",
    title: "B.Tech in Computer Science and Engineering",
    organization: "SRM University-AP",
    dateRange: "2023 – 2027",
    bullets: [
      "Aspiring Backend & DevOps Engineer with a strong foundation in AI/ML and Data Structures & Algorithms.",
      "Passionate about designing scalable backend systems, building cloud-native applications, and leveraging artificial intelligence to solve real-world problems.",
      "Seeking opportunities to contribute to high-impact engineering teams while continuously advancing expertise in distributed systems, DevOps, and modern software architecture."
    ]
  }
];

export const projectData: ProjectEntry[] = [
  {
    id: "proj-1",
    title: "DeepFake Audio Detection System",
    description: "Built a CNN-based system to classify audio as real or spoofed using MFCC features from the ASVspoof 2019 dataset. Designed a processing pipeline converting audio formats to FLAC and averaging CNN predictions. Deployed a Streamlit interface supporting multi-format audio uploads.",
    tags: ["Python", "TensorFlow", "Keras", "Streamlit", "Librosa", "CNN", "MFCC"],
    githubUrl: "https://github.com/lokesh-8888/deepfake_audio_detection_system"
  },
  {
    id: "proj-2",
    title: "AI Career Intelligence Platform",
    description: "Built an AI-powered platform that analyzes resumes, identifies skill gaps, and generates personalized career roadmaps. Implemented graph-based career recommendations with Neo4j, NLP-driven skill extraction, secure JWT auth, Redis caching, and Dockerized deployments.",
    tags: ["React.js", "FastAPI", "Neo4j", "Redis", "Docker", "JWT", "SpaCy", "LLMs"],
    githubUrl: "https://github.com/lokesh-8888/AI-Career-Platform"
  },
  {
    id: "proj-3",
    title: "FaqFlow — AI RAG Bot",
    description: "Developed a conversational AI assistant with Retrieval-Augmented Generation (RAG) architecture using FastAPI, Pinecone vector database, HuggingFace embeddings, and Groq LLMs. Implemented prompt-engineered responses, chat history tracking, and a clean JS interface.",
    tags: ["FastAPI", "Pinecone", "HuggingFace", "Groq LLM", "RAG", "JavaScript"],
    githubUrl: "https://github.com/lokesh-8888/faq-flow-ai-using-RAG",
    demoUrl: "https://faq-flow-ai-using-rag.onrender.com/"
  },
  {
    id: "proj-4",
    title: "DocuMind — AI Document Assistant",
    description: "Built a RAG-based document assistant for chatting with PDFs, DOCX, and PPTX files. Implemented OCR-based text extraction with Tesseract, semantic vector search via Pinecone/FastEmbed, real-time streaming, and source-aware responses with page number citations.",
    tags: ["FastAPI", "React.js", "Pinecone", "FastEmbed", "Groq LLM", "OCR", "Tailwind CSS"],
    githubUrl: "https://github.com/lokesh-8888/DocuMind-AI"
  },
  {
    id: "proj-5",
    title: "Blood Bank Management System",
    description: "Developed a role-based blood bank management platform enabling donors, recipients, and admins to handle donation appointments and request approvals. Built a scalable MVC backend using Node.js/Express, JWT authentication, and bcrypt, deployed with MongoDB Atlas on Render.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Render"],
    githubUrl: "https://github.com/lokesh-8888/blood-bank-management-system"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "C++" },
      { name: "Java" },
      { name: "SQL" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "REST APIs" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Redis" }
    ]
  },
  {
    title: "AI & Agentic Systems",
    skills: [
      { name: "Machine Learning" },
      { name: "Large Language Models" },
      { name: "RAG Architecture" },
      { name: "Vector Databases (Pinecone)" },
      { name: "HuggingFace" },
      { name: "NLP (SpaCy)" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "CNN" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Azure" },
      { name: "CI/CD" },
      { name: "Render" }
    ]
  },
  {
    title: "Core CS Concepts",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "OOP" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
      { name: "DBMS" },
      { name: "System Design" },
      { name: "Microservices" }
    ]
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Streamlit" },
      { name: "Librosa" },
      { name: "PyMuPDF" },
      { name: "Tesseract OCR" },
      { name: "Scikit-learn" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" }
    ]
  },
  {
    title: "Developer Tools & IDEs",
    skills: [
      { name: "Postman" },
      { name: "VS Code" },
      { name: "PyCharm" },
      { name: "Jupyter Notebook" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Figma" },
      { name: "Render" },
      { name: "Vercel" }
    ]
  }
];

export const certificationData: CertificationEntry[] = [
  {
    id: "cert-1",
    title: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    date: "Feb 2026",
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=061E81D0DD5B4420CA94F6C01EE8A9823449B30AFB6A53154D05D27389A67C94"
  },
  {
    id: "cert-2",
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    date: "April 2026",
    verifyUrl: "https://www.credly.com/badges/79646fca-a99c-4c9e-bc46-19a42af303c6/public_url"
  },
  {
    id: "cert-3",
    title: "SAP Certified - SAP Generative AI Developer",
    issuer: "SAP",
    date: "July 2026",
    verifyUrl: "https://www.credly.com/badges/22f0d5cc-9343-4b32-912c-f4be97da4e91/public_url"
  }
];

export const contactDetails = {
  email: "lokeshpinapaka@gmail.com",
  linkedIn: "https://www.linkedin.com/in/pinapaka-lokesh-064350305/",
  github: "https://github.com/lokesh-8888",
  twitter: ""
};
