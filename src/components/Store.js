import React, { Component } from "react";
import '../styles/menu.css'
import { Modal, Button } from "react-bootstrap";
import {connect} from 'react-redux'
import {getItems} from '../actions/itemActions'

class Store extends Component {

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
 
  componentDidMount = () =>{
    this.props.getItems()
  }

  render() {
    debugger
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
            
          </Modal.Body>
          <Modal.Footer>
            <Button className="learn-more" onClick={() => this.handleClose()} >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    loading: state.loading,
  };
};



export default connect(mapStateToProps,{getItems})(Store);