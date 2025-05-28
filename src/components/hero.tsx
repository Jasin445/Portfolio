'use client'
import { HeroProps } from "@/types";
import Button from "./CallToActionButtons/Button";
import { Typewriter } from "react-simple-typewriter";
import { heroText } from "@/data";

export default function Hero({ title, page }: HeroProps) {
  return (
    <section
      style={{
        backgroundImage: "url('/light-bulbs-5488573.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" h-screen w-full flex flex-col justify-center items-center text-center px-4 relative"
    >
       <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative overflow-hidden ">
       <div style={{ WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
        maskImage: "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
      }} className="absolute w-[900px] h-[800px] top-[-190%] left-[-30%] border-b-indigo-900 bg-opacity-50" />

      <h1 className="text-4xl md:text-6xl font-bold z-10">Hi, I'm Jason</h1>
      <p className="mt-4 text-lg md:text-xl max-w-xl z-10 text-white">
         <Typewriter delaySpeed={5015} words={heroText} />
        </p>
        </div>
      <div className="mt-6 flex gap-4 z-10 h-auto">
        <Button size={'lg'} variant="secondary">About Me</Button>
        <Button  href="#projects">View Projects</Button>
      </div>
    </section>
  );
}
