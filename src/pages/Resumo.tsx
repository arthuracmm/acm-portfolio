import { Header } from "../components/Header";
import { HeaderBlog } from "../components/HeaderBlog";
import { SideBarBlog } from "../components/SiderBarBlog";
import { ResumoEducacao } from "../components/ResumoEducacao";
import { ResumoExperiencia } from "../components/ResumoExperiencia";

export function Resumo() {
    return (
        <div className="flex flex-col h-screen w-full bg-zinc-950 font-montserrat text-white">
            <Header />
            <div className="flex mt-20 h-screen justify-center items-center">
                <div className="flex font-semibold gap-4 w-[70%] h-180  overflow-hidden">
                    <div className="flex flex-col gap-1 text-xl bg-zinc-900 rounded-2xl shadow-lg px-8 
                            py-5 w-full relative overflow-hidden overflow-y-scroll">
                        <p>Formação</p>
                        <div className="flex flex-col">
                            <ResumoEducacao />
                            <ResumoExperiencia />
                        </div>
                        <HeaderBlog />
                    </div>
                    <SideBarBlog />
                </div>
            </div>
        </div>
    )
}