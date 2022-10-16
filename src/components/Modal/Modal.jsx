import React, { Component } from 'react';

export class Modal extends Component {
  render() {
    // const { largeImageURL } = this.props.show;
    return (
      <div className="overlay">
        <div className="modal">
          <img src="" alt="" />
        </div>
        <button type="button"></button>
      </div>
    );
  }
}

export default Modal;
