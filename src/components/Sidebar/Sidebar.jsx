import "./Sidebar.css";

export default function Sidebar({ isSidebarVisible }) {
    if (isSidebarVisible) {
        return (
            <nav id="sidebar">
                <div>
                    <a href="" className="nav-link">
                        <i className="fa-solid fa-house"></i>
                        <span>Home</span>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-solid fa-film"></i>
                        <span>Shorts</span>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-regular fa-address-book"></i>
                        <span>Subscriptions</span>
                    </a>
                </div>
                <div>
                    <a href="" id="profile-link">
                        <h2 className="nav-header">You</h2>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-regular fa-circle-user"></i>
                        <span>Your channel</span>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        <span>History</span>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-solid fa-list"></i>
                        <span>Playlists</span>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-regular fa-circle-play"></i>
                        <span>Your Videos</span>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-regular fa-clock"></i>
                        <span>Watch Later</span>
                    </a>
                    <a href="" className="nav-link">
                        <i className="fa-regular fa-thumbs-up"></i>
                        <span>Liked Videos</span>
                    </a>
                </div>
                <div>
                    <h2 className="nav-header">Subscriptions</h2>
                    <ul>
                        <li>
                            <a href="" className="nav-link">
                                <img src="/images/default_user_image.jpg" alt="" className="profile-img" />
                                <span>Jeikage</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="nav-link">
                                <img src="/images/default_user_image.jpg" alt="" className="profile-img" />
                                <span>IWinToLoseGaming</span>
                            </a>
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
                <a href="" className="nav-link-btn">
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </a>
                <a href="" className="nav-link-btn">
                    <i className="fa-solid fa-film"></i>
                    <span>Shorts</span>
                </a>
                <a href="" className="nav-link-btn">
                    <i className="fa-regular fa-address-book"></i>
                    <span>Subscriptions</span>
                </a>
                <a href="" className="nav-link-btn">
                    <i className="fa-solid fa-house-user"></i>
                    <span>You</span>
                </a>
            </nav>
        );
    }
}
