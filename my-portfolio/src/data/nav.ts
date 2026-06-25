import type { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Certifications", href: "/certifications" },
  { label: "Projects", href: "/projects" },
];



// -----------------------------
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "careops",
    title: "CareOps — Unified Operations Platform",
    description:
      "A full-stack SaaS platform unifying bookings, CRM, inbox, forms, and inventory for service businesses, with real-time notifications and Google Calendar sync.",
    image: "/images/projects/careops.png",
    liveUrl: "https://careops-platform-sage.vercel.app/",
    githubUrl: "https://github.com/Sufalthakre18/careops-platform",
    tags: ["PERN", "Next.js", "Socket.io", "AI Integration"],
    status: "Live",
  },
  {
    id: "grow-my-therapy",
    title: "Therapeutic Practice Website | Next.js + Tailwind",
    description:
      "A calm, design-forward website for a therapy practice, built with Next.js and Tailwind CSS.",
    image: "/images/projects/grow-my-therapy.png",
    liveUrl: "https://dr-maya-reynolds-therapy-three.vercel.app/",
    githubUrl: "https://github.com/Sufalthakre18/growmytherapy-frontend-website",
    tags: ["Next.js", "React", "Tailwind CSS"],
    status: "Live",
  },
  
  {
    id: "gigflow",
    title: "GigFlow — Freelance Marketplace Platform",
    description:
      "A freelance marketplace where clients post gigs and freelancers bid, backed by atomic backend logic and real-time notifications.",
    image: "/images/projects/gigflow.png",
    liveUrl: "https://account-manager-vite.vercel.app/",
    githubUrl: "https://github.com/Sufalthakre18/gigflow-fullstack-marketplace",
    tags: ["React", "Socket.io", "Tailwind CSS", "MongoDB"],
    status: "Live",
  },
  
  {
    id: "weather-forecast",
    title: "FWeather Forecast Application",
    description:
      "A weather app using the Open-Meteo API with search, geolocation, a 5-day forecast, and recent-search history.",
    image: "/images/projects/weather-forecast.gif",
    liveUrl: "https://weather-forecast-application-lyart.vercel.app/",
    githubUrl: "https://github.com/Sufalthakre18/weather-forecast-application",
    tags: ["JavaScript", "Open-Meteo API", "Tailwind CSS"],
    status: "Live",
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description:
      "A full-stack task manager built with Next.js, TypeScript, Tailwind CSS, and Firebase.",
    image: "/images/projects/task-manager.png",
    liveUrl: "https://task-manager-nextjs-firebase.vercel.app/",
    githubUrl: "https://github.com/Sufalthakre18/task-manager-nextjs-firebase",
    tags: ["Next.js", "TypeScript", "Firebase"],
    status: "Live",
  },
  {
    id: "invoice-management-system",
    title: "Invoice Management System",
    description:
      "A MERN stack application for managing invoices, payments, and customer billing with JWT authentication, PDF generation, tax calculation, multi-currency support, currency conversion, and automated invoice status tracking (Paid/Overdue).",
    image: "/images/projects/invoice-management-system.png",
    liveUrl: "https://invoice-management-system-sand.vercel.app/",
    githubUrl: "https://github.com/Sufalthakre18/mern-invoice-management-system",
    tags: ["MERN Stack", "TypeScript", "Axios","PDFkit"],
    status: "Live",
  },
  {
    id: "mini-social",
    title: "Mini Social Post Application",
    description:
      "Users can create accounts, post content, like and comment on posts, and browse a public feed.",
    image: "/images/projects/mini-social.png",
    liveUrl: "https://mini-social-post-application.vercel.app/",
    githubUrl: "https://github.com/Sufalthakre18/Full-Stack-Mini-Social-Post-Application",
    tags: ["MERN", "Material UI", "JWT"],
    status: "Live",
  },
  {
    id: "cineai",
    title: "CineAI — AI Movie Insight",
    description:
      "A full-stack Next.js application that takes an IMDb movie ID and returns complete movie details with AI-powered audience sentiment analysis, powered by Groq's LLaMA 3.3 70B model.",
    image: "/images/projects/cineai.png",
    liveUrl: "https://cinescope-ai-virid.vercel.app/",
    githubUrl: "https://github.com/Sufalthakre18/cinescope-ai",
    tags: ["Next.js", "Groq SDK", "Lucide React","OMDb API"],
    status: "Live",
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    description:
      "A full-stack real-time messaging platform built with Next.js, TypeScript, Convex, and Clerk. Features secure authentication, one-to-one and group chats, live messaging, online presence tracking, typing indicators, unread message notifications, emoji reactions, message deletion, and a fully responsive user interface.",
    image: "/images/projects/realtime-chat.png",
    liveUrl: "https://realtime-chat-orcin.vercel.app/",
    githubUrl: "https://github.com/Sufalthakre18/realtime-chat-nextjs-convex",
    tags: ["Next.js", "Radix UI", "Convex", "Clerk", "TypeScript"],
    status: "Live",
  },
  {
    id: "curalink-app",
    title: "Curalink — AI Medical Assistant",
    description:
      "A full-stack AI-powered medical research assistant that retrieves, ranks, and synthesizes real research evidence from PubMed, OpenAlex, and ClinicalTrials.gov — giving patients and caregivers structured, honest, research-backed answers.",
    image: "/images/projects/curalink-app.png",
    liveUrl: "https://curalink-ai-medical.vercel.app/",
    githubUrl: "https://github.com/Sufalthakre18/curalink-ai-medical",
    tags: ["MERN stack", "Hugging Face", "LLM","Tailwind CSS"],
    status: "Live",
  },
];
