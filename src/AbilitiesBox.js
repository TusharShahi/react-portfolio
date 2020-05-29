import React from 'react';
import AbilitiesGroup from './AbilitiesGroup';


class AbilitiesBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
           return(<div className='AbilitiesBox'>
                <h1>Abilities</h1>               
                <AbilitiesGroup groupName='web'></AbilitiesGroup>
                <AbilitiesGroup groupName='database'></AbilitiesGroup>
                <AbilitiesGroup groupName='tools'></AbilitiesGroup>
                <AbilitiesGroup groupName='core'></AbilitiesGroup>
                <AbilitiesGroup groupName='design'></AbilitiesGroup>
            </div>);
        }
        
}


export default AbilitiesBox;