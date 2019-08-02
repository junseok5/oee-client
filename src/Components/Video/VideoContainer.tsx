import React, { useCallback, useState, useEffect } from "react"
import VideoPresenter from "./VideoPresenter"
import { useManualQuery } from "graphql-hooks"
import { GET_VIDEO_QUERY } from "./VideoQueries"
import { withRouter, RouteComponentProps } from "react-router"

interface IProps extends RouteComponentProps {
    videoId: string
}

const VideoContainer: React.FC<IProps> = ({ history, videoId }) => {
    const [getVideo, { loading }] = useManualQuery(GET_VIDEO_QUERY, {
        variables: { id: videoId }
    })
    const [youtubeId, setYoutubeId] = useState("")
    const [transcript, setTranscript] = useState([])
    const [duration, setDuration] = useState(0)

    const goBack = useCallback(() => {
        history.goBack()
    }, [])

    const onReady = useCallback((e: { target: any }) => {
        setDuration(e.target.getDuration())
    }, [])

    const fetchVideo = useCallback(() => {
        getVideo().then(({ data }) => {
            if (data) {
                const {
                    GetVideo: { ok, video }
                } = data

                if (ok) {
                    setYoutubeId(video.youtubeId)
                    setTranscript(video.subtitle.transcript)
                }
            }
        })
    }, [])

    useEffect(() => {
        fetchVideo()
    }, [])

    return (
        <VideoPresenter
            loading={loading}
            youtubeId={youtubeId}
            transcript={transcript}
            goBack={goBack}
            onReady={onReady}
        />
    )
}

export default withRouter(VideoContainer)
