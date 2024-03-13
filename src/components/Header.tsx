import { Switch } from "./ui/switch";
import dayjs from "dayjs";
import { hoursOfTheDay } from "@/utils/hoursOfTheDay";
import { FolderOpen, Github, Home, X, Moon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {

  const date = dayjs(Date.now()).format('DD / MM / YYYY')

  return (
    <div className="flex min-w-full justify-center items-center relative p-4">
      <header className="flex items-center justify-center gap-5 font-medium">

        <span>{date}</span>


        <nav className="py-4 px-5 rounded-full bg-neutral-950 flex items-center justify-center gap-4 text-neutral-50">
          <li className="list-none p-2 hover:bg-neutral-800/70 rounded-full hover:scale-125 transition"><Home size={24} /></li>
          <li className="list-none p-2 hover:bg-neutral-800/70 rounded-full hover:scale-125 transition"><FolderOpen size={24} /></li>
          <li className="list-none">
            <Avatar className="bg-neutral-50 rounded-full text-neutral-950 h-10 w-10">
              <AvatarImage
                src="https://github.com/clemilsonazevedo.png"
                alt="@ClemilsonAzevedo" />
              <AvatarFallback>C.A</AvatarFallback>
            </Avatar>
          </li>
          <li className="list-none p-2 hover:bg-neutral-800/70 rounded-full hover:scale-125 transition"><X size={24} /></li>
          <li className="list-none p-2 hover:bg-neutral-800/70 rounded-full hover:scale-125 transition"><Github size={24} /></li>
        </nav>

        <div className="transition flex-1">{hoursOfTheDay()}</div>

      </header>

      <div className="absolute right-4 top-7 flex items-center gap-2">
        <Switch id='themeMode' />
        <label htmlFor="themeMode"><Moon /></label>
      </div>
    </div>
  )
}