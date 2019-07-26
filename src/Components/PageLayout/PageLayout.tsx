import React from "react"
import styled from "styled-components"
import Header from "../Header"
import Tabs from "../Tabs"

const StyledContainer = styled.div`
    main {
        margin-top: 4em;
        height: calc(100vh - 4em);
    }
`

const PageLayout: React.FC = ({ children }) => {
    return (
        <StyledContainer>
            <Header />
            <main>{children}</main>
            <Tabs />
        </StyledContainer>
    )
}

export default PageLayout
