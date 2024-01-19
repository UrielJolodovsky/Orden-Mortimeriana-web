'use client';

import Link from "next/link";
import Image from "next/image";

export default function NavigationPane() {
  const competencias = [
    {
      "nombre": "Cuarentena I",
      "url": "cuarentena1"
    },
    {
      "nombre": "Cuarentena II",
      "url": "cuarentena2",
    },
    {
      "nombre": "Cuarentena III",
      "url": "cuarentena3",
    },
    {
      "nombre": "Semana Mortimeriana I",
      "url": "semana1"      
    },
    {
      "nombre": "La CUARenTenA IV",
      "url": "cuarentena4"
    },
    {
      "nombre": "Semana mortimeriana II",
      "url": "semana2"
    }
  ]
  return (
    <aside className='absolute h-screen w-fit p-4 pr-8 pt-16 bg-gradient-to-b from-black to-transparent'>
      <div className="flex flex-col align-begin items-begin h-full">
        <Link href='/' className=''>
          <Image
            className='rounded-full border-2'
            alt="Logo"
            width={30}
            height={30}
            src="/logo.png">
          </Image>
        </Link>
        <NavbarLink href='/' text='Volver' />
        <hr className='mt-3'/>
        {competencias.map((competencia) => (
          <NavbarLink
            key={competencia.nombre}
            href={`/resultados/${competencia.url}`}
            text={competencia.nombre} />
        ))}
      </div>
    </aside>
  )
}

function NavbarLink({ href, text }: {
  href: string,
  text: string
}) {
  return (
    <div className='mt-4'>
      <Link
        className="relative w-fit block text-white after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        href={href}>
        {text}
      </Link>
    </div>
  )
}