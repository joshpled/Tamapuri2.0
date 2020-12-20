import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Hamburger from "hamburger-react";
import Menu from "./Menu";

export default class NameStatusBar extends Component {
    
  constructor(props, context) {
    super(props, context);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  menuModalRef = ({ handleShow }) => {
    this.showModal = handleShow;
  };

  onMenuClick = () => {
    this.showModal();
  };

  render() {
    const { pet } = this.props;

    return (
      <div>
        <Container>
          <div style={{ float: "left" }}>
            <h1>{pet.name}</h1>
          </div>
          <div style={{ float: "right" }}>
            <span onClick={() => this.onMenuClick()}>
              <Hamburger toggled={this.state.isOpen} toggle={this.toggle} />
            </span>
            <Menu ref={this.menuModalRef} toggle={this.toggle}/>
          </div>
        </Container>
      </div>
    );
  }
}
