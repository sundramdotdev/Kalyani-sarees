export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  openGraph?: {
    title: string;
    description: string;
    images: OpenGraphImage[];
    type: 'website' | 'article' | 'product';
  };
  keywords?: string[];
  noIndex?: boolean;
}
