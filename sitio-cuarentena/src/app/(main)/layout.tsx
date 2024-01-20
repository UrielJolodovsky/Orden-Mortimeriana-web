import Navbar from "@/ui/navbar"
import '@/app/globals.css'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar/>
      <div className='bg-hero bg-cover pt-12'>
        {children}
      </div>
    </>
  )
}