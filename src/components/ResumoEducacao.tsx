import { BookOpen } from "lucide-react";

export function ResumoEducacao(){
    return(
        <>
        <div className="w-15 h-1 rounded-lg bg-teal-500" />
        <div className="flex w-full mt-3">
                            <div className="flex flex-col justify-center">
                                
                                <div className="flex items-center gap-4">
                                    <BookOpen size={24} className="text-teal-500 box-content p-3 shadow-md bg-white/1 rounded-md" />
                                    <p>Educação</p>
                                    </div>

                                <div className="flex w-0.5 h-[240px] bg-white/10 translate-x-[1.5rem] items-center">

                                    <div className="flex flex-col -translate-x-[8.5px] translate-y-2 mt-15 items-center gap-8 ">
                                        <div className="flex items-center gap-4">
                                            <div className="p-1 bg-zinc-800 h-fit rounded-full">
                                                <div className="size-3 bg-teal-500 rounded-full"></div>
                                            </div>
                                            <div className="flex flex-col w-screen">
                                                <h1 className="text-md">Desenvolvimento de Sistemas | Ensino Medio</h1>
                                                <p className="text-[10px] text-white/50">ETEC Dr. Julio Cardoso</p>
                                                <p className="text-teal-500 text-sm">2021 - 2023</p>
                                                <p className="text-[10px] text-white/50 w-200">Curso técnico integrado ao Ensino Médio, com ênfase em programação, análise de sistemas e desenvolvimento de soluções tecnológicas. Durante o curso, adquiri conhecimentos em linguagens de programação, banco de dados, desenvolvimento web e mobile, além de desenvolver habilidades em lógica de programação e resolução de problemas. O curso também incluiu atividades práticas, projetos e estágios, proporcionando uma sólida base técnica e a aplicação de conceitos em cenários reais de desenvolvimento.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="p-1 bg-zinc-800 h-fit rounded-full">
                                                <div className="size-3 bg-teal-500 rounded-full"></div>
                                            </div>
                                            <div className="flex flex-col w-screen">
                                                <h1 className="text-md">Desenvolvimento de Software Multiplataforma</h1>
                                                <p className="text-[10px] text-white/50">Fatec Dr. Thomaz Novelino</p>
                                                <p className="text-teal-500 text-sm">2023 - Atual</p>
                                                <p className="text-[10px] text-white/50 w-200">Cursando a graduação em Desenvolvimento de Software Multiplataforma, com foco em técnicas avançadas de programação, desenvolvimento de aplicativos e integração de sistemas. O curso aborda linguagens de programação modernas, desenvolvimento para plataformas móveis e web, além de banco de dados e arquitetura de software. Estou aprimorando minhas habilidades em criação de soluções multiplataforma, aprendendo a adaptar projetos para diferentes dispositivos e sistemas operacionais.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        </>
    )
}