import { useState } from "react";

import "./App.css";

function App() {
    return (
        <>
            <header className="header">
                <div>
                    <button id="btn-nav" className="btn-basic">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <h1 id="brand">
                        <i className="fa-brands fa-youtube"></i>
                        <a href="/">YT Clone</a>
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
                        <i class="fa-solid fa-film"></i>
                    </button>
                    <button id="btn-notifications" className="btn-basic">
                        <i className="fa-regular fa-bell"></i>
                    </button>
                    <button id="btn-menu">
                        <div className="profile-pic">J</div>
                    </button>
                </div>
            </header>
            <nav>
                <div>
                    <a href="">Home</a>
                    <a href="">Shorts</a>
                    <a href="">Subscriptions</a>
                </div>
                <div>
                    <h2>
                        <a href="">You </a>
                    </h2>
                    <a href="">Your channel</a>
                    <a href="">History</a>
                    <a href="">Playlists</a>
                    <a href="">Your Videos</a>
                    <a href="">Watch Later</a>
                    <a href="">Liked Videos</a>
                </div>
                <div>
                    <h2>Subscriptions</h2>
                    <ul>
                        <li>
                            <a href="">
                                <img src="" alt="" />
                                <span>Jeikage</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="" alt="" />
                                <span>IWinToLoseGaming</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="">Settings</a>
                    <a href="">Report History</a>
                    <a href="">Help</a>
                    <a href="">Send Feedback</a>
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
