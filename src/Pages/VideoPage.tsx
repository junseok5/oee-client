import React from "react"
import Video from "../Components/Video"
import { RouteComponentProps } from "react-router"

interface IProps
    extends RouteComponentProps<{
        videoId: string
    }> {}

const VideoPage: React.FC<IProps> = ({ match }) => {
    const { videoId } = match.params

    return <Video videoId={videoId} />
}

export default VideoPage
