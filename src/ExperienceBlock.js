import React from 'react';
import SkillsBox from './SkillsBox';

class ExperienceBlock extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let skillsUsed = this.props.skillsUsed;
        let jobRole = null;
        let detailsBlock = <div>
            <h3><a href={this.props.link} rel="noopener noreferrer" target="_blank">{this.props.name}</a></h3>
            <h4>{this.props.duration}</h4>
            <div className='DescriptionBox'>
                <p>{this.props.description}</p>
            </div>
        </div>;
        if (this.props.role != null) {
            detailsBlock = <div>
                <h3><a href={this.props.link} rel="noopener noreferrer" target="_blank">{this.props.role}</a></h3>
                <h4>{this.props.name} / {this.props.duration}</h4>
                <div className='DescriptionBox'>
                    <p>{this.props.description}</p>
                </div>
            </div>;
        }




        let experienceBlock = null;
        let skillsBlock = null;


        if (skillsUsed == null) {
        }
        else {
            skillsBlock = <SkillsBox skillsList={skillsUsed}></SkillsBox>
        }


        experienceBlock = <div className='ExperienceBlock'>

            {detailsBlock}
            {skillsBlock}
        </div>

        return (experienceBlock);
    }

}


export default ExperienceBlock;