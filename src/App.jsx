import { useState } from "react";

import "./App.css";

function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    function toggleSidebarVisibility() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <header id="header">
                <div>
                    <button id="btn-nav" className="btn-basic" onClick={() => toggleSidebarVisibility()}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <h1 id="brand">
                        <a href="">
                            <i className="fa-brands fa-youtube"></i>
                            <span>YT Clone</span>
                        </a>
                    </h1>
                </div>
                <div>
                    <form action="" id="search-form">
                        <input type="text" placeholder="Search" />
                        <button type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
                <div>
                    <button id="btn-create" className="btn-basic">
                        <i className="fa-solid fa-video"></i>
                    </button>
                    <button id="btn-notifications" className="btn-basic">
                        <i className="fa-regular fa-bell"></i>
                    </button>
                    <button id="btn-menu">
                        <div className="profile-pic">J</div>
                    </button>
                </div>
            </header>

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
            <div>
                <div>
                    <button>All</button>
                    <button>Gaming</button>
                    <button>Star Rail</button>
                    <button>Genshin</button>
                    <button>Javascript</button>
                </div>
                <div>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                </div>
                <main>
                    <ul>
                        <li>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h3>
                                        <a href="">Video Title</a>
                                    </h3>
                                    <div>
                                        <span>Creator</span>
                                    </div>
                                    <div>
                                        <span>15k Views</span>-<span>1 hour ago</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </main>
            </div>
        </>
    );
}

export default App;
