import React from "react";
import Image from "next/image";
import { aboutMeText } from "@/data";
import BackgroundImg from "../backgroundImg";
import myPicture from "@/assets/1748526565660.png"

const HeroAbout = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center text-center relative">
     <BackgroundImg />

      <main className="min-h-screen lg:pt-[210px] md:pt-[150px] pt-[120px] text-white z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:mb-12 mb-4">
          About Me
        </h1>

        <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-20 rounded-[40px] sm:p-8 p-4 shadow-xl">
          <div className="clearfix">
            <div className="relative inset-0 w-[100%] h-[300px] mb-8 md:mb-0 md:mr-8 md:w-1/3 md:float-left">
              <Image
                src={myPicture}
                alt="Jason Dagana Profile Picture"
                priority
                fill
                className="rounded-md shadow-lg object-cover object-top"
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
