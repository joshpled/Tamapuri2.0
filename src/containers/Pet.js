import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewPet } from "../actions/petActions";
import NewPetForm from "../components/NewPetForm";


class Pet extends Component {
  render() {
    const { createNewPet } = this.props;
    return (
      <div>
          <NewPetForm createNewPet={createNewPet} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pet: state.pet,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { createNewPet })(Pet);
