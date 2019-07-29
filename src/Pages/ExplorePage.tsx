import React from "react"
import PageLayout from "../Components/PageLayout"
import SideMenu from "../Components/SideMenu"
import MainLayout from "../Components/MainLayout"
import Explore from "../Components/Explore"

const ExplorePage: React.FC = () => {
    return (
        <PageLayout>
            <SideMenu />
            <MainLayout>
                <Explore />
            </MainLayout>
        </PageLayout>
    )
}

export default ExplorePage
