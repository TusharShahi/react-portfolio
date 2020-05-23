import React from 'react';
import AbilitiesGroup from './AbilitiesGroup';


class AbilitiesBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
           return(<div className='AbilitiesBox'>
                <h2>Abilities</h2>               
                <AbilitiesGroup groupName='web'></AbilitiesGroup>
                <AbilitiesGroup groupName='database'></AbilitiesGroup>
                <AbilitiesGroup groupName='tools'></AbilitiesGroup>
                <AbilitiesGroup groupName='core'></AbilitiesGroup>
            </div>);
        }
        
}


export default AbilitiesBox;