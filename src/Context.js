import React, { useState } from 'react'
import { colorPalette } from './constants';


const Context = React.createContext(
    {
        theme: '',
        toggleTheme: null
    }
);

const changeColorsTo = (theme) => {
    const properties = ['background', 'paraText', 'headerText', 'base', 'pressed', 'shade'];
    properties.forEach((x) => {
        document.documentElement.style.setProperty(`--${x}`, colorPalette[theme.toLowerCase()][x]);

    });

}

const ContextProvider = (props) => {

    let [currentTheme, setTheme] = useState(localStorage.getItem('themeSwitch') != null ? localStorage.getItem('themeSwitch') : 'LIGHT');
    changeColorsTo(currentTheme);

    let themeSwitchHandler = () => {

        const newTheme = currentTheme === 'DARK' ? 'LIGHT' : 'DARK';
        setTheme(newTheme);
        localStorage.setItem('themeSwitch', newTheme);
        changeColorsTo(newTheme);

    };

    return (
        <Context.Provider
            value={{
                theme: currentTheme,
                toggleTheme: themeSwitchHandler,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };