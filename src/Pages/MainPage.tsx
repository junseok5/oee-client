import React from "react"
import PageLayout from "../Components/PageLayout"
import SideMenu from "../Components/SideMenu"
import VideoCard from "../Components/VideoCard"
import MainLayout from "../Components/MainLayout"
import VideoCardList from "../Components/VideoCardList";

const MainPage: React.FC = () => {
    return (
        <PageLayout>
            <SideMenu />
            <MainLayout>
                <VideoCardList />
            </MainLayout>
        </PageLayout>
    )
}

export default MainPage
