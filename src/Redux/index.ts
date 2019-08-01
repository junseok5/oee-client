import { combineReducers } from "redux"
import base from "./Reducers/base"
import auth from "./Reducers/auth"
import user from "./Reducers/user"
import list from "./Reducers/list"

const rootReducer = combineReducers({
    base,
    auth,
    user,
    list
})

export default rootReducer
