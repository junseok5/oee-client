import produce from "immer"
import { SET_LOGIN_MODAL } from "../Actions/modalAction"

const initialState = {
    login: false
}

type IState = {
    login: boolean
}

const modal = (state: IState = initialState, action: any) => {
    if (action.type === SET_LOGIN_MODAL) {
        return produce(state, draft => {
            draft.login = action.val
        })
    } else {
        return state
    }
}

export default modal
