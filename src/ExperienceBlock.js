import React from 'react';
import SkillsBox from './SkillsBox';

class ExperienceBlock extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

           let skillsUsed = this.props.skillsUsed;
           
           let detailsBlock = <div>
               <h3><a href={this.props.link}>{this.props.name}</a></h3>
           <h5>{this.props.duration}</h5>
           <div className='DescriptionBox'>
               <p>{this.props.description}</p>
           </div>
           </div>;

           let experienceBlock = null;
            

           
           if(skillsUsed == null){
            experienceBlock = <div className='ExperienceBlock'>
                {detailsBlock}
            </div>
            } 
            else{
                experienceBlock = <div className='ExperienceBlock'>
                {detailsBlock}
                <SkillsBox skillsList={skillsUsed}></SkillsBox>     
                </div>
            }



           return(experienceBlock);
        }
        
}


export default ExperienceBlock;