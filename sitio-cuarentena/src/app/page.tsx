import Contacto from '@/components/Contacto'
import Header from '@/components/Header'
import QuienesSomos from '@/components/Quienes-Somos'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <a>Bruno es el mejor.</a>
      <Header />
      <QuienesSomos />
      <Contacto />
      {/* <Content /> */}
      {/* <CompetenciasAnteriores /> */}
    </>
  )
}
