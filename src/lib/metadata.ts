import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = '/images/og/default.png',
  pathname = '',
}: GenerateMetadataProps = {}): Metadata {
  const url = `${siteConfig.siteUrl}${pathname}`;
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.title}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    metadataBase: new URL(siteConfig.siteUrl),
  };
}
