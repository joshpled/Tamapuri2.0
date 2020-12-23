
// heroku deployment
const BASE_URL = 'https://vast-plains-99264.herokuapp.com/api/v1/'

// localhost
// const BASE_URL = "http://localhost:3090/api/v1/";

export const getItems = () => {
 
    return (dispatch) => {
      dispatch({ type: "GETTING_ITEMS" });
      fetch(BASE_URL + "items/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          debugger
          dispatch({ type: "GET_ITEMS", payload: data })}
          )
        .catch((error) => console.log(error))
    };
  };