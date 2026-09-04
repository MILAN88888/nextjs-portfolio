import {
  Hero,
  About,
  AiWork,
  Projects,
  Skills,
  Experience,
  Education,
  Contact,
} from "@/components/sections";

/**
 * Single-page portfolio. Section order here must stay in step with
 * constants/Sections.tsx, which drives the header nav and scroll-spy.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AiWork />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
