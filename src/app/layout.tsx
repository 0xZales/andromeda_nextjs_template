import Provider from '@/components/Provider';
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: ['400', '600', '700', '900'], subsets: ['latin'], variable: '--font-poppins' })
export const metadata = {
  title: 'Create Next App',
  description: 'Andromeda NExtjs Template',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className} lg:px-12 px-2`}>
        <Navbar />
        {children}

        <Footer />
      </body>
    
    </html>
  )
}
