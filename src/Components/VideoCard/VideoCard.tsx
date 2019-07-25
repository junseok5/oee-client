import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    width: 280px;
    margin: 1em;

    .thumbnail {
        position: relative;
        width: 100%;

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
    }
`

const VideoCard: React.FC = () => {
    return (
        <StyledContainer>
            <div className="thumbnail">
                <img
                    src={`https://img.youtube.com/vi/Hu0ky1rWXkY/mqdefault.jpg`}
                    draggable={false}
                />
                <div className="overaytime">0:00</div>
            </div>
            <div className="title">title test title test</div>
        </StyledContainer>
    )
}

export default VideoCard
