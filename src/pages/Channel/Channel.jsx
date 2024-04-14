import { Routes, Route, Link } from "react-router-dom";
import DefaultPageContainer from "../../components/DefaultPageContainer/DefaultPageContainer";
import InfoContainer from "../../components/InfoContainer/InfoContainer";
import Videos from "./Pages/Videos/Videos";
import "./Channel.css";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import DetailsContainer from "../../components/DetailsContainer/DetailsContainer";

export default function Channel({ isSidebarVisible }) {
    return (
        <DefaultPageContainer isSidebarVisible={isSidebarVisible} id={"channel-page"}>
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
                    <button className="btn-tab active">Home</button>
                    <button className="btn-tab">Videos</button>
                    <button className="btn-tab">Shorts</button>
                    <button className="btn-tab">Live</button>
                    <button className="btn-tab">Playlists</button>
                    <button className="btn-tab">Community</button>
                    <button className="btn-icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div>
                    <div id="channel-sort-btn-container">
                        <button className="btn-basic active">
                            <span>Latest</span>
                        </button>
                        <button className="btn-basic">
                            <span>Popular</span>
                        </button>
                        <button className="btn-basic">
                            <span>Oldest</span>
                        </button>
                    </div>
                    {/* <VideoGrid /> */}
                    <ul>
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                    </ul>
                </div>
            </div>
        </DefaultPageContainer>
    );
}

function VideoItem() {
    return (
        <li>
            <Link>
                <img src="/images/dog.jpg" alt="" />
            </Link>
            <DetailsContainer>
                <h5 className="details-container-title-small">
                    <Link>This is the the title of the video and the video is about a dogaaaaadsf dsfsdfsdfsdf</Link>
                </h5>
                <InfoContainer size={"small"}>
                    <Link>
                        <span>1.3K views</span>
                    </Link>
                    <Link>
                        <span>14 hours ago</span>
                    </Link>
                </InfoContainer>
            </DetailsContainer>
        </li>
    );
}
