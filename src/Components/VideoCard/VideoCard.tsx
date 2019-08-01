import React from "react"
import styled from "styled-components"
import { TVideo } from "../../Types/types"

const StyledContainer = styled.div`
    width: 280px;
    margin: 1em;

    @media screen and (max-width: 900px) {
        width: 230px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    .thumbnail {
        position: relative;
        width: 100%;
        cursor: pointer;

        img {
            width: 100%;
        }

        .overaytime {
            position: absolute;
            right: 2px;
            bottom: 6px;
            padding: 1px 4px;
            border-radius: 2px;

            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            font-size: 0.9em;
        }
    }

    .title {
        font-size: 1.1em;

        @media screen and (max-width: 768px) {
            font-size: 1.2em;
        }

        span {
            cursor: pointer;
        }
    }
`

interface IProps {
    video: TVideo
}

const VideoCard: React.FC<IProps> = ({ video }) => {
    return (
        <StyledContainer>
            <div className="thumbnail">
                <img
                    src={`https://img.youtube.com/vi/${
                        video.youtubeId
                    }/mqdefault.jpg`}
                    draggable={false}
                />
                <div className="overaytime">{video.overayTime}</div>
            </div>
            <div className="title">
                <span>{video.title}</span>
            </div>
        </StyledContainer>
    )
}

export default VideoCard
