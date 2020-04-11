import React from 'react';
import './TopBox.css';

function TitleBox(props) {
  return (
    <div className="TitleBox">
      <p>{props.text}</p>
    </div>
  );
}

export default TitleBox;