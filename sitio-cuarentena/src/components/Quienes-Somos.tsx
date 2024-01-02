'use client'
import React, { useState } from 'react'
import CardNotice from './CardNotice';

export default function QuienesSomos() {

    const noticias = [
        { fecha: '01/01/2024', title:'Cuarentena IV', noticia: 'Ya están los resultados de la IV Cuarentena. Dirigite a Competencias Anteriores para encontrarlo', number: 1, url: 'resultados/cuarentena4' },
        { fecha: '12/03/2023', title:'Semana de Mórtimer', noticia: 'Los esbirros del gran comite ya subieron los resultados de la Semana de Mórtimer. Apretá en "Ver Más" para conocerlos', number: 2, url: 'resultados/semana1' },
        { fecha: '22/12/2021', title: 'Cuarentena III', noticia: 'Ya se conocen los resultados de la 3era Cuarentena, disponibles en la sección de Competencias Anteriores.', number: 3, url: 'resultados/cuarentena3' },
    ];

    return(
        <>
            <div className="bg-hero bg-cover">
                <div id="quienes-somos" className="">
                    <h1 className="text-center pb-10 pt-5 text-3xl leading-10 font-semibold">¿Quienes somos?</h1>
                    <p className="pb-5 mx-5 text-center">
                    La Orden Mortimeriana es un comité de esbirros enviado por el gran Mortimer con el propósito de recuperar el espíritu olímpico en aquellos que ya no pueden participar. 
                    Esta orden se caracteriza por salirse de lo conocido para brindarles a los estimados exolímpicos, una experiencia única e inolvidable. Año a año se suman nuevos miembros jóvenes y aquellos no tan agraciados de juventud, se convierten en participantes.
                    </p>
                </div>
                <hr className="border-black"></hr>
                <div id="noticias" className="">
                    <h1 className="text-center pt-5 pb-5 text-3xl leading-10 font-semibold">Noticias</h1>
                    <div className="flex flex-wrap justify-center items-center mx-10 mb-10 gap-10 relative">
                        {noticias.map((noticia) => (
                            CardNotice(noticia)
                        )
                        )}
                    </div>
                </div>
                <hr className="border-black"></hr>
                <div id="competencias-anteriores" className="mx-3 flex flex-col justify-center items-center pb-5">
                    <h1 className="text-center pt-5 pb-5 text-3xl leading-10 font-semibold">Competencias anteriores</h1>
                    <main className="text-center bg-white rounded-[15px] text-black">
                        <section>
                            {/* Header table */}
                        </section>
                        <section className="border-2 border-black rounded-[15px]">
                            {/* Body table */}
                            <table className="m-2">
                                <thead className="h-10">
                                    <tr className="sm:text-xl text-base">
                                        <th className="p-1">Competencia</th>
                                        <th className="w-32 p-1">Enunciados</th>
                                        <th className="p-2">Resultados</th>
                                    </tr>
                                </thead>
                                <tbody className="p-2 m-2">
                                    <tr className="m-3 h-12">
                                        <td className="p-1">CUARENTENA (2020)</td>
                                        <td className="p-1 hover:text-blue-700 hover:transition-all hover:ease-linear"><a href="enunciados/CUARENTENA I.pdf">Enunciados</a></td>
                                        <td className="p-1"><a href="/resultados/cuarentena1" className='hover:text-blue-700 hover:transition-all hover:ease-linear'>Resultados</a></td>
                                    </tr>
                                    <tr className="h-12">
                                        <td className="p-1">CUARENTENA II (2021)</td>
                                        <td className="p-1">
                                            <a href="enunciados/Cuarentena_2_Día1.pdf" className="p-1 hover:text-blue-700 hover:transition-all hover:ease-linear">Día 1</a>
                                            <a className="block p-1 hover:text-blue-700 hover:transition-all hover:ease-linear" href="enunciados/Cuarentena_2_Día2.pdf">Día 2</a>
                                        </td>
                                        <td className="p-1"><a href="resultados/cuarentena2" className='hover:text-blue-700 hover:transition-all hover:ease-linear'>Resultados</a></td>
                                    </tr>
                                    <tr className="h-12 m-3">
                                        <td className="p-1">CUARENTENA III (2021)</td>
                                        <td className="p-1 hover:text-blue-700 hover:transition-all hover:ease-linear"><a href="enunciados/Cuarentena3.pdf">Enunciados</a></td>
                                        <td className="p-1"><a href="resultados/cuarentena3" className='hover:text-blue-700 hover:transition-all hover:ease-linear'>Resultados</a></td>
                                    </tr>
                                    <tr className="h-12 m-3">
                                        <td className="p-1">Semana de Mórtimer (2022)</td>
                                        <td className="p-1 hover:text-blue-700 hover:transition-all hover:ease-linear"><a href="enunciados/Semana_de_Mortimer.pdf">Enunciados</a></td>
                                        <td className="p-1"><a href="resultados/semana1" className='hover:text-blue-700 hover:transition-all hover:ease-linear'>Resultados</a></td>
                                    </tr>
                                    <tr className="h-12 m-3">
                                        <td className="p-1">CUARENTENA IV (2023)</td>
                                        <td className="p-1">
                                            <a href="enunciados/Cuarentena_4_ Dia1.pdf" className="p-1 hover:text-blue-700 hover:transition-all hover:ease-linear">Día 1</a>
                                            <a className="block p-2 hover:text-blue-700 hover:transition-all hover:ease-linear" href="enunciados/Cuarentena_4_ Dia2.pdf">Día 2</a>
                                        </td>
                                        <td className="p-1"><a className='hover:text-blue-700 hover:transition-all hover:ease-linear' href="resultados/cuarentena4">Resultados</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </main>
                </div>
                <hr></hr>
            </div>
        </>
    )
}