import React from 'react';
import Work from './Work';
import Myself from './Myself';
import Experience from './Experience';
import './ContentArea.css';

class ContentArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {content: this.props.content};

    }

    render(){
        let contentAreaCode;
        let contentType = this.props.content; 
        if(contentType == 'experience'){
            contentAreaCode = <Experience></Experience>
        }
        else if(contentType=='work'){
            contentAreaCode = <Work></Work>
        }
        else if(contentType=='else'){
            contentAreaCode = <Myself></Myself>
        }

        return (
            <div className="ContentArea">
            {contentAreaCode}
            </div>
          );
        }
        
    }


export default ContentArea;
