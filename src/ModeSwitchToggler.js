import React from 'react';
import './ModeSwitchToggler.css'
import cx from 'classnames';


class ModeSwitchToggler extends React.Component {

    constructor(props){
        super(props);

        this.slide = this.slide.bind(this);
        
        this.state = {
            mode : this.props.mode,
            //eyeCode : '-',
           // mou
        }
    }

    slide(e){
        e.preventDefault();
        if(this.state.mode == 'light'){
            this.setState({
                mode : 'dark'
            });
            return this.props.changeMode('dark');
        }
        else if(this.state.mode == 'dark')
        {
            this.setState({
                mode : 'light'
            });        
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
           return(<div className='ModeSwitchToggler'>
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