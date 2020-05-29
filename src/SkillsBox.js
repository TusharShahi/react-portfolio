import React from 'react';
import './SkillsBox.css';


class SkillsBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        //this.createSkillsBox = this.createSkillsBox.bind(this);

    }

    createSkillsBox(skillsList){
        if(skillsList!=null){
            
        let skillsIcon = [];
        for(let i = 0 ; i < skillsList.length; i++){

            let imageLink = './' + skillsList[i].imageLink + '-icon.svg';
            skillsIcon.push(
                <li><a href={skillsList[i].link} title={skillsList[i].name}><img src={require(`${imageLink}`)} alt={skillsList[i].name}></img></a></li>
            );    
        }

        let listCode = <ul>{skillsIcon}</ul>
        return listCode;
        }
        else{
            return null;
        }
    }  

    render(){

           return(<div className='SkillsBox'>
            {this.createSkillsBox(this.props.skillsList)}   
            </div>);
        }
        
}


export default SkillsBox;