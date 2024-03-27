import { useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import VideoEntry from "./components/VideoEntry/VideoEntry";
import "./App.css";

function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    function toggleSidebarVisibility() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <MainHeader toggleSidebarVisibility={toggleSidebarVisibility} />
            <div className="flex-container">
                <Sidebar isSidebarVisible={isSidebarVisible} />

                <div>
                    <main>
                        <ul id="contents">
                            <VideoEntry />
                            <VideoEntry />
                            <VideoEntry />
                            <VideoEntry />
                            <VideoEntry />
                            <VideoEntry />
                            <VideoEntry />
                            <VideoEntry />
                            <VideoEntry />
                            <VideoEntry />
                        </ul>
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;
