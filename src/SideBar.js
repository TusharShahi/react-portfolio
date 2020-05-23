import React from 'react';
import './Sidebar.css';
import SocialMediaLink from './SocialMediaLink';

class SideBar extends React.Component {

  constructor(props){
    super(props);

  }

  render()
  {
    //import displayPictureLink from this.props.displayPictureLink;
    //const displayPictureLink = require(this.props.displayPictureLink);
    return (
      <div className="SideBar" id="mainPageSideBar">
        <div className='SideBarBox'>

          <div id='welcomeArea'>
            <div id='displayPhotoArea'>
              <img src={require(`${this.props.displayPictureLink}`)} alt='Display Picture'></img>
            </div>

            <div id='textArea'>
            <h2>Hey! My name is  <span id='nameSpan'>Tushar Shahi</span>.</h2>
            <h2>I code for a living.</h2>
            </div>
          </div>
          <div id='contactArea'>


              <div id='socialMediaBox'>
                  <SocialMediaLink website='linkedin' link='https://www.instagram.com' shortHand='shahi_tushar'></SocialMediaLink>
                  <SocialMediaLink website='instagram' link='https://www.instagram.com' shortHand='shahi_tushar'></SocialMediaLink>
                  <SocialMediaLink website='github' link='https://www.instagram.com' shortHand='shahi_tushar'></SocialMediaLink>
                  
              </div>


              <div id='emailAndPhoneBox'>
                <p><a>shahi.tushar8@gmail.com</a></p>
                <p>+91-8860129729</p>
              </div>

              <div id='copyrightBox'>
                <p>	&copy; Tushar Shahi</p>
              </div>
          </div>



        </div>

      </div>
    );
  }
}
export default SideBar;