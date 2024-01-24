'use client';
import React, { useState } from 'react'
import Card from '../ui/card';
import next from 'next';

export default function Noticias() {
  const noticias = [
    { 
      fecha: '16/01/2024',
      title: 'Inscripción a la II Semana de Mórtimer', 
      noticia: 'Ya está abierta la inscripción para la II Semana de Mórtimer. ' +
       'Haga click en "ver más" para ver el formulario de inscripción.',
      number: 0, 
      url: 'https://docs.google.com/forms/d/e/1FAIpQLScp8d11F9DA5rvJ4_dB3qtCaB4JJaeUqrtVMGiGouWviu7FGQ/viewform?usp=sf_link'
    },
    { 
      fecha: '15/01/2024', 
      title: 'Resultados de IV Cuarentena', 
      noticia: 'Ya están publicados los resultados de la IV Cuarentena. ' +
        'Haga click en "ver más" o diríjase a Competencias anteriores para consultarlos.',
      number: 1,
      url: 'resultados/cuarentena4' },
    { 
      fecha: '12/03/2023',
      title: 'Resultados de Semana de Mórtimer',
      noticia: 'Los esbirros del Gran Comité han subido los resultados de la Semana de Mórtimer. ' +
        'Haga click en "ver más" o diríjase a Competencias anteriores para consultarlos.',
      number: 2,
      url: 'resultados/semana1' },
    { 
      fecha: '22/12/2021',
      title: 'Resultados de III Cuarentena',
      noticia: 'Ya están publicados los resultados de la III Cuarentena. ' +
      'Haga click en "ver más" o diríjase a Competencias anteriores para consultarlos.',
      number: 3,
      url: 'resultados/cuarentena3'
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedNotice, setSelectedNotice] = useState(noticias[0]);

  const selectNewImage = (index: number, images: any, next = true) => {
    const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
    setSelectedIndex(nextIndex)
    setSelectedNotice(noticias[nextIndex])
  }

  const previousNotice = () => {
    selectNewImage(selectedIndex, noticias, false)
  }

  const nextNotice = () => {
    selectNewImage(selectedIndex, noticias)
  }

  return (
    <div id='noticias' className='flex flex-col items-center py-4'>
      <h1 className='text-center text-3xl leading-10 font-semibold'>Noticias</h1>
      <div className='md:grid hidden md:grid-cols-2 lg:grid-cols-3 gap-10 relative mt-4'>
        {noticias.map(noticia => Card(noticia))}
      </div>
      <div className='md:hidden flex justify-center items-center gap-x-3 mt-4'>
        <button className='bg-gray-400 rounded-full w-12 h-12 text-xl text-center' onClick={previousNotice}>{"<"}</button>
        {Card(selectedNotice)}
        <button className='bg-gray-400 rounded-full w-12 h-12 text-xl text-center' onClick={nextNotice}>{">"}</button>
      </div>
    </div>
  )
}