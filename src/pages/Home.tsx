import { Footer } from "@/components/Footer";
import { Project } from "@/components/Project";

export function Home() {

  return (
    <section className="z-20 h-full grid grid-rows-[1fr_64px] place-items-center w-full">

      <div>
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
        <Project
          ProjectName="Dany Cakes"
          ProjectType="Mobile Design"
          ProjectDoneDate={2024}
          ProjectDesign="#"
          ProjectRepository=""
        />
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
      </div>

      <Footer />
    </section>
  )
}