"use client";
import Head from "next/head";
import Button from "./CallToActionButtons/Button";


export default function Hero() {
  const backgroundImageURL = '/light-bulbs-5488573.jpg'; // Path to your optimized background image
  
  <Head>
         <link
          rel="preload"
          href={backgroundImageURL}
          as="image"
          type="image/jpg" // IMPORTANT: Specify the correct MIME type (e.g., image/jpeg, image/png)
          crossOrigin="anonymous" // Essential if the image is served from a different domain (CDN)
        />
      </Head>
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
        <div
          style={{
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          }}
          className="absolute w-[900px] h-[800px] top-[-190%] left-[-30%] border-b-indigo-900 bg-opacity-50"
        />

        <h1 className="text-4xl md:text-6xl font-bold z-10">
          Hi, I&apos;m Jason
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl z-10 text-white">
          A front-end developer passionate about building user-friendly and
          impactful products.{" "}
        </p>
      </div>
      <div className="mt-6 flex gap-4 z-10 h-auto">
        <Button size={"lg"} variant="secondary">
          About Me
        </Button>
        <Button href="#projects">View Projects</Button>
      </div>
    </section>
  );
}
