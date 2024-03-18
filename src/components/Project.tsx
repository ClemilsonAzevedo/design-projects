import { Figma, Github } from "lucide-react";
import { Separator } from "./ui/separator";

interface ProjectProps {
  ProjectName: string;
  ProjectType: string;
  ProjectDoneDate: number;
  ProjectRepository?: string;
  ProjectDesign: string
}

export function Project({ ProjectDesign, ProjectDoneDate, ProjectName, ProjectType, ProjectRepository }: ProjectProps) {

  return (
    <div className="flex w-[650px] gap-2 items-center justify-center max-md:justify-start p-4 my-1 rounded-lg text-base hover:bg-neutral-300/70 dark:hover:bg-neutral-800/70 mx-auto max-lg:w-full max-md:overflow-y-auto max-md:border-b-2 max-sm:text-xs max-md:text-sm">
      <span className="font-semibold max-sm:w-[80px] max-sm:justify-start whitespace-nowrap truncate text-overflow-ellipsis max-md:w-[90px]">{ProjectName}</span>
      <Separator className="bg-neutral-700 dark:bg-neutral-300 w-40 max-md:h-5 max-md:w-px" />
      <span className="whitespace-nowrap truncate text-overflow-ellipsis max-sm:w-[80px] max-md:w-[90px] " >{ProjectType}</span>
      <Separator className="bg-neutral-700 dark:bg-neutral-300 h-5" orientation="vertical" />
      <span >{ProjectDoneDate}</span>
      <Separator className="bg-neutral-700 dark:bg-neutral-300 h-5" orientation="vertical" />

      {
        ProjectRepository && <a href={ProjectRepository} target="_blank" className="size-6 hover:scale-125"><Github className="max-sm:w-4 max-md:w-5" /></a>
      }

      <a href={ProjectDesign} target="_blank" className="size-6 hover:scale-125"><Figma className="max-sm:w-4 max-md:w-5" /></a>
    </div>
  )
}