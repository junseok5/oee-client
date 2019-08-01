import React from "react"
import styled from "styled-components"
import VideoCard from "../VideoCard"
import { TVideo } from "../../Types/types"

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

interface IProps {
    videos: [TVideo]
}

const VideoCardListPresenter: React.FC<IProps> = ({ videos }) => {
    return (
        <StyledContainer>
            {videos.map(video => (
                <VideoCard video={video} key={video._id} />
            ))}
        </StyledContainer>
    )
}

export default VideoCardListPresenter
