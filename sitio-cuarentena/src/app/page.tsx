import QuienesSomos from '@/components/quienes-somos'
import CompetenciasAnteriores from '@/components/competencias-anteriores'
import Footer from '@/components/footer'
import UltimoMomento from '@/components/ultimo-momento'
import Image from 'next/image'
import Noticias from '@/components/noticias'

export default function Home() {
  const ultimoMomento = {
    msg: [`Estimados mortales,`,
    `En primer lugar, ha llegado el momento de que dé a conocer lo que todos vosotros estabais esperando atentamente (incluso si mis esbirros del Comité se hubieran tardado): los resultados de la última competencia, la IV CUARENTENA-"La CUARenTenA". No obstante, es de mi voluntad que antes de diligenciar vuestras dudas con apremio y leer la tabla de más abajo, muestren templanza y continúen percibiendo las nuevas.`,
    `En segundo lugar, allegase una nueva competencia especialmente preparada, como siempre, para vosotros, los exolímpicos, mis estimados encomendados. Vuelve la felicidad y vuelve la Semana Mortimeriana. Tal es así que del domingo 25 de febrero a las 00:00 al sábado 02 de marzo a las 23:59 se desarrollará oficialmente la II Semana Mortimeriana, en esta oportunidad con problemas cada vez más sorprendentes y dignos de mi agrado. No será menor vuestro pasmo. Para inscribirse y recibir información adicional, deberán completar el siguiente formulario:`],
    link: 'http://tinyurl.com/347s8raz',
    link_text:'Link al formulario'
  }

  return (
    <>
      <UltimoMomento
        msg={ultimoMomento.msg}
        link={ultimoMomento.link}
        link_text={ultimoMomento.link_text}/>
      <hr className="border-black"/>
      <QuienesSomos/>
      <hr className="border-black"/>
      <Noticias/>
      <hr className="border-black"/>
      <CompetenciasAnteriores/>
      <Footer/>
    </>
  )
}
