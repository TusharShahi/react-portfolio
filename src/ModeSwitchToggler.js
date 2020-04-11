import React from 'react';
import './ModeSwitchToggler.css'
import cx from 'classnames';


class ModeSwitchToggler extends React.Component {

    constructor(props){
        super(props);

        this.slide = this.slide.bind(this);
        
        this.state = {
            mode : this.props.mode,
        }
    }

    slide(e){
        e.preventDefault();
        if(this.state.mode == 'light'){
            this.state.mode = 'dark';
            return this.props.changeMode('light');
        }
        else if(this.state.mode == 'dark')
        {
            this.state.mode = 'light';
            return this.props.changeMode('dark');
        }

    
    }

    render(){
           let positionRight;
           if(this.state.mode == 'light'){
            positionRight = true;
           }
           else{
            positionRight = false;
           }
           return(
           <div className='ModeSwitchToggler'>
               <div onClick={this.slide}>
                    <div id='face'
                                className={ cx({
                                    moveRight: positionRight 
                                  })}>
                        <div id='eyeRight'
                        className={ cx('eye' , {
                            openEye: positionRight 
                          })}></div>
                        <div id='eyeLeft'
                        className={ cx('eye',{
                            openEye: positionRight 
                          })}></div>
                        <div id='mouth'
                        className={ cx('sleepMouth',{
                            openMouth: positionRight 
                          })}></div>
                    </div>
                   </div> 
            </div>);
        }
        
}

export default ModeSwitchToggler;