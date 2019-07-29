import React from "react"
import styled from "styled-components"
import { FiHome, FiGrid, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"

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

        a {
            display: flex;
            align-items: center;
        }
    }
`

const Tabs: React.FC = () => {
    return (
        <StyledContainer>
            <div className="tab">
                <Link to="/">
                    <FiHome />
                </Link>
            </div>
            <div className="tab">
                <Link to="/explore">
                    <FiGrid />
                </Link>
            </div>
            <div className="tab">
                <Link to="/user/1">
                    <FiUser />
                </Link>
            </div>
        </StyledContainer>
    )
}

export default Tabs
