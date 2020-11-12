import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '',
                  clicked: false };
  }
  render() {
    const classes1 = `input-group search-bar`;
    const classes2 = `btn btn-secondary`;
    return (
      <div className={classes1}>
        <input
          type="text"
          className="form-control"
          placeholder="Search for..."
          aria-label="Search for..."
          value={this.state.term}
          onChange = {event => this.onInputChange(event.target.value)}
          onKeyDown = {event => this.onKeyDown(event)} />
          <span className="input-group-btn">
            <button className={classes2} onClick={event => this.onClickButton(this.state.term)} type="button">Search</button>
          </span>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
  }
  onKeyDown(event) {
    if (event.key === 'Enter') this.props.onSearchTermClick(event.target.value);
  }
  onClickButton(type) {
    this.props.onSearchTermClick(type);
  }
}

export default SearchBar;
