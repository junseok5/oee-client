import { combineReducers } from "redux"
import counter from "./Reducers/counter"

const rootReducer = combineReducers({
    counter
})

export default rootReducer
