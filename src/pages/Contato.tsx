import { BsWhatsapp } from "react-icons/bs";
import { Header } from "../components/Header";
import { HeaderBlog } from "../components/HeaderBlog";
import { SideBarBlog } from "../components/SiderBarBlog";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

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

                        <div className="flex flex-1 gap-4 items-center justify-beetween">
                            <div className="flex flex-col bg-zinc-800 w-full h-full rounded-2xl p-2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119584.00925345354!2d-47.43168!3d-20.506214399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a9b35dc60831%3A0x68b8558a69681462!2sFranca%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1741815485066!5m2!1spt-BR!2sbr" className="b-0 rounded-2xl w-full h-full saturate-0" />
                            </div>
                            <div className="flex flex-col w-100 h-full rounded-2xl justify-center p-2 items-center gap-4">
                                <h1>Formas de Contato</h1>

                                <Link to={'https://wa.me/5516988765978?text=Ol%C3%A1%20Arthur%2C%20Vi%20seu%20Port%C3%B3flio%20Online'} className="flex items-center gap-2 box-content p-2 rounded-md shadow-md bg-white/5 w-70 justify-center" target="_blank">
                                    <BsWhatsapp size={20} className="text-teal-500"/>
                                    <p className="text-sm font-light">(016) 988765978</p>
                                </Link>
                                <Link to={'mailto:arthurcesarmarcelino@gmail.com?subject=Portfolio+Online&body=Ol%C3%A1+Arthur,+Vi+seu+Port%C3%B3flio+Online'} className="flex items-center gap-2 box-content p-2 rounded-md shadow-md bg-white/5 w-70 justify-center">
                                    <Mail size={20} className="text-teal-500"/>
                                    <p className="text-sm font-light">arthurcesarmarcelino@gmail.com</p>
                                </Link>
                                <Link to={'https://www.linkedin.com/in/arthur-marcelino-b311752b8/'} className="flex items-center gap-2 box-content p-2 rounded-md shadow-md bg-white/5 w-70 justify-center" target="_blank">
                                    <FaLinkedin size={20} className="text-teal-500"/>
                                    <p className="text-sm font-light">Arthur (acm) Marcelino</p>
                                </Link>
                                <Link to={'https://www.instagram.com/acmmdesign'} className="flex items-center gap-2 box-content p-2 rounded-md shadow-md bg-white/5 w-70 justify-center" target="_blank">
                                    <FaInstagram size={20} className="text-teal-500"/>
                                    <p className="text-sm font-light">acmmdesign</p>
                                </Link>
                                <p></p>
                            </div>
                        </div>

                    </div>
                    <SideBarBlog />
                </div>
            </div>
        </div>
    )
}