import React, { Component } from "react";
import "../styles/canvas.css";
import { Container, Image, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import Buttons from "../components/Buttons";
import { updatePet } from "../actions/petActions";
import right1 from "../images/right1.png";
import StatusBars from "../components/StatusBars";
import { Redirect } from "react-router-dom";

class DisplayCanvas extends Component {
  render() {
    if (Object.keys(this.props.pet.pet).length != 0) {
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
              <h1>{this.props.pet.pet.name}</h1>
              <center>
                <Image src={right1} className="img-responsive" rounded />
              </center>
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
      return <div>{setTimeout(<Spinner animation="border" />, 5000)}</div>;
    }
  }
}

export default connect(({ pet }) => ({ pet }), { updatePet })(DisplayCanvas);
