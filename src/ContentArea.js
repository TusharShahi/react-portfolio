import React, { memo, forwardRef } from 'react';
import Work from './Work';
import Myself from './Myself';
import Experience from './Experience';
import './ContentArea.css';


const ContentArea = memo(forwardRef((props, incomingRef) => {

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
        <div className="ContentArea" ref={incomingRef}>
            {contentAreaCode}
        </div>
    );

}));


export default ContentArea;
