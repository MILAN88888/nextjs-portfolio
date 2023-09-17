"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Intro = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  let gitTheme = theme === "light" ? "theme=react" : "";
  let [count, setCount] = useState(0);
  const [text] = useState([
    "Build web apps with PHP and MVC.",
    "Create web apps and APIs with Laravel.",
    "Build SPAs with React.",
    "Develop websites with Next.js."
  ]);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);

      if (count === 3) {
        setCount(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);
  return (
    <section id="intro" className="max-w-6xl ml-8">
      <div className="grid grid-cols md:grid-cols-[1fr_0.5fr] lg:grid-cols-[4fr_0.7fr] gap-4 items-center intro-div">
        <div className="py-5">
          <h1 className="sm:text-xl md:text-4xl xl:text-5xl font-bold flex">
            <p className="leading-loose title">
              Hi, I&apos;m <mark>Milan</mark> a passionate{" "}
              <mark>software developer</mark> from Nepal.
            </p>
			<div>
			<Image
				src="/images/np_flag.gif"
				alt="Nepal Flag Image"
				width={180}
				height={37}
				priority
				/>
			</div>
          </h1>
          <div className="mt-3 relative flex flex-col overflow-hidden">
            <p className="text-[10px] md:text-[17px] text-2xl transform-none opacity-100">
              I
              <span
                className="absolute flex flex-col transition-all duration-500 ease-in-expo"
                style={{
                  top:
                    count === 0
                      ? "0"
                      : count === 1
                      ? "-100%"
                      : count === 2
                      ? "-200%"
                      : count === 3
                      ? "-300%"
                      : "0",
                  left: "13px",
                  color:
                    count === 0
                      ? "#ec4899"
                      : count === 1
                      ? "cyan"
                      : count === 2
                      ? "#ec4899"
                      : count === 3
                      ? "cyan"
                      : "#ec4899"
                }}
              >
                {text.map((element) => (
                  <TextElement key={element} element={element} />
                ))}
              </span>
            </p>
          </div>

        </div>
      </div>
      <div className="max-w-6xl w-full items-center gitstats-container lg:mt-12">
        <h2 className="text-3xl mb-4 md:text-4xl lg:text-3xl font-bold lg:mb-10 title">
          My github stats:
        </h2>
        <div className="flex flex-col">
          <div className="flex flex-col gap-6 mb-4 lg:flex lg:flex-row lg:gap-4 lg:mb-4">
            <img
              className="w-96"
              src={`https://github-readme-stats.vercel.app/api/top-langs?username=milan88888&${gitTheme}&show_icons=true&locale=en&layout=compact`}
              alt=""
            />
            <img
              className="w-96"
              src={`https://github-readme-stats.vercel.app/api?username=milan88888&${gitTheme}&show_icons=true&locale=en`}
              alt=""
            />
          </div>
          <img
            className="w-96"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=milan88888&${gitTheme}`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
function TextElement({ element }: any) {
  const firstWord = <b>{element.split(" ").at(0)}</b>;
  const restWords = element.split(" ").slice(1).join(" ");

  return (
    <span className="text-[10px] md:text-[17px] text-2xl">
      {firstWord} {restWords}
    </span>
  );
}
