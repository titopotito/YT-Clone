import { Outlet, useLocation } from "react-router-dom";
import InfoContainer from "../../components/InfoContainer/InfoContainer";
import Videos from "./Pages/Videos/Videos";
import Shorts from "./Pages/Shorts/Shorts";
import Live from "./Pages/Live/Live";
import Playlists from "./Pages/Playlists/Playlists";
import Community from "./Pages/Community/Community";
import "./Channel.css";

function Layout() {
    const location = useLocation();

    return (
        <main id="channel-page">
            <div>
                <img src="/images/sample_banner.jpg" alt="" id="channel-banner" />
                <div id="channel-header">
                    <img src="/images/default_user_image.jpg" alt="" />

                    <div>
                        <h3>Jeikage</h3>
                        <InfoContainer>
                            <span>@jeikage2123s</span>
                            <span>6.81M subscribers</span>
                            <span>9.6K videos</span>
                        </InfoContainer>
                        <InfoContainer>
                            <span>
                                More about this channel <i class="fa-solid fa-chevron-right"></i>
                            </span>
                        </InfoContainer>
                        <div id="channel-header-btn-container">
                            <button className="btn-round">Customize channel</button>
                            <button className="btn-round">Manage videos</button>
                        </div>
                    </div>
                </div>
                <div id="channel-page-tab-container">
                    <button className={location.pathname === "/channel/home" ? "btn-tab active" : "btn-tab"}>
                        Home
                    </button>
                    <button className={location.pathname === "/channel" ? "btn-tab active" : "btn-tab"}>Videos</button>
                    <button className={location.pathname === "/channel/shorts" ? "btn-tab active" : "btn-tab"}>
                        Shorts
                    </button>
                    <button className={location.pathname === "/channel/live" ? "btn-tab active" : "btn-tab"}>
                        Live
                    </button>
                    <button className={location.pathname === "/channel/playlists" ? "btn-tab active" : "btn-tab"}>
                        Playlists
                    </button>
                    <button className={location.pathname === "/channel/community" ? "btn-tab active" : "btn-tab"}>
                        Community
                    </button>
                    <button className="btn-icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <Outlet />
            </div>
        </main>
    );
}

export { Layout, Videos, Shorts, Live, Playlists, Community };
