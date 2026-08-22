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
  title: 'myadsphere | Best Digital Marketing Agency in Hyderabad',
  description: 'MyAdSphere is a high-performance digital marketing agency specializing in performance marketing, paid ads, SEO, social media growth, and conversion rate optimization.',
  icons: {
    icon: [
      { url: '/assets/fav.svg', type: 'image/svg+xml' },
      { url: '/fav.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/assets/fav.svg',
    apple: '/assets/fav.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/fav.svg" />
        <link rel="shortcut icon" href="/assets/fav.svg" />
        <link rel="apple-touch-icon" href="/assets/fav.svg" />
      </head>
      <body className={`${jakarta.className} text-white antialiased`}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
