import React from 'react';
import Navbar from './Navbar';
import './Header.css'
import ModeSwitchToggler from './ModeSwitchToggler';

function Header(props) {
    return (
      <div className="Header">
          <ModeSwitchToggler mode={props.mode} changeMode={props.changeMode}></ModeSwitchToggler>
          <Navbar navChangeFunction={props.navChangeFunction} changeDisplayPicture={props.changeDisplayPicture} contentType={props.contentType}></Navbar>
      </div>
    );
  }
  
  
  export default Header;