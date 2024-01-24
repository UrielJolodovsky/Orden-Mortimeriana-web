'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Card({
  fecha,
  title,
  noticia,
  number,
  url
}: {
  fecha: string;
  title: string;
  noticia: string,
  number: number,
  url: string
}) {
  const router = useRouter();
  const handleClick = (url: string) => router.push(`${url}`);
  return (
    <div key={number} className='flex flex-col rounded-[25px] bg-white w-72 h-[420px] md:h-auto pb-4'>
      <div className='flex justify-center items-center relative h-40 w-full rounded-[25px] bg-blue-400'>
        <Image
          className='object-cover rounded-full border-4 border-gray-300'
          alt={number.toString()}
          width={120}
          height={120}
          src='/logo.png'/>
      </div>
      <div className='flex flex-col justify-between grow px-3 pt-2'>
        <div className='text-center'>
          <h2 className='text-3x1 font-bold'>
            {title}
          </h2>
          <small className='text-left text-gray-500'>
            {fecha}
          </small>
          <p className='text-center text-sm text-gray-800'>
            {noticia}
          </p>
        </div>
        {/* No hay que usar un botón habría que usar link */}
        <button
          className='border-none rounded-full text-white bg-blue-400 mt-2 p-3 cursor-pointer transition-all ease-linear hover:bg-blue-600'
          onClick={() => handleClick(url)}>
            Ver más
        </button>
      </div>
    </div>
  );
};

