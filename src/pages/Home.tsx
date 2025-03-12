import { CheckCircle } from "lucide-react";
import { Header } from "../components/Header";
import { HeaderBlog } from "../components/HeaderBlog";
import { LanguageIcons } from "../components/LanguageIcons";
import minhaFoto from '../../public/images/minha-foto.jpeg'


export function Home() {
    return (
        <div className="flex flex-col h-screen w-full bg-zinc-950 font-montserrat text-white">
            <Header />
            <div className="flex mt-20 h-screen justify-center items-center">
                <div className="flex flex-col font-semibold gap-4 bg-zinc-900 w-[70%] h-180 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="flex">
                        <div className="flex flex-col gap-1 text-xl">
                            <p>Home</p>
                            <div className="w-15 h-1 rounded-lg bg-teal-500" />
                        </div>
                        <HeaderBlog />
                    </div>

                    <div className="flex justify-between gap-8 items-center h-full">
                        <img src={minhaFoto} alt="a" className="size-100 rounded-full object-cover shadow-lg border-2 border-teal-500" />
                        <div className="flex flex-col h-100 justify-between">
                            <p><span className="text-teal-500 font-bold text-lg">Hello World!</span> Meu nome é</p>
                            <h1 className="text-7xl font-bold">Arthur <span className="text-teal-500">Cesar</span></h1>
                            <p className="text-lg">Sou <span className="text-teal-500 font-bold underline underline-offset-2">Desenvolvedor Front-End</span>, <span className="text-teal-500 font-bold underline underline-offset-2">Designer Gráfico</span> e <span className="text-teal-500 font-bold underline underline-offset-2">Estudante de tecnologia</span>. Tenho cerca de 4 anos de estudos e desenvolvimentos web, buscando sempre evolução e melhoria!</p>

                            <div className="flex items-center gap-4 text-mdrelative group">
                                <CheckCircle className="bg-teal-500 size-8 p-2 rounded-full" />
                                <p>Tecnico em Desenvolvimento de Sistemas ETEC Franca - SP</p>
                            </div>

                            <div className="flex items-center gap-4 text-md">
                                <CheckCircle className="bg-teal-500 size-8 p-2 rounded-full" />
                                <p>Cursando Desenvolvimento de Software Multiplataforma FATEC Franca - SP</p>
                            </div>

                            <LanguageIcons />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}