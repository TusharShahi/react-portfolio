import React, { useRef, useContext, memo } from 'react';
import Context from './Context';

const ModeToggler = memo((props) => {

    const { theme, toggleTheme } = useContext(Context);

    const buttonRef = useRef();


    const keyDown = (e) => {
        if (e.keyCode == '13' || e.keyCode == '32') {
            //console.log("called");
            buttonRef.current.click();
        }
    }

    return (
        <div className="modeChangeButton" ref={buttonRef} role="button" tabIndex="0" onClick={toggleTheme} onKeyDown={keyDown}>
            {theme.toUpperCase()} <span role="img" style={{ display: 'inline', position: 'relative' }} aria-hidden="true">&#128161;</span>
        </div>
    );
});

export default ModeToggler;
