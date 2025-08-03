import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { themes } from '../themes/themeConfig';
import { ThemeName, ThemeConfig, ThemeContextType } from '../types/theme';



export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  
  const [currentThemeName, setCurrentThemeName] = useState<ThemeName>('theme1');

  const currentTheme: ThemeConfig = themes[currentThemeName];

  
  useEffect(() => {
    if (currentTheme) {
      for (const [key, value] of Object.entries(currentTheme)) {
        // Only apply CSS variables
        if (key.startsWith('--')) {
          document.documentElement.style.setProperty(key, value);
        }
      }
      
      document.documentElement.style.fontFamily = currentTheme.fontFamily;
    }
  }, [currentTheme]); // Depend on currentTheme so it re-runs when theme changes

 
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, currentThemeName);
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }
  }, [currentThemeName]);
  */

  const setTheme = (themeName: ThemeName) => {
    if (themes[themeName]) {
      setCurrentThemeName(themeName);
    } else {
      console.warn(`Theme "${themeName}" not found.`);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentThemeName, setTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
