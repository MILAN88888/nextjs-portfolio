"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Window } from "@/components/Window";
import { WORK_EXP, EDU_EXP, PROJECT_LIST, TECH_LIST } from "@/constants";
import {
  FiUser, FiCode, FiBriefcase, FiBookOpen, FiBarChart2,
  FiTerminal, FiFolder, FiCpu, FiDownload, FiExternalLink,
  FiMail, FiMapPin, FiGithub, FiLinkedin, FiPhone,
} from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { VscSourceControl } from "react-icons/vsc";

/* ── bottom dock config ─────────────── */
const DOCK = [
  { label: "About",    href: "#about",  icon: <FiUser size={18} />,      color: "var(--mauve)" },
  { label: "Work",     href: "#ws-2",   icon: <FiBriefcase size={18} />, color: "var(--peach)" },
  { label: "Edu",      href: "#ws-3",   icon: <FiBookOpen size={18} />,  color: "var(--teal)"  },
  { label: "GitHub",   href: "#ws-4",   icon: <FiBarChart2 size={18} />, color: "var(--sky)"   },
  { label: "Terminal", href: "#ws-5",   icon: <FiTerminal size={18} />,  color: "var(--green)" },
  { label: "Projects", href: "#ws-6",   icon: <FiFolder size={18} />,    color: "var(--yellow)"},
  { label: "Skills",   href: "#ws-7",   icon: <FiCpu size={18} />,       color: "var(--pink)"  },
  { label: "Contact",  href: "#contact",icon: <FiMail size={18} />,      color: "var(--red)"   },
];

/* ── tech tag colors ────────────────── */
const TAG_COLORS: Record<string, string> = {
  PHP: "var(--mauve)", Laravel: "var(--sky)", React: "var(--teal)",
  "Next.js": "var(--peach)", WordPress: "var(--pink)", TypeScript: "var(--yellow)",
  TailwindCSS: "var(--green)", MySQL: "var(--red)",
};

const NEOFETCH = `       .--.        milan@portfolio
      |o_o |       ---------------
      |:_/ |       OS     ArchLinux x86_64
     //   \\ \\      WM     Hyprland
    (|     | )     Shell  zsh 5.9
   /'\\_   _/\`\\    Editor neovim
   \\___)=(___/    Role   Full-Stack Dev
                  At     ThemeGrill
                  Loc    Nawalparasi, NP`;

const TERMINAL_LINES = [
  { prompt: "milan@portfolio:~$", cmd: " whoami" },
  { out: "milan-kumar-chaudhary" },
  { prompt: "milan@portfolio:~$", cmd: " cat skills.txt" },
  { out: "PHP · Laravel · WordPress · React · Next.js · TypeScript · MySQL · Git" },
  { prompt: "milan@portfolio:~$", cmd: " echo $STATUS" },
  { out: '<span style="color:var(--green)">available_for_work=true</span>' },
  { prompt: "milan@portfolio:~$", cmd: " curl -s https://github.com/MILAN88888", out_link: "https://github.com/MILAN88888" },
  { prompt: "milan@portfolio:~$", cmd: " curl -s https://linkedin.com/in/milan-c", out_link: "https://linkedin.com/in/milan-c" },
  { prompt: "milan@portfolio:~$", cmd: " _", blink: true },
];

