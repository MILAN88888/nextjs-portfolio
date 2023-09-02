import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about-main flex items-center lg:flex lg:items-center lg:justify-between">
		<div>
          <Image
            className="rounded-full"
            src="/images/milan.jpg"
            alt="@i-am-milan Image"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className="about-container">
          <p className="text-justify">
            I am Milan Kumar Chaudhary, a recent graduate from Visvesvaraya
            Technological University in Bangalore, Karnataka, with a degree in
            Computer Science. During my years at the university, I developed a
            profound passion for web programming, and I continuously sought
            opportunities to learn and apply new concepts and techniques in this
            field. My official journey into programming began in July 2022 when
            I started working as an intern PHP developer.
          </p>
          <br />
          <p className="text-justify">
            {" "}
            I thoroughly enjoy learning about technologies that pique my
            interest, which is why I devoted a significant amount of time to
            working with PHP. Additionally, I actively pursued projects in
            Laravel, further honing my skills. One day, I decided to venture
            into new territory, embarking on a journey to learn React. I was
            thrilled to discover how quickly I could create websites with it and
            how straightforward it was to maintain them. As a result, I rapidly
            picked up Next.js and used it to build my own portfolio website.
          </p>
          <br />
          <p className="text-justify">
            Currently, I am employed as a PHP developer at ThemeGrill.
          </p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-teal-500 text-white py-2 px-4 rounded-lg font-bold text-2xl inline-block">
          Work Experience
        </div>
          <div className="p-4 mt-6">
            Intern PHP Developer - 15 July 2022 - 15 Oct 2022
          </div>
            <br />||
          <div className="p-4">
            Intern Plugin PHP Developer - 15 Jan 2023 - 15 Mar 2023
          </div>
            <br />||
          <div className="p-4">
            Plugin PHP Developer - 16 Mar 2023 - Present
          </div>
      </div>
    </>
  );
};

export default About;
