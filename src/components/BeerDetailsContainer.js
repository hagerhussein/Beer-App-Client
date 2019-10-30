import React from "react";
import { connect } from "react-redux";
import BeerDetails from "./BeerDetails";

class BeerDetailsContainer extends React.Component {
  
  goBackToPreviousPage = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <BeerDetails
          brewery={this.props.brewery}
          goBackToPreviousPage={this.goBackToPreviousPage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { brewery: state.brewery };
};

export default connect(mapStateToProps)(BeerDetailsContainer);
