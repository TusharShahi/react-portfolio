import React from 'react';
import ExperienceBlock from './ExperienceBlock';
import { experienceShell, experienceMRM, experienceRMO, experienceRMO2, experienceTCFG } from './constants';
import './Experience.css'

class Experience extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    createExperienceBlock(contentArray) {

        let experienceBlock = contentArray.map(x =>
            <ExperienceBlock name={x.company}
                description={x.description}
                duration={x.timePeriod}
                skillsUsed={x.skillsUsed}
                link={x.companyLink}
                role={x.role}
                key={x.timePeriod}
            ></ExperienceBlock>

        );

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