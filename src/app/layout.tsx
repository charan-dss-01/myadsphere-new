import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'MyAdSphere | Digital Growth & Performance Marketing Agency',
  description: 'MyAdSphere is a high-performance digital marketing agency specializing in performance marketing, paid ads, SEO, social media growth, and conversion rate optimization.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${poppins.variable}`} suppressHydrationWarning>
      <link rel="icon" type="image/svg+xml" href="/assets/favicon.ico" className='w-10 h-10 rounded-full' />
      <body className={`${jakarta.className} text-white antialiased`}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
