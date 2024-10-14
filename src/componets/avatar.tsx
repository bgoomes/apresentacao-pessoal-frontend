import { Code2 } from "lucide-react"

export function Avatar(){
    return (
        <div> 
            <div className="relative">
                <img src="https://github.com/bgoomes.png" alt="Avatar" className="w-40 h-40 rounded-full border-red-500 border-2" />
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                     <Code2 className=" text-red-100 font-bold" />
                </div>  
            </div>    
        </div>
    )

}