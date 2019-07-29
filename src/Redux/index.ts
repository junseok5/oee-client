import { combineReducers } from "redux"
import counter from "./Reducers/counter"
import modal from "./Reducers/modal"

const rootReducer = combineReducers({
    counter,
    modal
})

export default rootReducer
