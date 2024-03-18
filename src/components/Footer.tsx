import { Copyright } from "lucide-react";
import { Underline } from "./UnderlineSvg";

export function Footer() {

  return (
    <footer className="z-20 flex items-center gap-2 justify-center text-neutral-950 dark:text-neutral-50 max-md:absolute max-md:bottom-6 max-md:w-full">
      <Copyright className="max-sm:hidden" size={24} />Developed by:<span className="flex flex-col items-center justify-center relative">Clemilson Azevedo <Underline /></span>
    </footer>

  )
}