import { AiFillHtml5, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaReact,
  FaWordpressSimple,
  FaPhp,
  FaLaravel
} from "react-icons/fa";
import { BsBootstrap, BsGit } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiPostman, SiFilezilla,SiJira } from "react-icons/si";

export const TECH_LIST = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <AiFillHtml5 size={32} /> },
      { name: "CSS", icon: <DiCss3 size={32} /> },
      { name: "JS", icon: <IoLogoJavascript size={32} /> },
      { name: "React", icon: <FaReact size={32} /> },
      { name: "Next", icon: <TbBrandNextjs size={32} /> },
      { name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
      { name: "Bootstrap", icon: <BsBootstrap size={32} /> }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "PHP", icon: <FaPhp size={32} /> },
      { name: "Laravel", icon: <FaLaravel width={56} /> }
    ]
  },
  {
    category: "Other tools",
    items: [
      { name: "WordPress CMS", icon: <FaWordpressSimple size={32} /> },
      { name: "Jira", icon: <SiJira width={36} /> },
      { name: "Github", icon: <AiFillGithub size={32} /> },
      { name: "Gitlab", icon: <AiFillGitlab size={32} /> },
      { name: "Gitbash", icon: <BsGit size={32} /> },
      { name: "VsCode", icon: <DiVisualstudio size={32} /> },
      { name: "Postman", icon: <SiPostman size={32} /> },
      { name: "FileZilla", icon: <SiFilezilla size={32} /> }
    ]
  }
];
