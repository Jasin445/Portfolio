"use client";

import HeroHome from "./Home/HeroHome";
import HeroAbout from "./About/HeroAbout";
import HeroProjects from "./Projects/heroProjects";

interface Hero {
  page: "home" | "about-me" | "projects" | "resume" | "contact-me";
}

export default function Hero({ page }: Hero) {
  switch (page) {
    case "home":
      return <HeroHome />;
    case "about-me":
      return <HeroAbout />;
    case "projects":
      return <HeroProjects />;
    default:
      return <HeroHome />;
  }
}
