import React from "react";
import LiveProjects from "./LiveProjects";
import { developmentJourneyProjects, liveProjects } from "@/data";
import DevJourneyProjects from "./DevJourneyProjects";


const Projects = () => {
  return (
    <>
      <LiveProjects data={liveProjects} />
      <DevJourneyProjects data={developmentJourneyProjects} />
    </>
  );
};

export default Projects;
