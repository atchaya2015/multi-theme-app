import React, { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';
import appLayoutStyles from '../App.module.css'; 
import theme1LayoutStyles from '../themes/theme1.module.css';
import theme2LayoutStyles from '../themes/theme2.module.css';
import theme3LayoutStyles from '../themes/theme3.module.css';

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  let layoutSpecificStyles;
  switch (currentTheme.layout) {
    case 'minimalist':
      layoutSpecificStyles = theme1LayoutStyles;
      break;
    case 'sidebar':
      layoutSpecificStyles = theme2LayoutStyles;
      break;
    case 'grid':
      layoutSpecificStyles = theme3LayoutStyles;
      break;
    default:
      layoutSpecificStyles = theme1LayoutStyles; 
  }

  return (
    <main className={`${appLayoutStyles.mainContent} ${layoutSpecificStyles.mainContent}`}>
      {currentTheme.layout === 'sidebar' && (
        <aside className={layoutSpecificStyles.sidebar}>
          <h3>Navigation</h3>
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </aside>
      )}
      <div className={layoutSpecificStyles.contentArea}>
        {children} {/* Render page content here */}
      </div>
    </main>
  );
};

export default LayoutWrapper;
