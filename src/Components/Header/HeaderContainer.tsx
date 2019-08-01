import React, { useCallback } from "react"
import HeaderPresenter from "./HeaderPresenter"
import { useDispatch, useSelector, shallowEqual } from "react-redux"

const HeaderContainer: React.FC = () => {
    const viewLoginModal = useSelector(
        (state: any) => state.base.login,
        shallowEqual
    )
    const thumbnail = useSelector((state: any) => {
        const profile = state.user.profile
        if (state.user.profile) {
            return profile.thumbnail
        } else {
            return null
        }
    }, shallowEqual)
    const dispatch = useDispatch()
    const setLoginModal = useCallback(
        () => dispatch({ type: "SET_LOGIN_MODAL", val: !viewLoginModal }),
        [dispatch, viewLoginModal]
    )

    return (
        <HeaderPresenter thumbnail={thumbnail} setLoginModal={setLoginModal} />
    )
}

export default HeaderContainer
