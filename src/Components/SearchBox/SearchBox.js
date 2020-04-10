import React, { Component } from "react";
import "./SearchBox.scss";
class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.value) return;
    this.props.setCurrentUserList(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="gca-search_wrapper">
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          className="gca-search_form"
          autoComplete="off"
        >
          <div className="gca-search_form_label">
            <input
              className="gca-search_form_input"
              type="text"
              name="name"
              target="_blank"
              value={this.state.value}
              placeholder="Enter Github Username..."
              onChange={(e) => this.handleChange(e)}
            />
            <img
              src="./images/icons8-search.svg"
              className="gca-search_form_img_btn"
              alt="img"
              onClick={(e) => this.handleSubmit(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
