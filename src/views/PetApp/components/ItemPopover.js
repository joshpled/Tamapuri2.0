import React, { useEffect } from "react";
import { useDispatch, useStore} from "react-redux";
import { Popover } from "react-bootstrap";
import "../petapp.css";
import {changeAttribute} from '../calculations'

import { updatePet } from "../../../state/actions/petActions";

function ItemPopover(props) {
  // const store = useStore()
  const dispatch = useDispatch()

  const petUpdate = () => {
    debugger
    let pet = changeAttribute('hunger', 30, props.pet)
    dispatch(updatePet(pet, props.pet.id))
  }

  return (
    <Popover id="popover-basic">
      <Popover.Content className="popover-content">
        <button src="images/burrito.png" alt="burrito" className="item-images" onClick={() => petUpdate()}/>
        <p>Burrito (+30)</p>
      </Popover.Content>
    </Popover>
  );
}
export default ItemPopover
