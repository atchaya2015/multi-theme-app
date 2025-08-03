export type ThemeName = 'theme1' | 'theme2' | 'theme3';

export interface ThemeColors {
  '--primary-bg': string;
  '--secondary-bg': string;
  '--text-color': string;
  '--accent-color': string;
  '--border-color': string;
  '--spacing-unit': string;
  // If you want to use rgba in CSS variables for shadows, you can also include RGB values:
  '--accent-color-rgb-val': string;
}

export interface ThemeConfig extends ThemeColors {
  fontFamily: string;
  headerFontFamily: string;
  layout: 'minimalist' | 'sidebar' | 'grid';
}

export interface ThemeContextType {
  currentThemeName: ThemeName;
  setTheme: (themeName: ThemeName) => void;
  currentTheme: ThemeConfig;
}