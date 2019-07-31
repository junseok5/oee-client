import produce from "immer"
import { SET_LOGIN_MODAL, CHANGE_TAB } from "../Actions/baseAction"

const initialState = {
    login: false,
    selectedTab: "Home"
}

type IState = {
    login: boolean
    selectedTab: string
}

const base = (state: IState = initialState, action: any) => {
    if (action.type === SET_LOGIN_MODAL) {
        return produce(state, draft => {
            draft.login = action.val
        })
    } else if (action.type === CHANGE_TAB) {
        return produce(state, draft => {
            draft.selectedTab = action.val
        })
    } else {
        return state
    }
}

export default base
