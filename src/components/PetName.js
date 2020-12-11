import React from "react";
import Spinner from "react-bootstrap/Spinner";
import {ListGroup} from 'react-bootstrap'

const PetName = ({ props }) => {
  if (props.loading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{props.pet.name}</h1>
        
      </div>
    );
  }
};

export default PetName;
