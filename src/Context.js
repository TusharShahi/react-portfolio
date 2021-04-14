import React from 'react'

const Context = React.createContext(
    {
        theme: localStorage.getItem('themeSwitch') != null ? localStorage.getItem('themeSwitch') : 'LIGHT',
        toggleTheme: () => { },
    }
);


export default Context;