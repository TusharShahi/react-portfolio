import React from 'react';
import Navlink from './Navlink';
import './Navbar.css';


function Navbar(props) {
    return (
      <div className="Navbar">
          <Navlink linkAddress='experience' linkText='Exp' navChangeFunction={props.navChangeFunction} changeDisplayPicture={props.changeDisplayPicture} contentType={props.contentType}></Navlink>
          <Navlink linkAddress='work' linkText='Work' navChangeFunction={props.navChangeFunction} changeDisplayPicture={props.changeDisplayPicture} contentType={props.contentType}></Navlink>
          <Navlink linkAddress='else' linkText='Else' navChangeFunction={props.navChangeFunction} changeDisplayPicture={props.changeDisplayPicture} contentType={props.contentType}></Navlink>
      </div>
    );
  }
  
export default Navbar;