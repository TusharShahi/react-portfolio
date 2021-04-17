import React from 'react';
import Navbar from './Navbar';
import ModeToggler from './ModeToggler';
import './Header.css';


class Header extends React.PureComponent {


  constructor(props) {
    super(props);

  }

  componentDidUpdate(prevProps) {
  }





  render() {

    return (
      <div className="Header">
        <ModeToggler></ModeToggler>
        <Navbar navChangeFunction={this.props.navChangeFunction} changeDisplayPicture={this.props.changeDisplayPicture} contentType={this.props.contentType}></Navbar>
      </div >
    );
  }

}

export default Header;