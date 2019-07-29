import React, { useCallback } from "react"
import LoginModalPresenter from "./LoginModalPresenter"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

const LoginModalContainer: React.FC = () => {
    const viewLoginModal = useSelector(
        (state: any) => state.modal.login,
        shallowEqual
    )
    const dispatch = useDispatch()
    const setLoginModal = useCallback(
        () => dispatch({ type: "SET_LOGIN_MODAL", val: !viewLoginModal }),
        [dispatch, viewLoginModal]
    )

    return viewLoginModal ? (
        <LoginModalPresenter setLoginModal={setLoginModal} />
    ) : null
}

export default LoginModalContainer
