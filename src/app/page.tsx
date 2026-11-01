
import type { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = {
  title: 'myadsphere | Digital Marketing Agency in Hyderabad',

  description:
    'myadsphere is a digital marketing agency in Hyderabad helping businesses grow through SEO, Google Ads, Meta Ads, social media marketing, branding, website development and performance marketing. Think Beyond.',

  alternates: {
    canonical: '/',
  },

  keywords: [
    'Digital Marketing Agency in Hyderabad',
    'Digital Marketing Company in Hyderabad',
    'SEO Company in Hyderabad',
    'SEO Agency in Hyderabad',
    'Branding Agency in Hyderabad',
    'Performance Marketing Agency in Hyderabad',
    'Google Ads Agency in Hyderabad',
    'Meta Ads Agency in Hyderabad',
    'Social Media Marketing Agency in Hyderabad',
    'Website Development Company in Hyderabad',
    'Lead Generation Agency in Hyderabad',
    'Creative Agency in Hyderabad',
  ],

  openGraph: {
    title: 'myadsphere | Digital Marketing Agency in Hyderabad',
    description:
      'myadsphere helps businesses grow through SEO, branding, Google Ads, Meta Ads, website development and performance marketing.',
    url: 'https://myadsphere.in/',
    siteName: 'myadsphere',
    type: 'website',
    locale: 'en_IN',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'myadsphere | Digital Marketing Agency in Hyderabad',
    description:
      'Grow your business with myadsphere through digital marketing, SEO, branding and performance marketing.',
  },
}

export default function Home() {
  return <HomePageClient />
}
