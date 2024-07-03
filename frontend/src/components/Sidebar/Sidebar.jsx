import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ isSidebarVisible }) {
    if (isSidebarVisible) {
        return (
            <nav id="sidebar">
                <div>
                    <Link to={"/"} className="nav-link">
                        <i className="fa-solid fa-house"></i>
                        <span>Home</span>
                    </Link>
                    <Link to={"/shorts"} className="nav-link">
                        <i className="fa-solid fa-film"></i>
                        <span>Shorts</span>
                    </Link>
                    <Link to={"/subscriptions"} className="nav-link">
                        <i className="fa-regular fa-address-book"></i>
                        <span>Subscriptions</span>
                    </Link>
                </div>
                <div>
                    <a href="" id="profile-link">
                        <h2 className="nav-header">You</h2>
                        <i className="fa-solid fa-chevron-right"></i>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-regular fa-circle-user"></i>
                        <span>Your channel</span>
                    </a>
                    <Link to={"/history"} className="nav-link">
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        <span>History</span>
                    </Link>
                    <Link to={"/playlists"} className="nav-link">
                        <i className="fa-solid fa-list"></i>
                        <span>Playlists</span>
                    </Link>
                    <Link to={"/studio"} className="nav-link">
                        <i className="fa-regular fa-circle-play"></i>
                        <span>Your Videos</span>
                    </Link>
                    <Link to={"/playlist"} className="nav-link">
                        <i className="fa-regular fa-clock"></i>
                        <span>Watch Later</span>
                    </Link>
                    <Link to={"/playlist"} className="nav-link">
                        <i className="fa-regular fa-thumbs-up"></i>
                        <span>Liked Videos</span>
                    </Link>
                </div>
                <div>
                    <h2 className="nav-header">Subscriptions</h2>
                    <ul>
                        <li>
                            <Link to={"/channel"} className="nav-link">
                                <img src="/images/default_user_image.jpg" alt="" className="profile-img" />
                                <span>Jeikage</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/channel"} className="nav-link">
                                <img src="/images/default_user_image.jpg" alt="" className="profile-img" />
                                <span>IWinToLoseGaming</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="" className="nav-link">
                        <i className="fa-solid fa-gear"></i>
                        <span>Settings</span>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-regular fa-flag"></i>
                        <span>Report History</span>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-regular fa-circle-question"></i>
                        <span>Help</span>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-solid fa-circle-exclamation"></i>
                        <span>Send Feedback</span>
                    </a>
                </div>
            </nav>
        );
    } else {
        return (
            <nav id="sidebar-min">
                <Link to={"/"} className="nav-link-btn">
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </Link>
                <Link to={"/shorts"} className="nav-link-btn">
                    <i className="fa-solid fa-film"></i>
                    <span>Shorts</span>
                </Link>
                <Link to={"/subscriptions"} className="nav-link-btn">
                    <i className="fa-regular fa-address-book"></i>
                    <span>Subscriptions</span>
                </Link>
                <a href="" className="nav-link-btn">
                    <i className="fa-solid fa-house-user"></i>
                    <span>You</span>
                </a>
            </nav>
        );
    }
}
