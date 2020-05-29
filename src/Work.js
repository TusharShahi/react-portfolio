import React from 'react';
import {workWorkForce , workEmergencyZone, workMRMWebsite } from './constants';
import WorkBlock from './WorkBlock';
import './Work.css';

class Work extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    createWorkBlock(contentArray){
    
        let workBlock = [];
        for(let i = 0 ; i < contentArray.length; i++){
            workBlock.push(<WorkBlock name={contentArray[i].project} 
                mockupImage={contentArray[i].mockup} link={contentArray[i].link}
                description={contentArray[i].description}
                mockupImageText={contentArray[i].altMockupText}
            >
            </WorkBlock>)
        }
        return workBlock;
    
    
    }

    createScribblesBlock(textArray){

        
    }

    render(){


           return(<div>
                <h1>Work</h1> 
                <div>
                    {this.createWorkBlock([ workMRMWebsite, workEmergencyZone, workWorkForce])}
                </div>

                <div id='scribbles'>
                    <h1>Other Scribbles</h1>

                </div>
                
                
            </div>);
        }
        
}


export default Work;