import { JourneyProject, stageHeading, stages } from "@/data";
import ProjectCard from "./projectCard";

interface DevJourneyProps {
  data: JourneyProject[];
}

const DevJourneyProjects: React.FC<DevJourneyProps> = ({ data }) => {
  return (
    <section className="mt-24">
      <header className="text-left mb-6">
        <div className="flex flex-col w-fit">
          <h2 className="text-2xl font-bold capitalize">My Development Journey</h2>
          <div className=" h-[4px] bg-blue-600 z-40 mt-1 mb-6 opacity-40" />
        </div>
        <p className="text-[18px] max-w-[500px] font-bold opacity-70">
          A look back at my personal projects, charting my growth from
          foundational web technologies to modern frameworks.
        </p>
      </header>
      {stages.map((stage) => {
        const variousStages = data.filter(
          datum => datum?.stage === stage
        );
          const stageHeader = stageHeading(stage);
          
          if (variousStages.length === 0) {
              return null;
          }
        return (
          <div key={stage} className="mb-14">
            <div className="text-left mb-7">
              <h3 className="font-semibold mb-3">{stageHeader[0]}</h3>
              <p className="max-w-xl opacity-60">{stageHeader[1]}</p>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-[1280px] w-full gap-7 mx-auto text-left">
              { variousStages?.map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    links={project.links}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DevJourneyProjects;
