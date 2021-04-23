import React from 'react';
import './Sidebar.css';
import ContactArea from './ContactArea';
import { mainHeading } from './constants';


class SideBar extends React.PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    //import displayPictureLink from this.props.displayPictureLink;
    //const displayPictureLink = require(this.props.displayPictureLink);
    let roleAttribute = null;
    if (this.props.aside) {
      roleAttribute = { 'role': 'complementary' };
    }
    let displayPictureLink = this.props.displayPictureLink;
    let x = `Hey! My Name is Tushar.
    I like to code.`;
    return (
      <div className="SideBar" id="mainPageSideBar" {...roleAttribute}>
        <div className='SideBarBox'>

          <div id='welcomeArea'>
            <div id='displayPhotoArea'>
              <img src={process.env.PUBLIC_URL + displayPictureLink} alt='Display Picture'></img>
            </div>

            <div id='textArea'>
              <h1>{x}</h1>
            </div>
          </div>
          <ContactArea></ContactArea>



        </div>

      </div>
    );
  }
}
export default SideBar;