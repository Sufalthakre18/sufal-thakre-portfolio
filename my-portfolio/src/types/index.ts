import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
  icon: IconType;
  tags: string[];
}

export type ProjectStatus = "Live" | "In Progress";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  status: ProjectStatus;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
  credentialUrl: string;
}
