import React from "react"
import styled from "styled-components"
import Tabs from "../Tabs"
import Base from "../Base"

const StyledContainer = styled.div`
    main {
        margin-top: 4em;
        height: calc(100vh - 4em);
    }
`

const PageLayout: React.FC = ({ children }) => {
    return (
        <StyledContainer>
            <Base />
            <main>{children}</main>
            <Tabs />
        </StyledContainer>
    )
}

export default PageLayout