export default function Home() {
  const { theme } = useTheme();
  const [gitTheme, setGitTheme] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { setGitTheme(theme === "dark" ? "" : "theme=react"); }, [theme]);

  return (
    <div className="relative z-10 max-w-screen-xl mx-auto px-3 md:px-4 py-4 pb-28 flex flex-col gap-4">

      {/* ═══════════════════════════════════════════════════════
          WS-1 · Hero + About
      ══════════════════════════════════════════════════════════ */}
      <div id="ws-1" className="grid lg:grid-cols-[1fr_320px] gap-4">

        {/* Hero window */}
        <Window
          title="milan@portfolio: ~/hero"
          icon={<FiCode size={13} />}
          ws={1} focused minHeight="520px"
        >
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-0 h-full">

            {/* Left: text */}
            <div className="p-6 sm:p-8 flex flex-col justify-start pt-8">
              <div
                className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border font-mono text-xs mb-6"
                style={{
                  borderColor: "oklch(82% .16 145 / .4)",
                  background:  "oklch(82% .16 145 / .1)",
                  color: "var(--green)",
                }}
              >
                <span className="available-dot" />
                available_for_work = true
              </div>

              <p className="font-mono text-xs mb-3 tracking-widest" style={{ color: "var(--teal)" }}>
                ~/whoami
              </p>

              <h1
                className="font-display font-bold leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "var(--foreground)" }}
              >
                Milan Kumar<br />
                <span
                  style={{
                    background: "linear-gradient(to right, var(--mauve), var(--pink), var(--sky))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Chaudhary
                </span>
              </h1>

              <p className="mt-4 text-base" style={{ color: "var(--muted-foreground)", maxWidth: "28rem" }}>
                Full-stack developer. I build performant web apps with{" "}
                <span className="font-mono" style={{ color: "var(--peach)" }}>PHP</span>,{" "}
                <span className="font-mono" style={{ color: "var(--sky)" }}>React</span> &amp;{" "}
                <span className="font-mono" style={{ color: "var(--mauve)" }}>Next.js</span>.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Link
                  href="/file/milan-cv.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm font-medium hover:brightness-110 transition"
                  style={{ background: "var(--mauve)", color: "var(--primary-foreground)" }}
                >
                  <FiDownload size={14} /> download_cv.sh
                </Link>
                <a
                  href="#ws-6"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border font-mono text-sm transition"
                  style={{ borderColor: "var(--border)", background: "oklch(28% .03 280 / .6)", color: "var(--foreground)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--secondary)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "oklch(28% .03 280 / .6)")}
                >
                  <FiFolder size={14} style={{ color: "var(--yellow)" }} /> open ./projects
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4" style={{ color: "var(--muted-foreground)" }}>
                <a href="https://github.com/MILAN88888" target="_blank"
                  className="transition-colors" aria-label="GitHub"
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--mauve)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  <FiGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/milan-c" target="_blank"
                  className="transition-colors" aria-label="LinkedIn"
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--sky)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  <FiLinkedin size={20} />
                </a>
                <a href="mailto:chaudharymilan996@gmail.com"
                  className="transition-colors" aria-label="Email"
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--peach)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>

            {/* Right: neofetch */}
            <div
              className="flex flex-col p-6"
              style={{ borderLeft: "1px solid var(--border)", background: "oklch(14% .02 280 / .4)" }}
            >
              <div className="font-mono text-[10px] mb-2" style={{ color: "var(--muted-foreground)" }}>
                ~/neofetch
              </div>
              <pre
                className="font-mono text-xs leading-relaxed overflow-x-auto flex-1"
                style={{ color: "oklch(92% .02 280 / .9)" }}
                dangerouslySetInnerHTML={{
                  __html: NEOFETCH
                    .replace("milan@portfolio", `<span style="color:var(--mauve)">milan@portfolio</span>`)
                    .replace(/\b(OS|WM|Shell|Editor|Role|At|Loc)\b/g, `<span style="color:var(--peach)">$1</span>`),
                }}
              />

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                {[
                  { v: "3+",  l: "years coding",  c: "var(--mauve)" },
                  { v: "10+", l: "projects",       c: "var(--sky)"   },
                  { v: "2+",  l: "at ThemeGrill",  c: "var(--peach)" },
                ].map(s => (
                  <div
                    key={s.l}
                    className="rounded-md p-3"
                    style={{ border: "1px solid var(--border)", background: "oklch(28% .03 280 / .4)" }}
                  >
                    <div className="font-display text-2xl font-bold glow-text" style={{ color: s.c }}>{s.v}</div>
                    <div className="font-mono uppercase tracking-wider mt-1" style={{ fontSize: 9, color: "var(--muted-foreground)" }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              {/* Color strip */}
              <div className="mt-auto pt-6 flex gap-1">
                {["var(--mauve)","var(--pink)","var(--red)","var(--peach)","var(--yellow)","var(--green)","var(--teal)","var(--sky)"]
                  .map(c => <span key={c} className="h-2 flex-1 rounded-sm" style={{ background: c }} />)}
              </div>
            </div>
          </div>
        </Window>

        {/* Right column: contact + about stacked */}
        <div className="flex flex-col gap-4">

          {/* Contact window */}
          <Window title="contact.yml" icon={<FiMail size={13} />} ws={1} minHeight="220px">
            <div id="contact" className="p-5 h-full overflow-auto scrollbar-thin">
              <p className="font-mono text-xs mb-4" style={{ color: "var(--teal)" }}>~/contact.yml</p>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex items-start gap-2">
                  <FiMapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--red)" }} />
                  <div>
                    <div className="uppercase tracking-wider mb-0.5" style={{ fontSize: 10, color: "var(--muted-foreground)" }}>location</div>
                    <span style={{ color: "var(--foreground)" }}>Sarawal-6, Nawalparasi</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FiMail size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--peach)" }} />
                  <div>
                    <div className="uppercase tracking-wider mb-0.5" style={{ fontSize: 10, color: "var(--muted-foreground)" }}>email</div>
                    <a href="mailto:chaudharymilan996@gmail.com" className="hover:underline break-all" style={{ color: "var(--sky)" }}>
                      chaudharymilan996@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FiPhone size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--green)" }} />
                  <div>
                    <div className="uppercase tracking-wider mb-0.5" style={{ fontSize: 10, color: "var(--muted-foreground)" }}>phone</div>
                    <span style={{ color: "var(--foreground)" }}>+977-9807445408</span>
                  </div>
                </li>
              </ul>
              <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="font-mono uppercase tracking-wider mb-2" style={{ fontSize: 10, color: "var(--muted-foreground)" }}>connect</div>
                <div className="flex gap-2">
                  {[
                    { href: "https://github.com/MILAN88888", icon: <FiGithub size={16} />, color: "var(--mauve)" },
                    { href: "https://www.linkedin.com/in/milan-c", icon: <FiLinkedin size={16} />, color: "var(--sky)" },
                    { href: "mailto:chaudharymilan996@gmail.com", icon: <FiMail size={16} />, color: "var(--peach)" },
                  ].map(({ href, icon, color }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      className="grid place-items-center rounded-md border transition-all"
                      style={{ width: 36, height: 36, borderColor: "var(--border)", background: "oklch(28% .03 280 / .4)", color }}
                      onMouseEnter={e => (e.currentTarget.style.background = "var(--secondary)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "oklch(28% .03 280 / .4)")}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Window>

          {/* About window */}
          <Window title="about.md" icon={<FiUser size={13} />} ws={1} className="flex-1">
            <div id="about" />
            <div className="p-6 sm:p-7 h-full overflow-auto scrollbar-thin">
              <div className="flex items-center gap-2 font-mono text-xs mb-2" style={{ color: "var(--teal)" }}>
                <span>~/about</span>
                <span style={{ color: "var(--muted-foreground)" }}>$ cat readme.md</span>
              </div>

              <h2 className="font-display text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                # Building things for the web
              </h2>

              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                <p>
                  I&apos;m <span className="font-medium" style={{ color: "var(--foreground)" }}>Milan Kumar Chaudhary</span>,
                  a CS graduate from Visvesvaraya Technological University, Bangalore. I started my programming journey
                  as a PHP intern in July 2022 and haven&apos;t looked back.
                </p>
                <p>
                  At <span style={{ color: "var(--mauve)" }}>ThemeGrill</span> I build and maintain WordPress themes
                  and plugins, while continuously sharpening my skills in React, Next.js, and modern frontend tooling.
                </p>
                <p
                  className="italic"
                  style={{
                    color: "oklch(92% .02 280 / .9)",
                    borderLeft: "2px solid var(--mauve)",
                    paddingLeft: "0.75rem",
                  }}
                >
                  I love learning, open source, and shipping things that look great and work fast.
                </p>
              </div>

              {/* Tech tags */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono" style={{ fontSize: 11 }}>
                {Object.entries(TAG_COLORS).map(([tag, color]) => (
                  <span
                    key={tag}
                    className="px-2 py-1.5 rounded border text-center"
                    style={{ borderColor: "var(--border)", background: "oklch(28% .03 280 / .4)", color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Window>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          WS-2 + WS-3 · Work + Education
      ══════════════════════════════════════════════════════════ */}
      <div className="grid lg:grid-cols-2 gap-4">

        {/* Work */}
        <Window title="experience.log" icon={<FiBriefcase size={13} />} ws={2} minHeight="480px">
          <div id="ws-2" />
          <div className="p-5 h-full overflow-auto scrollbar-thin">
            <div className="flex items-center gap-2 font-mono text-xs mb-4" style={{ color: "var(--teal)" }}>
              <FiBriefcase size={12} /> ~/work $ git log --oneline
            </div>
            <ol className="relative space-y-5 ml-2 pl-5" style={{ borderLeft: "1px solid var(--border)" }}>
              {WORK_EXP.map((item, i) => {
                const colors = ["var(--mauve)", "var(--sky)", "var(--peach)"];
                const c = colors[i % colors.length];
                return (
                  <li key={item.id} className="relative">
                    <span
                      className="absolute rounded-full"
                      style={{
                        left: -26, top: 6, width: 10, height: 10,
                        background: c,
                        boxShadow: `0 0 0 3px var(--background)`,
                      }}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display font-semibold" style={{ fontSize: 14, color: "var(--foreground)" }}>
                        {item.position}
                      </h3>
                      <span
                        className="font-mono rounded px-2 py-0.5"
                        style={{ fontSize: 10, color: "var(--muted-foreground)", background: "oklch(28% .03 280 / .6)" }}
                      >
                        {item.start} – {item.end}
                      </span>
                    </div>
                    <a
                      href={item.linkorg}
                      target="_blank"
                      className="font-mono text-xs hover:underline inline-flex items-center gap-1"
                      style={{ color: c }}
                    >
                      @ {item.company} <FiExternalLink size={10} />
                    </a>
                    <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {item.description.substring(0, 160)}…
                    </p>
                    {Array.isArray((item as any).Link) && (item as any).Link.length > 0 && (item as any).Link[0].title && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {(item as any).Link.map((l: any) => (
                          <span key={l.title} className="font-mono rounded border px-1.5 py-0.5"
                            style={{ fontSize: 10, borderColor: "var(--border)", color: "oklch(92% .02 280 / .8)" }}>
                            {l.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </Window>

        {/* Education */}
        <Window title="education.log" icon={<FiBookOpen size={13} />} ws={3} minHeight="480px">
          <div id="ws-3" />
          <div className="p-5 h-full overflow-auto scrollbar-thin">
            <div className="flex items-center gap-2 font-mono text-xs mb-4" style={{ color: "var(--teal)" }}>
              <FiBookOpen size={12} /> ~/edu $ ls -la degrees/
            </div>
            <ol className="relative space-y-5 ml-2 pl-5" style={{ borderLeft: "1px solid var(--border)" }}>
              {EDU_EXP.map((item, i) => {
                const colors = ["var(--sky)", "var(--teal)", "var(--green)"];
                const c = colors[i % colors.length];
                return (
                  <li key={item.id} className="relative">
                    <span className="absolute rounded-full"
                      style={{ left: -26, top: 6, width: 10, height: 10, background: c, boxShadow: "0 0 0 3px var(--background)" }} />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display font-semibold" style={{ fontSize: 14, color: "var(--foreground)" }}>
                        {item.position}
                      </h3>
                      <span className="font-mono rounded px-2 py-0.5"
                        style={{ fontSize: 10, color: "var(--muted-foreground)", background: "oklch(28% .03 280 / .6)" }}>
                        {item.start} – {item.end}
                      </span>
                    </div>
                    <a href={item.linkorg} target="_blank"
                      className="font-mono text-xs hover:underline inline-flex items-center gap-1" style={{ color: c }}>
                      @ {item.from} <FiExternalLink size={10} />
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </Window>
      </div>

      {/* ═══════════════════════════════════════════════════════
          WS-4 + WS-5 · GitHub + Terminal
      ══════════════════════════════════════════════════════════ */}
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">

        {/* GitHub stats */}
        <Window title="gh-stats.tui" icon={<FiBarChart2 size={13} />} ws={4} minHeight="520px">
          <div id="ws-4" />
          <div className="p-5">
            <div className="flex items-center gap-2 font-mono text-xs mb-4" style={{ color: "var(--teal)" }}>
              <FiGithub size={12} /> ~/git $ gh api /users/milan88888/stats
            </div>
            {mounted && (
              <div className="flex flex-col gap-3">
                {[
                  { src: `https://github-readme-stats.vercel.app/api/top-langs?username=milan88888&${gitTheme}&show_icons=true&layout=compact`, alt: "Top Languages" },
                  { src: `https://github-readme-stats.vercel.app/api?username=milan88888&${gitTheme}&show_icons=true`, alt: "GitHub Stats" },
                  { src: `https://github-readme-streak-stats.herokuapp.com/?user=milan88888&${gitTheme}`, alt: "Streak" },
                ].map(({ src, alt }) => (
                  <img key={alt} src={src} alt={alt} className="rounded-lg max-w-full" style={{ maxWidth: 380 }} />
                ))}
              </div>
            )}
          </div>
        </Window>

        {/* Terminal */}
        <Window title="zsh — 80x24" icon={<FiTerminal size={13} />} ws={5} minHeight="520px">
          <div id="ws-5" />
          <div className="p-5 h-full font-mono text-xs leading-relaxed" style={{ color: "var(--foreground)" }}>
            <div className="flex items-center gap-2 mb-4" style={{ color: "var(--teal)" }}>
              <FiTerminal size={12} /> ~/terminal $ bash session.sh
            </div>
            <div className="space-y-1.5">
              {TERMINAL_LINES.map((line, i) => (
                <div key={i}>
                  {line.prompt ? (
                    <p>
                      <span style={{ color: "var(--green)" }}>{line.prompt}</span>
                      <span style={{ color: "var(--foreground)" }}>{line.cmd}</span>
                    </p>
                  ) : line.out_link ? (
                    <a href={line.out_link} target="_blank"
                      className="hover:underline block" style={{ color: "var(--sky)", paddingLeft: "1rem" }}>
                      {line.out_link}
                    </a>
                  ) : line.out ? (
                    <p style={{ paddingLeft: "1rem", color: "var(--muted-foreground)" }}
                      dangerouslySetInnerHTML={{ __html: line.out }} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Window>
      </div>

      {/* ═══════════════════════════════════════════════════════
          WS-6 · Projects
      ══════════════════════════════════════════════════════════ */}
      <Window title="projects.list" icon={<FiFolder size={13} />} ws={6} minHeight="520px">
        <div id="ws-6" />
        <div className="p-5">
          <div className="flex items-center gap-2 font-mono text-xs mb-6" style={{ color: "var(--teal)" }}>
            <FiFolder size={12} /> ~/projects $ ls -la
          </div>
          <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
            {PROJECT_LIST.map((item, i) => (
              <div key={item.id + i}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 py-5 px-2 rounded-lg transition-colors"
                onMouseEnter={e => (e.currentTarget.style.background = "oklch(28% .03 280 / .5)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                {/* Number */}
                <span className="font-display font-black text-5xl select-none flex-shrink-0 w-16 text-right"
                  style={{
                    background: "linear-gradient(to right, var(--mauve), var(--sky))",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundClip: "text", opacity: 0.35,
                    transition: "opacity .2s",
                  }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.opacity = "1")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.opacity = "0.35")}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-semibold" style={{ fontSize: 15, color: "var(--foreground)" }}>
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {item.stack.map((tag: string) => (
                        <span key={tag} className="font-mono rounded border px-1.5 py-0.5"
                          style={{ fontSize: 10, borderColor: "var(--border)", color: "oklch(92% .02 280 / .8)",
                            background: "oklch(28% .03 280 / .5)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs line-clamp-2 mb-3" style={{ color: "var(--muted-foreground)" }}>
                    {item.description}
                  </p>
                  <div className="flex gap-2">
                    {item.repoUrl && (
                      <a href={item.repoUrl} target="_blank" className="icon-link-btn" title="GitHub">
                        <VscSourceControl size={13} />
                      </a>
                    )}
                    {item.liveUrl && (
                      <a href={item.liveUrl} target="_blank" className="icon-link-btn" title="Live">
                        <FiExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="flex-shrink-0 overflow-hidden rounded-lg" style={{ border: "1px solid var(--border)" }}>
                  <Image src={item.images} alt={item.title} width={180} height={110}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ width: "clamp(120px,18vw,180px)", height: 110 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Window>

      {/* ═══════════════════════════════════════════════════════
          WS-7 · Skills
      ══════════════════════════════════════════════════════════ */}
      <Window title="skills.tui" icon={<FiCpu size={13} />} ws={7} minHeight="480px">
        <div id="ws-7" />
        <div className="p-5">
          <div className="flex items-center gap-2 font-mono text-xs mb-6" style={{ color: "var(--teal)" }}>
            <FiCpu size={12} /> ~/skills $ pacman -Qq | tools
          </div>
          <div className="flex flex-col gap-10">
            {TECH_LIST.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-6 rounded" style={{ background: "var(--mauve)" }} />
                  <span className="font-mono font-bold tracking-widest uppercase"
                    style={{ fontSize: 10, color: "var(--muted-foreground)" }}>
                    {group.category}
                  </span>
                  <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
                  <span className="font-mono rounded border px-2 py-0.5"
                    style={{ fontSize: 10, borderColor: "var(--border)", color: "var(--muted-foreground)",
                      background: "oklch(28% .03 280 / .4)" }}>
                    {group.items.length} tools
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                  {group.items.map((item: any) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center justify-center gap-2 rounded-lg p-3 cursor-default transition-all"
                      style={{ border: "1px solid var(--border)", background: "oklch(22% .025 280 / .6)" }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = item.color + "80";
                        el.style.background = item.color + "14";
                        el.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "var(--border)";
                        el.style.background = "oklch(22% .025 280 / .6)";
                        el.style.transform = "none";
                      }}
                    >
                      <span className="text-2xl flex items-center justify-center" style={{ color: item.color }}>
                        {item.icon}
                      </span>
                      <span className="font-mono text-center leading-tight" style={{ fontSize: 9, color: "var(--muted-foreground)" }}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Window>

      {/* ═══════════════════════════════════════════════════════
          Footer
      ══════════════════════════════════════════════════════════ */}
      <div className="pt-6 pb-4 text-center font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
        $ echo &quot;© {new Date().getFullYear()} milan kumar chaudhary — crafted with neovim &amp; ☕&quot;
      </div>

      {/* ═══════════════════════════════════════════════════════
          Bottom Dock (sticky)
      ══════════════════════════════════════════════════════════ */}
      <div className="sticky bottom-4 z-40 flex justify-center px-4 pointer-events-none">
        <div className="dock-glass rounded-2xl px-3 py-2 flex items-center gap-1 pointer-events-auto">
          {DOCK.map(item => (
            <a
              key={item.label}
              href={item.href}
              title={item.label}
              className="group relative grid place-items-center rounded-xl transition-all hover:-translate-y-1"
              style={{
                width: 44, height: 44,
                background: "oklch(28% .03 280 / .4)",
                color: item.color,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--secondary)")}
              onMouseLeave={e => (e.currentTarget.style.background = "oklch(28% .03 280 / .4)")}
            >
              {item.icon}
              <span
                className="absolute font-mono rounded border whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none"
                style={{
                  bottom: "calc(100% + 6px)",
                  fontSize: 10, padding: "2px 8px",
                  background: "var(--popover)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
