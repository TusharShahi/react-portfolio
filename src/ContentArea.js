import React from 'react';
import Work, { memo } from './Work';
import Myself from './Myself';
import Experience from './Experience';
import './ContentArea.css';


const ContentArea = memo((props) => {

    let contentAreaCode;
    let contentType = props.content;
    if (contentType == 'experience') {
        contentAreaCode = <Experience></Experience>
    }
    else if (contentType == 'work') {
        contentAreaCode = <Work></Work>
    }
    else if (contentType == 'else') {
        contentAreaCode = <Myself></Myself>
    }

    return (
        <div className="ContentArea">
            {contentAreaCode}
        </div>
    );

});


export default ContentArea;
