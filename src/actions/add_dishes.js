import axios from "axios";
import { CREATE_DISH, SHOW_ALERT, HIDE_ALERT } from "./types";

const _addDish = (data) => ({
  type: CREATE_DISH,
  data,
});

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export const addNewDish = (userData) => (dispatch) => {
  // console.log("data from axios ", userData);
  axios
    .post("/api/dish", userData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    })
    .then(() => {
      // console.log("inside then");
      dispatch(_addDish(userData));
    })
    .catch((error) => {
      // console.log(error.response);
      dispatch(showAlert("Something went wrong..."));
    });
};
