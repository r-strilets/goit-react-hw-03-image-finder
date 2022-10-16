import React, { Component } from 'react';
import css from './Modal.module.css';
import { SlClose } from 'react-icons/sl';

export class Modal extends Component {
  closeByEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEscape);
  }
  render() {
    return (
      <div className={css.overlay} onClick={this.closeByBackdrop}>
        <div className={css.modal}>
          <img src={this.props.img} alt="" />
        </div>
        <button
          type="button"
          className={css.button}
          onClick={this.props.closeModal}
        >
          <SlClose />
        </button>
      </div>
    );
  }
}

export default Modal;
