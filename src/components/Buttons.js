import React, { Component } from "react";
import "../styles/button.css";
import "../styles/menu.css";
import { changeAttribute } from "../helper-methods/calculations";

import {
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover,
  Image,
  Tooltip,
} from "react-bootstrap";

export default class Buttons extends Component {
  
  clickChange = (e) => {
    e.preventDefault();
    const itemValue = parseInt(e.target.getAttribute("data-value"));
    const pet = changeAttribute(
      e.target.getAttribute("value"),
      itemValue,
      this.props.pet
    );
    this.props.updatePet(pet, this.props.pet.id);
  };

  render() {
    return (
      <div>
        <Container style={{ marginTop: "10%" }}>
          <Row>
            <Col>
              <center>
                <OverlayTrigger
                  trigger="click"
                  placement={"top"}
                  rootClose={true}
                  overlay={
                    <Popover
                      id={`popover-positioned-top`}
                      className="custom-popover"
                    >
                      <Popover.Content>
                        <OverlayTrigger
                          placement={"top"}
                          overlay={
                            <Tooltip id={`tooltip-top`}>+30% to Hunger</Tooltip>
                          }
                        >
                          <Button
                            variant="outline-info"
                            style={{ padding: ".15rem .2rem .15rem .2rem" }}
                          >
                            <Image
                              value="hunger"
                              data-name="taco"
                              data-value={-30}
                              src="/images/fruit.png"
                              onClick={(e) => this.clickChange(e)}
                              style={{
                                height: "40px",
                                padding: ".005rem .005rem",
                              }}
                            ></Image>{" "}
                            <span style={{ color: "black" }}>3</span>
                          </Button>
                        </OverlayTrigger>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <Button key="hunger" id="btn-colour-2">
                    FEED
                  </Button>
                </OverlayTrigger>
              </center>
            </Col>
            <Col>
              <center>
                <Button
                  value="health"
                  onClick={(e) => this.clickChange(e)}
                  id="btn-colour-2"
                >
                  HEAL
                </Button>
              </center>
            </Col>
            <Col>
              <center>
                <Button
                  value="boredom"
                  onClick={(e) => this.clickChange(e)}
                  id="btn-colour-2"
                >
                  PLAY
                </Button>
              </center>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
