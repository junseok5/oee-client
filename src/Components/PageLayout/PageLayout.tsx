import React from "react"
import styled from "styled-components"
import Header from "../Header"

const StyledContainer = styled.div``

const PageLayout: React.FC = ({ children }) => {
    return (
        <StyledContainer>
            <Header />
            <main>{children}</main>
        </StyledContainer>
    )
}

export default PageLayout
