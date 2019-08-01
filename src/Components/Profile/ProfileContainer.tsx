import React, { useCallback } from "react"
import ProfilePresenter from "./ProfilePresenter"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { withRouter, RouteComponentProps } from "react-router"

interface IProps extends RouteComponentProps {}

const ProfileContainer: React.FC<IProps> = ({ history }) => {
    const profile = useSelector(
        (state: any) => state.user.profile,
        shallowEqual
    )
    const dispatch = useDispatch()
    const setLogged = useCallback(
        val => dispatch({ type: "SET_LOGGED", val }),
        [dispatch]
    )
    const setProfile = useCallback(
        val => dispatch({ type: "SET_PROFILE", val }),
        [dispatch]
    )

    const onLogout = useCallback(() => {
        setLogged(false)
        setProfile(null)
        localStorage.removeItem("token")
        history.push("/")
    }, [])

    if (!profile) return null

    return <ProfilePresenter profile={profile} onLogout={onLogout} />
}

export default withRouter(ProfileContainer)
