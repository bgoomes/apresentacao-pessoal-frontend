import { ChevronsDown } from "lucide-react"
import { Avatar } from "./avatar";
import { Tech } from "./tech";

export function Header(){
    return(
        <header className="w-full h-svh flex flex-col justify-center items-center relative">
               <div className="flex flex-col gap-10 items-center justify-center w-full sm:w-[980px] h-[200px]">
                <Avatar />
                <div className="flex flex-col gap-5 items-center justify-center">
                  <p className="text-lg">Meu nome é <span className="text-red-500">Bruno Gomes</span> e sou</p>
                  <h1 className="sm:text-6xl text-2xl text-red-500">Desenvolvedor FrontEnd</h1>
                  <span className="text-center">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</span>
                </div>
                <Tech />
               </div>
               <ChevronsDown className="w-10 h-10 text-red-500 absolute bottom-5 animate-pulse" />
          </header>
    )
}