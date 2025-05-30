import React from "react";
import Image from "next/image";
import aboutBackground from "@/assets/shooting-star-2024127.svg";
import { aboutMeText } from "@/data";

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

      <main className="min-h-screen md:pt-36 lg:pt-52 pt-20 text-white z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:mb-12 mb-4">
          About Me
        </h1>

        <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-20 rounded-[40px] sm:p-8 p-4 shadow-xl">
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

            <div className="text-lg sm:text-justify text-left leading-relaxed">
              {aboutMeText.map((text) => {
                return <p key={text} className="mb-4">{text}</p>;
              })}
            </div>

            <div className="clear-both"></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroAbout;
