import dayjs from "dayjs";
import { hoursOfTheDay } from "@/utils/hoursOfTheDay";
import { FolderOpen, Github, Home, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SwitchThemeMode } from "./SwitchThemeMode";

export function Header() {

  const date = dayjs(Date.now()).format('DD / MM / YYYY')

  return (
    <div className="flex w-full justify-center items-center relative">
      <header className="flex items-center justify-center gap-5 font-medium">

        <span>{date}</span>

        <nav className="py-4 px-5 rounded-full bg-neutral-950 dark:bg-neutral-100 flex items-center justify-center gap-4 text-neutral-50 dark:text-neutral-950">
          <li className="list-none p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 transition"><Home size={24} /></li>
          <li className="list-none p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 transition"><FolderOpen size={24} /></li>
          <li className="list-none">
            <Avatar className="rounded-full h-10 w-10 p-1 bg-primary-foreground">
              <AvatarImage
                src="https://github.com/clemilsonazevedo.png"
                alt="@ClemilsonAzevedo"
                className="rounded-full"
              />
              <AvatarFallback>C.A</AvatarFallback>
            </Avatar>
          </li>
          <li className="list-none p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 transition"><X size={24} /></li>
          <li className="list-none p-2 hover:bg-neutral-800/70 dark:hover:bg-neutral-300/70 rounded-full hover:scale-125 transition"><Github size={24} /></li>
        </nav>

        <div>{hoursOfTheDay()}</div>

      </header>

      <SwitchThemeMode />
    </div>
  )
}