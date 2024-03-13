import { Switch } from "./ui/switch";
import dayjs from "dayjs";
import { hoursOfTheDay } from "@/utils/hoursOfTheDay";

export function Header() {



  const date = dayjs(Date.now()).format('DD / MM / YYYY')


  return (
    <div className="flex min-w-full justify-center items-center relative">
      <header className="flex items-center gap-5 font-medium">
        <span>{date}</span>
        <nav>
          <li className="list-none">icon</li>
          <li className="list-none">icon</li>
          <li className="list-none">Avatar</li>
          <li className="list-none">icon</li>
          <li className="list-none">icon</li>
        </nav>
        <span>{hoursOfTheDay()}</span>
      </header>

      <span className="absolute right-4 top-11 flex items-center gap-2">
        <Switch />
        Theme Mode
      </span>
    </div>
  )
}