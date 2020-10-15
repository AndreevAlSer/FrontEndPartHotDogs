import { FETCH_DISHES, CREATE_DISH } from "../actions/types";

const initialState = {
  // массив dishes с сервера
  dishes: [],
  fetchDishes: [],
};

export const dishes = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISHES:
      return { ...state, fetchDishes: action.dishes };
    case CREATE_DISH:
      return { ...state, dishes: [...state.dishes, action.payload] };
    default:
      return state;
  }
};
