import { FaDev, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sufal-thakre/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Sufalthakre18",
    icon: FaGithub,
  },
  {
    label: "X",
    href: "https://x.com/SufalThakre",
    icon: FaXTwitter,
  },
  {
    label: "Dev.to",
    href: "https://dev.to/sufalthakre",
    icon: FaDev,
  },
];
