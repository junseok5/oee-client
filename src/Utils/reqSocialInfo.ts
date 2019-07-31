import hello from "hellojs"

hello.init(
    {
        facebook: "2162065663921065",
        google:
            "611612393871-sjl30686s9oogpr8srbs69hjna7gh2me.apps.googleusercontent.com"
    },
    { redirect_uri: "/" }
)

const providerMap: { [key: string]: () => Promise<any> } = {
    facebook: () => {
        return new Promise<any>((resolve, reject) => {
            hello.login("facebook", { scope: "email" }).then(
                auth => {
                    const { authResponse } = auth

                    if (authResponse) {
                        resolve(authResponse.access_token)
                    } else {
                        reject("Auth response undefined")
                    }
                },
                e => reject(e)
            )
        })
    },
    google: () => {
        return new Promise<any>((resolve, reject) => {
            hello.login("google", { scope: "email" }).then(
                auth => {
                    const { authResponse } = auth

                    if (authResponse) {
                        resolve(authResponse.access_token)
                    } else {
                        reject("Auth response undefined")
                    }
                },
                e => reject(e)
            )
        })
    }
}

export default (provider: string) => providerMap[provider]()
