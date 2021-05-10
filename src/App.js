import React, { memo, createRef, useState } from 'react';


import { displayPictureLinkPhone, colorPalette } from './constants';
import Context from './Context';


import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Work from './Work/Work';
import ContactArea from './SideBar/ContactArea';
import Experience from './Exp/Experience';
import Myself from './Myself/Myself';

const App = memo(() => {




  const changeColorsTo = (theme) => {
    // console.log("change colors to");
    const properties = ['background', 'paraText', 'headerText', 'base', 'pressed', 'shade'];
    properties.forEach((x) => {
      document.documentElement.style.setProperty(`--${x}`, colorPalette[theme.toLowerCase()][x]);

    });

  }

  let preferredTheme = 'DARK';

  if (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'LIGHT') {
    preferredTheme = 'LIGHT';
  }

  const contentAreaDivRef = createRef();
  const sideBarRef = createRef();
  const sideBarBoxRef = createRef();
  const sideBarRefs = { sideBarRef, sideBarBoxRef };

  changeColorsTo(preferredTheme);


  const toggleThemeFunction = () => {


    if (document.body.classList.contains('preLoad')) {
      document.body.classList.remove('preLoad');
    }
    const newTheme = currentTheme === 'DARK' ? 'LIGHT' : 'DARK';
    changeTheme(newTheme);
    localStorage.setItem('themeSwitch', newTheme);
    changeColorsTo(newTheme);
  }


  const [sideBarCompressed, changeSideBarCompressed] = useState(false);

  const [contentAreaView, changeContentAreaView] = useState('main');

  const [currentTheme, changeTheme] = useState(preferredTheme);

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
    <Context.Provider value={{ theme: currentTheme, toggleTheme: toggleThemeFunction }}>
      <div className="App" >

        <Header navChangeFunction={changeContent} contentType={contentAreaView}></Header>
        <SideBar ref={sideBarRefs} displayPictureLink={displayPictureLinkPhone} aside={contentAreaView !== 'main'}></SideBar>
        <div className="ContentArea" ref={contentAreaDivRef}>
          {renderContentView(contentAreaView)}
        </div>
        {showBottomContactArea && <ContactArea></ContactArea>}

      </div >
    </Context.Provider>
  );


});
export default App;
