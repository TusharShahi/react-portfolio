import React from 'react';
import Context from './Context';
import { abilities, abilitesNameMapping } from './constants';
import './SkillsBox.css';


class SkillsBox extends React.PureComponent {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {};

        //this.createSkillsBox = this.createSkillsBox.bind(this);

    }

    createAbilitiesBox(groupName) {


        let skillsIcon = abilities[groupName].map((x) =>
            <li key={x.name}><a className={x.color + ' ' + this.context.theme} rel="noopener noreferrer" target="_blank" href={x.link}>{x.name}</a></li>);


        let listCode = <ul>{skillsIcon}</ul>;
        let skillsListBox = <div><p>{abilitesNameMapping[groupName]} :</p>{listCode}</div>
        return skillsListBox;

    }
    createSkillsBox(skillsList) {

        if (skillsList != null) {

            let skillsIcon = skillsList.map((x) =>
                <li key={x.name}><a className={x.color + ' ' + this.context.theme} rel="noopener noreferrer" target="_blank" href={x.link}>{x.name}</a></li>);


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