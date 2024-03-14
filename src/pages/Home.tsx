import { Project } from "@/components/Project";

export function Home() {

  return (
    <section className="overflow-y-scroll h-full min-w-[750px] flex flex-col items-center scroll-smooth justify-center text-neutral-950 dark:text-neutral-200 z-20">

      <Project
        ProjectName="Dany Cakes"
        ProjectType="Mobile Design"
        ProjectDoneDate={2024}
        ProjectDesign="#"
        ProjectRepository=""
      />
      <Project
        ProjectName="Login Template"
        ProjectType="Desktop Design"
        ProjectDoneDate={2020}
        ProjectDesign="#"
        ProjectRepository="#"
      />


    </section>
  )
}