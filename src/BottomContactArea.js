import React from 'react';
import ContactArea from './ContactArea';

class BottomContactArea extends React.Component {

  constructor(props){
    super(props);

  }

  render()
  {
    //import displayPictureLink from this.props.displayPictureLink;
    //const displayPictureLink = require(this.props.displayPictureLink);
    return (
      <div className="bottomContactArea">
          <ContactArea></ContactArea>
        </div>
    );
  }
}
export default BottomContactArea;