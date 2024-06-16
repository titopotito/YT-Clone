import { Link } from "react-router-dom";
import "./Content.css";

export default function Content() {
    return (
        <>
            <main id="studio-content-page">
                <h2>Channel content</h2>
                <div className="tab-container">
                    <button className={location.pathname === "/channel/videos" ? "btn-tab active" : "btn-tab"}>
                        <Link to={"/channel/videos"}>Videos</Link>
                    </button>
                    <button className={location.pathname === "/channel/shorts" ? "btn-tab active" : "btn-tab"}>
                        <Link to={"/channel/shorts"}>Shorts</Link>
                    </button>
                    <button className={location.pathname === "/channel/live" ? "btn-tab active" : "btn-tab"}>
                        <Link to={"/channel/live"}>Live</Link>
                    </button>
                    <button className={location.pathname === "/channel/playlists" ? "btn-tab active" : "btn-tab"}>
                        <Link to={"/channel/playlists"}>Playlists</Link>
                    </button>
                </div>
                <div className="content-filter-header">
                    <button>
                        <i class="fa-solid fa-filter"></i>
                    </button>
                    <span>Filter</span>
                </div>
                <div className="content-table-header">
                    <div>
                        <input type="checkbox" />
                        <span>Video</span>
                    </div>
                    <div>
                        <span>Visibility</span>
                    </div>
                    <div>
                        <span>Restrictions</span>
                    </div>
                    <div>
                        <span>Date </span>
                        <i class="fa-solid fa-arrow-down"></i>
                    </div>
                    <div>
                        <span>Views</span>
                    </div>
                    <div>
                        <span>Comments</span>
                    </div>
                    <div>
                        <span>Likes &#40;vs. dislikes&#41;</span>
                    </div>
                </div>
                <div className="video-content-list">
                    <button className="btn-blue-bg">
                        <span>UPLOAD VIDEOS</span>
                    </button>
                </div>
            </main>
        </>
    );
}
