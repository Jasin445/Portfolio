"use client";
import Button from "./CallToActionButtons/Button";
import Image from "next/image";

export default function Hero() {
  const backgroundImageURL = "/light-bulbs-5488573.jpg";

  return (
    <section className=" h-screen w-full flex flex-col justify-center items-center text-center px-4 relative">
      <Image
        src={backgroundImageURL}
        alt={"image of herobackground"}
        priority
        fill
        className="object-cover"
      />
      <div className="absolute z-10 inset-0 bg-black bg-opacity-70" />
      <div className="z-20 overflow-hidden ">
        <h1 className="text-4xl md:text-6xl font-bold z-10">
          Hi, I&apos;m Jason
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl z-10 text-white">
          A front-end developer passionate about building user-friendly and
          impactful products.{" "}
        </p>
      </div>
      <div className="mt-6 flex gap-4 z-20 h-auto">
        <Button size={"lg"} variant="secondary">
          About Me
        </Button>
        <Button href="#projects">View Projects</Button>
      </div>
    </section>
  );
}
