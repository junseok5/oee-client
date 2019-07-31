import produce from "immer"
import { SET_LOGGED } from "../Actions/authAction"

const initialState = {
    logged: false
}

type IState = {
    logged: boolean
}

const auth = (state: IState = initialState, action: any) => {
    if (action.type === SET_LOGGED) {
        return produce(state, draft => {
            draft.logged = action.val
        })
    } else {
        return state
    }
}

export default auth
