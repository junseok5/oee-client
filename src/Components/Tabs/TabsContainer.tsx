import React, { useCallback } from "react"
import TabsPresenter from "./TabsPresenter"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { withRouter, RouteComponentProps } from "react-router"

interface IProps extends RouteComponentProps {}

const TabsContainer: React.FC<IProps> = ({ history }) => {
    const selectedTab = useSelector(
        (state: any) => state.base.selectedTab,
        shallowEqual
    )
    const dispatch = useDispatch()
    const changeTab = useCallback(
        (tabName: string) => dispatch({ type: "CHANGE_TAB", val: tabName }),
        [dispatch]
    )

    const onPressTab = (tabName: string) => {
        if (tabName === "Home") {
            history.push("/")
        } else if (tabName === "Explore") {
            history.push("/explore")
        } else if (tabName === "Profile") {
            history.push("/user/1")
        } else {
            return
        }
        
        changeTab(tabName)
    }

    return <TabsPresenter selectedTab={selectedTab} onPressTab={onPressTab} />
}

export default withRouter(TabsContainer)
