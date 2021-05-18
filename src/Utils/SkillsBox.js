import React, { useContext, memo } from 'react';
import { Context } from '../Context';
import { abilities, abilitesNameMapping } from '../constants';
import './SkillsBox.css';


const SkillsBox = memo((props) => {
    const { theme, toggleTheme } = useContext(Context);


    const createSkillsBox = (skillsList, type, groupName) => {

        let iterationList = skillsList;
        let listTitle = "Skills Used : ";

        if (type == 'abilities') {
            iterationList = abilities[groupName];
            listTitle = `${abilitesNameMapping[groupName]} :`;
        }

        if (iterationList != null) {

            let skillsIcon = iterationList.map((x) =>
                <li key={x.name}><a className={x.color + ' ' + theme} rel="noopener noreferrer" target="_blank" href={x.link}>{x.name}</a></li>);


            let listCode = <ul>{skillsIcon}</ul>;
            let skillsListBox = <div><p>{listTitle}</p>{listCode}</div>
            return skillsListBox;
        }
        else {
            return null;
        }

    }

    let mainBox = <div className='SkillsBox'>
        {createSkillsBox(props.skillsList, props.type, props.groupName)}
    </div>;
    return mainBox;

});
SkillsBox.type.displayName = 'SKILLS BOX';
export default SkillsBox;