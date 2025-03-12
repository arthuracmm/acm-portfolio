import { IoMdMail } from "react-icons/io";
import { IoLocationSharp, IoPhonePortraitSharp } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import minhaFoto from "../../public/images/meu-memoji.png"
import { LanguageIcons } from "./LanguageIcons";

export function SideBarBlog() {
    return (
        <div className="flex flex-col bg-zinc-900 rounded-2xl shadow-lg p-8 w-80 justify-between items-center">
            <div className="flex size-50 rounded-full p-5 bg-zinc-800 box-content items-center justify-center">
                <img src={minhaFoto} alt="minha foto" className="w-40"/>
            </div>

            <h1 className="bg-zinc-800 px-4 py-1 rounded-lg w-fit text-sm font-light">Arthur Cesar</h1>

            <div className="bg-zinc-700 h-0.5 w-[90%] rounded-md" />

            <div className="flex gap-2 items-center w-full">
                <IoMdMail size={20} className="text-teal-500 box-content p-2 shadow-md bg-white/1 rounded-md" />
                <div className="flex flex-col">
                    <p className="text-xs text-white/50">EMAIL</p>
                    <p className="text-xs">arthurcesarmarcelino@gmail.com</p>
                </div>
            </div>

            <div className="flex gap-2 items-center w-full">
                <IoPhonePortraitSharp size={20} className="text-teal-500 box-content p-2 shadow-md bg-white/1 rounded-md" />
                <div className="flex flex-col">
                    <p className="text-xs text-white/50">TELEFONE</p>
                    <p className="text-xs">(016) 98876-5978</p>
                </div>
            </div>
            <div className="flex gap-2 items-center w-full">
                <CgCalendarDates size={20} className="text-teal-500 box-content p-2 shadow-md bg-white/1 rounded-md" />
                <div className="flex flex-col">
                    <p className="text-xs text-white/50">NASCIMENTO</p>
                    <p className="text-xs">15/02/2006</p>
                </div>
            </div>
            <div className="flex gap-2 items-center w-full">
                <IoLocationSharp size={20} className="text-teal-500 box-content p-2 shadow-md bg-white/1 rounded-md" />
                <div className="flex flex-col">
                    <p className="text-xs text-white/50">LOCALIZAÇÃO</p>
                    <p className="text-xs">Franca - SP | Brasil</p>
                </div>
            </div>
            <LanguageIcons />
        </div>
    )
}