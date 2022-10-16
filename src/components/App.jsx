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
    isShown: false,
    error: '',
  };

  moreLoadButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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
        });
    }
  }

  newSearch = name => {
    if (name.trim().length === 0) {
      alert('Empty search field!!!');
      return;
    }
    this.setState({ data: [], name: name });
    console.log(this.state.name);
  };
  showImg = image => {
    if (!this.state.isShown) {
      this.setState(prevState => ({ isShown: !prevState.isShown }));
    }
  };

  render() {
    console.log(this.state);

    const { isLoading, isShown } = this.state;
    return (
      <>
        <Searchbar getNewName={this.newSearch} />
        {isLoading && <Loader />}
        {this.state.data.length > 0 && (
          <>
            <ImageGallery images={this.state.data} />
            <Button moreLoadButtonClick={this.moreLoadButtonClick} />
          </>
        )}
        {isShown && <Modal />}
      </>
    );
  }
}
