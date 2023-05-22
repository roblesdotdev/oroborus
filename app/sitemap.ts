import type { MetadataRoute } from 'next'
import { siteConfig } from '~/config/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
  ]
}
