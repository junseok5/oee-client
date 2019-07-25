import React from "react"
import styled from "styled-components"
import { FaRegMeh } from "react-icons/fa"
import Colors from "../../Constants/Colors";

const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .error {
        color: ${Colors.normalGray};
        .error-icon {
            margin-bottom: 0.4em;
            display: flex;
            justify-content: center;
            font-size: 2.2em;
        }

        .error-text {
            font-weight: bold;
            font-size: 1.1em;
        }
    }
`

interface IProps {
    message: string
}

const Error: React.FC<IProps> = ({ message }) => {
    return (
        <StyledContainer>
            <div className="error">
                <div className="error-icon">
                    <FaRegMeh />
                </div>
                <div className="error-text">{message}</div>
            </div>
        </StyledContainer>
    )
}

export default Error
