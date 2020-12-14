import React, { Component } from "react";
import "../styles/canvas.css";
import { Container, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import Buttons from "../components/Buttons";
import { updatePet } from "../actions/petActions";
import right1 from "../images/right1.png";
import StatusBars from "../components/StatusBars";

class DisplayCanvas extends Component {
  render() {
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
            <StatusBars pet={this.props.pet.pet} loading={this.props.pet.loading}/>
            <Buttons
              pet={this.props.pet.pet}
              updatePet={this.props.updatePet}
            />
          </Container>
        </motion.div>
      </div>
    );
  }
}

export default connect(({ pet }) => ({ pet }), { updatePet })(DisplayCanvas);
