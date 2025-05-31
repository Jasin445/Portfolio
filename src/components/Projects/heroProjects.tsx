import { projects } from "@/data";
import BackgroundImg from "../backgroundImg";
import ProjectCard from "./projectCard";

const HeroProjects = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center text-center relative">
      <BackgroundImg />
      <main className="lg:pt-[210px] md:pt-[150px] pt-[90px] z-20 md:px-9 px-4 pb-16">
        <h1 className="md:text-4xl font-bold text-2xl lg:mb-14 md:mb-8 mb-7">
          My Projects
        </h1>
        <p className="md:text-xl text-[17px] font-semibold opacity-80 lg:mb-20 md:mb-9 mb-8 max-w-[600px] mx-auto">
          Here's a collection of projects I've worked on, showcasing my skills
          in modern web development and problem-solving.
        </p>
        <ProjectCard data={projects} />
      </main>
    </section>
  );
};

export default HeroProjects;
