import { Project } from "@/components/Project";

export function ProjectsPresentation() {

  return (
    <section className="z-20 overflow-y-auto h-full w-full flex flex-col items-center justify-center scroll-smooth text-neutral-950 dark:text-neutral-200">

      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </section>
  )
}