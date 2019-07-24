import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    height: 5em;
    border-bottom: 1px solid #000;
`

const HeaderPresenter: React.FC = () => {
    return (
        <StyledContainer>
            <div className="logo">OEE</div>
        </StyledContainer>
    )
}

export default HeaderPresenter
