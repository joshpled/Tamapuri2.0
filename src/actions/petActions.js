const BASE_URL = 'https://vast-plains-99264.herokuapp.com/api/v1/'

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