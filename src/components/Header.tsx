import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { ThemeName } from '../types/theme'; // Import ThemeName type

const Header: React.FC = () => {
  const { currentThemeName, setTheme, currentTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeName); // Cast value to ThemeName
  };

  // Dynamically apply header font-family if defined in themeConfig
  const headerStyle = currentTheme.headerFontFamily ? { fontFamily: currentTheme.headerFontFamily } : {};

  return (
    <header className={styles.header}>
      <div className={styles.logo} style={headerStyle}>PixelForge</div>
      <nav className={styles.navigation}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}>Contact</NavLink>
      </nav>
      <div className={styles.themeSwitcher}>
        <label htmlFor="theme-select">Theme:</label>
        <select id="theme-select" value={currentThemeName} onChange={handleThemeChange}>
          <option value="theme1">Default Theme </option>
          <option value="theme2">Dark Theme</option>
          <option value="theme3">Colourful Theme</option>
        </select>
      </div>
    </header>
  );
};

export default Header;