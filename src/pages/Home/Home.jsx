import Sidebar from "../../components/Sidebar/Sidebar";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import "./Home.css";

export default function ({ isSidebarVisible }) {
    return (
        <div id="home-page-container">
            <Sidebar isSidebarVisible={isSidebarVisible} />
            <div>
                <main>
                    <VideoGrid />
                </main>
            </div>
        </div>
    );
}
