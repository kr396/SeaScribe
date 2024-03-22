import {colors} from './colors';
export const lightTheme = {
  colors: {
    typography: '#000000',
    background: '#ffffff',
    ...colors,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  paddings: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

// define other themes
