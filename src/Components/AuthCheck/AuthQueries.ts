export const CHECK_LOGIN_QUERY = `query CheckLogin {
    CheckLogin {
        ok
        error
        user {
            _id
            email
            displayName
            thumbnail
        }
    }
}`
