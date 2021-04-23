import React from 'react';
import cx from 'classnames';

class WorkBlock extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        //console.log("work block rendered");
        let hasLink = true;
        let h3Tag = <h3><a href={this.props.link}
            className={cx({
                projectHasLink: hasLink
            })} rel="noopener noreferrer" target="_blank">{this.props.name}</a></h3>
        if (this.props.link == '') {
            hasLink = false;
            h3Tag = <h3>{this.props.name}</h3>
        }


        let imageLink = this.props.mockupImage;

        return (<div className='WorkBlock'>

            {h3Tag}
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