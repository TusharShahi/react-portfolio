import React, { memo } from 'react';
import cx from 'classnames';
import './Navlink.css';

const Navlink = memo((props) => {

  const changeMainPageContent = (e) => {
    ////console.log("change main content");
    e.preventDefault();
    return props.navChangeFunction(props.linkAddress)
  }

  const keyPressChangeMainContent = (e) => {
    ////console.log("key pressed");
    if (e.keyCode == '13' || e.keyCode == 32) {
      changeMainPageContent(e);
    }
  }

  const isClicked = props.contentType == props.linkAddress ? true : false;
  ////console.log(props.linkAddress);
  ////console.log(props.contentType);
  return (
    <div className="Navlink">
      <div onClick={changeMainPageContent} onKeyDown={keyPressChangeMainContent}
        tabIndex="0" role="button"
        className={cx({
          clicked: isClicked
        })}
      >{props.linkText}</div>
    </div>
  );
});

export default Navlink;