'use client';
import React, { useState } from 'react'
import Card from '../ui/card';

export default function Noticias() {
  const noticias = [
    { 
      fecha: '16/01/2024',
      title: 'Semana de Mórtimer II', 
      noticia: 'Ya está abierta la inscripción para la II Semana de Mórtimer. Apretá Ver Más para completar el proceso de inscripción.',
      number: 0, 
      url: 'https://docs.google.com/forms/d/e/1FAIpQLScp8d11F9DA5rvJ4_dB3qtCaB4JJaeUqrtVMGiGouWviu7FGQ/viewform?usp=sf_link'
    },
    { 
      fecha: '15/01/2024', 
      title: 'Cuarentena IV', 
      noticia: 'Ya están los resultados de la IV Cuarentena. Dirigite a Competencias Anteriores para encontrarlo',
      number: 1,
      url: 'resultados/cuarentena4' },
    { 
      fecha: '12/03/2023',
      title: 'Semana de Mórtimer',
      noticia: 'Los esbirros del gran comite ya subieron los resultados de la Semana de Mórtimer. Apretá en "Ver Más" para conocerlos',
      number: 2,
      url: 'resultados/semana1' },
    { 
      fecha: '22/12/2021',
      title: 'Cuarentena III',
      noticia: 'Ya se conocen los resultados de la 3era Cuarentena, disponibles en la sección de Competencias Anteriores.',
      number: 3,
      url: 'resultados/cuarentena3'
    },
  ];

  return (
    <div id='noticias' className='flex flex-col items-center py-4'>
      <h1 className='text-center text-3xl leading-10 font-semibold'>Noticias</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative mt-4'>
        {noticias.map(noticia => Card(noticia))}
      </div>
    </div>
  )
}