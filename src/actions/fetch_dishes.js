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

export const fetchDishes = () => (dispatch) => {
    dispatch(showLoader())
    axios
    .get("api/dish", {
        headers: {
           Authorization: "Bearer " + localStorage.getItem("access_token")
        }
     })
      .then((res) => dispatch({
        type: FETCH_DISHES,
        payload: {
          dishesFromPayload: res.data.dish,
        }  
    }))
      .catch(() => {
        dispatch(showAlert('Something went wrong...'))
        dispatch(hideLoader())
      })
    dispatch(hideLoader())
  }
