import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    margin-left: 240px;
    height: calc(100vh - 4em);

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`

const MainLayout: React.FC = ({ children }) => {
    return <StyledContainer>
        {children}
    </StyledContainer>
}

export default MainLayout