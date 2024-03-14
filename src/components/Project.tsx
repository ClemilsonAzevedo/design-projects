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
    <div className="flex min-w-full gap-2 items-center p-4 my-1 rounded-lg text-base hover:bg-neutral-300/70 dark:hover:bg-neutral-800/70 justify-center ">
      <span className="font-semibold ">{ProjectName}</span>
      <Separator className="bg-neutral-500 w-40" />
      <span >{ProjectType}</span>
      <Separator className="bg-neutral-500 h-5" orientation="vertical" />
      <span >{ProjectDoneDate}</span>
      <Separator className="bg-neutral-500 h-5" orientation="vertical" />

      {
        ProjectRepository && <a href={ProjectRepository} target="_blank" className="size-6 hover:scale-125"><Github /></a>
      }

      <a href={ProjectDesign} target="_blank" className="size-6 hover:scale-125"><Figma /></a>
    </div>
  )
}