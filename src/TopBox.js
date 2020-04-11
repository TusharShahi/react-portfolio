import React from 'react';
import TitleBox from './TitleBox';

function TopBox(props){return(
    <div>
<TitleBox text={props.headerName}></TitleBox>
</div>
);
}

export default TopBox;