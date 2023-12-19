import Image from 'next/image'

export default function CardNotice({fecha, noticia} : {fecha: string, noticia: string}) {
    return (
        // <div className="md:flex md:flex-col bg-[#564C4A] w-full m-5 rounded-xl text-white">
        //     <p className="text-center text-xl font-semibold">{fecha}</p>
        //     <p className="text-center text-lg font-semibold">{noticia}</p>
        // </div>
        <div key='' className='rounded-[25px] bg-white w-80'>
            <div className='flex justify-center items-center'>
                {/* Image content - Parte de arriba */}
                <span></span>
                <div className='relative h-40 w-40 rounded-full p-[3px]'>
                    <Image className='h-full w-full object-cover rounded-full border-4 border-gray-500' alt='Foto-Noticia' width={200} height={200} src='/logo.png'></Image>
                </div>
            </div>
            <div className='flex flex-col items-center px-3.5 py-2.5'>
                {/* Card content */}
                <h2 className='text-lg'>Cuarentena IV</h2>
                <p className='text-center'>{noticia}</p>
                <button>Ver más</button>
            </div>
        </div>
    )
}