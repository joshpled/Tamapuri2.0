import React, { Component } from "react";
import "../styles/canvas.css";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";
import { updatePet } from "../actions/petActions";
import Buttons from "../components/Buttons";
import StatusBars from "../components/StatusBars";
import Sprite from "../components/Sprite";
import LoadingBar from "../components/LoadingBar";
import NameStatusBar from '../components/NameStatusBar'
// import Menu from '../components/Menu'

class DisplayCanvas extends Component {
  render() {
    if (Object.keys(this.props.pet.pet).length !== 0) {
      return (
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
                duration: 4,
              },
            }}
          >
            <Container id="canvasSetting">
            <div style={{height: '10px'}} />
              <NameStatusBar pet={this.props.pet.pet}/>
              <div style={{height: '60px'}} />
              <Sprite />
              <StatusBars
                pet={this.props.pet.pet}
                loading={this.props.pet.loading}
              />
              <Buttons
                pet={this.props.pet.pet}
                updatePet={this.props.updatePet}
              />
            </Container>
          </motion.div>
        </div>
      );
    } else if (
      Object.keys(this.props.pet.pet).length === 0 &&
      this.props.pet.loading === false
    ) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <LoadingBar />
        </div>
      );
    }
  }
}

export default connect(({ pet }) => ({ pet }), { updatePet })(DisplayCanvas);
