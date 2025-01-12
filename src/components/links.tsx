import { ArrowRight } from "lucide-react"
 
export function Links(){
    return (
        <div className="sm:w-full h-screen flex flex-col items-center justify-center bg-[#f3f5f9]">
                <div className="flex items-center justify-center uppercase">
                    <ul>
                        <a href="#"><li className="bg-slate-900 p-4 sm:w-96 w-60 rounded-lg mb-4 flex justify-between hover:bg-slate-700 cursor-pointer">Instagram <ArrowRight /></li></a>
                        <a href="#"><li className="bg-slate-900 p-4 sm:w-96 w-60 rounded-lg mb-4 flex justify-between hover:bg-slate-700 cursor-pointer">LinkedIn <ArrowRight /></li></a>
                        <a href="#"><li className="bg-slate-900 p-4 sm:w-96 w-60 rounded-lg mb-4 flex justify-between hover:bg-slate-700 cursor-pointer">GitHub <ArrowRight /></li></a>
                        <a href="#"><li className="bg-slate-900 p-4 sm:w-96 w-60 rounded-lg mb-4 flex justify-between hover:bg-slate-700 cursor-pointer">Whatsapp <ArrowRight /></li></a>
                    </ul>
            </div>
        </div>
    )
}