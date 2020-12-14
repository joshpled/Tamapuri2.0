import React from "react";
import { ProgressBar } from "react-bootstrap";

const StatusBars = (props) => {
  if (props.loading === true) {
    return (
      <div>
        <ProgressBar
          now={props.pet.health}
          label={`Health ${props.pet.health}%`}
        /><br />
        <ProgressBar
          now={props.pet.boredom}
          label={`Boredom ${props.pet.boredom}%`}
        /><br />
        <ProgressBar
          now={props.pet.hunger}
          label={`Hunger ${props.pet.hunger}%`}
        />
      </div>
    );
  } else {
    return (
      <div>
        <ProgressBar
          now={props.pet.health}
          label={`Health ${props.pet.health}%`}
        /><br />
        <ProgressBar
          now={props.pet.boredom}
          label={`Boredom ${props.pet.boredom}%`}
        /><br />
        <ProgressBar
          now={props.pet.hunger}
          label={`Hunger ${props.pet.hunger}%`}
        />
      </div>
    );
  }
};

export default StatusBars;
