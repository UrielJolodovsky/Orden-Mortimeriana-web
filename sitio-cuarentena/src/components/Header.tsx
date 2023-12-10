import Link from "next/link";
import Image from "next/image";

export default function Header() {


    return (
        <div className=""> 
        {/* sticky top-0 */}
            <nav id="header" className="w-full h-20 flex bg-black">
                <div className="flex justify-center items-center w-1/5">
                    <Link href='#header' className=""><Image alt="Logo" width="20" height="20" src="/sitio-cuarentena/public/logo.png"></Image></Link>
                </div>
               <div className="flex justify-end items-center w-4/5">
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