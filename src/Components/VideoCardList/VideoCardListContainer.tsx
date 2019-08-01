import React from "react"
import VideoCardListPresenter from "./VideoCardListPresenter"
import { useQuery } from "graphql-hooks"
import { GET_VIDEO_LIST_QUERY } from "./VideoCardListQueries"
import PageLoading from "../PageLoading"
import Error from "../Error"

interface IProps {
    page: number
    tag?: string
    keyword?: string
    level?: string
}

const VideoCardListContainer: React.FC<IProps> = ({
    page,
    tag,
    keyword,
    level
}) => {
    const { loading, data } = useQuery(GET_VIDEO_LIST_QUERY, {
        variables: {
            page,
            tag,
            keyword,
            level
        }
    })

    let videoArr = []

    if (loading) {
        return <PageLoading />
    } else if (data) {
        const {
            GetVideoList: { ok, error, videos }
        } = data

        if (ok) {
            if (!videos.length) {
                return <Error message={"Cannot find videos in current page."} />
            }

            videoArr = videos
        } else if (error) {
            return <Error message={error} />
        }
    }

    return <VideoCardListPresenter videos={videoArr} />
}

export default VideoCardListContainer
