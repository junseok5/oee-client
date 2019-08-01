export const GET_VIDEO_LIST_QUERY = `query GetVideoList(
    $page: Int!
    $tag: String
    $keyword: String
    $level: String
) {
    GetVideoList(
        page: $page
        tag: $tag
        keyword: $keyword
        level: $level
    ) {
        ok
        videos {
            _id
            youtubeId
            title
            overayTime
        }
        pageCount
    }
}`
