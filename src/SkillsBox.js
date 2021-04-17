import React from 'react';
import { abilities, abilitesNameMapping } from './constants';
import './SkillsBox.css';


class SkillsBox extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
        //this.createSkillsBox = this.createSkillsBox.bind(this);

    }

    createAbilitiesBox(groupName) {


        let skillsIcon = abilities[groupName].map((x) =>
            <li key={x.name}><a rel="noopener noreferrer" target="_blank" href={x.link} title={x.name}><img src={process.env.PUBLIC_URL + '/images/icons/' + x.imageLink + '-icon.svg'} alt={x.name}></img></a></li>);


        let listCode = <ul>{skillsIcon}</ul>;
        let skillsListBox = <div><p>{abilitesNameMapping[groupName]} :</p>{listCode}</div>
        return skillsListBox;

    }
    createSkillsBox(skillsList) {

        if (skillsList != null) {

            let skillsIcon = skillsList.map((x) =>
                <li key={x.name}><a rel="noopener noreferrer" target="_blank" href={x.link} title={x.name}><img src={process.env.PUBLIC_URL + '/images/icons/' + x.imageLink + '-icon.svg'} alt={x.name}></img></a></li>);


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