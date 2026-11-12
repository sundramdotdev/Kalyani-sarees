export const COLOR_TOKENS = {
  primary: {
    base: '#6B1F2A', // Deep Maroon
    hover: '#541720',
    light: '#F5E8EA',
  },
  secondary: {
    base: '#B08D57', // Antique Gold
    hover: '#957544',
    light: '#FAF5EC',
  },
  background: {
    ivory: '#F8F3EA',
    surface: '#EFE5D5',
    white: '#FFFFFF',
  },
  text: {
    primary: '#252525', // Deep Charcoal
    muted: '#6F6A63',
    inverse: '#FFFFFF',
  },
  border: {
    base: '#DED5C8',
    strong: '#6B1F2A',
  },
  accent: {
    terracotta: '#9E3D24',
    success: '#2D6A4F',
    warning: '#C77700',
    destructive: '#9E2A2B',
  },
} as const;

export const BREAKPOINTS = {
  mobileCompact: 360,
  mobileStandard: 390,
  mobileLarge: 430,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  desktopLarge: 1440,
} as const;
