import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import {createNewPet} from '../actions/petActions'
import PetName from "../components/PetName";
import NewPetForm from "../components/NewPetForm";

class Pet extends Component {
  render() {
    const { pet, createNewPet } = this.props;
    if (Object.keys(pet.pet).length > 0)
    return (
      <div>
        <Container style={{maxWidth: '540px'}}>
          <PetName props={pet} />
        </Container>
      </div>
    );
    else {
      return (
        <div>
          <Container style={{maxWidth: '540px'}}>
            <NewPetForm createNewPet={createNewPet}/>
          </Container>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    pet: state.pet,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { createNewPet })(Pet);
