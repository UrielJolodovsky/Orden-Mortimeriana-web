'use client';
import React, { useState } from 'react'
import Card from '../ui/card';

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

  return (
    <div id='noticias' className='flex flex-col items-center py-4'>
      <h1 className='text-center text-3xl leading-10 font-semibold'>Noticias</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative mt-4'>
        {noticias.map(noticia => Card(noticia))}
      </div>
    </div>
  )
}