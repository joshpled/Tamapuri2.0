import { newAmount, nameCapitalized } from "../helpers/helper-methods";

// heroku deployment
const BASE_URL = 'https://vast-plains-99264.herokuapp.com/api/v1/'

// localhost
// const BASE_URL = "http://localhost:3090/api/v1/";

export const createNewPet = (name) => {
  let data = {
    name: nameCapitalized(name),
    health: 100,
    boredom: 100,
    hunger: 100,
  };
  
  return (dispatch) => {
    dispatch({ type: "CREATING_PET" });
    fetch(BASE_URL + "pets/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pet: data }),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "CREATE_PET", payload: data }))
      .catch((error) => console.log(error))
  };
};

export const updatePet = (pet, attribute) => {
  let data = {};

  switch (attribute) {
    case "boredom":
      data = {
        boredom: newAmount(pet.boredom, "+"),
        hunger: newAmount(pet.hunger, "-"),
      };
      break;
    case "hunger":
      data = {
        hunger: newAmount(pet.hunger, "+"),
        boredom: newAmount(pet.boredom, "-"),
      };
      break;
    case "health":
      data = {
        health: newAmount(pet.health, "+"),
        hunger: newAmount(pet.hunger, "-"),
      };
      break;
    default:
      data = { ...pet };
  }

  return (dispatch) => {
    dispatch({ type: "CHANGING_ATTRIBUTE" });
    fetch(BASE_URL + "pets/" + pet.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ pet: data }),
    })
      .then((resp) => resp.json())
      .then((json) => dispatch({ type: "CHANGE_ATTRIBUTE", payload: json }));
  };
};
