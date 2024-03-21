import { Footer } from "@/components/Footer";
import { Project } from "@/components/Project";
import { Loader2 } from "lucide-react";
import projectsData from '../data/projects.json'

export function Home() {

  return (
    <section className="z-20 h-full grid grid-rows-[1fr_64px] place-items-center w-full">

      {projectsData ? (
        <div>
          {Object.values(projectsData).map((project) => (
            <Project
              key={project.id}
              ProjectName={project.ProjectName}
              ProjectType={project.ProjectType}
              ProjectDoneDate={project.ProjectDoneDate}
              ProjectDesign={project.ProjectDesign}
              ProjectRepository={project?.ProjectRepository}
            />
          ))}
        </div>
      ) : (
        <Loader2 className="animate-spin" size={24} />
      )}

      <Footer />
    </section>
  )
}