import React, { useCallback } from "react"
import LoginModalPresenter from "./LoginModalPresenter"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import reqSocialInfo from "../../Utils/reqSocialInfo"

const LoginModalContainer: React.FC = () => {
    const viewLoginModal = useSelector(
        (state: any) => state.base.login,
        shallowEqual
    )
    const dispatch = useDispatch()
    const setLoginModal = useCallback(
        () => dispatch({ type: "SET_LOGIN_MODAL", val: !viewLoginModal }),
        [dispatch, viewLoginModal]
    )
    const getSocialInfo = useCallback(async (provider: string) => {
        const data = await reqSocialInfo(provider)
        console.log(data)
    }, [])

    return viewLoginModal ? (
        <LoginModalPresenter
            setLoginModal={setLoginModal}
            getSocialInfo={getSocialInfo}
        />
    ) : null
}

export default LoginModalContainer
