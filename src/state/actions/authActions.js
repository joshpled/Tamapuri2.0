import { config } from "./Constants";
var url = config.url.AUTH_URL;

export const storeUser = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_USER", payload });
  };
};

export const clearUser = () => {
  return (dispatch) => {
    fetch(url + "logout/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then(() => {
        dispatch({ type: "CLEAR_USER" });
      })
      .catch((error) => console.log(error));
  };
};

export const loginUser = (email, password) => {
  let loginData = {
    email: email,
    password: password,
  };

  return (dispatch) => {
    dispatch({ type: "LOADING_USER" });
    fetch(url + "sessions/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ user: loginData }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.logged_in === true) {
          dispatch({ type: "SET_USER", payload: json });
          return { logged_in: true };
        }
      })
      .catch((error) => console.log(error));
  };
};

export const registerUser = (email, password, password_confirmation) => {
  const remove = (s) => s.replace(/@.*$/, "");

  let registerData = {
    email: email,
    password: password,
    password_confirmation: password_confirmation,
    username: remove(email),
  };

  return (dispatch) => {
    dispatch({ type: "LOADING_USER" });
    fetch(url + "registrations/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ user: registerData }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "created") {
          dispatch({ type: "SET_USER", payload: data });
        } else {
          dispatch({ type: "READ_ERROR", payload: data.exception });
        }
      });
  };
};
