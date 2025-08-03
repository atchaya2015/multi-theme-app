import { ThemeName, ThemeConfig } from '../types/theme';

export const themes: Record<ThemeName, ThemeConfig> = {
  theme1: {
    '--primary-bg': '#ffffff',
    '--secondary-bg': '#f8f9fa',
    '--text-color': '#343a40',
    '--accent-color': '#007bff',
    '--accent-color-rgb-val': '0,123,255', 
    '--border-color': '#e0e0e0',
    '--spacing-unit': '1rem', 
    fontFamily: 'Roboto, sans-serif',
    headerFontFamily: 'Roboto, sans-serif',
    layout: 'minimalist',
  },
  theme2: {
    '--primary-bg': '#212529',
    '--secondary-bg': '#343a40',
    '--text-color': '#f8f9fa',
    '--accent-color': '#28a745',
    '--accent-color-rgb-val': '40,167,69',
    '--border-color': '#495057',
    '--spacing-unit': '0.8rem', 
    fontFamily: 'Merriweather, serif',
    headerFontFamily: 'Merriweather, serif',
    layout: 'sidebar',
  },
  theme3: {
    '--primary-bg': '#ffe0b2', 
    '--secondary-bg': '#fff3e0', 
    '--text-color': '#6a1b9a',
    '--accent-color': '#ff7043', 
    '--accent-color-rgb-val': '255,112,67',
    '--border-color': '#ffa726', // Orange
    '--spacing-unit': '1.2rem', 
    fontFamily: 'Pacifico, cursive',
    headerFontFamily: 'Pacifico, cursive',
    layout: 'grid',
  },
};
