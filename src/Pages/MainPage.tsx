import React from "react"
import PageLayout from "../Components/PageLayout"
import SideMenu from "../Components/SideMenu"
import MainLayout from "../Components/MainLayout"
import Header from "../Components/Header"
import VideoCardList from "../Components/VideoCardList"
import { RouteComponentProps } from "react-router"

interface IProps
    extends RouteComponentProps<{
        page?: string
        tag?: string
        keyword?: string
        level?: string
    }> {}

const MainPage: React.FC<IProps> = ({ match }) => {
    const { page = 1, tag, keyword, level } = match.params

    return (
        <PageLayout>
            <Header />
            <SideMenu />
            <MainLayout>
                <VideoCardList
                    page={Number(page)}
                    tag={tag}
                    keyword={keyword}
                    level={level}
                />
            </MainLayout>
        </PageLayout>
    )
}

export default MainPage
