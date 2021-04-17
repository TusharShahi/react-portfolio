import React from 'react';
import { workWorkForce, workEmergencyZone, workMRMWebsite, workFlixRemote } from './constants';
import WorkBlock from './WorkBlock';
import './Work.css';

class Work extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    createWorkBlock(contentArray) {

        let workBlock = contentArray.map((x) =>
            <WorkBlock name={x.project}
                mockupImage={x.mockup} link={x.link}
                description={x.description}
                mockupImageText={x.altMockupText}
                role={x.role}
                key={x.project}
            >
            </WorkBlock>
        );
        return workBlock;


    }

    createScribblesBlock(textArray) {


    }

    render() {

        return (<div>
            <h2>Work</h2>
            <div>
                {this.createWorkBlock([workFlixRemote, workMRMWebsite, workEmergencyZone, workWorkForce])}
            </div>
            {/*
                <div id='scribbles'>
                    <h1>Other Scribbles</h1>

                </div>
                */}

        </div>);
    }

}


export default Work;