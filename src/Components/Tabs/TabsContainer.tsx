import React, { useCallback, useEffect } from "react"
import TabsPresenter from "./TabsPresenter"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { withRouter, RouteComponentProps } from "react-router"

interface IProps extends RouteComponentProps {}

const TabsContainer: React.FC<IProps> = ({ match, history }) => {
    const selectedTab = useSelector(
        (state: any) => state.base.selectedTab,
        shallowEqual
    )
    const profile = useSelector(
        (state: any) => state.user.profile,
        shallowEqual
    )
    const dispatch = useDispatch()
    const changeTab = useCallback(
        (tabName: string) => dispatch({ type: "CHANGE_TAB", val: tabName }),
        [dispatch]
    )
    const setLoginModal = useCallback(
        val => dispatch({ type: "SET_LOGIN_MODAL", val }),
        [dispatch]
    )
    const onPressTab = (tabName: string) => {
        if (tabName === "Home") {
            history.push("/")
        } else if (tabName === "Explore") {
            history.push("/explore")
        } else if (tabName === "Profile") {
            if (profile) {
                history.push(`/user/${profile._id}`)
            } else {
                setLoginModal(true)
            }
        }
    }

    useEffect(() => {
        const { path } = match
        if (path === "/") {
            changeTab("Home")
        } else if (path === "/explore") {
            changeTab("Explore")
        } else if (path === "/user/:userId") {
            changeTab("Profile")
        }
    }, [selectedTab])

    return <TabsPresenter selectedTab={selectedTab} onPressTab={onPressTab} />
}

export default withRouter(TabsContainer)
