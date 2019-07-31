import React from "react"
import styled from "styled-components"
import { FiHome, FiGrid, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"
import Colors from "../../Constants/Colors"

const StyledContainer = styled.div`
    display: none;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.2em;
    background: white;
    color: ${Colors.normalGray};
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

        &.selected {
            color: black;
        }
    }
`

interface IProps {
    selectedTab: string
    onPressTab: (tabName: string) => void
}

const TabsPresenter: React.FC<IProps> = ({ selectedTab, onPressTab }) => {
    return (
        <StyledContainer>
            <div className={`tab ${selectedTab === "Home" && "selected"}`}>
                <span onClick={() => onPressTab("Home")}>
                    <FiHome />
                </span>
            </div>
            <div className={`tab ${selectedTab === "Explore" && "selected"}`}>
                <span onClick={() => onPressTab("Explore")}>
                    <FiGrid />
                </span>
            </div>
            <div className={`tab ${selectedTab === "Profile" && "selected"}`}>
                <span onClick={() => onPressTab("Profile")}>
                    <FiUser />
                </span>
            </div>
        </StyledContainer>
    )
}

export default TabsPresenter
