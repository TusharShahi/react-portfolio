import React, { memo, forwardRef, useLayoutEffect, useState, useEffect } from 'react';
import './Sidebar.css';
import ContactArea from './ContactArea';


const SideBar = memo(forwardRef((props, incomingRefs) => {

  // console.log("side bar function called");

  const [showContactArea, toggleContactArea] = useState(true);

  let displayPicture = null;

  useEffect(() => {
    displayPicture = new Image();
    displayPicture.src = process.env.PUBLIC_URL + displayPictureLink;


  }, []);

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      //console.log(window.innerWidth);
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
    <div className="SideBar" ref={incomingRefs.sideBarRef} {...roleAttribute}>
      <div className='SideBarBox' ref={incomingRefs.sideBarBoxRef}>

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
}));

export default SideBar;