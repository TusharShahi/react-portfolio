import React from 'react';

import "typeface-raleway";
import 'typeface-bebas-neue';
import 'typeface-rubik';

import { displayPictureLink, colorPalette } from './constants';

import Context from './Context';


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

    document.documentElement.style.setProperty('--background', colorPalette[theme.toLowerCase()].background);
    document.documentElement.style.setProperty('--paraText', colorPalette[theme.toLowerCase()].text);
    document.documentElement.style.setProperty('--headerText', colorPalette[theme.toLowerCase()].headers);
    document.documentElement.style.setProperty('--base', colorPalette[theme.toLowerCase()].base);
    document.documentElement.style.setProperty('--pressed', colorPalette[theme.toLowerCase()].pressed);
    document.documentElement.style.setProperty('--shade', colorPalette[theme.toLowerCase()].shade);



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


    }
    if (this.state.contentAreaView != newContent) {
      //let newDisplayPictureLink = this.createNewDisplayPictureLink(newContent);
      this.setState({
        contentAreaView: newContent
        //,
        // displayPictureLink: newDisplayPictureLink
      });
    }
  }

  changeDisplayPicture(newContent) {
    //TODO : Is this a needed feature
    //window.alert("I am calle too");
    //if(this.state.contentAreaView != newContent)
    //{
    // let newDisplayPictureLink = this.createNewDisplayPictureLink(newContent);
    // window.alert('new Link is ' + newDisplayPictureLink);
    // this.setState({
    //   displayPictureLink: newDisplayPictureLink
    // });
  }


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
