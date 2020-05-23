import React from 'react';
import {abilities} from './constants';
import './AbilitiesGroup.css';


class AbilitiesGroup extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    createSkillsBox(groupName){

        let skillsIcon = [];
        for(let i = 0 ; i < abilities[groupName].length; i++){

            let imageLink = './' + abilities[groupName][i].imageLink + '-icon.svg';
            skillsIcon.push(
                <li><img src={require(`${imageLink}`)} alt={abilities[groupName][i].name}></img></li>
            );    
        }

        let listCode = <ul>{skillsIcon}</ul>
        return listCode;
    }

    render(){

           return(<div className='AbilitiesGroup'>
            {this.createSkillsBox(this.props.groupName)}   
            </div>);
        }
        
}


export default AbilitiesGroup;