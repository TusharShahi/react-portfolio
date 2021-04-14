import React from 'react';
import SkillsBox from './SkillsBox';


class AbilitiesBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (<div className='AbilitiesBox'>
            <h1>Abilities</h1>
            <SkillsBox groupName='web' type="abilities"></SkillsBox>
            <SkillsBox groupName='database' type="abilities"></SkillsBox>
            <SkillsBox groupName='tools' type="abilities"></SkillsBox>
            <SkillsBox groupName='core' type="abilities"></SkillsBox>
            {/*<SkillsBox groupName='design' type="abilities"></SkillsBox>*/}
        </div>);
    }

}


export default AbilitiesBox;