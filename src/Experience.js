import React from 'react';
import ExperienceBlock from './ExperienceBlock';
import { experienceShell, experienceMRM, experienceRMO, experienceRMO2, experienceTCFG } from './constants';
import './Experience.css'

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    createExperienceBlock(contentArray) {

        let experienceBlock = [];
        for (let i = 0; i < contentArray.length; i++) {
            experienceBlock.push(<ExperienceBlock name={contentArray[i].company}
                description={contentArray[i].description}
                duration={contentArray[i].timePeriod}
                skillsUsed={contentArray[i].skillsUsed}
                link={contentArray[i].companyLink}
                role={contentArray[i].role}
            >
            </ExperienceBlock>)
        }
        return experienceBlock;
    }


    render() {
        return (<div>
            <h2>Experience</h2>
            <div id='corporate'>
                {this.createExperienceBlock([experienceShell, experienceRMO, experienceRMO2])}
            </div>
            <div id='school'>
                <h2>College</h2>
                <div>

                </div>
                <div>
                    {this.createExperienceBlock([experienceMRM, experienceTCFG])}
                </div>
            </div>
        </div>);
    }

}

export default Experience;