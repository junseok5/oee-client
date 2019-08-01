import { combineReducers } from "redux"
import base from "./Reducers/base"
import auth from "./Reducers/auth"
import user from "./Reducers/user"

const rootReducer = combineReducers({
    base,
    auth,
    user
})

export default rootReducer
