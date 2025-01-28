import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); 

    };

    useEffect(() => {
        document.body.style.transition = 'background-color 0.5s ease';
      document.body.style.backgroundColor = theme === "dark" ? "#4E4C4C" : "#D9D9D9";
      }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};