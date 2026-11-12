import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://kalyanisarees.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cart', '/wishlist', '/search'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
