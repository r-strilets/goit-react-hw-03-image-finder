import React, { Component } from 'react';

export class Modal extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <img src={this.props.img} alt="" />
        </div>
        <button type="button"></button>
      </div>
    );
  }
}

export default Modal;
