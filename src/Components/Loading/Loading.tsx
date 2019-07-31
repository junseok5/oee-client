import React from "react"
import styled from "styled-components"
import Loadingbar from "react-loading"

const StyledContainer = styled.div`
    z-index: 25;
`

interface IProps {
    color?: string
}

const Loading: React.FC<IProps> = ({ color = "#ff2f6e" }) => {
    return (
        <StyledContainer>
            <Loadingbar type={"spokes"} color={color} />
        </StyledContainer>
    )
}

export default Loading
