import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import css from './Searchbar.module.css';
class Searchbar extends Component {
  state = {
    name: '',
  };
  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  getDataFromInput = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
  };
  render() {
    return (
      <header className="searchbar">
        <form className={css.form} onSubmit={this.getDataFromInput}>
          <button type="submit" className={css.button}>
            <span className="button-label">
              <ImSearch />
            </span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="name"
            value={this.state.name}
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
