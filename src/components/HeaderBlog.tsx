import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function HeaderBlog(){
    const location = useLocation();

    const verifyPath = (path: string) => {
        return location.pathname === path 
        ? 'text-teal-500 underline'
        : 'text-white';
    }
    return(
        <div className="flex md:absolute md:-top-1 md:-right-1 md:py-6 py-4 gap-8 md:text-sm text-[12px] md:px-10 z-10 justify-center">
        <Link to='/'>
            <p className={`hover:text-teal-500 transition-all underline-offset-2 ${verifyPath('/')}`}>Sobre</p>
        </Link>

        <Link to='/projetos'>
            <p className={`hover:text-teal-500 transition-all underline-offset-2 ${verifyPath('/projetos')}`}>Projetos</p>
        </Link>

        <Link to='/resumo'>
            <p className={`hover:text-teal-500 transition-all underline-offset-2 ${verifyPath('/resumo')}`}>Resumo</p>
        </Link>

        <Link to='/contato'>
            <p className={`hover:text-teal-500 transition-all underline-offset-2 ${verifyPath('/contato')}`}>Contato</p>
        </Link>
    </div>
    )
}