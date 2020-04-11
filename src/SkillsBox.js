import React from 'react';
import './SkillsBox.css';


class SkillsBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        //this.createSkillsBox = this.createSkillsBox.bind(this);

    }

    createSkillsBox(skillsList){

        let skillsIcon = [];
        for(let i = 0 ; i < skillsList.length; i++){

            let imageLink = './' + skillsList[i].imageLink + '-icon.svg';
            skillsIcon.push(
                <li><img src={require(`${imageLink}`)} alt={skillsList[i].name}></img></li>
            );    
        }

        let listCode = <ul>{skillsIcon}</ul>
        return listCode;
    }

    render(){

           return(<div className='SkillsBox'>
            {this.createSkillsBox(this.props.skillsList)}   
            </div>);
        }
        
}


export default SkillsBox;