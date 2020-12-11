import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../styles/button.css";
import "../styles/input.css";

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
    this.props.createNewPet(this.state.name);
    this.props.history.push("/game");
    this.setState({
      name: "",
    });
  };
  render() {
    return (
      <div>
        <Form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <Form.Control
            value={this.state.name}
            id="entername"
            type="text"
            placeholder="Enter a Name for your Pet "
            onChange={(e) => this.handleChange(e)}
          />
          <Button
            className="float-right"
            size="sm"
            id="btn-colour-1"
            type="submit"
          >
            Hatch New Pet
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(NewPetForm);
