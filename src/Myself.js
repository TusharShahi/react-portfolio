import React from 'react';
import AbilitiesBox from './AbilitiesBox';
import DesignsBox from './DesignsBox';
import './Myself.css';


import {myDescription, myFreeTime, myBrag, myHobbies} from './constants';



class Myself extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){


           return(<div className='Myself'>
                <h1>Myself</h1> 
                <div id='description'>
                <h3>{myDescription}</h3>
                </div>                
                <div id='javascriptBrag'>
                <h3>{myBrag}</h3>
                </div>
                <div id='hobbies'>
                <h3>{myHobbies}</h3>
                </div>
                <div id='freeTime'>
                <h3>{myFreeTime}</h3>
                </div>

                <DesignsBox></DesignsBox>
                
                <AbilitiesBox></AbilitiesBox>

            </div>);
        }
        
}


export default Myself;