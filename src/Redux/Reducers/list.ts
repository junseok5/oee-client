import produce from "immer"
import { SET_PAGE_COUNT } from "../Actions/listAction"

const initialState = {
    pageCount: 0
}

type IState = {
    pageCount: number
}

const list = (state: IState = initialState, action: any) => {
    if (action.type === SET_PAGE_COUNT) {
        return produce(state, draft => {
            draft.pageCount = action.val
        })
    } else {
        return state
    }
}

export default list
