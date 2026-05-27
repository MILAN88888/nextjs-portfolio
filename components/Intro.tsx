"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Intro: React.FC = () => {
  const { theme } = useTheme();
  const [gitTheme, setGitTheme] = useState<string>("theme=react");
  const [highlighter, setHighlighter] = useState<string>("mark-light");

  useEffect(() => {
    if (theme === "dark") {
      setGitTheme("");
      setHighlighter("mark-dark");
    } else {
      setGitTheme("theme=react");
      setHighlighter("mark-light");
    }
  }, [theme]);

  const [count, setCount] = useState(0);
  const [text] = useState([
    "Build web apps with PHP and MVC.",
    "Create web apps and APIs with Laravel.",
    "Build SPAs with React.",
    "Develop websites with Next.js.",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => (c + 1) % text.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <section id="intro" className="w-full max-w-5xl mx-auto">
      {/* Hero */}
      <div className="flex flex-col gap-6 py-16 md:py-24">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight title">
              Hi, I&apos;m{" "}
              <span className={highlighter}>Milan</span>
            </h1>
            <Image
              src="/images/np_flag.gif"
              alt="Nepal Flag"
              width={48}
              height={28}
              priority
              className="inline-block rounded-sm"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight title">
            a passionate{" "}
            <span className={highlighter}>software developer</span>{" "}
            from Nepal.
          </h1>
        </div>

        {/* Animated ticker */}
        <div className="relative h-8 overflow-hidden mt-2">
          <div
            className="absolute flex flex-col transition-transform duration-500"
            style={{
              transform: `translateY(-${count * 2}rem)`,
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {text.map((item) => (
              <span
                key={item}
                className="h-8 flex items-center text-base md:text-lg font-medium"
                style={{ color: "var(--muted)" }}
              >
                <span className="mr-2 font-bold" style={{ color: "var(--accent)" }}>I</span>
                <TickerText text={item} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub stats */}
      <div className="w-full mt-4 mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6 title flex items-center gap-2">
          <span
            className="inline-block w-1 h-5 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          GitHub Stats
        </h2>
        <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-4">
          <img
            className="rounded-lg max-w-full lg:w-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=milan88888&${gitTheme}&show_icons=true&locale=en&layout=compact`}
            alt="Top Languages"
            style={{ maxWidth: "400px" }}
          />
          <img
            className="rounded-lg max-w-full lg:w-auto"
            src={`https://github-readme-stats.vercel.app/api?username=milan88888&${gitTheme}&show_icons=true&locale=en`}
            alt="GitHub Stats"
            style={{ maxWidth: "400px" }}
          />
          <img
            className="rounded-lg max-w-full lg:w-auto"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=milan88888&${gitTheme}`}
            alt="GitHub Streak"
            style={{ maxWidth: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

const TickerText: React.FC<{ text: string }> = ({ text }) => {
  const [first, ...rest] = text.split(" ");
  return (
    <span>
      <b style={{ color: "var(--accent)" }}>{first}</b> {rest.join(" ")}
    </span>
  );
};
