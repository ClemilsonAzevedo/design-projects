import { Presentation } from "@/components/Presentation";
import projectsImages from '../data/presentation.json'
import { Loader2 } from "lucide-react";


export function Projects() {

  return (
    <section className="z-20 overflow-y-auto overflow-x-hidden w-full grid grid-cols-3 gap-5 max-md:flex max-md:flex-wrap max-md:mt-10">
      {projectsImages ? (
        <>
          {Object.values(projectsImages).map((project) => (
            <Presentation
              key={project.id}
              ImageUrl={project.imageUrl}
            />
          ))}
        </>
      ) : (
        <Loader2 className="animate-spin" size={24} />
      )}
    </section>
  )
}