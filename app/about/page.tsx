import Image from "next/image";

const About = () => {
  return (
    <div className="relative flex place-items-center">
      <Image
        className="rounded-full"
        src="/images/milan.jpg"
        alt="@i-am-milan Image"
        width={180}
        height={37}
        priority
      />
    </div>
  );
};

export default About;
