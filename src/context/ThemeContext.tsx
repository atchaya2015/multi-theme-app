import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { themes } from '../themes/themeConfig';
import { ThemeName, ThemeConfig, ThemeContextType } from '../types/theme';

// We no longer need THEME_STORAGE_KEY if we're not using localStorage for persistence
// const THEME_STORAGE_KEY = 'appTheme';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // 1. Initialize state to 'theme1' directly.
  // This ensures it always starts as theme1 on a fresh load/refresh.
  const [currentThemeName, setCurrentThemeName] = useState<ThemeName>('theme1');

  const currentTheme: ThemeConfig = themes[currentThemeName];

  // 2. Apply CSS variables and font family when theme changes or on initial load
  useEffect(() => {
    if (currentTheme) {
      for (const [key, value] of Object.entries(currentTheme)) {
        // Only apply CSS variables
        if (key.startsWith('--')) {
          document.documentElement.style.setProperty(key, value);
        }
      }
      // Apply font family to the root element
      document.documentElement.style.fontFamily = currentTheme.fontFamily;
    }
  }, [currentTheme]); // Depend on currentTheme so it re-runs when theme changes

  // 3. REMOVE THE LOCALSTORAGE SAVE EFFECT
  // The theme will now *not* be saved to localStorage, so it won't persist across refreshes.
  /*
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