import React from 'react';
import cx from 'classnames';

class Navlink extends React.Component{
  constructor(props){
    super(props);
    this.changeMainPageContent = this.changeMainPageContent.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.restoreHover = this.restoreHover.bind(this);
  }

  changeMainPageContent(e) {
    e.preventDefault();
    return this.props.navChangeFunction(this.props.linkAddress)
  }

  toggleHover(e){
    e.preventDefault();
    return this.props.changeDisplayPicture(this.props.linkAddress);
    //window.alert('boom');
  }

  restoreHover(e){
    e.preventDefault();
    return this.props.changeDisplayPicture(this.props.contentType);
  }

  render() {
    const isClicked = this.props.contentType == this.props.linkAddress ? true : false;
    return (
      <div className="Navlink">
          <a onClick={this.changeMainPageContent}
            /*TODO : some issue */
             onMouseOver={this.toggleHover} onMouseOut={this.restoreHover}     
            className={cx({
                clicked: isClicked
              })}
          >{this.props.linkText}</a>
      </div>
    );
  }
}

export default Navlink;