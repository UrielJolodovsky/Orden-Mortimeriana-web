'use client';

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className=''>
      <nav 
          id="header"
          className="fixed top-0 mb-10 z-10 flex w-full bg-gradient-to-b from-black to-transparent backdrop-blur">
        <div className="relative flex justify-between w-full">
          <div className="flex items-center">
            <div className='p-4'>
              <Link href='#header' className="">
                <Image
                  className='rounded-full border-2'
                  alt="Logo"
                  width={30}
                  height={30}
                  src="/logo.png">
                </Image>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <NavbarLink href='#quienes-somos' text='Quiénes somos'/>
            <NavbarLink href='#noticias' text='Noticias'/>
            <NavbarLink href='#competencias-anteriores' text='Competencias'/>
            <NavbarLink href='#contacto' text='Contacto'/>
          </div>
        </div>
      </nav>
    </div>
  )
}

function NavbarLink({ href, text }: {
  href: string,
  text: string
}) {
  return (
    <div className='p-4'>
      <Link
        className="relative w-fit block text-white after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        href={href}>
          {text}
      </Link>
    </div>
  )
}