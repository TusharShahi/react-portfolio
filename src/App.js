import React from 'react';

import "typeface-raleway";
import 'typeface-bebas-neue';
import 'typeface-rubik';

import {displayPictureLink, colorPalette} from './constants';

import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import ContentArea from './ContentArea';


class App extends React.Component {
  

  constructor(props){
  super(props);
    this.changeContent = this.changeContent.bind(this);
    this.changeDisplayPicture = this.changeDisplayPicture.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.createNewDisplayPictureLink = this.createNewDisplayPictureLink.bind(this);

    let preferredMode = 'dark';
    if(localStorage.getItem('modeSwitch') !== null && localStorage.getItem('modeSwitch') === 'light'){
      preferredMode = 'light';
      this.changeColorsTo(preferredMode);
    }
    
    this.state = {
      sideBarCompressed : false, 
      contentAreaView : 'main',
      displayPictureLink : displayPictureLink,
      mode : preferredMode
    };
  }
  
  changeColorsTo(mode){

    let newBackgroundColor;
    let newParaTextColor;
    let newHeaderTextColor;

    if(mode == 'light'){
      newBackgroundColor = colorPalette.light.background;
      newParaTextColor = colorPalette.light.text;
      newHeaderTextColor = colorPalette.light.headers;
    }
    else if (mode == 'dark'){
      newBackgroundColor = colorPalette.dark.background;
      newParaTextColor = colorPalette.dark.text;
      newHeaderTextColor = colorPalette.dark.headers;

    }
    document.documentElement.style.setProperty('--background', newBackgroundColor);
    document.documentElement.style.setProperty('--paraText', newParaTextColor);
    document.documentElement.style.setProperty('--headerText',newHeaderTextColor);

  }

  changeMode(modeName){
      
    if(document.body.classList.contains('preLoad'))
    {
      document.body.classList.remove('preLoad'); 
    }


    if(modeName == 'dark'){
      this.setState({mode :'light'});
      localStorage.setItem('modeSwitch', 'light');
      this.changeColorsTo('light');
    }
    else if (modeName == 'light'){
      this.setState({mode :'dark'});
      localStorage.setItem('modeSwitch', 'dark');
      this.changeColorsTo('dark');
    
    }

  }

  createNewDisplayPictureLink(newContent)
  {
    let previousLink = displayPictureLink 
    let newLinkWordsArray = previousLink.split('-');
    newLinkWordsArray[1] = newContent;
    return newLinkWordsArray[0] + '-' + newLinkWordsArray[1] +'.png'
  }

  changeContent(newContent){
    if(!this.state.sideBarCompressed){
      //window.alert("I am called");
      document.getElementById('mainPageSideBar').classList.add('sideBarCompressed');
      document.getElementsByClassName('SideBarBox')[0].classList.add('sideBarBoxFullWidth');
      document.getElementsByClassName('ContentArea')[0].classList.add('showMainContent');
      //document.getElementsByClassName('ContentArea')[0].style.display = 'block';

      
    }
    if(this.state.contentAreaView != newContent){
      let newDisplayPictureLink = this.createNewDisplayPictureLink(newContent);
      this.setState({
        contentAreaView : newContent,
        displayPictureLink : newDisplayPictureLink
      });  
    }
  }

  changeDisplayPicture(newContent){
    //window.alert("I am calle too");
    //if(this.state.contentAreaView != newContent)
    //{
      let newDisplayPictureLink = this.createNewDisplayPictureLink(newContent);
     // window.alert('new Link is ' + newDisplayPictureLink);
      this.setState({
        displayPictureLink: newDisplayPictureLink
      });      
    //}
    //else {
      //window.alert('called not to change');
    //}
  }


  render(){
  return (
    <div className="App">
      <Header mode={this.state.mode} changeMode={this.changeMode} navChangeFunction={this.changeContent} changeDisplayPicture={this.changeDisplayPicture} contentType={this.state.contentAreaView}></Header>
      <SideBar displayPictureLink = {this.state.displayPictureLink}></SideBar>
      <ContentArea content={this.state.contentAreaView}></ContentArea>
    </div>
  );
}

}

export default App;
