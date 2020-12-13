const BASE_URL = 'http://127.0.0.1:3090/api/v1/'

export const createNewPet = (name) => {
  return (dispatch) => {
    dispatch({ type: "CREATING_PET" });
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, health: 5, boredom: 5, hunger: 5})
    }
    fetch(BASE_URL + 'pets', requestOptions)
    .then(response => response.json())
    .then(data => dispatch({ type: 'CREATE_PET', payload: data }));
};
}

export const updatePet = (id, attribute) => {
  return (dispatch) => {
    dispatch({type: "CHANGING_ATTRIBUTE"});
    fetch(BASE_URL + 'pets/' + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        attribute: 1
      } )
    })
    .then(resp => resp.json())
    .then(data => dispatch({type: "CHANGE_ATTRIBUTE", payload: data}))
  }
}
