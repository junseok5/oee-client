import React, { useCallback } from "react"
import HeaderPresenter from "./HeaderPresenter"
import { useDispatch, useSelector, shallowEqual } from "react-redux"

const HeaderContainer: React.FC = () => {
    const viewLoginModal = useSelector(
        (state: any) => state.base.login,
        shallowEqual
    )
    const dispatch = useDispatch()
    const setLoginModal = useCallback(
        () => dispatch({ type: "SET_LOGIN_MODAL", val: !viewLoginModal }),
        [dispatch, viewLoginModal]
    )

    return <HeaderPresenter setLoginModal={setLoginModal} />
}

export default HeaderContainer
