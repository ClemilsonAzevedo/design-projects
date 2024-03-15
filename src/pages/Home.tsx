import { Project } from "@/components/Project";

export function Home() {

  return (
    <div className="relative h-full w-full grid items-center overflow-x-hidden scroll-smooth ">
      <main className="text-neutral-950 dark:text-neutral-200 flex absolute gap-5 ">

        <section id="home" className="w-screen z-20  snap-x snap-end">
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


        <section id="projects" className="z-20 w-screen snap-x snap-end">
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

      </main>
    </div>
  )
}