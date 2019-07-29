import React from "react"
import PageLayout from "../Components/PageLayout"
import Header from "../Components/Header"
import Profile from "../Components/Profile"

const ProfilePage: React.FC = () => {
    return (
        <PageLayout>
            <Header />
            <Profile />
        </PageLayout>
    )
}

export default ProfilePage
