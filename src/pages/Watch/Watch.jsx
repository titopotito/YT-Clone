import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import CommentSection from "./components/CommentSection/CommentSection";
import MainContent from "./components/MainContent/MainContent";
import VideoList from "./components/VideoList/VideoList";
import "./Watch.css";

export default function Watch({ isSidebarVisible, toggleSidebarVisibility, setIsSidebarVisible }) {
    useEffect(() => {
        setIsSidebarVisible(false);
    }, []);

    return (
        <div id="watch-page-container">
            <ToggleSidebar isSidebarVisible={isSidebarVisible} toggleSidebarVisibility={toggleSidebarVisibility} />
            <div>
                <div>
                    <MainContent />
                    <CommentSection />
                </div>
                <div>
                    <figure className="banner">
                        <img src="/images/sample_banner.jpg" alt="" />
                    </figure>
                    <VideoList />
                </div>
            </div>
        </div>
    );
}

function ToggleSidebar({ isSidebarVisible, toggleSidebarVisibility }) {
    if (isSidebarVisible) {
        return (
            <>
                <Sidebar isSidebarVisible={isSidebarVisible} />
                <div id="overlay-mask" onClick={toggleSidebarVisibility}></div>
            </>
        );
    }
}
