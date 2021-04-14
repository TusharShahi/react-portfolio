import React from 'react';

import "typeface-raleway";
import 'typeface-bebas-neue';
import 'typeface-rubik';

import { displayPictureLink, colorPalette } from './constants';

import Context from './Context';

//let ThemeContext = React.createContext('LIGHT');

import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import ContentArea from './ContentArea';
import BottomContactArea from './BottomContactArea';

class App extends React.Component {


  constructor(props) {
    super(props);

    this.changeContent = this.changeContent.bind(this);
    this.changeDisplayPicture = this.changeDisplayPicture.bind(this);
    this.createNewDisplayPictureLink = this.createNewDisplayPictureLink.bind(this);
    this.changeAccordingtToResize = this.changeAccordingtToResize.bind(this);

    let preferredTheme = 'DARK';
    if (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'LIGHT') {
      preferredTheme = 'LIGHT';
      //  this.changeColorsTo(preferredtheme);
    }

    this.changeColorsTo(preferredTheme);

    this.toggleTheme = () => {
      if (document.body.classList.contains('preLoad')) {
        document.body.classList.remove('preLoad');
      }

      // ThemeContext = themeName;
      if (this.state.theme == 'DARK') {
        this.setState({ theme: 'LIGHT' });
        localStorage.setItem('themeSwitch', 'LIGHT');
        this.changeColorsTo('LIGHT');
      }
      else if (this.state.theme == 'LIGHT') {
        this.setState({ theme: 'DARK' });
        localStorage.setItem('themeSwitch', 'DARK');
        this.changeColorsTo('DARK');

      }

    }

    //TODO 
    //window.addEventListener('resize',this.changeAccordingtToResize);
    this.state = {
      sideBarCompressed: false,
      contentAreaView: 'main',
      displayPictureLink: displayPictureLink,
      theme: preferredTheme,
      toggleTheme: this.toggleTheme
    };


  }
  componentDidMount() {
    this.changeAccordingtToResize();
  }

  changeAccordingtToResize() {
    //window.alert("boo");
    if (window.innerWidth <= 768) {
      document.getElementsByClassName('SideBarBox')[0].getElementsByClassName('contactArea')[0].style.display = 'none';
      document.getElementsByClassName('bottomContactArea')[0].style.display = 'block';
    }
    else {
      document.getElementsByClassName('bottomContactArea')[0].style.display = 'none';
    }


  }


  changeColorsTo(theme) {
    console.log("change colors to " + theme);
    let newBackgroundColor;
    let newParaTextColor;
    let newHeaderTextColor;
    let newBaseColor;
    let newPressedColor;
    let newShadeColor;

    newBackgroundColor = colorPalette[theme.toLowerCase()].background;
    newParaTextColor = colorPalette[theme.toLowerCase()].text;
    newHeaderTextColor = colorPalette[theme.toLowerCase()].headers;
    newBaseColor = colorPalette[theme.toLowerCase()].base;
    newPressedColor = colorPalette[theme.toLowerCase()].pressed;
    newShadeColor = colorPalette[theme.toLowerCase()].shade;
    /*
    if (theme == 'LIGHT') {
      newBackgroundColor = colorPalette.light.background;
      newParaTextColor = colorPalette.light.text;
      newHeaderTextColor = colorPalette.light.headers;
      newBaseColor = colorPalette.light.base;
      newPressedColor = colorPalette.light.pressed;

    }
    else if (theme == 'DARK') {
      newBackgroundColor = colorPalette.dark.background;
      newParaTextColor = colorPalette.dark.text;
      newHeaderTextColor = colorPalette.dark.headers;
      newBaseColor = colorPalette.dark.base;
      newPressedColor = colorPalette.dark.pressed;

    }*/

    document.documentElement.style.setProperty('--background', newBackgroundColor);
    document.documentElement.style.setProperty('--paraText', newParaTextColor);
    document.documentElement.style.setProperty('--headerText', newHeaderTextColor);
    document.documentElement.style.setProperty('--base', newBaseColor);
    document.documentElement.style.setProperty('--pressed', newPressedColor);
    document.documentElement.style.setProperty('--shade', newShadeColor);



  }


  createNewDisplayPictureLink(newContent) {
    let previousLink = displayPictureLink
    let newLinkWordsArray = previousLink.split('-');
    newLinkWordsArray[1] = newContent;
    return newLinkWordsArray[0] + '-' + newLinkWordsArray[1] + '.png'
  }

  changeContent(newContent) {
    console.log(newContent);
    if (!this.state.sideBarCompressed) {
      //window.alert("I am called");
      if (window.innerWidth > 768) {

        document.getElementById('mainPageSideBar').classList.add('sideBarCompressed');
        document.getElementsByClassName('SideBarBox')[0].classList.add('sideBarBoxFullWidth');
        document.getElementsByClassName('ContentArea')[0].classList.add('showMainContent');

      }
      else {
        console.log(window.scrollTop);
        setTimeout(() => { window.scrollBy(0, (500 - document.body.scrollTop)); }, 200);
        document.getElementsByClassName('ContentArea')[0].classList.add('displayMainContent');
      }
      //document.getElementsByClassName('ContentArea')[0].style.display = 'block';


    }
    if (this.state.contentAreaView != newContent) {
      let newDisplayPictureLink = this.createNewDisplayPictureLink(newContent);
      this.setState({
        contentAreaView: newContent,
        displayPictureLink: newDisplayPictureLink
      });
    }
  }

  changeDisplayPicture(newContent) {
    //window.alert("I am calle too");
    //if(this.state.contentAreaView != newContent)
    //{
    let newDisplayPictureLink = this.createNewDisplayPictureLink(newContent);
    // window.alert('new Link is ' + newDisplayPictureLink);
    this.setState({
      displayPictureLink: newDisplayPictureLink
    });
  }

  //<Header theme={this.state.theme} onChangeTheme={this.changeTheme} navChangeFunction={this.changeContent} changeDisplayPicture={this.changeDisplayPicture} contentType={this.state.contentAreaView}></Header>

  render() {
    return (
      <Context.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        <div className="App" >

          <Header navChangeFunction={this.changeContent} changeDisplayPicture={this.changeDisplayPicture} contentType={this.state.contentAreaView}></Header>
          <SideBar displayPictureLink={this.state.displayPictureLink}></SideBar>
          <ContentArea content={this.state.contentAreaView}></ContentArea>
          <BottomContactArea></BottomContactArea>

        </div >
      </Context.Provider>
    );
  }

}

export default App;
