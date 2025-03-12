import { BookOpen } from "lucide-react";

export function ResumoExperiencia(){
    return(
        <div className="flex w-full mt-20">
                            <div className="flex flex-col justify-center items-start w-full">
                                <div className="flex items-center gap-4">
                                    <BookOpen size={24} className="text-teal-500 box-content p-3 shadow-md bg-white/1 rounded-md" />
                                    <p>Experiência</p>
                                    </div>

                                <div className="flex w-0.5 h-[410px] bg-white/10 translate-x-[1.5rem] items-center mb-20">

                                    <div className="flex flex-col -translate-x-[8.5px] translate-y-2 mt-15 items-center gap-8 ">
                                        <div className="flex items-center gap-4">
                                            <div className="p-1 bg-zinc-800 h-fit rounded-full">
                                                <div className="size-3 bg-teal-500 rounded-full"></div>
                                            </div>
                                            <div className="flex flex-col w-screen">
                                                <h1 className="text-md">Designer Gráfico | Home Office</h1>
                                                <p className="text-[10px] text-white/50">Abstract | Franca - SP</p>
                                                <p className="text-teal-500 text-sm">2021 - 2023</p>
                                                <p className="text-[10px] text-white/50 w-200">Minha primeira experiência profissional foi em uma estamparia, onde trabalhei remotamente das 16h às 20h, criando estampas personalizadas usando Photoshop (PS) e Illustrator (AI). Essa oportunidade me permitiu aplicar minha criatividade e habilidades técnicas, aprimorando meu conhecimento em design gráfico e desenvolvendo minha capacidade de trabalhar com prazos e demandas de clientes. A experiência também me ajudou a fortalecer a disciplina no trabalho remoto e a compreender melhor o processo criativo e a edição de imagens no contexto do mercado de estampas.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="p-1 bg-zinc-800 h-fit rounded-full">
                                                <div className="size-3 bg-teal-500 rounded-full"></div>
                                            </div>
                                            <div className="flex flex-col w-screen">
                                                <h1 className="text-md">Auxiliar de Produção | Designer Grafico</h1>
                                                <p className="text-[10px] text-white/50">Abstract | Franca -SP</p>
                                                <p className="text-teal-500 text-sm">2023 - 2024</p>
                                                <p className="text-[10px] text-white/50 w-200">No ano de 2023-2024, após concluir a escola, passei a trabalhar presencialmente na estamparia, onde auxiliava na produção de estampas para camisetas, operando equipamentos como a prensa e a máquina DTF. Além disso, tive a oportunidade de contribuir para a gestão do marketplace, criando anúncios e gerenciando a divulgação dos produtos. Também continuei desenvolvendo artes e criando conteúdo para as redes sociais, produzindo fotos, vídeos e materiais visuais para promover a marca e os produtos. Essa experiência me proporcionou um aprendizado prático em várias áreas, além de fortalecer minhas habilidades em produção gráfica e marketing digital.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="p-1 bg-zinc-800 h-fit rounded-full">
                                                <div className="size-3 bg-teal-500 rounded-full"></div>
                                            </div>
                                            <div className="flex flex-col w-screen">
                                                <h1 className="text-md">Designer Grafico</h1>
                                                <p className="text-[10px] text-white/50">Pessoa Jurídica</p>
                                                <p className="text-teal-500 text-sm">2025 - Atual</p>
                                                <p className="text-[10px] text-white/50 w-200">Em 2025, iniciei minha carreira como PJ, continuando a trabalhar na estamparia, mas agora com mais flexibilidade no horário, o que me permite dedicar tempo para projetos pessoais e estudos. Estou focado em aprimorar minhas habilidades e conhecimentos, com o objetivo de encontrar minha primeira vaga como desenvolvedor. Esse novo formato de trabalho tem me permitido equilibrar a experiência prática com o desenvolvimento contínuo da minha carreira na área de tecnologia.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
    )
}