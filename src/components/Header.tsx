import { Link } from "react-router-dom";

export function Header(){
    return(
        <div className="flex w-full bg-zinc-900 text-white px-10 py-5 fixed text-lg">
            <div className="flex justify-between w-full items-center">
                <Link to={'/'}>
                <p className="font-semibold text-2xl">Arthur <span className="font-bold text-teal-500">Cesar</span></p>
                </Link>
                
                <div className="flex">
                    <ul className="flex gap-6 items-center">
                        <Link to='/'>
                        <li className="bg-teal-500 px-4 py-2 rounded-lg hover:scale-105 transition-all font-semibold">Download CV</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}