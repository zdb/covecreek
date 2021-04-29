import React, { Component } from 'react';
import './popup.scss'

class Popup extends Component {
  render() {
    return (
      <div>
          <div className="popup">
            <div className="closeButton" onClick={this.props.closePopup}>
              <i className="fa fa-times"></i>
            </div>
            <div className="popup__content">
              {children}
            </div>
        </div>
      </div>
    );
  }
}

export default Popup;