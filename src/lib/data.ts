import ClimbAIProject from "@/assets/ClimbAIProject.png";
import MarkitProject from "@/assets/projectMar.png";
import TastiImg1 from "@/assets/tasti.png";
import TastiImg2 from "@/assets/tasti2.png";

export const personalInfo = {
  name: "Brighton Le",
  title: "Full-Stack Engineer",
  email: "brightonle2016@gmail.com",
  github: "https://github.com/brightonle",
  linkedin: "https://www.linkedin.com/in/brighton-le/",
  resumeUrl: "/Le_Brighton_Portfolio_Resume.pdf",
};

export const skills = [
  { category: "Data", items: ["SQL", "PostgreSQL", "Snowflake", "MongoDB", "Apache Spark", "Azure", "Neo4j", "MySQL"] },
  { category: "Cloud", items: ["AWS", "Docker", "Kubernetes", "Linux"] },
  { category: "AI/ML", items: ["Scikit-learn", "Pandas", "TensorFlow", "Numpy"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Python", "Java", "C/C++","Node.js", "REST APIs", "Spring Boot"] },
  { category: "Tools", items: ["Git", "Jenkins", "Prisma", "Power BI", "Figma", "Tableau"] },
];

export const projects = [
  {
    title: "ClimbAI",
    description:
      "A full-stack climbing analytics platform that transforms wall image and hold-coordinate data into structured route datasets for visualization, performance analysis, and recommendation features.",
    tags: ["Python", "SQL", "Neo4j", "React.js", "Docker"],
    github: "https://github.com/brightonle/climbai",
    live: null,
    image: ClimbAIProject,
  },
  {
    title: "TrendPulse",
    description:
      "An automated market intelligence platform that leverages multi-agent AI orchestration to transform unstructured competitor and social media data into actionable trend reports with strategic recommendations.",
    tags: ["JavaScript", "N8n", "REST APIs", "AI Agents", "Docker"],
    github: "https://github.com/brightonle/talentlens",
    live: null,
    image: MarkitProject,
  },
  {
    title: "Tasti",
    description:
      "A mobile application that showcases local street vendors and small food businesses that may not appear on traditional map platforms, making them easier for users to discover and support.",
    tags: ["React Native", "JavaScript", "PostgreSQL", "Node.js", "Jest"],
    github: "https://github.com/brightonle/tasti",
    live: null,
    images: [TastiImg1, TastiImg2],
  },
];

export const experience = [
  {
    role: "AI Automation Engineer",
    company: "Wayfair",
    period: "Jan 2026 – Present",
    description: "Architected a multi-agent AI platform that automated competitive market analysis by processing product and social trend data to generate strategic merchandising recommendations.",
  },
  {
    role: "Data Engineer",
    company: "Fidelity Investments",
    period: "Jun 2025 – Aug 2025",
    description: "Designed and improved data solutions that strengthened automation, workflow reliability, and analytics for engineering teams and business partners.",
  },
  {
    role: "Junior Data Architect",
    company: "Boston After School & Beyond",
    period: "Nov 2024 – Jun 2025",
    description: "Advanced the modernization of the organization's data ecosystem by supporting a shift to a more scalable architecture across client programs.",
  },
  {
    role: "Software Engineer",
    company: "Rev",
    period: "Sep 2024 – Dec 2024",
    description: "Directed the build of a full-stack platform for the Museum of Fine Arts, leading engineers in developing scalable software across systems.",
  },
  {
    role: "Data Engineer",
    company: "Boston After School & Beyond",
    period: "May 2024 – Nov 2024",
    description: "Built data workflows and integrations that improved reporting processes and made information more reliable and accessible.",
  },
  {
    role: "Systems Engineer",
    company: "IPG Photonics",
    period: "May 2023 – Sep 2024",
    description: "Supported the development and testing of advanced laser systems through hands-on debugging and engineering collaboration.",
  },
];
