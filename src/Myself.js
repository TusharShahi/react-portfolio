import React from 'react';
import AbilitiesBox from './AbilitiesBox';

import './Myself.css';


import { myDescription, myFreeTime, myBrag, myHobbies } from './constants';



class Myself extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {


        return (<div className='Myself'>
            <h1>Myself</h1>
            <div id='description'>
                <p>{myDescription}</p>
            </div>
            <div id='javascriptBrag'>
                <p>{myBrag}</p>
            </div>
            <div id='hobbies'>
                <p>{myHobbies}</p>
            </div>
            <div id='freeTime'>
                <p>{myFreeTime}</p>
            </div>

            <p id='resumeLink'><a rel="noopener noreferrer" target="_blank" href={require(`./resume.pdf`)} download>Download Resume 	&#11015;</a></p>
            {/*<DesignsBox></DesignsBox>*/}

            <AbilitiesBox></AbilitiesBox>

        </div>);
    }

}


export default Myself;