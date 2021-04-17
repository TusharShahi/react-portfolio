import React from 'react';
import ContactArea from './ContactArea';

class BottomContactArea extends React.PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="bottomContactArea">
        <ContactArea></ContactArea>
      </div>
    );
  }
}
export default BottomContactArea;