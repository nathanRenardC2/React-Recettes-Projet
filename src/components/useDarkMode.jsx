import { useEffect } from "react";
import { useState } from "react";

export default function useDarkMode(){
    // On récupère la valeur du mode sombre dans le localStorage
    const [theme, setTheme] = useState(localStorage.getItem("darkMode") === "false");
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() =>{
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme)
    }, [theme, colorTheme])

    return[colorTheme, setTheme]
}