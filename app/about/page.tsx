import Image from "next/image";
import Link from "next/link";

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
            I&#39;m Milan Kumar Chaudhary, a recent Computer Science graduate from
            Visvesvaraya Technological University in Bangalore, Karnataka.
            During my time at university, I discovered my keen interest in web
            programming. In July 2022, I took my first step into the world of
            programming by joining an internship as a PHP developer. This
            internship marked the beginning of my exciting journey in the
            programming field.
          </p>
          <br />
          <p className="text-justify">
            {" "}
            I have a genuine passion for acquiring knowledge, especially when it
            comes to new technologies, with a strong focus on PHP and Laravel.
            These web development technologies have captured my attention, and
            I&#39;ve invested considerable time in mastering them.
          </p>
		  <br/>
          <p className="text-justify">
            {" "}
            As of February 2023, I&#39;ve taken my career to the next level and am
            currently employed as a PHP developer at ThemeGrill. This transition
            reflects my dedication and growth within the industry.
          </p>
          <br />
          <p className="text-justify">
            Furthermore, in my free time, I&#39;m deeply interested in learning
            and working with React. My
            enthusiasm for React led me to develop my own portfolio in Next.js,
            which has been an exciting project for me.
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
        <br />
        ||
        <div className="p-4">
          Intern Plugin PHP Developer - 15 Jan 2023 - 15 Mar 2023
        </div>
        <br />
        ||
        <div className="p-4">Plugin PHP Developer - 16 Mar 2023 - Present</div>
      </div>
      <div className="text-center mt-8 mb-8">
        <div className="bg-teal-500 text-white py-2 px-4 rounded-lg font-bold text-2xl inline-block">
          <Link href="/file/milan-cv.pdf">Download CV</Link>
        </div>
      </div>
    </>
  );
};

export default About;
