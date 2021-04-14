import React from 'react';
import './AbilitiesGroup.css';


class AbilitiesGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    createSkillsBox(groupName) {


    }

    render() {

        return (<div className='AbilitiesGroup'>
            {this.createSkillsBox(this.props.groupName)}
        </div>);
    }

}


export default AbilitiesGroup;