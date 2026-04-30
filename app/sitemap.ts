export const dynamic = 'force-static'

import { MetadataRoute } from 'next'
import { CITIES } from './lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://howfarbetween.com'
  const urls: MetadataRoute.Sitemap = []

  urls.push({ url: baseUrl, changeFrequency: 'weekly', priority: 1 })

  for (const fromCity of CITIES) {
    for (const toCity of CITIES) {
      if (fromCity.slug === toCity.slug) continue
      urls.push({
        url: `${baseUrl}/distance/${fromCity.slug}-to-${toCity.slug}`,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  }

  return urls
}