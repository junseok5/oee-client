import React from "react"
import styled from "styled-components"
import { FiHome, FiGrid, FiUser } from "react-icons/fi"

const StyledContainer = styled.div`
    display: none;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.2em;
    background: white;
    font-size: 1.5em;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .tab {
        display: flex;
        flex: 1;
        justify-content: center;
    }
`

const Tabs: React.FC = () => {
    return (
        <StyledContainer>
            <div className="tab">
                <FiHome />
            </div>
            <div className="tab">
                <FiGrid />
            </div>
            <div className="tab">
                <FiUser />
            </div>
        </StyledContainer>
    )
}

export default Tabs
