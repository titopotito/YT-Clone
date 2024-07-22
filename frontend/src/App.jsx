// ROUTER
import { Routes, Route } from "react-router-dom";

// LAYOUTS
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import FixedLayout from "./layouts/FixedLayout/FixedLayout";
import StudioLayout from "./layouts/StudioLayout/StudioLayout";

// PAGES
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Watch from "./pages/Watch/Watch";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Channels from "./pages/Channels/Channels";
import Shorts from "./pages/Shorts/Shorts";
import Playlists from "./pages/Playlists/Playlists";
import Playlist from "./pages/Playlist/Playlist";
import Results from "./pages/Results/Results";
import History from "./pages/History/History";
import * as Studio from "./pages/Studio/Studio";
import * as Channel from "./pages/Channel/Channel";

// CSS
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route element={<FixedLayout />}>
                    <Route path="/watch" element={<Watch />} />
                </Route>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shorts" element={<Shorts />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/channels" element={<Channels />} />
                    <Route path="/channel" element={<Channel.Layout />}>
                        <Route index element={<Channel.Home />} />
                        <Route path="videos" element={<Channel.Videos />} />
                        <Route path="shorts" element={<Channel.Shorts />} />
                        <Route path="live" element={<Channel.Live />} />
                        <Route path="playlists" element={<Channel.Playlists />} />
                        <Route path="community" element={<Channel.Community />} />
                    </Route>
                    <Route path="/history" element={<History />} />
                    <Route path="/playlists" element={<Playlists />} />
                    <Route path="/playlist" element={<Playlist />} />
                    <Route path="/results" element={<Results />} />
                </Route>
                <Route element={<StudioLayout />}>
                    <Route path="/studio" element={<Studio.Content />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
