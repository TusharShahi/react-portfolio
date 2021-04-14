import React from 'react';
import './ModeSwitchToggler.css'
import cx from 'classnames';


class ModeSwitchToggler extends React.Component {

    constructor(props) {
        super(props);

        this.slide = this.slide.bind(this);

        this.state = {
            mode: this.props.mode,
        }
    }

    slide(e) {
        e.preventDefault();
        if (this.state.mode == 'LIGHT') {
            this.state.mode = 'DARK';
            return this.props.changeMode('LIGHT');
        }
        else if (this.state.mode == 'DARK') {
            this.state.mode = 'LIGHT';
            return this.props.changeMode('DARK');
        }


    }

    render() {
        let positionRight;
        if (this.state.mode == 'LIGHT') {
            positionRight = true;
        }
        else {
            positionRight = false;
        }
        return (
            <div className='ModeSwitchToggler'>
                <div onClick={this.slide}>
                    <div id='face'
                        className={cx({
                            moveRight: positionRight
                        })}>
                        <div id='eyeRight'
                            className={cx('eye', {
                                openEye: positionRight
                            })}></div>
                        <div id='eyeLeft'
                            className={cx('eye', {
                                openEye: positionRight
                            })}></div>
                        <div id='mouth'
                            className={cx('sleepMouth', {
                                openMouth: positionRight
                            })}></div>
                    </div>
                </div>
            </div>);
    }

}

export default ModeSwitchToggler;