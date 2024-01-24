'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function NavigationPane() {

  const [input, setInput] = useState(0)
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

  const ConditionsDiv = (input: Number) => {
    return {
      "lg:flex flex-col align-begin items-begin h-full -translate-x-full transition-transform duration-300 lg:translate-x-0": input == 0,
      "lg:flex flex-col align-begin items-begin h-full -translate-x-0 transition-transform duration-300 lg:translate-x-0": input == 1,
    }
  }

  const ConditionsAside = (input: Number) => {
    return {
      "absolute h-full w-fit p-4 pr-8 pt-6 lg:pt-16 bg-none lg:bg-gradient-to-b from-black to-transparent z-10": input == 0,
      "absolute h-full w-fit p-4 pr-8 pt-6 lg:pt-16 bg-gradient-to-b from-black to-transparent lg:bg-gradient-to-b from-black to-transparent z-10": input == 1,
    }
  }

  const ConditionsButton = (input: Number) => {
    return {
      "hover:cursor-pointer block lg:hidden z-20": input == 0,
      "hover:cursor-pointer text-white lg:hidden z-20": input == 1,
    }
  }
  
  const ConditionsSVG = (input: Number) => {
    return {
      "w-6 h-6 text-gray-800": input == 0,
      "w-6 h-6 text-gray-100": input == 1,
    }
  }

  function MenuHamburger() {
    if (input == 0) {
      setInput(1)
    } else {
      setInput(0)
    }
  }

  return (
    <div className="z-20"> 
      <aside className={cn(ConditionsAside(input))}>
      <button id="menu-hamburger" className={cn(ConditionsButton(input))} onClick={MenuHamburger}>
            <svg className={cn(ConditionsSVG(input))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button> 
        <div id="menu" className={cn(ConditionsDiv(input))}>
          <Link href='/' className=''>
            <Image
              className='rounded-full border-2'
              alt="Logo"
              width={40}
              height={40}
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
    </div>
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