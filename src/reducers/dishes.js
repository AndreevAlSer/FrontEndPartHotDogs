import { FETCH_DISHES } from "../actions/types"

const initialState = {
    // массив dishes с сервера
    fetchedDishes:[]
}

export const dishes = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES:
            return {...state, fetchedDishes: action.payload}
        default: return state
    }
}
