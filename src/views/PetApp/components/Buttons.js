import React, { Component } from "react";
import "../petapp.css";
import ItemPopover from "./ItemPopover";
import { OverlayTrigger } from "react-bootstrap";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return (
      <div className="items">
        <OverlayTrigger trigger="click" placement="top" overlay={ItemPopover}>
          <button
            onClick={this.handleClick}
            className="btn btn-primary btn-jelly items-button"
          >
            ITEMS
          </button>
        </OverlayTrigger>
      </div>
    );
  }
}

export default Buttons;
