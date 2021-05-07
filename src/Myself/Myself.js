import React, { memo } from 'react';
import AbilitiesBox from './AbilitiesBox';
import './Myself.css';
import { myDescription, myFreeTime, myBrag, myHobbies } from '../constants';



const Myself = memo(() => {


    return (<div className='Myself'>
        <h2>Myself</h2>
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

        <p id='resumeLink'><a rel="noopener noreferrer" target="_blank" href={process.env.PUBLIC_URL + '/Resume.pdf'} download>Download Resume 	&#11015;</a></p>

        <AbilitiesBox></AbilitiesBox>

    </div>);

});


export default Myself;