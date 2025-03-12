import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiAdobephotoshop, SiMongodb, SiTailwindcss, SiVite, SiAdobeillustrator} from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";

export function LanguageIcons() {
    return (
        <div className="flex flex-wrap gap-2">
            <div className="relative group">
                <FaHtml5 className="hover:text-teal-500 transition duration-300 cursor-pointer hover:scale-110 size-10" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 bg-black/90 p-2 rounded-md text-sm font-light">
                    HTML5
                </span>
            </div>

            <div className="relative group">
                <FaCss3Alt className="hover:text-teal-500 transition duration-300 cursor-pointer hover:scale-110 size-10" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 bg-black/90 p-2 rounded-md text-sm font-light">
                    CSS3
                </span>
            </div>

            <div className="relative group">
                <FaJs className="hover:text-teal-500 transition duration-300 cursor-pointer hover:scale-110 size-10" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 bg-black/90 p-2 rounded-md text-sm font-light">
                    JavaScript
                </span>
            </div>

            <div className="relative group">
                <FaReact className="hover:text-teal-500 transition duration-300 cursor-pointer hover:scale-110 size-10" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 bg-black/90 p-2 rounded-md text-sm font-light">
                    React
                </span>
            </div>

            <div className="relative group">
                <SiTailwindcss className="hover:text-teal-500 transition duration-300 cursor-pointer hover:scale-110 size-10" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 bg-black/90 p-2 rounded-md text-sm font-light">
                    TailwindCSS
                </span>
            </div>

            <div className="relative group">
                <SiVite className="hover:text-teal-500 transition duration-300 cursor-pointer hover:scale-110 size-10" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 bg-black/90 p-2 rounded-md text-sm font-light">
                    Vite
                </span>
            </div>

            <div className="relative group">
                <SiMongodb className="hover:text-teal-500 transition duration-300 cursor-pointer hover:scale-110 size-10" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 bg-black/90 p-2 rounded-md text-sm font-light">
                    MongoDB
                </span>
            </div>

            <div className="relative group">
                <RiFirebaseFill className="hover:text-teal-500 transition duration-300 cursor-pointer hover:scale-110 size-10" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 bg-black/90 p-2 rounded-md text-sm font-light">
                    Firebase
                </span>
            </div>

            <div className="relative group">
                <SiAdobephotoshop className="hover:text-teal-500 transition duration-300 cursor-pointer hover:scale-110 size-10" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 bg-black/90 p-2 rounded-md text-sm font-light text-center">
                    Adobe Photoshop
                </span>
            </div>
            <div className="relative group">
                <SiAdobeillustrator className="hover:text-teal-500 transition duration-300 cursor-pointer hover:scale-110 size-10" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 bg-black/90 p-2 rounded-md text-sm font-light text-center">
                    Adobe Ilustrator
                </span>
            </div>
        </div>
    )
}