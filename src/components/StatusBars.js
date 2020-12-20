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
          now={props.pet.boredom}
          label={`Boredom ${props.pet.boredom}%`}
          style={barStyle}
        /><br />
        <ProgressBar
          now={props.pet.hunger}
          label={`Hunger ${props.pet.hunger}%`}
          style={barStyle}
        />
      </div>
    );
};

export default StatusBars;
