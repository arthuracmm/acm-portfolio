import { CheckCircle } from "lucide-react";
import { Header } from "../components/Header";
import { HeaderBlog } from "../components/HeaderBlog";
import { LanguageIcons } from "../components/LanguageIcons";


export function Home() {
    return (
        <div className="flex flex-col h-screen w-full bg-zinc-950 font-montserrat text-white items-center">
            <Header />
            <div className="flex flex-1 items-center justify-center w-full h-full bg-amber-900">
                <div className="flex flex-col font-semibold gap-4 bg-zinc-900 md:p-8 p-4 rounded-2xl shadow-lg max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
                    <div className="flex flex-col relative w-full h-full items-center md:items-start">
                        <div className="flex flex-col gap-1 items-center md:items-start">
                            <p className="lg:text-xl text-base">Home</p>
                            <div className="lg:w-13 md:w-10 w-8 h-1 rounded-lg bg-teal-500" />
                        </div>
                        <HeaderBlog />
                    </div>
                    <div className="flex flex-1 lg:flex-row flex-col md:gap-8 gap-2 h-full items-center p-4">

                        <img src='https://i.imgur.com/62gGTQL.png' alt='Foto de Arthur usando uma mochila' className="lg:size-100 md:size-80 size-50 rounded-full object-cover shadow-lg border-2 border-teal-500" />

                        <div className="flex flex-col gap-4 items-center justify-center lg:items-start">
                            <p className="sm:text-lg text-xs w-full lg:text-start text-center"><span className="text-teal-500 font-bold sm:text-lg text-xs">Hello World!</span> Meu nome é</p>
                            <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold">Arthur <span className="text-teal-500">Cesar</span></h1>
                            <p className="lg:text-lg md:text-base text-sm lg:text-start text-center">Sou <span className="text-teal-500 font-bold underline underline-offset-2">Desenvolvedor Front-End</span>, <span className="text-teal-500 font-bold underline underline-offset-2">Designer Gráfico</span> e <span className="text-teal-500 font-bold underline underline-offset-2">Estudante de tecnologia</span>. Tenho cerca de 4 anos de estudos e desenvolvimentos web, buscando sempre evolução e melhoria!</p>

                            <div className="flex items-center gap-4 text-md w-full text-">
                                <CheckCircle size={24} className="bg-teal-500 md:size-8 size-5 p-2 rounded-full box-content aspect-[1/1]" />
                                <p className="w-[80%] lg:w-full text-[12px] md:text-base">Tecnico em Desenvolvimento de Sistemas ETEC Franca - SP</p>
                            </div>

                            <div className="flex items-center gap-4 text-md w-full">
                                <CheckCircle size={24} className="bg-teal-500 md:size-8 size-5 p-2 rounded-full box-content aspect-[1/1]" />
                                <p className="w-[80%] lg:w-full text-[12px] md:text-base">Cursando Desenvolvimento de Software Multiplataforma FATEC Franca - SP</p>
                            </div>

                            <LanguageIcons />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}