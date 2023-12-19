import CardNotice from "./CardNotice";


export default function QuienesSomos() {

    const noticias = [
        { fecha: '15-12-2023', noticia: 'Ya están los resultados de la IV Cuarentena. Dirigite a Competencias Anteriores para encontrarlo' },
        { fecha: '2022-01-02', noticia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
        { fecha: '2022-01-03', noticia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
    ];

    return(
        <>
            <div className="bg-hero">
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
                    <div className="md:flex w-full justify-center items-center mx-10 mb-10">
                        {noticias.map((noticia) => (
                            CardNotice(noticia)
                        )
                        )}
                    </div>
                </div>
                <hr className="border-black"></hr>
                <div id="competencias-anteriores" className="">
                    <h1 className="text-center pt-5 pb-10 text-3xl leading-10 font-semibold">Competencias anteriores</h1>

                </div>
                <hr></hr>
            </div>
        </>
    )
}