import trendCutsImg from "@/assets/Sahid Mama Logo.png";
import bornToShineImg from "@/assets/image.png";

export const config = {
  name: "Abu Sahid",
  role: "Vibe Coder & Developer",
  email: "contact@abusahid.com",
  instagram: "https://instagram.com/sahid.io",
  github: "https://github.com/abusahid04",
  university: "Assam down town University (ADTU)",
  major: "B.Tech Civil Engineering",
  year: "1st Year",
};

export const stats = {
  years: "01+",
  projects: "05+",
  products: "02+",
  ideas: "∞"
};

export const projects = [
  {
    id: "trendcuts",
    name: "TrendCuts",
    category: "Android",
    description: "TrendCuts is an Android app focused on discovering trending CapCut templates and helping creators find templates for their short-form video edits.",
    status: "Published",
    url: "https://play.google.com/store/apps/details?id=com.devsahid.capcuttemplates",
    technologies: ["Java", "XML", "Android Studio"],
    image: trendCutsImg.src,
    tags: ["Android", "Java", "XML", "CapCut Templates", "Content Creation"]
  },
  {
    id: "borntoshine",
    name: "BornToShine",
    category: "Web",
    description: "BornToShine is a modern music production and publishing website created to showcase music, artists, releases, and creative work through a professional digital presence.",
    status: "Live",
    url: "https://www.borntoshine.online",
    technologies: ["Next.js", "React", "CSS", "Web Design"],
    image: bornToShineImg.src,
    tags: ["Music Production", "Web Design", "Creative Platform"]
  },
  {
    id: "agecalc",
    name: "Age Calculator",
    category: "Android",
    description: "A simple and intuitive application to calculate accurate age from date of birth down to minutes and seconds.",
    status: "Prototype",
    url: "",
    technologies: ["Java", "XML", "Android"],
    image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop",
    tags: ["Utility", "App"]
  },
  {
    id: "passwordsaver",
    name: "Password Saver",
    category: "Android",
    description: "A secure local vault for saving and managing passwords with encryption.",
    status: "Prototype",
    url: "",
    technologies: ["Java", "SQLite"],
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ce?q=80&w=2070&auto=format&fit=crop",
    tags: ["Security", "Tool"]
  },
  {
    id: "kidsdrawing",
    name: "Kids Drawing Zone",
    category: "Android",
    description: "A fun and interactive drawing canvas app built specifically for kids to express their creativity.",
    status: "Prototype",
    url: "",
    technologies: ["Java", "Canvas API"],
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    tags: ["Kids", "Creative"]
  },
  {
    id: "tutorapp",
    name: "Tutor App",
    category: "UI/UX",
    description: "A platform connecting students with local tutors. Features scheduling, messaging, and progress tracking.",
    status: "Prototype",
    url: "",
    technologies: ["Figma", "UI Design"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    tags: ["Education", "Design"]
  },
  {
    id: "phonemandi",
    name: "PhoneMandi",
    category: "Web",
    description: "A marketplace prototype for buying and selling used smartphones.",
    status: "Prototype",
    url: "",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=2070&auto=format&fit=crop",
    tags: ["Marketplace", "Web"]
  },
  {
    id: "receiptgen",
    name: "Receipt Generator",
    category: "Web",
    description: "A web utility tool to quickly generate and download custom receipts in PDF format.",
    status: "Prototype",
    url: "",
    technologies: ["React", "JavaScript"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop",
    tags: ["Utility", "Tool"]
  }
];

export const skills = {
  development: [
    "Java", "XML", "HTML", "CSS", "JavaScript", "Android Studio", "Responsive Web Design"
  ],
  tools: [
    "Git", "GitHub", "Firebase", "Figma", "VS Code", "Android Studio"
  ],
  creative: [
    "UI Design", "Video Editing", "Content Creation", "Vibe Coding"
  ]
};

export const timeline = [
  {
    year: "2026",
    title: "Building BornToShine",
    description: "Building BornToShine and other personal projects."
  },
  {
    year: "2026",
    title: "Creative Projects",
    description: "Worked on creative digital projects including TrendCuts."
  },
  {
    year: "2026",
    title: "Skill Development",
    description: "Continued learning Android development and web development."
  },
  {
    year: "2026",
    title: "Started University",
    description: "Started B.Tech Civil Engineering at Assam down town University."
  }
];
