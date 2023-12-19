import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {


    return (
        <div className=""> 
        {/* sticky top-0 */}
            <nav id="header" className=" w-full h-20 flex bg-black shadow-2xl">
                <div className="md:flex flex md:justify-start items-center w-full md:w-1/5 md:ml-5 justify-center">
                    <Link href='#header' className=""><Image className='rounded-full border-2' alt="Logo" width={60} height={60} src="/logo.png"></Image></Link>
                </div>
               <div className="md:flex md:justify-end md:items-center md:w-4/5 hidden">
                    <ul className="flex text-white gap-10 mr-10 text-md">
                        <li><a href="#quienes-somos">Quienes somos</a></li>
                        <li><a href="#noticias">Noticias</a></li>
                        <li><a href="#competencias-anteriores" className=''>Competencias anteriores</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}