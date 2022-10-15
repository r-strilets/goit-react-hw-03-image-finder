import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import { fetchData } from 'api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

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
      isLoading: true,
    }));
    fetchData(this.state.name, this.state.page)
      .then(resp => resp.json())
      .then(newData =>
        this.setState(prevState => ({
          data: [...prevState.data, ...newData.hits],
          page: prevState.page + 1,
        }))
      )
      .catch(error => this.setState({ error: error.message }))
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  newSearch = async name => {
    if (name.trim().length === 0) {
      alert('Empty search field!!!');
      return;
    }

    this.setState({ page: 1, isLoading: true });
    fetchData(name, this.state.page)
      .then(resp => resp.json())
      .then(newData =>
        this.setState(prevState => ({
          data: [...newData.hits],
          name: name,
          page: prevState.page + 1,
        }))
      )
      .catch(error => this.setState({ error: error.message }))
      .finally(
        this.setState(() => {
          this.setState({
            isLoading: false,
          });
        })
      );
  };

  render() {
    console.log(this.state.data);
    const { isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.newSearch} />
        {isLoading && <Loader />}
        {this.state.data.length > 0 && (
          <>
            <ImageGallery images={this.state.data} />
            {/* {isLoading && <Loader />} */}
            <Button moreLoadButtonClick={this.moreLoadButtonClick} />
          </>
        )}
      </>
    );
  }
}
