import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { openModal } = this.props;
    return (
      <>
        <ul className={css.gallery} onClick={e => openModal(e)}>
          <ImageGalleryItem images={this.props.images} />
        </ul>
      </>
    );
  }
}

export default ImageGallery;
