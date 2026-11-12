export interface NavItem {
  label: string;
  href: string;
  isBadge?: string;
  children?: { label: string; href: string; description?: string }[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: 'Women',
    href: '/ladies-wear',
    children: [
      { label: 'Sarees', href: '/sarees', description: 'Banarasi, Kanjivaram & Designer drapes' },
      { label: 'Kurtis', href: '/ladies-wear?category=kurtis', description: 'Everyday & festive kurtis' },
      { label: 'Suit Sets', href: '/ladies-wear?category=suit-sets', description: 'Embroidered 3-piece sets' },
      { label: 'Dresses', href: '/ladies-wear?category=dresses', description: 'Indo-western ethnic dresses' },
      { label: 'Lehengas', href: '/ladies-wear?category=lehengas', description: 'Bridal & festive lehengas' },
      { label: 'Dupattas', href: '/ladies-wear?category=dupattas', description: 'Banarasi & silk dupattas' },
    ],
  },
  {
    label: 'Kids',
    href: '/kids-wear',
    children: [
      { label: 'Girls Ethnic', href: '/kids-wear?category=girls', description: 'Lehenga cholis & suits' },
      { label: 'Boys Ethnic', href: '/kids-wear?category=boys', description: 'Kurta pyjamas & sherwanis' },
      { label: 'Festive Kids Wear', href: '/kids-wear?category=festive', description: 'Celebration outfits' },
    ],
  },
  {
    label: 'Indian Attire',
    href: '/indian-attire',
    children: [
      { label: 'Traditional Wear', href: '/indian-attire?type=traditional' },
      { label: 'Festive Wear', href: '/indian-attire?type=festive' },
      { label: 'Wedding Wear', href: '/indian-attire?type=wedding' },
      { label: 'Occasion Wear', href: '/indian-attire?type=occasion' },
    ],
  },
  {
    label: 'New Arrivals',
    href: '/new-arrivals',
    isBadge: 'NEW',
  },
  {
    label: 'Collections',
    href: '/collections',
  },
];

export const FOOTER_LINKS = {
  shop: [
    { label: 'Pure Silk Sarees', href: '/sarees?type=silk' },
    { label: 'Banarasi Sarees', href: '/sarees?type=banarasi' },
    { label: 'Designer Kurtis', href: '/ladies-wear?type=kurtis' },
    { label: 'Festive Suit Sets', href: '/ladies-wear?type=suit-sets' },
    { label: "Kids' Ethnic Wear", href: '/kids-wear' },
    { label: 'Wedding Trousseau', href: '/collections?type=wedding' },
  ],
  customerCare: [
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Shipping & Delivery', href: '/shipping-returns' },
    { label: 'Returns & Exchanges', href: '/shipping-returns' },
    { label: 'Track Order (Coming Soon)', href: '/shipping-returns' },
    { label: 'Contact Us', href: '/contact' },
  ],
  about: [
    { label: 'Our Heritage Story', href: '/about' },
    { label: 'Visit Dhanpatganj Showroom', href: '/contact' },
    { label: 'Artisan & Weaving Roots', href: '/about#artisans' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
