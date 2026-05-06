import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DSS-Charan-Portfolio',
  description: 'DSS-Charan-Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <link rel="icon" type="image/svg+xml" href="/assets/favicon.ico" className='w-10 h-10 rounded-full' />
      <body className={`${jakarta.className} text-white antialiased`}>
      <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
