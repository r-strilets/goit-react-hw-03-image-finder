import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className={css.gallery}>
          <ImageGalleryItem images={this.props.images} />
        </ul>
      </>
    );
  }
}

export default ImageGallery;
