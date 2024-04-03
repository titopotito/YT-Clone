import Sidebar from "../../components/Sidebar/Sidebar";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import "./Subscriptions.css";

export default function Subscriptions({ isSidebarVisible }) {
    return (
        <div id="subscriptions-page-container">
            <Sidebar isSidebarVisible={isSidebarVisible} />
            <div>
                <div id="subscriptions-page-header">
                    <h3>Latest</h3>
                    <div>
                        <button className="btn-blue">
                            <span>Manage</span>
                        </button>
                        <button className="btn-icon">
                            <i className="fa-solid fa-grip"></i>
                        </button>
                        <button className="btn-icon">
                            <i className="fa-solid fa-list"></i>
                        </button>
                    </div>
                </div>
                <main>
                    <VideoGrid />
                </main>
            </div>
        </div>
    );
}
