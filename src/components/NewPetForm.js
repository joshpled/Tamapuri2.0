import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import "../styles/button.css";
import "../styles/input.css";
import "../styles/canvas.css";
import { motion } from "framer-motion";
import { createNewPet } from "../actions/petActions";

class NewPetForm extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewPet(this.state.name, this.props.user);
    this.props.history.push("/canvas");
    this.setState({
      name: "",
    });
  };

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
              duration: 4,
            },
          }}
        >
          <Container
            style={{
              maxWidth: "540px",
              borderStyle: "ridge",
              borderWidth: "3px",
            }}
            id="canvasSetting"
          >
            <motion.div
              animate={{ y: 100 }}
              transition={{
                type: "inertia",
                velocity: 200,
              }}
            >
            
              <Form
                onSubmit={(e) => {
                  this.handleSubmit(e);
                }}
              >
              {/* <h1>{this.props.user.user}</h1> */}
                <Form.Control
                  value={this.state.name}
                  id="entername"
                  type="text"
                  placeholder="Enter a Name for your Pet "
                  onChange={(e) => this.handleChange(e)}
                />
                <Button
                  size="sm"
                  id="btn-colour-1"
                  type="submit"
                  style={{ marginTop: "10px", float: "right" }}
                >
                  Hatch New Pet
                </Button>
              </Form>
            </motion.div>
          </Container>
        </motion.div>
      </div>
    );
  }
}


export default connect(null, { createNewPet })(
  withRouter(NewPetForm)
);
