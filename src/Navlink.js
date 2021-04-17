import React from 'react';
import cx from 'classnames';
import './Navlink.css';

class Navlink extends React.PureComponent {
  constructor(props) {
    super(props);
    this.changeMainPageContent = this.changeMainPageContent.bind(this);
    this.keyPressChangeMainContent = this.keyPressChangeMainContent.bind(this);

  }

  changeMainPageContent(e) {
    ////console.log("change main content");
    e.preventDefault();
    return this.props.navChangeFunction(this.props.linkAddress)
  }

  keyPressChangeMainContent(e) {
    ////console.log("key pressed");
    if (e.keyCode == '13' || e.keyCode == 32) {
      this.changeMainPageContent(e);
    }
  }

  render() {
    const isClicked = this.props.contentType == this.props.linkAddress ? true : false;
    ////console.log(this.props.linkAddress);
    ////console.log(this.props.contentType);
    return (
      <div className="Navlink">
        <div onClick={this.changeMainPageContent} onKeyDown={this.keyPressChangeMainContent}
          tabIndex="0" role="button"
          className={cx({
            clicked: isClicked
          })}
        >{this.props.linkText}</div>
      </div>
    );
  }
}

export default Navlink;