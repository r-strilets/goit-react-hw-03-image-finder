import React, { Component } from 'react';
import css from './Loader.module.css';
export class Loader extends Component {
  render() {
    return (
      <div className={css['lds-ring']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;
