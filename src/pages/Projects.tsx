import { Project } from "@/components/Project";

export function Projects() {

  return (
    <section id="projects" className="overflow-y-auto h-full w-[650px] flex flex-col items-center scroll-smooth justify-center text-neutral-950 dark:text-neutral-200 z-20">

      <Project
        ProjectName="Dany Cakes"
        ProjectType="Mobile Design"
        ProjectDoneDate={2024}
        ProjectDesign="#"
        ProjectRepository=""
      />


    </section>
  )
}