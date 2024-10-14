import { projects } from "../dados/projects";

export function Card(){
    return(
        <div className="grid grid-cols-3 gap-8 w-[700px]">
            {projects.map((project) => (
                <div key={project.name} className="flex gap-6 items-center justify-center border-2 rounded-lg w-[230px] h-60">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-xl text-red-500">{project.name}</h2>
                        <span>{project.description}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}