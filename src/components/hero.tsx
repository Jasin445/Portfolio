"use client";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Button from "./CallToActionButtons/Button";
import Image from "next/image";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Hero() {
  const backgroundImageURL = "/light-bulbs-5488573.jpg";

  const skills = [
    { name: "React", icon: FaReact, color: "text-blue-400" }, // Example: Tailwind color for icon
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-300" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    // Add more as needed
  ];

  return (
    <section className=" h-screen w-full flex flex-col justify-center items-center text-center px-4 relative">
      <Image
        src={backgroundImageURL}
        alt={"image of herobackground"}
        priority
        fill
        className="object-cover"
      />
      <div className="absolute z-10 inset-0 bg-black bg-opacity-70 " />
      <div className="z-20 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-6xl font-bold z-10">
          Hi, I&apos;m Jason Dagana
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl z-10 text-white">
          A front-end developer passionate about building user-friendly and
          impactful products.{" "}
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-[400px] mt-8 p-2 rounded-md bg-transparent bg-opacity-30">
          {" "}
          {/* Subtle transparent background */}{" "}
          {/* mb-8 for space before buttons */}
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`flex items-center px-3 py-1 rounded-full text-sm font-medium border border-gray-600 bg-gray-800 text-white transition-colors duration-300  hover:bg-gray-700`}
            >
              {skill.icon && (
                <skill.icon className={`mr-2 ${skill.color}`} size={16} />
              )}{" "}
              {/* Render icon if available */}
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-9 flex gap-4 z-20 h-auto">
        <Button size={"md"} variant="secondary">
          About Me
        </Button>
        <Button size={"md"} href="#projects">
          View Projects
        </Button>
      </div>
    </section>
  );
}
