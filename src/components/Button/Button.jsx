import React, { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.moreLoadButtonClick}
        className={css['loadMore-btn']}
      >
        Load More
      </button>
    );
  }
}

export default Button;
