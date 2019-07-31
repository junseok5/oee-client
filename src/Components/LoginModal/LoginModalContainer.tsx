import React, { useCallback, useState } from "react"
import LoginModalPresenter from "./LoginModalPresenter"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import reqSocialInfo from "../../Utils/reqSocialInfo"
import { useMutation } from "graphql-hooks"
import { SOCIAL_LOGIN_QUERY } from "./LoginModalQueries"

const LoginModalContainer: React.FC = () => {
    const viewLoginModal = useSelector(
        (state: any) => state.base.login,
        shallowEqual
    )
    const [errorMessage, setErrorMessage] = useState("")

    const dispatch = useDispatch()
    const setLoginModal = useCallback(
        (val: boolean) => {
            setErrorMessage("")
            return dispatch({ type: "SET_LOGIN_MODAL", val })
        },
        [dispatch, viewLoginModal]
    )

    const setLogged = useCallback(
        val => dispatch({ type: "SET_LOGGED", val }),
        [dispatch]
    )
    const [socialLogin, { loading }] = useMutation(SOCIAL_LOGIN_QUERY)

    const getSocialInfo = useCallback(async (provider: string) => {
        const accessToken = await reqSocialInfo(provider)

        socialLogin({ variables: { provider, accessToken } }).then(
            ({ data }) => {
                if (data) {
                    const {
                        SocialLogin: { ok, error, token }
                    } = data

                    if (ok) {
                        localStorage.token = token
                        setLogged(true)
                        setLoginModal(false)
                    } else {
                        setErrorMessage(error)
                    }
                } else {
                    setErrorMessage(
                        "Sorry, server error occured. Try again in a few minutes."
                    )
                }
            }
        )
    }, [])

    return viewLoginModal ? (
        <LoginModalPresenter
            setLoginModal={setLoginModal}
            getSocialInfo={getSocialInfo}
            loading={loading}
            errorMessage={errorMessage}
        />
    ) : null
}

export default LoginModalContainer
