import {combineReducers} from 'redux'

import {auth} from './auth'
import {dishes} from './dishes'
import {app} from "./app";

const rootReducer = combineReducers({
    auth: auth,
    dishes: dishes,
    app: app
})

export default rootReducer;