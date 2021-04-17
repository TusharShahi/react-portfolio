import React from 'react';
import Context from './Context';

class ModeToggler extends React.PureComponent {



    constructor(props) {
        super(props);
        this.state = {
        };
        this.keyDown = this.keyDown.bind(this);
        this.buttonRef = React.createRef();
    }

    keyDown(e) {
        if (e.keyCode == '13' || e.keyCode == '32') {
            //console.log("called");
            this.buttonRef.current.click();
        }
    }
    render() {
        return (
            <Context.Consumer>
                {({ theme, toggleTheme }) => (
                    <div className="modeChangeButton" ref={this.buttonRef} role="button" tabIndex="0" onClick={toggleTheme} onKeyDown={this.keyDown}>
                        {theme.toUpperCase()}
                    </div>
                )}
            </Context.Consumer >
        )
    }
}

export default ModeToggler;
