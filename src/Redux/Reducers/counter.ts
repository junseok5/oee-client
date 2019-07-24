import produce from "immer"
import { SET_COUNT } from "../Actions/counterAction"

const initialState = {
    number: 0
}

type IState = {
    number: number
}

const counter = (state: IState = initialState, action: any) => {
    if (action.type === SET_COUNT) {
        return produce(state, draft => {
            draft.number = action.val
        })
    } else {
        return state
    }
}

export default counter
