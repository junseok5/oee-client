import produce from "immer"
import { SET_PROFILE } from "../Actions/userAction"

const initialState = {
    profile: null
}

type IState = {
    profile: {
        _id: string
        email: string
        displayName: string
        thumbnail: string
    } | null
}

const user = (state: IState = initialState, action: any) => {
    if (action.type === SET_PROFILE) {
        return produce(state, draft => {
            draft.profile = action.val
        })
    } else {
        return state
    }
}

export default user
