
import type { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = {
  title: {
    absolute: 'Digital Marketing Services in Hyderabad | myadsphere',
  },
  description:
    'Explore digital marketing services from myadsphere, a Hyderabad agency offering SEO, Google Ads, Meta Ads, social media marketing, branding, website development and lead generation.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Digital Marketing Services in Hyderabad | myadsphere',
    description:
      'Explore SEO, Google Ads, Meta Ads, social media marketing, branding, website development and lead generation services from myadsphere.',
    url: 'https://myadsphere.in/services',
    siteName: 'myadsphere',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services in Hyderabad | myadsphere',
    description:
      'Explore SEO, paid advertising, branding, social media marketing and website development services from myadsphere.',
  },
}

export default function ServicesOverviewPage() {
  return <ServicesPageClient />
}
