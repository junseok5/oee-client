import React from "react"
import styled from "styled-components"
import VideoCard from "../VideoCard"

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const VideoCardListPresenter: React.FC = () => {
    return (
        <StyledContainer>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </StyledContainer>
    )
}

export default VideoCardListPresenter
