import Image from 'next/image'

export default function CardNotice({fecha, noticia} : {fecha: string, noticia: string}) {
    return (
        // <div className="md:flex md:flex-col bg-[#564C4A] w-full m-5 rounded-xl text-white">
        //     <p className="text-center text-xl font-semibold">{fecha}</p>
        //     <p className="text-center text-lg font-semibold">{noticia}</p>
        // </div>
        <div key='' className='rounded-[25px] bg-white w-72'>
            <div className='relative h-40 w-full flex justify-center items-center gap-y-[5px]'>
                {/* Image content - Parte de arriba */}
                <span className='absolute h-full w-full top-0 left-0 bg-blue-400 rounded-[25px]'></span>
                <div className='relative rounded-full p-[3px]'>
                    <Image className='w-full h-full object-cover rounded-full border-4 border-gray-500' alt='Foto-Noticia' width={120} height={120} src='/logo.png'></Image>
                </div>
            </div>
            <div className='flex flex-col items-center px-3.5 py-2.5'>
                {/* Card content */}
                <h2 className='text-lg'>Cuarentena IV</h2>
                <p className='text-center text-base text-gray-500'>{noticia}</p>
                <button className='border-none text-[14px] text-white px-3 py-4 bg-blue-400 rounded-md m-3.5 cursor-pointer transition-all ease-linear hover:bg-blue-600'>Ver más</button>
            </div>
        </div>
    )
}