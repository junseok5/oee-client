import React from "react"
import PageLayout from "../Components/PageLayout"
import SideMenu from "../Components/SideMenu"
import MainLayout from "../Components/MainLayout"
import Header from "../Components/Header"
import VideoCardList from "../Components/VideoCardList"

const MainPage: React.FC = () => {
    return (
        <PageLayout>
            <Header />
            <SideMenu />
            <MainLayout>
                <VideoCardList />
            </MainLayout>
        </PageLayout>
    )
}

export default MainPage
