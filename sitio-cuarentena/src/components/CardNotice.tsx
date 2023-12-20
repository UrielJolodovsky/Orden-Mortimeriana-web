import Image from 'next/image'

export default function CardNotice({fecha, title, noticia} : {fecha: string, title: string, noticia: string}) {
    return (
        <div key='' className='rounded-[25px] bg-white w-72 h-[407px] relative'>
            <div className='relative h-40 w-full flex justify-center items-center gap-y-[5px]'>
                {/* Image content - Parte de arriba */}
                <span className='absolute h-full w-full top-0 left-0 bg-blue-400 rounded-t-[25px] rounded-b-none rounded-l-[25px]'></span>
                <div className='relative rounded-full p-[3px]'>
                    <Image className='w-full h-full object-cover rounded-full border-4 border-gray-300' alt='Foto-Noticia' width={120} height={120} src='/logo.png'></Image>
                </div>
            </div>
            <div className='flex flex-col items-center px-3.5 pt-2.5'>
                {/* Card content */}
                <h2 className='text-lg text-center'>{title}</h2>
                <p className='text-center text-base text-gray-500 pt-4'>{noticia}</p>
                <button className='border-none text-[14px] text-white px-4 py-3 bg-blue-400 rounded-md m-3 cursor-pointer transition-all ease-linear hover:bg-blue-600'>Ver más</button>
                {/* put this h4 starting that line */}
            </div>
            <div className='bottom-0 right-0 pb-1 absolute'>
                <span className='pr-5 text-gray-500'>{fecha}</span>
            </div>
        </div>
    )
}