"use client";

import HeroHome from "./Home/HeroHome";
import HeroAbout from "./About/HeroAbout";

interface Hero {
  page: "home" | "about-me" | "projects" | "resume" | "contact-me";
}

export default function Hero({ page }: Hero) {

  
  if (page === "home") {
    return <HeroHome/>
  
  }
  
  if (page === "about-me") {
    return <HeroAbout/>
    
  }

}