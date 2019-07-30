import React from "react"
import styled from "styled-components"
import { FiArrowLeft, FiRepeat } from "react-icons/fi"
import {
    FaStepBackward,
    FaPlay,
    FaPause,
    FaStepForward,
    FaClosedCaptioning
} from "react-icons/fa"

const StyledContainer = styled.div`
    background: black;
    height: 100vh;

    .header {
        width: 100%;
        display: flex;
        justify-content: center;

        .back {
            position: absolute;
            top: 14px;
            left: 14px;
            font-size: 3em;
            color: white;
            cursor: pointer;

            @media screen and (max-width: 768px) {
                font-size: 2em;
            }
        }

        .player {
            width: calc(100% - 12em);
            height: 600px;
            background: gray;

            @media screen and (max-width: 1550px) {
                height: 500px;
            }

            @media screen and (max-width: 1024px) {
                height: 300px;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
                height: 230px;
                margin-top: 4em;
            }
        }
    }

    .controller {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 5em;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        .icon {
            position: relative;
            font-size: 2em;
            margin-left: 1em;
            margin-right: 1em;
            cursor: pointer;
            display: flex;
            align-items: center;

            &.caption {
                font-size: 1.8em;
            }

            .non-icon {
                position: absolute;
                width: 1.4em;
                height: 2px;
                background: white;
                border-radius: 4px;
                transform: rotate(-45deg);
            }
        }
    }
`

const VideoPresenter: React.FC = () => {
    return (
        <StyledContainer>
            <div className="header">
                <div className="back">
                    <FiArrowLeft />
                </div>
                <div className="player" />
            </div>

            <div className="subtitle" />
            <div className="controller">
                <div className="caption icon">
                    <FaClosedCaptioning />
                    <div className="non-icon" />
                </div>
                <div className="prev icon">
                    <FaStepBackward />
                </div>
                <div className="play icon">
                    <FaPlay />
                </div>
                <div className="next icon">
                    <FaStepForward />
                </div>
                <div className="section-repeat icon">
                    <FiRepeat />
                </div>
            </div>
        </StyledContainer>
    )
}

export default VideoPresenter
