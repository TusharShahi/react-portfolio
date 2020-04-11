import React from 'react';
import Navlink from './Navlink';
import './Navbar.css';


class Navbar extends React.Component{
  
  
  constructor(props){
    super(props);
  } 
  
  render(){
    return (
      <div className="Navbar">
          <Navlink linkAddress='experience' linkText='Exp' navChangeFunction={this.props.navChangeFunction} changeDisplayPicture={this.props.changeDisplayPicture} contentType={this.props.contentType}></Navlink>
          <Navlink linkAddress='work' linkText='Work' navChangeFunction={this.props.navChangeFunction} changeDisplayPicture={this.props.changeDisplayPicture} contentType={this.props.contentType}></Navlink>
          <Navlink linkAddress='else' linkText='Else' navChangeFunction={this.props.navChangeFunction} changeDisplayPicture={this.props.changeDisplayPicture} contentType={this.props.contentType}></Navlink>
      </div>
    );
  }
  
}
export default Navbar;