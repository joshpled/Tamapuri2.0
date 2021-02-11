import React, { Component } from "react";
//styling
import { Container, Form, Button } from "react-bootstrap";
import "./petapp.css";
//components
import { createNewPet } from '../../state/actions/petActions';
import {connect} from 'react-redux'

class Home extends Component {
  state = {
    name: "",
  };

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createNewPet(this.state.name,1)
    debugger
      this.props.history.push('/petapp')
  }

  render() {
    return (
      <Container id="squareSetting">
        <br/>
        <h1 className="display-3">NAME YOUR PET!</h1>
        <Form onSubmit={(e)=>this.handleSubmit(e)}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ float: "right" }}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default connect(null, {createNewPet})(Home)
