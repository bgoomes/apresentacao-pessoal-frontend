import { tech } from "../dados/tech";

export function Tech(){
   return(
        <div className="flex sm:gap-5 gap-2">
            {tech.map((item) => (
                <div key={item.name} className="flex items-center justify-center text-sm sm:text-xl  text-red-500">
                    <span className="text-center">{item.name}</span>
                </div>
            ))}
        </div>
    )
} 