import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// Available themes with their metadata
export const themes = {
  light: {
    id: 'light',
    name: 'Light',
    icon: '🌞',
    description: 'Clean and professional'
  },
  dark: {
    id: 'dark',
    name: 'Dark',
    icon: '🌙',
    description: 'Easy on the eyes'
  },
  ocean: {
    id: 'ocean',
    name: 'Ocean',
    icon: '🌊',
    description: 'Deep blue vibes'
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset',
    icon: '🌅',
    description: 'Warm and inviting'
  },
  forest: {
    id: 'forest',
    name: 'Forest',
    icon: '🌲',
    description: 'Natural greens'
  }
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return themes[savedTheme] ? savedTheme : 'dark'; // default to dark
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove all theme classes
    Object.keys(themes).forEach(themeKey => {
      root.classList.remove(themeKey);
    });
    // Add current theme
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Legacy toggle for backward compatibility (light <-> dark)
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const changeTheme = (newTheme) => {
    if (themes[newTheme]) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};