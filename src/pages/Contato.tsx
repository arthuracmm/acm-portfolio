import { Header } from "../components/Header";
import { HeaderBlog } from "../components/HeaderBlog";
import { SideBarBlog } from "../components/SiderBarBlog";

export function Contato() {
    return (
        <div className="flex flex-col h-screen w-full bg-zinc-950 font-montserrat text-white">
            <Header />
            <div className="flex mt-20 h-screen justify-center items-center">
                <div className="flex font-semibold gap-4 w-[70%] h-180  overflow-hidden">
                    <div className="flex flex-col gap-1 text-xl bg-zinc-900 rounded-2xl shadow-lg px-8 
                            py-5 w-full relative overflow-hidden overflow-y-scroll">
                        <p>Contato</p>
                        <div className="w-15 h-1 rounded-lg bg-teal-500" />
                        <HeaderBlog />
                    </div>
                    <SideBarBlog />
                </div>
            </div>
        </div>
    )
}