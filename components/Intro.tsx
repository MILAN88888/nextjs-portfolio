"use client";
import { useEffect, useState } from "react";

export const Intro = () => {
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
      <div className="grid grid-cols md:grid-cols-[1fr_0.5fr] lg:grid-cols-[4fr_0.7fr] gap-4 items-center">
        <div className="py-5 md:py-10">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
            <p>
              Hi, I&apos;m <mark>Milan</mark> a <mark>passionate</mark>{" "}
              <span className="text-green-800">software developer</span> from
              Nepal.
            </p>
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
                      ? "yellow"
                      : count === 1
                      ? "cyan"
                      : count === 2
                      ? "yellow"
                      : count === 3
                      ? "cyan"
                      : "orage"
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
