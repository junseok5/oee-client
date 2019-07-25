import React from "react"
import styled from "styled-components"
import Colors from "../../Constants/Colors"

const StyledContainer = styled.div`
    background: ${props => props.color};
`

interface IProps {
    title?: string
    bgColor?: string
}

const Button: React.FC<IProps> = ({ title, bgColor = Colors.main }) => {
    return <StyledContainer color={bgColor}>{title}</StyledContainer>
}

export default Button
