// import Hero from "@/components/Hero";
// import Skills from "@/components/Skills";
// import ProjectsPreview from "@/components/ProjectsPreview";
// import BlogPreview from "@/components/BlogPreview";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";

import AboutPage from "./about/page";
import Navlinks from "../components/Navbar/Navlinks";
import { navbarLinks } from "../data";
import { Metadata } from "next";
import Hero from "@/components/hero";
import Accordion from "@/components/ui/accordion";
import CustomAccordion from "@/components/ui/accordion";
// import jasonImg from "@/assets/Screenshot_2025-05-25-17-03-44-061_com.miui.mediaviewer.jpg";

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
      {/* <img src={''} alt="image of Jason" /> */}
      <Hero page={"Home"} title={"Hello there"} />

      <CustomAccordion />

      {/*<Skills />
      <ProjectsPreview />
      <BlogPreview />
      <Testimonials />
      <Contact /> */}
    </main>
  );
}
