import React from "react";
import { ProgressBar } from "react-bootstrap";

const StatusBars = (props) => {

  const barStyle = {
    height: '30px'
  }
    return (
      <div>
        <ProgressBar
          now={props.pet.health}
          label={`Health ${props.pet.health}%`}
          style={barStyle}
        /><br />
        <ProgressBar
          now={props.pet.fun}
          label={`Boredom ${props.pet.boredom}%`}
          style={barStyle}
        /><br />
        <ProgressBar
          now={props.pet.hunger}
          label={`Hunger ${props.pet.hunger}%`}
          style={barStyle}
        />
        <ProgressBar
          now={props.pet.hygiene}
          label={`Hygiene ${props.pet.hygiene}%`}
          style={barStyle}
        />
        <ProgressBar
          now={props.pet.energy}
          label={`Energy ${props.pet.energy}%`}
          style={barStyle}
        />
      </div>
    );
};

export default StatusBars;
