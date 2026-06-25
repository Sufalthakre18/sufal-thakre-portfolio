import {
  SiExpress,
  SiGithub,
  SiCloudinary,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiClaude,
  SiTypescript
} from "react-icons/si";

import type { Skill } from "@/types";

export const skills: Skill[] = [
  {
    id: "MERN-stack",
    name: "MERN Stack",
    percentage: 95,
    icon: SiReact,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    percentage: 95,
    icon: SiJavascript,
    tags: ["DOM & Browser", "Async JS & APIs", "Core Foundations"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    percentage: 70,
    icon: SiTypescript,
    tags: ["Type Safety", "Generics & Interfaces", "Advanced Types"],
  },
  {
    id: "Next.js",
    name: "Next.js",
    percentage: 95,
    icon: SiNextdotjs,
    tags: ["Server-side Rendering", "API Routes", "Image Optimization"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    percentage: 95,
    icon: SiTailwindcss,
    tags: ["Responsive Design", "Advanced Layouts", "Component Styling"],
  },
  {
    id: "python",
    name: "Python",
    percentage: 70,
    icon: SiPython,
    tags: ["NumPy", "Pandas", "Core Python"],
  },
  
  {
    id: "backend-dev",
    name: "Backend Development",
    percentage: 80,
    icon: SiExpress,
    tags: ["Auth & Middleware", "Schemas & Services", "Integrations", "Error Handling"],
  },
  
  {
    id: "database",
    name: "Database",
    percentage: 80,
    icon: SiPostgresql,
    tags: ["PostgreSQL", "Prisma", "Cloudinary"],
  },
  
  {
    id: "git-github",
    name: "Git & GitHub",
    percentage: 95,
    icon: SiGithub,
    tags: ["Version Control", "Branching Workflows", "Commit Practices"],
  },
  {
    id: "AI Integration",
    name: "AI Integration",
    percentage: 70,
    icon: SiClaude,
    tags: ["Ai Integration", "ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "Deployment & Hosting",
    name: "Deployment & Hosting",
    percentage: 70,
    icon: SiCloudinary,
    tags: ["Deployment Strategies", "Cloud Hosting", "CI/CD", "Scalability"],
  },
  
];
