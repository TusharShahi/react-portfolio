import React from 'react';
import Navbar from './Navbar';
import './Header.css'
import ModeSwitchToggler from './ModeSwitchToggler';

class Header extends React.Component {
  
  
  constructor(props){
    super(props);

  } 
  
  render()
  {
    return (
      <div className="Header">
          <ModeSwitchToggler mode={this.props.mode} changeMode={this.props.changeMode}></ModeSwitchToggler>
          <Navbar navChangeFunction={this.props.navChangeFunction} changeDisplayPicture={this.props.changeDisplayPicture} contentType={this.props.contentType}></Navbar>
      </div>
    );
  }
  
}
  
export default Header;