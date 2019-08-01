import React, { useCallback, useEffect } from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { useManualQuery } from "graphql-hooks"
import { CHECK_LOGIN_QUERY } from "./AuthQueries"

const AuthCheck: React.FC = () => {
    const logged = useSelector((state: any) => state.auth.logged, shallowEqual)
    const dispatch = useDispatch()
    const setLogged = useCallback(
        val => dispatch({ type: "SET_LOGGED", val }),
        [dispatch]
    )
    const setProfile = useCallback(
        val => dispatch({ type: "SET_PROFILE", val }),
        [dispatch]
    )
    const [checkLogin] = useManualQuery(CHECK_LOGIN_QUERY)

    const loginCheck = useCallback(() => {
        if (!logged && localStorage.token) {
            checkLogin().then(({ data }) => {
                if (data) {
                    const {
                        CheckLogin: { ok, user }
                    } = data

                    if (ok) {
                        setLogged(true)
                        setProfile(user)
                    } else {
                        localStorage.removeItem("token")
                    }
                }
            })
        } else if (logged && !localStorage) {
            setLogged(false)
            setProfile(null)
        }
    }, [logged])

    useEffect(() => {
        loginCheck()
    }, [])

    return null
}

export default AuthCheck
