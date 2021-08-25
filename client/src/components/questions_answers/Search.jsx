import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchPhrase: ''
    };

    this.searchInput = this.searchInput.bind(this);
  }

  searchInput (e) {
    this.setState({ searchPhrase: e.target.value });
    this.props.submitSearch(e.target.value.toLowerCase());
  }

  render () {
    return (
      <form className='Qsearch'>
      <input className='qaInput' id='searchbar' type='text' onChange={this.searchInput} placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'></input>
      </form>
    );
  };
}

export default Search;
