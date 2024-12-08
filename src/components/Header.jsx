import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const {theme, toggleTheme} = useTheme();

    return(
        <header className="header">
            <h1>Country Finder</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
        </header>
    );

};

export default Header;