import CardNotice from "./CardNotice";


export default function QuienesSomos() {

    const noticias = [
        { fecha: '20/12/2023', title:'Cuarentena IV', noticia: 'Ya están los resultados de la IV Cuarentena. Dirigite a Competencias Anteriores para encontrarlo' },
        { fecha: '02/01/2022', title:'Semana de Mórtimer', noticia: 'Los esbirros del gran comite ya subieron los resultados de la Semana de Mórtimer. Apretá en "Ver Más" para conocerlos' },
        { fecha: '03/01/2022', title: 'Cuarentena III', noticia: 'Ya se conocen los resultados de la 3era Cuarentena, disponibles en la sección de Competencias Anteriores.' },
    ];

    return(
        <>
            <div className="bg-hero bg-cover">
                <div id="quienes-somos" className="">
                    <h1 className="text-center pb-10 pt-5 text-3xl leading-10 font-semibold">¿Quienes somos?</h1>
                    <p className="pb-5 mx-5">
                    La Orden Mortimeriana es un comite de esbirros enviado por el gran Mortimer con el fin de despertar ese espíritu olímpico en los que ya no pueden participar. 
                    Esta orden se caracteriza por salirse de lo conocido para brindarles a aquellos que ya no pueden participar de las olímpiadas, una experiencia única e inolvidable.
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
                    <h1 className="text-center pt-5 pb-10 text-3xl leading-10 font-semibold">Competencias anteriores</h1>
                    {/* Table with results of all olympiads competitions */}
                    {/* <table className="bg-[#564C4A] m-1 text-center text-white rounded-2xl">
                        <tbody>
                            <tr className="">
                                <td className="w-56"><b>Competencia</b></td>
                                <td className="w-56"><b>Enunciados</b></td>
                                <td className="w-56"><b>Resultados</b></td>
                            </tr>
                            <tr className="p-1">
                                <td><p>CUARENTENA (2020)</p></td>
                                <td><a href="">Enunciados</a></td>
                                <td><a href="">Resultados</a></td>
                            </tr>
                        </tbody>
                    </table> */}
                    <main className="text-center bg-white rounded-[15px] text-black">
                        <section>
                            {/* Header table */}
                        </section>
                        <section className="border-2 border-black rounded-[15px]">
                            {/* Body table */}
                            <table className="m-2">
                                <thead className="h-10">
                                    <tr className="text-xl">
                                        <th className="p-1">Competencia</th>
                                        <th className="w-32 p-1">Enunciados</th>
                                        <th className="p-2">Resultados</th>
                                    </tr>
                                </thead>
                                <tbody className="p-2 m-2">
                                    <tr className="m-3 h-12">
                                        <td className="p-1">CUARENTENA (2020)</td>
                                        <td className="p-1"><a href="">Enunciados</a></td>
                                        <td className="p-1"><a href="">Resultados</a></td>
                                    </tr>
                                    <tr className="h-12">
                                        <td className="p-1">CUARENTENA II (2021)</td>
                                        <td className="p-1">
                                            <a href="" className="">Día 1</a>
                                            <a className="block p-2" href="">Día 2</a>
                                        </td>
                                        <td className="p-1"><a href="">Resultados</a></td>
                                    </tr>
                                    <tr className="h-12 m-3">
                                        <td className="p-1">CUARENTENA III (2021)</td>
                                        <td className="p-1"><a href="">Enunciados</a></td>
                                        <td className="p-1"><a href="">Resultados</a></td>
                                    </tr>
                                    <tr className="h-12 m-3">
                                        <td className="p-1">Semana de Mórtimer (2022)</td>
                                        <td className="p-1 hover:text-blue-700 hover:transition-all hover:ease-in"><a href="">Enunciados</a></td>
                                        <td className="p-1"><a href="">Resultados</a></td>
                                    </tr>
                                    <tr className="h-12 m-3">
                                        <td className="p-1">CUARENTENA IV (2023)</td>
                                        <td className="p-1">
                                            <a href="" className="">Día 1</a>
                                            <a className="block p-2" href="">Día 2</a>
                                        </td>
                                        <td className="p-1"><a href="">Resultados</a></td>
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