import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { createNewPet } from "../actions/petActions";
import NewPetForm from "../components/NewPetForm";
import { motion } from "framer-motion";
import Logo from '../images/Logo.png'

class Pet extends Component {
  render() {
    const { createNewPet } = this.props;
    return (
      <div>
        <Container style={{ maxWidth: "540px" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ default: { duration: 1 } }}
          >
            <center><img alt='logo' className="img-fluid" src={Logo} style={{margin: '10px 0 0 0', alignContent: 'bottom'}}></img></center>
          </motion.div>
          <NewPetForm createNewPet={createNewPet} />
        </Container>
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
