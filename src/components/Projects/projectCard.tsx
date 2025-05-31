import { Projects } from "@/data";
import Image from "next/image";
import Button from "../CallToActionButtons/Button";
import { FaArrowRight } from "react-icons/fa";
import { IconType } from "react-icons";

interface ProjectCardProps {
  data?: Projects[];
}

interface StackCardProps {
  technologies: string[];
}

const StackCard: React.FC<StackCardProps> = ({ technologies }) => {
  return (
    <section className="flex flex-wrap gap-2">
      {technologies.map((data) => {
        return (
          <span
            key={data}
            className="rounded-full bg-slate-800 text-slate-300 py-1 px-2 text-[14px]"
          >
            {data}
          </span>
        );
      })}
    </section>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  console.log(data);
  return (
    <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-[1280px] w-full gap-7 mx-auto text-left">
      {data?.map((project) => {
        return (
          <div
            className="flex flex-col gap-3 w-full bg-slate-900 rounded-md z-20 "
            key={project?.image?.alt}
          >
            <div className="relative w-full h-[200px] rounded-md">
              <Image
                src={project?.image?.src}
                alt={project?.image?.alt}
                fill
                priority
                className="object-fit rounded-t-md"
              />
            </div>

            <div className="px-6 pb-9 flex flex-col md:gap-6 gap-3">
              <div>
                <h1 className="font-bold md:text-[26px] text-[23px] mb-2">{project.title}</h1>
                <p>{project.description}</p>
              </div>
              <div>
                <StackCard technologies={project.technologies} />
              </div>

              <div className="flex  flex-wrap gap-5">
                {project.links.map((link) => {
                  const Icon = link.icon
                  return (
                      <Button key={link.text} className={"flex md:mt-0 mt-2 items-center gap-2" } variant={"primary"} size={"xsm"} href={link.url}>
                      
                        {link.text}
                      {Icon && <Icon  />}
        
                    </Button>
                  );  
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectCard;
