import React, { Component } from "react";
import '../styles/menu.css'
import { Modal, Button } from "react-bootstrap";

export default class Menu extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }

  handleShow() {
    
    this.setState({ show: true });
  }
  handleClose() {
    this.props.toggle();
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <Modal
          show={this.state.show}
          onHide={() => this.handleClose()}
          contentClassName={'custom'}
        >
          <Modal.Header>
            <Modal.Title id="center-title">Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button className="learn-more">Go To Store</Button>
            <Button className="learn-more">Go To A-Vale</Button>
            <Button className="learn-more">Change Pet Color</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button className="learn-more" onClick={() => this.handleClose()} >
              Close
            </Button>
            {/* <Button variant="primary"  size="sm" onClick={() => this.handleClose()}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
