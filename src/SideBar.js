import React, { memo, useLayoutEffect, useState } from 'react';
import './Sidebar.css';
import ContactArea from './ContactArea';


const SideBar = memo((props) => {

  console.log("side bar function called");

  const [showContactArea, toggleContactArea] = useState(true);

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      console.log(window.innerWidth);
      toggleContactArea(window.innerWidth > 768);
    }
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    }
  });



  let roleAttribute = null;
  if (props.aside) {
    roleAttribute = { 'role': 'complementary' };
  }
  let displayPictureLink = props.displayPictureLink;
  let mainHeading = `Hey! I am Tushar.
  I like to code.`;

  return (
    <div className="SideBar" id="mainPageSideBar" {...roleAttribute}>
      <div className='SideBarBox'>

        <div id='welcomeArea'>
          <div id='displayPhotoArea'>
            <img src={process.env.PUBLIC_URL + displayPictureLink} alt='Display Picture'></img>
          </div>

          <div id='textArea'>
            <h1>{mainHeading}</h1>
          </div>
        </div>
        {showContactArea && <ContactArea></ContactArea>}



      </div>

    </div>
  );
});

export default SideBar;