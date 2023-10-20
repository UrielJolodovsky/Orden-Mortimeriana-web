import Link from "next/link";

export default function Header() {


    return (
        <div>
            <nav id="header" className="">
                <Link href='#header' className=""><img></img></Link>
                <ul>
                    <li><a href="#quienes-somos">Quienes somos</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                    <li><a href="#competencias-anteriores" className=''>Competencias anteriores</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}