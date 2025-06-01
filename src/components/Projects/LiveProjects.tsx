import {
  LiveProjects as LiveProject,
} from "@/data";
import ProjectCard from "./projectCard";

interface LiveProps {
  data: LiveProject[];
}


const LiveProjects: React.FC<LiveProps> = ({ data }) => {
  return (
    <section>
      <header className="text-left mb-6">
        <div className="flex flex-col w-fit">
          <h2 className="text-2xl font-bold capitalize">Live Projects</h2>
          <div className=" h-[4px] bg-blue-600 z-40 mt-1 mb-6 opacity-40" />
        </div>
        <p className="text-[18px] max-w-[500px] font-bold opacity-70">
          Here are some of my recent projects that are deployed and fully
          functional.
        </p>
      </header>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-[1280px] w-full gap-7 mx-auto text-left">
        {data?.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              links={project.links}
              description={project.description}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </section>
  );

};

export default LiveProjects;
