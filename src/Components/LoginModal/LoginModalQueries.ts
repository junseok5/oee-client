export const SOCIAL_LOGIN_QUERY = `mutation SocialLogin($provider: String!, $accessToken: String!) {
    SocialLogin(provider: $provider, accessToken: $accessToken) {
        ok
        error
        token
        user {
            _id
            email
            displayName
            thumbnail
        }
    }
}`
