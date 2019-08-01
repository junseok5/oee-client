import React from "react"
import styled from "styled-components"
import Loading from "../Loading"

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PageLoading: React.FC = () => {
    return (
        <StyledContainer>
            <Loading />
        </StyledContainer>
    )
}

export default PageLoading
