export interface TimelineEntry {
  id: string;
  type: "work" | "education" | "research";
  title: string;
  organization: string;
  dateRange: string;
  bullets?: string[];
}

export type ProjectCategory = "all" | "genai-rag" | "fullstack-backend" | "ml-analytics";

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  category: "genai-rag" | "fullstack-backend" | "ml-analytics";
  categoryLabel: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  year?: string;
  featured?: boolean;
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
    title: "Brain Tumor Detection System",
    organization: "SRM University-AP",
    dateRange: "May 2026 – Present",
    bullets: [
      "Designing and developing a custom deep learning computer vision model from scratch to detect and classify brain tumors from MRI scans.",
      "Building end-to-end data preprocessing pipelines including intensity normalization, artifact filtering, and medical image augmentation.",
      "Benchmarking accuracy and sensitivity against standard CNN models to ensure reliable early-stage detection."
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

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "genai-rag", label: "GenAI & RAG Applications" },
  { id: "fullstack-backend", label: "Full Stack & Backend Systems" },
  { id: "ml-analytics", label: "Machine Learning & Data Analytics" }
] as const;

export const projectData: ProjectEntry[] = [
  // --- GenAI & RAG Applications ---
  {
    id: "proj-documind",
    title: "DocuMind — AI Document Assistant",
    category: "genai-rag",
    categoryLabel: "GenAI & RAG",
    description: "Built a production-grade RAG document assistant to interact with PDFs, DOCX, and PPTX files. Implemented OCR-based text extraction with Tesseract, semantic vector search via Pinecone & FastEmbed, real-time streaming, and source-aware citations.",
    tags: ["FastAPI", "React.js", "Pinecone", "FastEmbed", "Groq LLM", "OCR", "Python"],
    githubUrl: "https://github.com/lokesh-8888/DocuMind-AI",
    year: "2026",
    featured: true
  },
  {
    id: "proj-career-ai",
    title: "AI Career Intelligence Platform",
    category: "genai-rag",
    categoryLabel: "GenAI & RAG",
    description: "AI-powered career roadmap and intelligence platform analyzing resumes, identifying skill gaps, and generating dynamic career pathways. Uses Neo4j graph recommendations, NLP skill extraction with SpaCy, Redis caching, and Dockerized microservices.",
    tags: ["React.js", "FastAPI", "Neo4j", "Redis", "Docker", "SpaCy", "LLMs", "TypeScript"],
    githubUrl: "https://github.com/lokesh-8888/AI-Career-Platform",
    year: "2026",
    featured: true
  },
  {
    id: "proj-faqflow",
    title: "FaqFlow — AI RAG Chatbot",
    category: "genai-rag",
    categoryLabel: "GenAI & RAG",
    description: "Conversational AI assistant with Retrieval-Augmented Generation architecture using FastAPI, Pinecone vector database, Hugging Face embeddings, and Groq LLMs. Features prompt-engineered responses, session memory, and live cloud deployment.",
    tags: ["FastAPI", "Pinecone", "HuggingFace", "Groq LLM", "RAG", "Python"],
    githubUrl: "https://github.com/lokesh-8888/faq-flow-ai-using-RAG",
    demoUrl: "https://faq-flow-ai-using-rag.onrender.com/",
    year: "2026",
    featured: true
  },
  {
    id: "proj-lenny-ai",
    title: "Lenny Growth Assistant",
    category: "genai-rag",
    categoryLabel: "GenAI & RAG",
    description: "Specialized AI conversational assistant tailored for product managers and startup founders, delivering synthesized growth frameworks, benchmark metrics, and strategy recommendations.",
    tags: ["Python", "LLMs", "Prompt Engineering", "FastAPI", "RAG"],
    githubUrl: "https://github.com/lokesh-8888/lenny-growth-assistant",
    year: "2026"
  },
  {
    id: "proj-ai-finance",
    title: "AI Finance Controller",
    category: "genai-rag",
    categoryLabel: "GenAI & RAG",
    description: "Intelligent financial tracking and budget controller utilizing LLM reasoning for automated transaction classification, anomaly detection, and spend optimization insights.",
    tags: ["Python", "FastAPI", "LLMs", "Financial Analysis", "JSON Schema"],
    githubUrl: "https://github.com/lokesh-8888/ai-finance-controller",
    year: "2026"
  },

  // --- Full Stack & Backend Systems ---
  {
    id: "proj-blood-bank",
    title: "Blood Bank Management System",
    category: "fullstack-backend",
    categoryLabel: "Full Stack & Backend",
    description: "Role-based donation and blood bank inventory management platform enabling donors, recipients, and hospital admins to schedule appointments and approve requests. Built with Node.js/Express, JWT auth, bcrypt, and MongoDB Atlas.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Render"],
    githubUrl: "https://github.com/lokesh-8888/blood-bank-management-system",
    year: "2025",
    featured: true
  },
  {
    id: "proj-food-delivery",
    title: "Food Delivery Backend Engine",
    category: "fullstack-backend",
    categoryLabel: "Full Stack & Backend",
    description: "Scalable MERN-stack backend architecture supporting restaurant listings, menu configuration, cart operations, order processing, and role-based access control.",
    tags: ["Node.js", "Express.js", "MongoDB", "MERN Stack", "REST APIs", "JavaScript"],
    githubUrl: "https://github.com/lokesh-8888/food-delivery-backend",
    year: "2026"
  },
  {
    id: "proj-razorledger",
    title: "RazorLedger — Ledger Engine",
    category: "fullstack-backend",
    categoryLabel: "Full Stack & Backend",
    description: "High-integrity enterprise ledger and transaction recording engine written in Java, designed for high-concurrency balance auditing and robust financial record keeping.",
    tags: ["Java", "OOP", "System Design", "Data Integrity", "Spring Boot"],
    githubUrl: "https://github.com/lokesh-8888/razorledger-ai",
    year: "2026"
  },
  {
    id: "proj-bank-mgmt",
    title: "Core Banking Management System",
    category: "fullstack-backend",
    categoryLabel: "Full Stack & Backend",
    description: "Robust Java-based banking software handling multi-account creation, deposits, withdrawals, fund transfers, and transactional audit trails.",
    tags: ["Java", "OOP", "MySQL", "JDBC", "Software Architecture"],
    githubUrl: "https://github.com/lokesh-8888/Bank-Management-System",
    year: "2026"
  },
  {
    id: "proj-portfolio",
    title: "Modern Portfolio & Developer Showcase",
    category: "fullstack-backend",
    categoryLabel: "Full Stack & Backend",
    description: "High-performance personal engineering portfolio built with Next.js 16 (Turbopack), TypeScript, Tailwind CSS, dark glassmorphic styling, and interactive filtering.",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Turbopack"],
    githubUrl: "https://github.com/lokesh-8888/portfolio-website",
    year: "2026"
  },

  // --- Machine Learning & Data Analytics ---
  {
    id: "proj-brain-tumor-detection",
    title: "Brain Tumor Detection System",
    category: "ml-analytics",
    categoryLabel: "ML & Data Analytics",
    description: "Building a custom deep learning computer vision model from scratch to detect and classify brain tumors from MRI scans with advanced preprocessing and augmentation pipelines.",
    tags: ["Python", "Deep Learning", "CNN", "Computer Vision", "Medical AI"],
    githubUrl: "https://github.com/lokesh-8888/deep-learning",
    year: "May 2026 – Present",
    featured: true
  },
  {
    id: "proj-deepfake-audio",
    title: "DeepFake Audio Detection System",
    category: "ml-analytics",
    categoryLabel: "ML & Data Analytics",
    description: "Built a CNN-based system to classify audio as real or spoofed using MFCC features from the ASVspoof 2019 dataset. Designed a processing pipeline converting audio formats to FLAC and averaging CNN predictions with a Streamlit interface.",
    tags: ["Python", "TensorFlow", "Keras", "Streamlit", "Librosa", "CNN", "MFCC"],
    githubUrl: "https://github.com/lokesh-8888/deepfake_audio_detection_system",
    year: "2026",
    featured: true
  },
  {
    id: "proj-dengue-ml",
    title: "KNN Dengue Outbreak Prediction",
    category: "ml-analytics",
    categoryLabel: "ML & Data Analytics",
    description: "Predictive epidemiological model using K-Nearest Neighbors (KNN) to analyze climate parameters (temperature, humidity, precipitation) and forecast dengue outbreak vulnerability.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook", "Matplotlib"],
    githubUrl: "https://github.com/lokesh-8888/knn_dengue-ml-project",
    year: "2025"
  },
  {
    id: "proj-zomato-etl",
    title: "Zomato AI & Data Engineering Pipeline",
    category: "ml-analytics",
    categoryLabel: "ML & Data Analytics",
    description: "End-to-end modern data stack and AI pipeline for food delivery analytics. Ingests raw data into Snowflake, orchestrates medallion transformations (RAW -> STAGING -> MARTS) via dbt, automates batch workflows with Apache Airflow & Docker, and deploys Streamlit Text-to-SQL & review RAG assistants.",
    tags: ["Snowflake", "dbt", "Apache Airflow", "Python", "Docker", "Streamlit", "Text-to-SQL", "RAG", "Pandas", "ETL Pipelines"],
    githubUrl: "https://github.com/lokesh-8888/zomato-ai-data-engineering",
    year: "2026",
    featured: true
  },
  {
    id: "proj-ecommerce-sentiment",
    title: "E-Commerce Customer Sentiment Analysis",
    category: "ml-analytics",
    categoryLabel: "ML & Data Analytics",
    description: "NLP sentiment analysis engine evaluating customer reviews and feedback trends to classify satisfaction levels, feature requests, and pain points.",
    tags: ["TypeScript", "NLP", "Data Analytics", "Sentiment Analysis"],
    githubUrl: "https://github.com/lokesh-8888/ecommerce-sentiment-analysis",
    year: "2026"
  }
];

// Alias for backwards-compatibility
export const projects = projectData;

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python" },
      { name: "TypeScript" },
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
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "JWT Auth" },
      { name: "MERN Stack" }
    ]
  },
  {
    title: "Databases & Data Warehousing",
    skills: [
      { name: "Snowflake" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Neo4j" },
      { name: "Pinecone (Vector DB)" }
    ]
  },
  {
    title: "AI & Agentic Systems",
    skills: [
      { name: "Deep Learning" },
      { name: "Machine Learning" },
      { name: "Text-to-SQL" },
      { name: "Large Language Models" },
      { name: "RAG Architecture" },
      { name: "Computer Vision" },
      { name: "Prompt Engineering" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "CNN" },
      { name: "HuggingFace" },
      { name: "SpaCy (NLP)" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "HTML" },
      { name: "CSS" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Apache Airflow" },
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
      { name: "dbt" },
      { name: "ETL Pipelines" },
      { name: "Streamlit" },
      { name: "Scikit-learn" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "PyMuPDF" },
      { name: "Tesseract OCR" },
      { name: "Librosa" }
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
