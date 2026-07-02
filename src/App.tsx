// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { FaJava, FaPython, FaReact } from "react-icons/fa"
// import { BsTypescript } from "react-icons/bs"
// import { DiPostgresql } from "react-icons/di"
// import { RiNextjsFill } from "react-icons/ri"

export function App() {
  // const badgeStyles = "text-xs p-3 flex gap-2"
  // const iconSize = 15
  const highlight = "font-bold text-red-400"

  return (
    // <div className="flex h-screen flex-col items-center justify-center gap-10 text-center">
    <div className="p-5">
      {/* text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight */}
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        Hi. I'm <span className="font-bold text-red-600">Shayan</span>.
      </h1>
      {/* <br /> */}

      <div className="flex flex-col gap-7 lg:w-150 xl:w-200">
        <p className="text-xl">
          {/* <p className="text-2xl"> */}
          Graduate in <span className={highlight}>Computer Science</span> and
          aspiring full-stack developer, focused on building reliable and
          maintainable software.
        </p>
        {/* <p> */}
        {/* <p className="text-lg text-zinc-300"> */}
        {/* Continuously improving through hands-on projects with an emphasis on{" "}
          <span className={highlight}>security</span>,{" "}
          <span className={highlight}>testing</span> and{" "}
          <span className={highlight}>clean architecture</span>.
        </p> */}
      </div>

      {/* <div className="flex gap-3">
        <Badge variant="secondary" className={badgeStyles}>
          <FaReact size={iconSize} />
          React
        </Badge>
        <Badge variant="secondary" className={badgeStyles}>
          <BsTypescript size={iconSize} />
          TypeScript
        </Badge>
        <Badge variant="secondary" className={badgeStyles}>
          <RiNextjsFill size={iconSize} /> Next.js
        </Badge>
        <Badge variant="secondary" className={badgeStyles}>
          <DiPostgresql size={iconSize} />
          Postgres
        </Badge>
        <Badge variant="secondary" className={badgeStyles}>
          <FaPython size={iconSize} />
          Python
        </Badge>
        <Badge variant="secondary" className={badgeStyles}>
          <FaJava size={iconSize} />
          Java
        </Badge>
      </div>
      <div className="flex gap-3">
        <Button size="lg">Projects</Button>
        <Button size="lg" variant="secondary">
          View CV
        </Button>
      </div> */}
    </div>
  )
}

export default App
