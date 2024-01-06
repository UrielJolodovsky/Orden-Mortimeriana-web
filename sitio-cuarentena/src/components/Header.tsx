import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {


    return (
        <div className=""> 
        {/* sticky top-0 */}
            <nav id="header" className=" w-full h-20 flex bg-black shadow-2xl">
                <div className="md:flex flex md:justify-start items-center w-full md:w-1/5 md:ml-5 justify-center">
                    <Link href='#header' className=""><Image className='rounded-full border-2' alt="Logo" width={60} height={60} src="/logo.png"></Image></Link>
                </div>
               <div className="md:flex md:justify-end md:items-center md:w-4/5 hidden">
                    <ul className="flex text-white gap-10 mr-10 lg:text-base text-xs">
                        <li><a href="#quienes-somos" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Quiénes somos</a></li>
                        <li><a href="#ultimo-momento" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Último momento</a></li>
                        <li><a href="#noticias" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Noticias</a></li>
                        <li><a href="#competencias-anteriores" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Competencias anteriores</a></li>
                        <li><a href="#contacto" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}