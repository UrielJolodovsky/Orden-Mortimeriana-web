import Image from "next/image";

export default function Footer() {
  return (
    <div id="contacto" className="w-full flex justify-center items-center bg-black">
      <div className="flex flex-col justify-center items-center text-white pt-4">
        <h1 className="text-3xl font-semibold pb-5">Contacto</h1>
        <Image
          className='rounded-full border-2 mb-4'
          alt="Logo"
          width={80}
          height={80}
          src="/logo.png"/>
        <p className="text-center pb-4 mx-4">Si tienes alguna duda o sugerencia, no dudes en contactarnos a nuestro correo electrónico:</p>
        <p className="text-center text-blue-400 pb-4 hover:scale-105">cuarentenaoma@gmail.com</p>
        <hr className="border-2 mb-4 bg-contact-hr"></hr>
      </div>
    </div>
  )
}