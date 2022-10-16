import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { images } = this.props;
    return (
      <>
        {images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <li className={css['gallery-item']} key={id}>
              <img src={webformatURL} alt={id} data-url={largeImageURL} />
            </li>
          );
        })}
      </>
    );
  }
}

export default ImageGalleryItem;
