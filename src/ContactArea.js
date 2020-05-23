import React from 'react';
import './ContactArea.css';
import SocialMediaLink from './SocialMediaLink';


class ContactArea extends React.Component {

  constructor(props){
    super(props);

  }

  render()
  {
    return (

        <div className='contactArea'>


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
      );
  }
}
export default ContactArea;
