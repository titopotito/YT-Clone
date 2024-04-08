import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Channels from "./pages/Channels/Channels";
import Shorts from "./pages/Shorts/Shorts";
import Playlists from "./pages/Playlists/Playlists";
import Playlist from "./pages/Playlist/Playlist";
import Results from "./pages/Results/Results";
import "./App.css";

function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    function toggleSidebarVisibility() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <MainHeader toggleSidebarVisibility={toggleSidebarVisibility} />
            <Routes>
                <Route path="/" element={<Home isSidebarVisible={isSidebarVisible} />} />
                <Route
                    path="/watch"
                    element={
                        <Watch
                            isSidebarVisible={isSidebarVisible}
                            toggleSidebarVisibility={toggleSidebarVisibility}
                            setIsSidebarVisible={setIsSidebarVisible}
                        />
                    }
                />
                <Route path="/subscriptions" element={<Subscriptions isSidebarVisible={isSidebarVisible} />} />
                <Route path="/channels" element={<Channels isSidebarVisible={isSidebarVisible} />} />
                <Route path="/shorts" element={<Shorts isSidebarVisible={isSidebarVisible} />} />
                <Route path="/playlists" element={<Playlists isSidebarVisible={isSidebarVisible} />} />
                <Route path="/playlist" element={<Playlist isSidebarVisible={isSidebarVisible} />} />
                <Route path="/results" element={<Results isSidebarVisible={isSidebarVisible} />} />
            </Routes>
        </>
    );
}

export default App;
