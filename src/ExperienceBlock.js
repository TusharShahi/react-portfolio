import React from 'react';
import SkillsBox from './SkillsBox';

class ExperienceBlock extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

           let skillsUsed = this.props.skillsUsed;
           if(skillsUsed == null){
               skillsUsed = [];
           } 

           return(<div className='ExperienceBlock'>
                <h3>{this.props.name}</h3>
                <h5>{this.props.duration}</h5>
                <div className='DescriptionBox'>
                    <p>{this.props.description}</p>
                </div>
                <SkillsBox skillsList={skillsUsed}></SkillsBox>
            </div>);
        }
        
}


export default ExperienceBlock;