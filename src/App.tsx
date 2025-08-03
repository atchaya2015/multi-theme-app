import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import LayoutWrapper from './components/LayoutWrapper';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import appStyles from './App.module.css'; // General app layout styles for .appContainer
import './index.css'; // Global CSS variables and base styles

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className={appStyles.appContainer}>
          <Header />
          <LayoutWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Add a 404 page if desired, e.g.: */}
              {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
            </Routes>
          </LayoutWrapper>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;