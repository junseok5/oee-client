import React from "react"
import Error from "../Components/Error/Error"
import PageLayout from "../Components/PageLayout"
import SideMenu from "../Components/SideMenu"
import MainLayout from "../Components/MainLayout"
import Header from "../Components/Header"

const NotFoundPage: React.FC = () => {
    return (
        <PageLayout>
            <Header />
            <SideMenu />
            <MainLayout>
                <Error message={"Page not found."} />
            </MainLayout>
        </PageLayout>
    )
}

export default NotFoundPage
