interface PresentationProps {
  ImageUrl?: string
  designUrl?: string
}

export function Presentation({ ImageUrl, designUrl }: PresentationProps) {

  return (
    <a href={designUrl} target="_blank" className="flex flex-grow" >
      <figure className="rounded-lg cursor-pointer w-full max-md:w-52 max-md:flex-grow bg-foreground justify-center">
        <img
          src={ImageUrl}
          alt="Project Image"
          className="rounded-lg w-full aspect-square object-cover grayscale-[0.5] block transition hover:hue-rotate-[6deg] hover:contrast-[101%] hover:saturate-200 hover:scale-[1.1] hover:rotate-2 border border-muted-foreground"
        />
      </figure>
    </a>
  )
}