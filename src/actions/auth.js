import axios from 'axios'
import jwtDecode from 'jwt-decode'

import { SET_CURRENT_USER } from './types'
import setAuthToken from '../utils/setAuthToken'

export const register = (userData, history)=>()=>{
    axios
        .post('api/auth/signup', userData)
        .then((res)=>history.push('/login'))
}

export const login = (userData) => (dispatch) => {
    axios
        .post('api/auth/signin', userData)
        .then((res)=>{
            const {token} = res.data.accessToken
            localStorage.setItem('access_token', token)
            setAuthToken(token)
            const decoded = jwtDecode(token, { header: true })
            dispatch(setCurrentUser(decoded))
        })
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('access_token')
    setAuthToken(false)
    dispatch(setCurrentUser({}))
}

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
}) 
