import { ArrowRight } from "lucide-react"
 
export function Links(){
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
                <div className="flex items-center justify-center uppercase">
                    <ul>
                        <li className="bg-slate-500 p-4 w-96 rounded-lg mb-4 flex justify-between hover:bg-slate-400 cursor-pointer">Instagram <ArrowRight /></li>
                        <li className="bg-slate-500 p-4 w-96 rounded-lg mb-4 flex justify-between hover:bg-slate-400 cursor-pointer">LinkedIn <ArrowRight /></li>
                        <li className="bg-slate-500 p-4 w-96 rounded-lg mb-4 flex justify-between hover:bg-slate-400 cursor-pointer">GitHub <ArrowRight /></li>
                        <li className="bg-slate-500 p-4 w-96 rounded-lg mb-4 flex justify-between hover:bg-slate-400 cursor-pointer">Whatsapp <ArrowRight /></li>
                    </ul>
            </div>
        </div>
    )
}