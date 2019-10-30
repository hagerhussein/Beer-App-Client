import React from "react";
import { connect } from "react-redux";
import PostcodeSearch from "./PostcodeSearch";
import { getBrewery } from "../actions/breweries";

class PostcodeSearchContainer extends React.Component {
  state = {
    query: "",
    queryErrors: "",
    queryValid: false
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.queryErrors;
    let queryValid = this.state.queryValid;

    switch (fieldName) {
      case "query":
        queryValid = value.match(/^[1-9][0-9]{3}?(?!sa|sd|ss)[a-z]{2}$/i);
        fieldValidationErrors = queryValid ? "" : " is invalid";
        break;
      default:
        break;
    }
    this.setState(
      { queryErrors: fieldValidationErrors, queryValid: queryValid },
      this.validateForm()
    );
  }
  validateForm() {
    this.setState({ queryValid: this.state.queryValid });
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  onSubmit = event => {
    this.props.getBrewery(this.state);
    event.preventDefault();
    this.setState({
      query: ""
    });
  };

  render() {
    return (
      <PostcodeSearch
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        queryErrors={this.state.queryErrors}
        disabled={this.state.queryValid}
        brewery={this.props.brewery}
      />
    );
  }
}
const mapStateToProps = state => {
  return { brewery: state.brewery };
};
export default connect(
  mapStateToProps,
  { getBrewery }
)(PostcodeSearchContainer);
