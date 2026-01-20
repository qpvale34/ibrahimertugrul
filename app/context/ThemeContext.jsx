"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const THEME_STORAGE_KEY = 'theme';

export function ThemeProvider({ children }) {
  const [isLight, setIsLight] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        if (savedTheme === 'light') {
          setIsLight(true);
          document.documentElement.classList.add('light');
        } else if (savedTheme === 'dark') {
          setIsLight(false);
          document.documentElement.classList.remove('light');
        } else if (prefersLight) {
          setIsLight(true);
          document.documentElement.classList.add('light');
        }
      } catch (error) {
        console.error('Theme initialization error:', error);
      } finally {
        setIsInitialized(true);
      }
    };

    initializeTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);
    
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme ? 'light' : 'dark');
    } catch (error) {
      console.error('Failed to save theme preference:', error);
    }

    document.documentElement.classList.toggle('light', newTheme);
  };

  const setTheme = (theme) => {
    const newIsLight = theme === 'light';
    setIsLight(newIsLight);
    
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.error('Failed to save theme preference:', error);
    }

    if (newIsLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <ThemeContext.Provider value={{
      isLight,
      isInitialized,
      toggleTheme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
