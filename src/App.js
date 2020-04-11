import React from 'react';

import "typeface-raleway";
import 'typeface-bebas-neue';
import 'typeface-rubik';

import {displayPictureLink, colorPalette} from './constants';

import './App.css';
import Box from './Box';
import TopBox from './TopBox';
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

    this.state = {
      contentAreaView : 'experience',
      displayPictureLink : displayPictureLink,
      mode : 'dark',
//      preLoadClass : true,
    };
  }
  
  changeMode(modeName){
      
      document.body.classList.remove('preLoad'); 

    let newBackgroundColor;
    let newParaTextColor;
    let newHeaderTextColor;

    if(modeName == 'dark'){
      this.setState({mode :'light'});
      newBackgroundColor = colorPalette.light.background;
      newParaTextColor = colorPalette.light.text;
      newHeaderTextColor = colorPalette.light.headers;
    }
    else if (modeName == 'light'){
      
      document.documentElement.style.setProperty('--background', colorPalette.dark.background);
      this.setState({mode :'dark'});
      newBackgroundColor = colorPalette.dark.background;
      newParaTextColor = colorPalette.dark.text;
      newHeaderTextColor = colorPalette.dark.headers;

    }

    document.documentElement.style.setProperty('--background', newBackgroundColor);
    document.documentElement.style.setProperty('--paraText', newParaTextColor);
    document.documentElement.style.setProperty('--headerText',newHeaderTextColor);


  }

  createNewDisplayPictureLink(newContent)
  {
    let previousLink = displayPictureLink 
    let newLinkWordsArray = previousLink.split('-');
    newLinkWordsArray[1] = newContent;
    return newLinkWordsArray[0] + '-' + newLinkWordsArray[1] +'.png'
  }

  changeContent(newContent){
    if(this.state.contentAreaView != newContent){
      let newDisplayPictureLink = this.createNewDisplayPictureLink(newContent);
      this.setState({
        contentAreaView : newContent,
        displayPictureLink : newDisplayPictureLink
      });  
    }
  }

  changeDisplayPicture(newContent){

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
      <Header mode ={this.state.mode} changeMode={this.changeMode} navChangeFunction={this.changeContent} changeDisplayPicture={this.changeDisplayPicture} contentType={this.state.contentAreaView}></Header>
      <SideBar displayPictureLink = {this.state.displayPictureLink}></SideBar>
      <ContentArea content={this.state.contentAreaView}></ContentArea>
    </div>
  );
}

}

export default App;
