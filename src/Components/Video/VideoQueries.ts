export const GET_VIDEO_QUERY = `query GetVideo($id: String!) {
    GetVideo(id: $id) {
        ok
        error
        video {
            _id
            youtubeId
            overayTime
            subtitle {
                transcript {
                    start
                    end
                    textContent
                }
            }
        }
    }
}`
