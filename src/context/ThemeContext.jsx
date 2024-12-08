import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({Children}) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value ={{ theme, toggleTheme}}>
            <div className={theme}>{Children}</div>
        </ThemeContext.Provider>
    )
}