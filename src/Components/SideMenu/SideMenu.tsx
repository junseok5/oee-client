import React from "react"
import styled from "styled-components"
import Colors from "../../Constants/Colors"

const StyledContainer = styled.div`
    position: fixed;
    left: 0;
    width: 240px;
    height: calc(100vh - 4em);
    padding: 1em 1em;
    background: ${Colors.box};
    border-right: 1px solid ${Colors.border};

    @media screen and (max-width: 768px) {
        display: none;
    }

    .title {
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        color: ${Colors.lightGray};
    }

    ul {
        font-size: 1.2em;
        li {
            padding: 0.6em 0.4em;
            display: flex;

            &:hover {
                background: ${Colors.hoverBox};
            }

            img {
                width: 30px;
                height: 30px;
                margin-right: 0.4em;
                border-radius: 50%;
            }
        }
    }
`

const SideMenu: React.FC = () => {
    return (
        <StyledContainer>
            <div className="title">Level</div>
            <ul>
                <li>Beginner</li>
                <li>Intermediate</li>
                <li>Advanced</li>
            </ul>
            <div className="title">Channel</div>
            <ul>
                <li>
                    <img
                        src={
                            "https://yt3.ggpht.com/a-/AAuE7mCyzC1-No0_qQSIIj7adykHC3veXX3UxTJxrQ=s288-mo-c-c0xffffffff-rj-k-no"
                        }
                        draggable={false}
                    />
                    <div className="name">Team Coco</div>
                </li>
            </ul>
        </StyledContainer>
    )
}

export default SideMenu
