import { tech } from "../dados/tech";

export function Tech(){
   return(
        <div className="flex gap-5">
            {tech.map((item) => (
                <div key={item.name} className="flex gap-6 items-center justify-center text-xl text-red-500">
                    <span className="text-center">{item.name}</span>
                </div>
            ))}
        </div>
    )
}