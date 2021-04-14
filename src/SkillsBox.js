import React from 'react';
import { abilities, abilitesNameMapping } from './constants';
import './SkillsBox.css';


class SkillsBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        //this.createSkillsBox = this.createSkillsBox.bind(this);

    }

    createAbilitiesBox(groupName) {


        let skillsIcon = [];

        for (let i = 0; i < abilities[groupName].length; i++) {

            let imageLink = process.env.PUBLIC_URL + '/images/icons/' + abilities[groupName][i].imageLink + '-icon.svg';
            skillsIcon.push(
                <li><a href={abilities[groupName][i].link} title={abilities[groupName][i].name}><img src={process.env.PUBLIC_URL + imageLink} alt={abilities[groupName][i].name}></img></a></li>
            );
        }

        let listCode = <ul>{skillsIcon}</ul>;
        let skillsListBox = <div><p>{abilitesNameMapping[groupName]} :</p>{listCode}</div>
        return skillsListBox;

    }
    createSkillsBox(skillsList) {

        if (skillsList != null) {

            let skillsIcon = [];
            for (let i = 0; i < skillsList.length; i++) {

                let imageLink = process.env.PUBLIC_URL + '/images/icons/' + skillsList[i].imageLink + '-icon.svg';
                skillsIcon.push(

                    <li><a rel="noopener noreferrer" target="_blank" href={skillsList[i].link} title={skillsList[i].name}><img src={process.env.PUBLIC_URL + imageLink} alt={skillsList[i].name}></img></a></li>

                );
            }

            let listCode = <ul>{skillsIcon}</ul>
            let skillsListBox = <div><p>Skills Used : </p>{listCode}</div>
            return skillsListBox;


        }
        else {
            return null;
        }

    }

    render() {
        let mainBox = <div className='SkillsBox'>
            {this.createSkillsBox(this.props.skillsList)}
        </div>;
        if (this.props.type == 'abilities') {
            mainBox = <div className='SkillsBox'>
                {this.createAbilitiesBox(this.props.groupName)}
            </div>;
        }
        return mainBox;
    }

}


export default SkillsBox;