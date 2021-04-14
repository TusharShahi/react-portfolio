import React from 'react';
import './Sidebar.css';
import ContactArea from './ContactArea';

class SideBar extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    //import displayPictureLink from this.props.displayPictureLink;
    //const displayPictureLink = require(this.props.displayPictureLink);
    return (
      <div className="SideBar" id="mainPageSideBar">
        <div className='SideBarBox'>

          <div id='welcomeArea'>
            <div id='displayPhotoArea'>
              <img src={process.env.PUBLIC_URL + this.props.displayPictureLink} alt='Display Picture'></img>
            </div>

            <div id='textArea'>
              <h1>Hey! My name is  <span id='nameSpan'>Tushar Shahi</span>.</h1>
              <h1>I code for a living.</h1>
            </div>
          </div>
          <ContactArea></ContactArea>



        </div>

      </div>
    );
  }
}
export default SideBar;