import React from "react";
import "../styles/button.css";
import '../styles/menu.css'
import {
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

const Buttons = (props) => {
  const clickChange = (e) => {
    e.preventDefault();
    let attr = e.target.value;
    props.updatePet(props.pet, attr);
  };

  return (
    <div>
      <Container style={{ marginTop: "10%" }}>
        <Row>
          <Col>
            <center>
              <OverlayTrigger
                trigger="click"
                placement={'top'}
                rootClose={true}
                overlay={
                  <Popover id={`popover-positioned-top`} className="custom">
                      <Button>Hello</Button>
                  </Popover>
                }
              >
                <Button
                  value="hunger"
                  onClick={(e) => clickChange(e)}
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
