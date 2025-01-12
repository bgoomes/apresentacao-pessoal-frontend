
import { projects } from "../dados/projects";

export function Projects() {
  return (
    <div className="w-full sm:h-svh flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-center">
      <div className="flex flex-col items-center sm:gap-10">
            <h1 className="sm:text-4xl text-xl text-red-500">Projects</h1>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="flex gap-6 items-center justify-center p-4 bg-slate-800 rounded-lg sm:w-[300px] h-[300px]">
                    <div className="flex flex-col items-center gap-4 rounded-lg">
                        <img src={project.image} alt={project.alt} className=" h-40  rounded-lg" />
                        <div className="w-full border bg-slate-300" />
                        <h2 className="text-xl text-red-500">{project.name}</h2>
                        <span className="text-center">{project.description}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}