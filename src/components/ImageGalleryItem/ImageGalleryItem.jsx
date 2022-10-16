import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  onImageClick = () => {
    // this.props.show(this.props.images.largeImageURL);
  };
  render() {
    const { images } = this.props;
    return (
      <>
        {images.map(({ id, webformatURL }) => {
          return (
            <li
              className={css['gallery-item']}
              // onClick={this.onImageClick}
              key={id}
            >
              <img src={webformatURL} alt={id} />
            </li>
          );
        })}
      </>
    );
  }
}

export default ImageGalleryItem;
