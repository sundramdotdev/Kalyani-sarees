import { Metadata } from 'next';

interface GenerateSeoParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://kalyanisarees.com';
const BRAND_SUFFIX = 'Kalyani Sarees Dhanpatganj';

export function constructMetadata({
  title,
  description,
  path = '',
  image = '/images/og-default.jpg',
  noIndex = false,
}: GenerateSeoParams): Metadata {
  const fullTitle = title.includes(BRAND_SUFFIX) ? title : `${title} | ${BRAND_SUFFIX}`;
  const canonicalUrl = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: BRAND_SUFFIX,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: image.startsWith('http') ? image : `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : `${BASE_URL}${image}`],
    },
  };
}
