
import './globals.css'
import type { Metadata } from 'next'
import {
  Plus_Jakarta_Sans,
  Space_Grotesk,
  Poppins,
} from 'next/font/google'
import Navbar from '@/components/Navbar'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://myadsphere.in'),

  title: {
    default: 'myadsphere | Digital Marketing Agency in Hyderabad',
    template: '%s | myadsphere',
  },

  description:
    'myadsphere is a digital marketing agency in Hyderabad helping businesses grow through SEO, Google Ads, Meta Ads, social media marketing, branding, website development and performance marketing. Think Beyond.',

  keywords: [
    'myadsphere',
    'Digital Marketing Agency in Hyderabad',
    'Digital Marketing Company in Hyderabad',
    'SEO Agency in Hyderabad',
    'Branding Agency in Hyderabad',
    'Performance Marketing Agency in Hyderabad',
    'Google Ads Agency in Hyderabad',
    'Meta Ads Agency in Hyderabad',
    'Social Media Marketing Agency in Hyderabad',
    'Website Development Company in Hyderabad',
    'Lead Generation Agency in Hyderabad',
  ],

  verification: {
    google: '3h9bNA5LgDKO6evkCI9cc1nMoIGF5_azycKKjMOGNX0',
  },

  openGraph: {
    type: 'website',
    siteName: 'myadsphere',
    title: 'myadsphere | Digital Marketing Agency in Hyderabad',
    description:
      'myadsphere is a digital marketing agency in Hyderabad helping businesses grow through SEO, Google Ads, Meta Ads, social media marketing, branding, website development and performance marketing. Think Beyond.',
    url: 'https://myadsphere.in',
    locale: 'en_IN',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'myadsphere | Digital Marketing Agency in Hyderabad',
    description:
      'myadsphere is a digital marketing agency in Hyderabad helping businesses grow through SEO, Google Ads, Meta Ads, social media marketing, branding, website development and performance marketing. Think Beyond.',
  },

  icons: {
    icon: '/assets/fav.svg',
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
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/fav.svg" />
        <link rel="shortcut icon" href="/assets/fav.svg" />
        <link rel="apple-touch-icon" href="/assets/fav.svg" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CEB7C10JCG"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CEB7C10JCG');
            `,
          }}
        />
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
