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
                <div id="competencias-anteriores" className="mx-3">
                    <h1 className="text-center pt-5 pb-10 text-3xl leading-10 font-semibold">Competencias anteriores</h1>
                    {/* Table with results of all olympiads competitions */}
                    
                </div>
                <hr></hr>
            </div>
        </>
    )
}