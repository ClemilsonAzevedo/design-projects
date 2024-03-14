import { Copyright } from "lucide-react";
import { Underline } from "./UnderlineSvg";

export function Footer() {

  return (
    <footer className="z-20 flex items-center gap-2 justify-center text-neutral-950 dark:text-neutral-50">
      <Copyright size={24} /><span className="flex flex-col items-center justify-center">Clemilson Azevedo <Underline /></span>
    </footer>

  )
}