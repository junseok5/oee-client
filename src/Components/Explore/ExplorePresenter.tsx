import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    padding-left: 1em;
    padding-right: 1em;

    .title {
        padding-top: 1em;
        padding-bottom: 0.5em;
        font-size: 1.2em;
        font-weight: bold;
    }

    ul {
        li {
            padding: 0.6em;
            font-size: 1.1em;

            display: flex;
            align-items: center;

            .thumbnail {
                width: 50px;
                height: 50px;
                margin-right: 0.7em;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`

const ExplorePresenter: React.FC = () => {
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
                    <div className="thumbnail">
                        <img
                            src="https://yt3.ggpht.com/a-/AAuE7mCyzC1-No0_qQSIIj7adykHC3veXX3UxTJxrQ=s288-mo-c-c0xffffffff-rj-k-no"
                            draggable={false}
                        />
                    </div>
                    <div className="name">Team Coco</div>
                </li>
                <li>
                    <div className="thumbnail">
                        <img
                            src="https://yt3.ggpht.com/a-/AAuE7mCyzC1-No0_qQSIIj7adykHC3veXX3UxTJxrQ=s288-mo-c-c0xffffffff-rj-k-no"
                            draggable={false}
                        />
                    </div>
                    <div className="name">Team Coco</div>
                </li>
            </ul>
        </StyledContainer>
    )
}

export default ExplorePresenter
