import React from "react";
import Image from "next/image";
import aboutBackground from "@/assets/shooting-star-2024127.svg";

const HeroAbout = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center text-center relative -z-20">
      <Image
        src={aboutBackground}
        alt={"image of about background"}
        className="object-cover"
        priority
        fill
      />
      <div className="absolute inset-0 bg-black opacity-60" />

      <main className="min-h-screen md:pt-52 pt-20 text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h1>

        <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-20 rounded-[40px] p-8 shadow-xl">
          <div className="clearfix">
            <div className="mb-8 md:mb-0 md:mr-8 md:w-1/3 md:float-left">
              <Image
                src="/office-925806.jpg"
                alt="Jason Dagana Profile Picture"
                width={300}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            <div className="text-lg text-justify leading-relaxed">
              <p className="mb-4">
                Hello! I&apos;m Jason Dagana, a passionate Front-end Developer based
                in Yenagoa, Nigeria. My journey into the world of web
                development began with a fascination for how digital products
                come to life and how they can solve real-world problems through
                intuitive user experiences. I thrive on bringing ideas from
                concept to reality, focusing on clean code, responsive design,
                and exceptional user interfaces.
              </p>
              <p className="mb-4">
                With a strong foundation in React and Next.js, I specialize in
                crafting dynamic and high-performance web applications. I
                leverage Tailwind CSS for rapid and consistent UI development,
                ensuring every pixel is in its place. My expertise extends to
                TypeScript, which helps me write robust and scalable code, and
                Node.js for building efficient backend services.
              </p>
              <p className="mb-4">
                I am always eager to learn new technologies and embrace
                challenges that push my boundaries. My goal is to contribute to
                projects that make a real difference, combining my technical
                skills with a keen eye for design to deliver products that users
                love. When I&apos;m not coding, you can find me exploring new tech
                trends, contributing to open-source, or sketching new design
                concepts.
              </p>
              <p>
                I believe in continuous growth and the power of collaboration.
                If you&apos;re looking for a dedicated developer who cares deeply
                about user experience and code quality, let&apos;s connect!
              </p>
            </div>

            <div className="clear-both"></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroAbout;
