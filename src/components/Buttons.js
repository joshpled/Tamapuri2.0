import React from "react";
import "../styles/button.css";
import { Button, Container, Row, Col } from "react-bootstrap";

const Buttons = (props) => {
  
  const clickChange = (e) => {
    e.preventDefault()
    let attr = e.target.value
    props.updatePet(props.pet, attr);
  };

  return (
    <div className="bottom">
      <Container>
        <Row>
          <Col>
            <Button value="hunger" onClick={(e) => clickChange(e)} id="btn-colour-2">
              FEED
            </Button>
          </Col>
          <Col>
            <Button value="health" onClick={(e) => clickChange(e)} id="btn-colour-2">
              HEAL
            </Button>
          </Col>
          <Col>
            <Button value="boredom" onClick={(e) => clickChange(e)} id="btn-colour-2">
              PLAY
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buttons;
