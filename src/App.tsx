import React from "react"
import { GraphQLClient, ClientContext } from "graphql-hooks"
import { Route, Switch } from "react-router"
import Loadable from "react-loadable"
import PageLoading from "./Components/PageLoading"

const client = new GraphQLClient({
    url: "http://localhost:4000/graphql",
    headers: {
        "X-JWT": localStorage.token
    }
})

const MainPage = Loadable({
    loader: () => import("./Pages/MainPage"),
    loading: PageLoading
})
const ExplorePage = Loadable({
    loader: () => import("./Pages/ExplorePage"),
    loading: PageLoading
})
const FavoriteVideoPage = Loadable({
    loader: () => import("./Pages/FavoriteVideoPage"),
    loading: PageLoading
})
const VideoPage = Loadable({
    loader: () => import("./Pages/VideoPage"),
    loading: PageLoading
})
const ProfilePage = Loadable({
    loader: () => import("./Pages/ProfilePage"),
    loading: PageLoading
})
const SearchPage = Loadable({
    loader: () => import("./Pages/SearchPage"),
    loading: PageLoading
})
const TermsPage = Loadable({
    loader: () => import("./Pages/TermsPage"),
    loading: PageLoading
})
const PrivacyPage = Loadable({
    loader: () => import("./Pages/PrivacyPage"),
    loading: PageLoading
})
const NotFoundPage = Loadable({
    loader: () => import("./Pages/NotFoundPage"),
    loading: PageLoading
})

const App: React.FC = () => {
    return (
        <ClientContext.Provider value={client}>
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route path="/tag/:tag/:page" component={MainPage} />
                <Route path="/keyword/:keyword/:page" component={MainPage} />
                <Route path="/level/:level/:page" component={MainPage} />
                <Route path="/explore" component={ExplorePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/policy/privacy" component={PrivacyPage} />
                <Route path="/policy/terms" component={TermsPage} />
                <Route path="/favorite/:userId" component={FavoriteVideoPage} />
                <Route path="/v/:videoId" component={VideoPage} />
                <Route path="/user/:userId" component={ProfilePage} />
                <Route path="/:page" component={MainPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </ClientContext.Provider>
    )
}

export default App
