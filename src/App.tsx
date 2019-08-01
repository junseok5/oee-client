import React from "react"
import { GraphQLClient, ClientContext } from "graphql-hooks"
import { Route, Switch } from "react-router"
import loadable from "@loadable/component"

const client = new GraphQLClient({
    url: "http://localhost:4000/graphql",
    headers: {
        "X-JWT": localStorage.token
    }
})

const MainPage = loadable(() => import("./Pages/MainPage"))
const ExplorePage = loadable(() => import("./Pages/ExplorePage"))
const FavoriteVideoPage = loadable(() => import("./Pages/FavoriteVideoPage"))
const VideoPage = loadable(() => import("./Pages/VideoPage"))
const ProfilePage = loadable(() => import("./Pages/ProfilePage"))
const SearchPage = loadable(() => import("./Pages/SearchPage"))
const TermsPage = loadable(() => import("./Pages/TermsPage"))
const PrivacyPage = loadable(() => import("./Pages/PrivacyPage"))
const NotFoundPage = loadable(() => import("./Pages/NotFoundPage"))

const App: React.FC = () => {
    return (
        <ClientContext.Provider value={client}>
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route path="/explore" component={ExplorePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/policy/privacy" component={PrivacyPage} />
                <Route path="/policy/terms" component={TermsPage} />
                <Route path="/favorite/:userId" component={FavoriteVideoPage} />
                <Route path="/v/:videoId" component={VideoPage} />
                <Route path="/user/:userId" component={ProfilePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </ClientContext.Provider>
    )
}

export default App
