import axios from 'axios'
import { FETCH_DISHES, HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types"

export function showLoader() {
    return {
        type:SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type:HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type:SHOW_ALERT,
            payload: text
        })

        setTimeout(()=>{
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type:HIDE_ALERT
    }
}

const _getDishes = (dishes) => ({
    type: FETCH_DISHES,
    dishes
});
 
export const fetchDishes = () => (dispatch) => {
    dispatch(showLoader())
    axios.get("api/dish", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
            }
    })
    .then((res) => {
        const dishes = [];

        res.data.dish.forEach(item => {
            dishes.push(item);
        });
        
        dispatch(_getDishes(dishes))
    })
    .catch(() => {
        dispatch(showAlert('Something went wrong...'))
        dispatch(hideLoader())
    })
    dispatch(hideLoader())
}