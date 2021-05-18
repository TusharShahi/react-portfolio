import React, { memo } from 'react';
import Navlink from './Navlink';
import './Navbar.css';


const Navbar = memo((props) => {

  return (
    <div className="Navbar">
      <Navlink linkAddress='experience' linkText='Exp' navChangeFunction={props.navChangeFunction} contentType={props.contentType}></Navlink>
      <Navlink linkAddress='work' linkText='Work' navChangeFunction={props.navChangeFunction} contentType={props.contentType}></Navlink>
      <Navlink linkAddress='else' linkText='Else' navChangeFunction={props.navChangeFunction} contentType={props.contentType}></Navlink>
    </div>
  );

});

Navbar.type.displayName = 'NAVBAR';
export default Navbar;