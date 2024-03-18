import dayjs from "dayjs";
import { hoursOfTheDay } from "@/utils/hoursOfTheDay";
import { Calendar, Clock, FolderOpen, Github, Home, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SwitchThemeMode } from "./SwitchThemeMode";

export function Header() {

  const date = dayjs(Date.now()).format('DD / MM / YYYY')

  return (
    <div className="relative z-20 w-full max-md:h-max max-md:mt-10"
    >
      <header className="flex items-center  justify-center font-medium gap-5 max-md:flex-col ">

        <span className="flex items-center gap-2 max-md:hidden"
        ><Calendar className="fill-neutral-50 dark:fill-neutral-950" size={20} />{date}</span>

        <nav className="p-5 rounded-full bg-neutral-950 dark:bg-neutral-100 flex items-center justify-center gap-5 text-neutral-50 dark:text-neutral-950">
          <a
            href="/"
            target="_self"
            className="p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 "
          >
            <Home size={24} />
          </a>

          <a
            href="/projects"
            target="_self"
            className="p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 "
          >
            <FolderOpen size={24} />
          </a>

          <a
            href="#"
            className="max-sm:hidden"
          >
            <Avatar className="rounded-full h-10 w-10 p-1 bg-primary-foreground text-foreground font-bold"
            >
              <AvatarImage
                src="https://github.com/clemilsonazevedo.png"
                alt="@ClemilsonAzevedo"
                className="rounded-full"
              />
              <AvatarFallback>C.A</AvatarFallback>
            </Avatar>
          </a>

          <a
            href="https://twitter.com/_ClemAzevedo_"
            target="_blank"
            className="p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 "
          >
            <X size={24} />
          </a>

          <a
            href="https://github.com/clemilsonazevedo"
            target="_blank"
            className="p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 "
          >
            <Github size={24} />
          </a>
        </nav>

        <div className="flex items-center justify-center gap-2 max-md:absolute max-md:-bottom-10 max-md:right-5">
          <Clock className="fill-neutral-50 dark:fill-neutral-950 max-sm:hidden" size={20} />
          <span className="w-16">{hoursOfTheDay()}</span>
        </div>

        <span className="flex items-center gap-2 absolute -bottom-10 left-4 md:hidden"
        ><Calendar className="fill-neutral-50 dark:fill-neutral-950 max-sm:hidden" size={20} />{date}</span>
      </header>
      <SwitchThemeMode />
    </div>
  )
}