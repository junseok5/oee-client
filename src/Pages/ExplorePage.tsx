import React from "react"
import PageLayout from "../Components/PageLayout"
import SideMenu from "../Components/SideMenu"
import MainLayout from "../Components/MainLayout"
import Explore from "../Components/Explore"
import SearchMobile from "../Components/SearchMobile"

const ExplorePage: React.FC = () => {
    return (
        <PageLayout>
            <SearchMobile />
            <SideMenu />
            <MainLayout>
                <Explore />
            </MainLayout>
        </PageLayout>
    )
}

export default ExplorePage
