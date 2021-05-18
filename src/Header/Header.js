import React, { memo } from 'react';
import Navbar from './Navbar';
import ModeToggler from '../ModeToggler';
import './Header.css';


const Header = memo((props) => {


  return (
    <div className="Header">
      <ModeToggler></ModeToggler>
      <Navbar navChangeFunction={props.navChangeFunction} contentType={props.contentType}></Navbar>
    </div >
  );


});

Header.type.displayName = 'HEADER';
export default Header;