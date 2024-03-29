import VideoEntry from "../../components/VideoEntry/VideoEntry";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

export default function ({ isSidebarVisible }) {
    return (
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
    );
}
