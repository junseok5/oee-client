import { combineReducers } from "redux"
import counter from "./Reducers/counter"
import base from "./Reducers/base"
import auth from "./Reducers/auth"

const rootReducer = combineReducers({
    counter,
    base,
    auth
})

export default rootReducer
