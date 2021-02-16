import React, { Component } from "react";
import "../petapp.css";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { connect } from "react-redux";
import { updatePet } from "../../../state/actions/petActions";
import { changeAttribute } from "../calculations";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { pet } = this.props;
    e.preventDefault();
    let newPet = changeAttribute(
      e.target.dataset.type,
      parseInt(e.target.dataset.effect),
      pet
    );
    this.props.updatePet(newPet, pet.id);
  }

  render() {
    const popover = (
      <Popover id="popover-basic" className="popover-custom">
        <Popover.Content className="popover-content">
          <div>
            <span onClick={(e) => this.handleClick(e)}>
              <img
                src="images/burrito.png"
                alt="burrito"
                data-type="hunger"
                data-effect="30"
                className="item-images"
              />
            </span>
            - Burrito (+30)
          </div>
          <div>
            <span onClick={(e) => this.handleClick(e)}>
              <img
                src="images/fish.png"
                alt="burrito"
                className="item-images"
              />
            </span>
            - Fish (+15)
          </div>
        </Popover.Content>
      </Popover>
    );

    return (
      <div className="items">
        <OverlayTrigger
          trigger="click"
          rootClose
          placement="top"
          overlay={popover}
        >
          <button className="btn btn-primary btn-jelly items-button">
            ITEMS
          </button>
        </OverlayTrigger>
      </div>
    );
  }
}

export default connect(null, { updatePet })(Buttons);
