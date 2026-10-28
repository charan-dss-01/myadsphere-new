import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'

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
  title: 'myadsphere – Branding and Digital Marketing Agency in Hyderabad',
  description: 'Myadsphere is a results-driven digital marketing agency in Hyderabad helping businesses grow through SEO, Google Ads, Meta Ads, branding, website development, and performance marketing.',
  keywords: [
    'Digital Marketing Agency in Hyderabad',
    'Branding and Digital Marketing Agency in Hyderabad',
    'SEO Agency Hyderabad',
    'Performance Marketing Agency',
    'Myadsphere'
  ],
  verification: {
    google: '3h9bNA5LgDKO6evkCI9cc1nMoIGF5_azycKKjMOGNX0',
  },
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
      <GoogleAnalytics gaId="G-CEB7C10JCG" />
    </html>
  )
}
