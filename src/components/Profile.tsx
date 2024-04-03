import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";
import { GithubIcon, Instagram, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function Profile() {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar className="max-sm:hidden rounded-full h-12 w-12 p-px bg-primary-foreground text-foreground font-bold cursor-pointer"
        >
          <AvatarImage
            src="https://github.com/clemilsonazevedo.png"
            alt="@ClemilsonAzevedo"
            className="rounded-full"
          />
          <AvatarFallback className="grid place-items-center h-full">C.A</AvatarFallback>
        </Avatar>
      </DialogTrigger>

      <DialogContent className="flex justify-center items-center text-neutral-950 dark:text-neutral-50 p-5 text-sm">

        <div>
          <img
            src="http://github.com/clemilsonazevedo.png"
            alt="Clemilson Azevedo Profile Image"
            className="w-40 h-40 rounded-full"
          />

          <h2 className="text-base font-semibold text-center my-4">Frontend Developer</h2>
          <div className="space-y-1">
            <a
              href="https://github.com/clemilsonazevedo"
              target="_blank"
              className="p-2 flex items-center justify-start gap-2 hover:text-red-400">
              <GithubIcon size={20}
              />
              <span>Clemilson Azevedo</span>
            </a>

            <a
              href="https://twitter.com/_ClemAzevedo_"
              target="_blank"
              className="p-2 flex items-center justify-start gap-2 hover:text-red-400">
              <X size={20}
              />
              <span>@_ClemAzevedo_</span>
            </a>

            <a
              href="https://www.instagram.com/_clemilsonazevedo_"
              target="_blank"
              className="p-2 flex items-center justify-start gap-2 hover:text-red-400">
              <Instagram size={20}
              />
              <span>@_clemilsonazevedo_</span>
            </a>
          </div>
        </div>


        <div className="space-y-4">
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">Clemilson Azevedo</DialogTitle>
          <div className="flex flex-col space-y-px">
            <span className="font-medium">Birthday: 18/06/2002</span>
            <span className="font-medium">Freelance: Available</span>
          </div>

          <div>
            <h3 className="font-semibold text-base">Skills</h3>
            <Separator className="mb-4 bg-muted-foreground" />
            <ul className="space-y-2">
              <li className="space-x-1 space-y-1">
                <span className="font-medium">Design: </span>
                <Badge>#Figma</Badge>
                <Badge>#Gimp</Badge>
                <Badge>#Photoshop</Badge>
              </li>

              <li className="space-x-1 space-y-1">
                <span className="font-medium">Frontend:</span>
                <Badge>#React</Badge>
                <Badge>#Next.JS</Badge>
                <Badge>#Vite</Badge>
              </li>

              <li className="space-x-1 space-y-1">
                <span className="font-medium">Backend:</span>
                <Badge>#Nodejs</Badge>
                <Badge>#Fastify</Badge>
                <Badge>#Bun</Badge>
                <Badge>#Express</Badge>
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

}