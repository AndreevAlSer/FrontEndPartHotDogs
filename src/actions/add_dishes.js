import axios from "axios";
import { CREATE_DISH } from "./types";

const _addDish = (data) => ({
  type: CREATE_DISH,
  data,
});

export const addNewDish = (userData) => (dispatch) => {
  axios.post("api/dish", userData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
  dispatch(_addDish(userData));
};
