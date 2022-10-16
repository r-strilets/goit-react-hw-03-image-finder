import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import { fetchData } from 'api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    data: [],
    name: '',
    page: 1,
    isLoading: false,
    error: '',
    img: null,
  };

  componentDidUpdate(_, prevState) {
    const { name, page } = this.state;
    if (prevState.page !== page || prevState.name !== name) {
      this.setState({ isLoading: true });
      fetchData(name, page)
        .then(resp => resp.json())
        .then(newData =>
          this.setState(prevState => ({
            data:
              prevState.name !== name
                ? [...newData.hits]
                : [...prevState.data, ...newData.hits],
          }))
        )
        .catch(error => this.setState({ error: error.message }))
        .finally(() => {
          this.setState({
            isLoading: false,
          });
          if (this.state.data.length === 0) {
            this.setState({ error: 'nothing found' });
          }
        });
    }
  }

  newSearch = name => {
    if (name.trim().length === 0) {
      alert('Empty search field!!!');
      return;
    }
    this.setState({ data: [], name: name, page: 1 });
  };
  moreLoadButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = e => {
    const img = e.target.dataset.url;
    this.setState(prevState => ({ img }));
  };
  closeModal = () => {
    this.setState({ img: null });
  };

  render() {
    const { isLoading, img } = this.state;
    return (
      <>
        <Searchbar getNewName={this.newSearch} />
        {isLoading && <Loader />}
        {this.state.data.length > 0 ? (
          <ImageGallery images={this.state.data} openModal={this.openModal} />
        ) : (
          <h2 className="error">{this.state.error}</h2>
        )}
        {this.state.data.length >= 12 ? (
          <Button moreLoadButtonClick={this.moreLoadButtonClick} />
        ) : null}
        {img && <Modal img={img} closeModal={this.closeModal} />}
      </>
    );
  }
}
