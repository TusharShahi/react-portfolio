import React, { memo } from 'react';
import cx from 'classnames';

const WorkBlock = memo((props) => {




    //console.log("work block rendered");
    let hasLink = true;
    let h3Tag = <h3><a href={props.link}
        className={cx({
            projectHasLink: hasLink
        })} rel="noopener noreferrer" target="_blank">{props.name}</a></h3>
    if (props.link == '') {
        hasLink = false;
        h3Tag = <h3>{props.name}</h3>
    }


    let imageLink = props.mockupImage;

    return (<div className='WorkBlock'>

        {h3Tag}
        <div className='WorkScreenShotsBox'>
            <img src={process.env.PUBLIC_URL + imageLink} alt={props.mockupImageText}></img>
        </div>
        <div className='WorkDescription'>
            <p>{props.description}</p>
        </div>
    </div>);
});


export default WorkBlock;