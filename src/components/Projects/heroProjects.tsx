import { projects } from "@/data"
import BackgroundImg from "../backgroundImg"
import ProjectCard from "./projectCard"

const HeroProjects = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center text-center relative">
      <BackgroundImg />
      <main className="md:pt-[210px] pt-[80px] z-20">

      <h1 className="md:text-4xl font-bold text-2xl md:mb-14 mb-7">My Projects</h1>
      <ProjectCard data={projects}/>

      </main>

      </section>
     
  )
}

export default HeroProjects