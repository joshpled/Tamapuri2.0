import React from "react";
import "../styles/canvas.css";
import {Container} from 'react-bootstrap'
import {connect} from 'react-redux'

const DisplayCanvas = (props) => {
  const {pet} = props
  return (
    <div>
    <Container id="canvasSetting">
        <h1>{pet.pet.name}</h1>
    </Container>
    </div>
  );
};

export default connect(({pet})=>({pet}))(DisplayCanvas);
