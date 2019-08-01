export const CHECK_LOGIN_QUERY = `query CheckLogin {
    CheckLogin {
        ok
        user {
            _id
            email
            displayName
            thumbnail
        }
    }
}`
