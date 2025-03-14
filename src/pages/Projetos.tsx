import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { HeaderBlog } from "../components/HeaderBlog";
import { SideBarBlog } from "../components/SiderBarBlog";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const projetos = [
    {
        image: "https://i.imgur.com/aUsgPhT.png",
        nome: "Sistema Livraria",
        descricao: 'Fullstack',
        linkPost: 'https://www.linkedin.com/posts/arthur-marcelino-b311752b8_100daysofcode-50daysofcode-react-activity-7303450357777494017-T-1y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwy6xUB0eDV80Hl5R30rrwWmBpgOwakzOM',
        languages: ['React', 'Typescript', 'TailwindCSS']
    },
    {
        image: "https://i.imgur.com/QDh3p1V.png",
        nome: "Recriação Layout Twitch",
        descricao: 'Estudo de Reponsividade Mobile/Desktop',
        linkPost: 'https://www.linkedin.com/posts/arthur-marcelino-b311752b8_100daysofcode-50daysofcode-react-activity-7299816998253813761-Fcua?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwy6xUB0eDV80Hl5R30rrwWmBpgOwakzOM',
        languages: ['React', 'Typescript', 'TailwindCSS']
    },
    {
        image: "https://i.imgur.com/BC1xA9V.png",
        nome: "Recriação Layout Shopee",
        descricao: 'Estudo de Tailwindcss 3.0',
        linkPost: 'https://www.linkedin.com/posts/arthur-marcelino-b311752b8_100daysofcode-50daysofcode-react-activity-7300603277698605056-wNQT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwy6xUB0eDV80Hl5R30rrwWmBpgOwakzOM',
        languages: ['React', 'Typescript', 'TailwindCSS']
    },
    {
        image: "https://i.imgur.com/pMR1pW4.png",
        nome: "Recriação Layout Youtube",
        descricao: 'Estudo de Tailwindcss 2.0',
        linkPost: 'https://www.linkedin.com/posts/arthur-marcelino-b311752b8_100daysofcode-50daysofcode-react-activity-7299041003817123840-lvjn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwy6xUB0eDV80Hl5R30rrwWmBpgOwakzOM',
        languages: ['React', 'Typescript', 'TailwindCSS']
    },
    {
        image: "https://i.imgur.com/Ir0fL2B.png",
        nome: "Recriação Layout Spotify",
        descricao: 'Estudo de Tailwindcss 1.0',
        linkPost: 'https://www.linkedin.com/posts/arthur-marcelino-b311752b8_100daysofcode-50daysofcode-react-activity-7298622403583111168-1m7Y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwy6xUB0eDV80Hl5R30rrwWmBpgOwakzOM',
        languages: ['React', 'Typescript', 'TailwindCSS']
    }
    ,
    {
        image: "https://i.imgur.com/ejYCC9E.png",
        nome: "Primeiro Projeto | Curriculo Online",
        descricao: 'Estudo de HTML, CSS e JS - Hard Code',
        linkPost: 'https://www.linkedin.com/posts/arthur-marcelino-b311752b8_desenvolvendo-um-breve-curr%C3%ADculo-online-com-activity-7177292163532079104-VuJ2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwy6xUB0eDV80Hl5R30rrwWmBpgOwakzOM',
        languages: ['HTML', 'CSS', 'JS']
    }
]

export function Projetos() {
    const [projetosOrdenados, setProjetosOrdenados] = useState(projetos);
    const [inputSearch, setInputSearch] = useState('')
    const [Chevron, setChevron] = useState(true);

    const inverterOrdem = () => {
        setProjetosOrdenados((prevProjetos) => [...prevProjetos].reverse());
        if (Chevron == true) {
            setChevron(false);
        } else {
            setChevron(true);
        }
    };


    const projetosFiltrados = (projeto: { nome: string }) => projeto.nome.toLowerCase().includes(inputSearch.toLowerCase())
    return (
        <div className="flex flex-col h-screen w-full bg-zinc-950 font-montserrat text-white items-center">
            <Header />
            <div className="flex flex-1 items-center justify-center w-full h-full bg-amber-900">
                <div className="flex font-semibold gap-4 md:p-8 p-4 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
                    <div className="flex flex-col font-semibold bg-zinc-900 md:p-8 p-4 rounded-2xl shadow-lg justify-between">
                        <div className="flex flex-col relative w-full h-full items-center md:items-start">
                            <div className="flex flex-col gap-1 items-center md:items-start">
                                <p className="lg:text-xl text-base">Projetos</p>
                                <div className="lg:w-13 md:w-10 w-8 h-1 rounded-lg bg-teal-500" />
                            </div>
                            <HeaderBlog />
                        </div>

                        <div className="flex mt-3 gap-x-4 gap-y-8 flex-wrap justify-self-center start relative pt-12">
                            <div className="absolute w-full top-0 flex justify-between h-10 overflow-hidden transition-all">
                                <div className="flex bg-zinc-800 px-2 rounded-lg md:w-100 w-48 justify-between items-center overflow-hidden">
                                    <input type="text"
                                        className="outline-none text-[10px] md:text-sm placeholder:text-white/30 font-light px-2 w-full"
                                        placeholder="Insira o titulo"
                                        onChange={(e) => setInputSearch(e.target.value)}
                                    />
                                    <button className="flex bg-zinc-600 px-5 h-full items-center -mr-2 cursor-pointer">
                                        <Search />
                                    </button>
                                </div>
                                <button className="flex items-center gap-2  bg-zinc-800 px-4 py-2 rounded-full cursor-pointer" onClick={inverterOrdem}>
                                    {Chevron === true ?
                                        <><p className="-ml-1 md:text-xs text-[10px] font-light">Mais Novos</p> <ChevronDown size={15} /></> : <><p className="-ml-1 md:text-xs text-[10px] font-light">Mais Antigos</p> <ChevronUp size={15} /></>}
                                </button>
                            </div>
                            <div className="grid lg:grid-cols-3 grid-cols-2">
                                {projetosOrdenados.filter(projetosFiltrados).map(({ image, nome, descricao, linkPost, languages }) => (
                                    <Link to={linkPost} target="_blank">
                                        <div className="flex flex-col  gap-2 hover:bg-zinc-800 p-2 rounded-md hover:shadow-md hover:scale-105 transition-all">
                                            <img src={image} alt={nome} className="rounded-xl w-50 md:w-fit aspect-[16/9] object-cover bg-zinc-900 border-1 border-zinc-800 shadow-lg" />
                                            <div className="flex flex-col gap-1">
                                                <h1 className="text-sm">{nome}</h1>
                                                <p className="w-full truncate text-xs font-light text-white/50">{descricao}</p>
                                                <div className="md:flex text-[10px] gap-2 hidden">
                                                    {languages.map((language) => (

                                                        <p className="px-2 py-1 bg-teal-800/50 rounded-full">{language}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <SideBarBlog />
                </div>
            </div>
        </div>
    )
}