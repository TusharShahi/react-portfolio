import React from 'react';
import WorkScreenShotsBox from './WorkScreenShotsBox';
import cx from 'classnames';

class WorkBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let hasLink = true;
        if (this.props.link == '') {
            hasLink = false;
        }


        let imageLink = this.props.mockupImage;

        return (<div className='WorkBlock'>

            <h3><a href={this.props.link}
                className={cx({
                    projectHasLink: hasLink
                })} rel="noopener noreferrer" target="_blank">{this.props.name}</a></h3>
            <div className='WorkScreenShotsBox'>
                <img src={process.env.PUBLIC_URL + imageLink} alt={this.props.mockupImageText}></img>
            </div>
            <div className='WorkDescription'>
                <p>{this.props.description}</p>
            </div>
        </div>);
    }
}

export default WorkBlock;