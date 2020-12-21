import React from "react";
import tacos from "../images/tacos.png";
import "../styles/button.css";
import "../styles/menu.css";
import {changeAttribute} from '../helpers/status-methods'

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

const Buttons = (props) => {
  const clickChange = (e) => {
    e.preventDefault();
    changeAttribute(e.target.getAttribute("value"), {name: 'taco', value: 30}, props.pet)
    // props.updatePet(props.pet, attr);
  };

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
                          <Tooltip id={`tooltip-top`}>
                            +30% to Hunger
                          </Tooltip>
                        }
                      >
                        <Button
                          variant="outline-info"
                          style={{ padding: ".15rem .2rem .15rem .2rem" }}
                        >
                          <Image
                            value="hunger"
                            src={tacos}
                            onClick={(e) => clickChange(e)}
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
                <Button
                  key='hunger'
                  id="btn-colour-2"
                >
                  FEED
                </Button>
              </OverlayTrigger>
            </center>
          </Col>
          <Col>
            <center>
              <Button
                value="health"
                onClick={(e) => clickChange(e)}
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
                onClick={(e) => clickChange(e)}
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
};

export default Buttons;
