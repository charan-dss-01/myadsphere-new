
import type { MetadataRoute } from 'next'
import { servicesData } from '@/data/servicesData'

const baseUrl = 'https://myadsphere.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-work`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Include only original service URLs, excluding aliases.
  const servicePages: MetadataRoute.Sitemap = Object.entries(servicesData)
    .filter(([slug, service]) => slug === service.slug)
    .map(([slug]) => ({
      url: `${baseUrl}/services/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [...mainPages, ...servicePages]
}
