import React, { memo, createRef, useState } from 'react';


import { displayPictureLinkPhone } from './constants';

import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Work from './Work/Work';
import ContactArea from './SideBar/ContactArea';
import Experience from './Exp/Experience';
import Myself from './Myself/Myself';


const App = memo(() => {







  const contentAreaDivRef = createRef();
  const sideBarRef = createRef();
  const sideBarBoxRef = createRef();
  const sideBarRefs = { sideBarRef, sideBarBoxRef };






  const [sideBarCompressed, changeSideBarCompressed] = useState(false);

  const [contentAreaView, changeContentAreaView] = useState('main');


  const [showBottomContactArea, changeBottomContactAreaVisibility] = useState(window.innerWidth < 768);









  const changeContent = (newContent) => {
    //console.log(newContent);
    if (!sideBarCompressed) {
      if (window.innerWidth > 768) {
        contentAreaDivRef.current.classList.add('showMainContent');
        sideBarRef.current.classList.add('sideBarCompressed');
        sideBarBoxRef.current.classList.add('sideBarBoxFullWidth');

      }
      else {
        setTimeout(() => { window.scrollBy(0, (500 - document.body.scrollTop)); }, 200);
        contentAreaDivRef.current.classList.add('displayMainContent');

      }

    }
    changeContentAreaView(newContent);
  }

  const renderContentView = (view) => {
    switch (view) {
      case 'experience': return <Experience></Experience>;
      case 'work': return <Work></Work>;
      case 'else': return <Myself></Myself>;
      default: return null;
    }
  }

  //console.log("App rendered");
  return (
    <div className="App" >

      <Header navChangeFunction={changeContent} contentType={contentAreaView}></Header>
      <SideBar ref={sideBarRefs} displayPictureLink={displayPictureLinkPhone} aside={contentAreaView !== 'main'}></SideBar>
      <div className="ContentArea" ref={contentAreaDivRef}>
        {renderContentView(contentAreaView)}
      </div>
      {showBottomContactArea && <ContactArea></ContactArea>}

    </div >
  );


});
App.type.displayName = 'APP';
export default App;
