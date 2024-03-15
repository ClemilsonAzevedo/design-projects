import dayjs from "dayjs";
import { hoursOfTheDay } from "@/utils/hoursOfTheDay";
import { Calendar, Clock, FolderOpen, Github, Home, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SwitchThemeMode } from "./SwitchThemeMode";

export function Header() {

  const date = dayjs(Date.now()).format('DD / MM / YYYY')

  return (
    <div className="flex w-full justify-center items-center relative z-20">
      <header className="flex items-center justify-center font-medium gap-5 w-full">

        <span className="flex items-center gap-2"><Calendar size={20} />{date}</span>

        <nav className="py-4 px-5 rounded-full bg-neutral-950 dark:bg-neutral-100 flex items-center justify-center gap-4 text-neutral-50 dark:text-neutral-950">
          <a href="/home" target="_self" className="p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 ">
            <Home size={24} />
          </a>

          <a href="/projects" target="_self" className="p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 ">
            <FolderOpen size={24} />
          </a>

          <a href="#">
            <Avatar className="rounded-full h-10 w-10 p-1 bg-primary-foreground text-foreground font-bold">
              <AvatarImage
                src="https://github.com/clemilsonazevedo.png"
                alt="@ClemilsonAzevedo"
                className="rounded-full"
              />
              <AvatarFallback>C.A</AvatarFallback>
            </Avatar>
          </a>

          <a href="https://twitter.com/_ClemAzevedo_" target="_blank" className="p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 ">
            <X size={24} />
          </a>

          <a href="https://github.com/clemilsonazevedo" target="_blank" className="p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 ">
            <Github size={24} />
          </a>
        </nav>

        <div className="flex items-center justify-center gap-2"><Clock size={20} /><span className="w-16">{hoursOfTheDay()}</span></div>
      </header>
      <SwitchThemeMode />
    </div>
  )
}