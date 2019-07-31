import { combineReducers } from "redux"
import counter from "./Reducers/counter"
import base from "./Reducers/base"

const rootReducer = combineReducers({
    counter,
    base
})

export default rootReducer
