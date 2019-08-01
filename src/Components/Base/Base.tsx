import React from "react"
import LoginModal from "../LoginModal"
import AuthCheck from "../AuthCheck"

const Base: React.FC = () => {
    return (
        <>
            <AuthCheck />
            <LoginModal />
        </>
    )
}

export default Base
