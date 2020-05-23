import React from 'react';
import {workWorkForce } from './constants';
import WorkBlock from './WorkBlock';

class Work extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    createWorkBlock(contentArray){
    
        let workBlock = []; 
        for(let i = 0 ; i < contentArray.length; i++){
            workBlock.push(<WorkBlock name={contentArray[i].project}
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
                    {this.createWorkBlock([workWorkForce])}
                </div>

                <div id='scribbles'>
                    <h3>Other Scribbles</h3>

                </div>
                
                
            </div>);
        }
        
}


export default Work;