import { Separator } from "@radix-ui/react-separator";

export function Project() {

  return (
    <div className="flex gap-2 items-center p-4 rounded-lg hover:bg-neutral-300/70 dark:hover:bg-neutral-900/70 transition ">
      <span>Dany Cakes</span>
      <Separator className="bg-neutral-500 h-5" orientation="vertical" />
      <span>Mobile Design</span>
      <Separator className="bg-neutral-500 h-5" orientation="vertical" />
      <span>2024</span>
      <Separator className="bg-neutral-500 h-5" orientation="vertical" />
      <span>Repository Project</span>
      <Separator className="bg-neutral-500 h-5" orientation="vertical" />
      <span>Design Link</span>
    </div>
  )
}