import React from 'react';
import WorkScreenShotsBox from './WorkScreenShotsBox';

class WorkBlock extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

           return(<div className='WorkBlock'>
                <h3>{this.props.name}</h3>
                <WorkScreenShotsBox></WorkScreenShotsBox>
            </div>);
        }
}

export default WorkBlock;