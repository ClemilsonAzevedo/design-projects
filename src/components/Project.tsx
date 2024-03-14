import { Figma, Github } from "lucide-react";
import { Separator } from "./ui/separator";

export function Project() {

  return (
    <div className="flex gap-2 items-center p-4 rounded-lg text-lg hover:bg-neutral-300/70 dark:hover:bg-neutral-800/70  ">
      <span className="font-semibold ">Dany Cakes</span>
      <Separator className="bg-neutral-500 w-40" />
      <span >Mobile Design</span>
      <Separator className="bg-neutral-500 h-5" orientation="vertical" />
      <span >2024</span>
      <Separator className="bg-neutral-500 h-5" orientation="vertical" />
      <a href="#" className="size-6 hover:scale-125 "><Github /></a>
      <a href="#" className="size-6 hover:scale-125 "><Figma /></a>
    </div>
  )
}