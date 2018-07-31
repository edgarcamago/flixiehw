import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange(e) {
    let newValue = e.target.value;
    this.setState({
      value: newValue
    });
    this.props.handleChange(newValue);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Movie Here"
          onChange={e => this.onChange(e)}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default SearchBar;
