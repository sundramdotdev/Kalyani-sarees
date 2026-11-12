import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '../context/CartContext';
import { WishlistProvider } from '../context/WishlistContext';
import { AnnouncementBar } from '../components/layout/AnnouncementBar';
import { Navbar } from '../components/layout/Navbar';
import { CartDrawer } from '../components/cart/CartDrawer';
import { Footer } from '../components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://kalyanisarees.com'),
  title: {
    template: '%s | Kalyani Sarees Dhanpatganj',
    default: 'Kalyani Sarees Dhanpatganj | Premium Indian Ethnic Wear & Sarees',
  },
  description:
    'Discover authentic Banarasi silk sarees, designer kurtis, kids ethnic wear, and festive wedding collections at Kalyani Sarees Dhanpatganj, Uttar Pradesh.',
  keywords: [
    'Kalyani Sarees Dhanpatganj',
    'Sarees in Dhanpatganj',
    'Banarasi Sarees Dhanpatganj',
    'Ladies clothing store Dhanpatganj',
    'Kids ethnic wear Sultanpur',
    'Indian wedding sarees UP',
  ],
  authors: [{ name: 'Kalyani Sarees Dhanpatganj' }],
  creator: 'Kalyani Sarees Dhanpatganj',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kalyanisarees.com',
    siteName: 'Kalyani Sarees Dhanpatganj',
    title: 'Kalyani Sarees Dhanpatganj | Premium Indian Ethnic Wear & Sarees',
    description:
      'Handcrafted Banarasi silks, designer ladies wear, and festive kids ethnic clothing in Dhanpatganj, UP.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: 'Kalyani Sarees Dhanpatganj',
    url: 'https://kalyanisarees.com',
    description:
      'Premium Indian ethnic fashion retailer specializing in pure silk sarees, ladies suits, and kids ethnic wear in Dhanpatganj, Sultanpur, Uttar Pradesh.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhanpatganj',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    currenciesAccepted: 'INR',
    priceRange: '₹₹',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8F3EA] text-[#252525]">
        <CartProvider>
          <WishlistProvider>
            <AnnouncementBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
