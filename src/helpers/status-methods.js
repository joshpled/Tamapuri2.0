import { newAmount } from "../helpers/helper-methods";

export function changeAttribute(attribute, item, pet) {
    debugger
  let data = {};

  switch (attribute) {
    case "boredom":
      data = {
        boredom: newAmount(pet.boredom, item.value),
        hunger: newAmount(pet.hunger, item.value),
      };
      break;
    case "hunger":
      data = {
        hunger: newAmount(pet.hunger, item.value),
        boredom: newAmount(pet.boredom, item.value),
      };
      break;
    case "health":
      data = {
        health: newAmount(pet.health, item.value),
        hunger: newAmount(pet.hunger, item.value),
      };
      break;
    default:
      data = { ...pet };
  }
}
