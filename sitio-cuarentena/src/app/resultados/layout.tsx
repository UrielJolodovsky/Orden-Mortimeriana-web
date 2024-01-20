import '@/app/globals.css'
import NavigationPane from '@/ui/navigation-pane'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='grid'>
      <NavigationPane/>
      <main className='grow'>
        {children}
      </main>
    </div>
  )
}
