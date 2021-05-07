import React from 'react';
import SkillsBox from '../Utils/SkillsBox';


const AbilitiesBox = () => {



    return (<div className='AbilitiesBox'>
        <h2>Abilities</h2>
        <SkillsBox groupName='web' type="abilities"></SkillsBox>
        <SkillsBox groupName='database' type="abilities"></SkillsBox>
        <SkillsBox groupName='tools' type="abilities"></SkillsBox>
        <SkillsBox groupName='core' type="abilities"></SkillsBox>
    </div>);

}


export default AbilitiesBox;