import React, { Component } from 'react';

export default class SearchIndex extends Component {
  constructor() {
    super()

    this.state = {
      query: 'react',
      results: []
    };
  }

  async componentDidMount() {
    const { query } = this.state;
    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
    const data = await response.json();

    this.setState({
      results: data.hits
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('updated!')
    const { query } = this.state;
    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
    const data = await response.json();

    if (prevState.query != query) {
      this.setState({
        results: data.hits
      });
    };
  }

  handleChange = (e) => this.setState({ query: e.target.value });

  render() {
    const {
      query,
      results
    } = this.state;

    return (
      <div className='search-index'>
        <div>
          <input
            onChange={this.handleChange}
            value={query}
          />
        </div>

        <ul>
          {results.map(result => <li>{result.title}</li>)}
        </ul>
      </div>
    )
  }
}