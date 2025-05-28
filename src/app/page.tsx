// import Hero from "@/components/Hero";
// import Skills from "@/components/Skills";
// import ProjectsPreview from "@/components/ProjectsPreview";
// import BlogPreview from "@/components/BlogPreview";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";


import { Metadata } from "next";
import Hero from "@/components/hero";
import CustomAccordion from "@/components/ui/accordion";


export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore the portfolio of Jason Dagana, a full-stack developer specializing in modern web technologies.",
  keywords: [
    "Portfolio",
    "Next.js",
    "Full-stack Developer",
    "React",
    "Tailwind CSS",
  ],
};

export default function Home() {
  return (
    <main>
      <Hero page={"Home"} title={"Hello there"} />

      {/* <CustomAccordion /> */}
    </main>
  );
}
