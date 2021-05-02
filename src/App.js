import React, { memo, createRef, useState } from 'react';

import "typeface-raleway";
import 'typeface-bebas-neue';
import 'typeface-rubik';

import { displayPictureLinkPhone, colorPalette } from './constants';
import { isMobile } from 'react-device-detect';
import Context from './Context';


import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import ContentArea from './ContentArea';
import ContactArea from './ContactArea';

const App = memo(() => {

  console.log("run");


  const changeColorsTo = (theme) => {
    console.log("change colors to");
    document.documentElement.style.setProperty('--background', colorPalette[theme.toLowerCase()].background);
    document.documentElement.style.setProperty('--paraText', colorPalette[theme.toLowerCase()].paraText);
    document.documentElement.style.setProperty('--headerText', colorPalette[theme.toLowerCase()].headers);
    document.documentElement.style.setProperty('--base', colorPalette[theme.toLowerCase()].base);
    document.documentElement.style.setProperty('--pressed', colorPalette[theme.toLowerCase()].pressed);
    document.documentElement.style.setProperty('--shade', colorPalette[theme.toLowerCase()].shade);


  }

  let preferredTheme = 'DARK';

  if (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'LIGHT') {
    preferredTheme = 'LIGHT';
  }

  const contentAreaDivRef = createRef();
  const sideBarRef = createRef();

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
    console.log(newContent);
    if (!sideBarCompressed) {
      if (window.innerWidth > 768) {
        contentAreaDivRef.current.classList.add('showMainContent');
        sideBarRef.current.classList.add('sideBarCompressed');
        sideBarRef.current.getElementsByClassName('SideBarBox')[0].classList.add('sideBarBoxFullWidth');

      }
      else {
        setTimeout(() => { window.scrollBy(0, (500 - document.body.scrollTop)); }, 200);
        contentAreaDivRef.current.classList.add('displayMainContent');

      }

    }
    changeContentAreaView(newContent);
  }

  console.log("App rendered");
  return (
    <Context.Provider value={{ theme: currentTheme, toggleTheme: toggleThemeFunction }}>
      <div className="App" >

        <Header navChangeFunction={changeContent} contentType={contentAreaView}></Header>
        <SideBar ref={sideBarRef} displayPictureLink={displayPictureLinkPhone} aside={contentAreaView !== 'main'}></SideBar>
        <ContentArea ref={contentAreaDivRef} content={contentAreaView}></ContentArea>
        {showBottomContactArea && <ContactArea></ContactArea>}

      </div >
    </Context.Provider>
  );


});
export default App;
