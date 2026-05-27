import { AiFillHtml5, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaPhp, FaLaravel } from "react-icons/fa";
import { BsBootstrap, BsGit } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiPostman, SiFilezilla, SiJira, SiMysql } from "react-icons/si";

export const TECH_LIST = [
  {
    category: "Frontend",
    items: [
      { name: "HTML",        icon: <AiFillHtml5 size={32} />,         color: "#e34c26" },
      { name: "CSS",         icon: <DiCss3 size={32} />,              color: "#264de4" },
      { name: "JavaScript",  icon: <IoLogoJavascript size={32} />,    color: "#f7df1e" },
      { name: "React",       icon: <FaReact size={32} />,             color: "#61dafb" },
      { name: "Next.js",     icon: <TbBrandNextjs size={32} />,       color: "#ffffff" },
      { name: "Tailwind",    icon: <TbBrandTailwind size={32} />,     color: "#38bdf8" },
      { name: "Bootstrap",   icon: <BsBootstrap size={32} />,         color: "#7952b3" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP",     icon: <FaPhp size={32} />,     color: "#8892bf" },
      { name: "Laravel", icon: <FaLaravel size={32} />,  color: "#ff2d20" },
      { name: "MySQL",   icon: <SiMysql size={32} />,    color: "#00758f" },
    ],
  },
  {
    category: "Other tools",
    items: [
      { name: "WordPress", icon: <FaWordpressSimple size={32} />, color: "#21759b" },
      { name: "GitHub",    icon: <AiFillGithub size={32} />,      color: "#ffffff" },
      { name: "GitLab",    icon: <AiFillGitlab size={32} />,      color: "#fc6d26" },
      { name: "Git",       icon: <BsGit size={32} />,             color: "#f05032" },
      { name: "VS Code",   icon: <DiVisualstudio size={32} />,    color: "#007acc" },
      { name: "Postman",   icon: <SiPostman size={32} />,         color: "#ff6c37" },
      { name: "Jira",      icon: <SiJira size={32} />,            color: "#0052cc" },
      { name: "FileZilla", icon: <SiFilezilla size={32} />,       color: "#bf0000" },
    ],
  },
];
