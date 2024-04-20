import { Link } from "react-router-dom";
import { useState } from "react";
import InfoContainer from "../../components/InfoContainer/InfoContainer";
import DetailsContainer from "../../components/DetailsContainer/DetailsContainer";
import DropdownContainer from "../../components/DropdownContainer/DropdownContainer";
import "./Playlist.css";

export default function Playlist() {
    return (
        <main id="playlist-page">
            <section id="playlist-header">
                <img src="/images/dog.jpg" alt="" />
                <div id="playlist-header-row-1">
                    <h2>Anime OPs and EDs</h2>

                    <button className="btn-icon">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
                <Link id="playlist-header-row-2">
                    <span>Jesmar User</span>
                </Link>
                <div id="playlist-header-row-3">
                    <button>
                        <span>Private</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                <div id="playlist-header-row-4">
                    <span>82 videos</span>
                    <span>3,013 views</span>
                    <span>Updated today</span>
                </div>
                <div id="playlist-header-row-5">
                    <button className="btn-round">
                        <i class="fa-solid fa-download"></i>
                    </button>
                    <PlaylistOptionBtn />
                </div>
                <div id="playlist-header-row-6">
                    <button className="btn-round">
                        <i class="fa-solid fa-play"></i>
                        <span>Play All</span>
                    </button>
                    <button className="btn-round">
                        <i class="fa-solid fa-shuffle"></i>
                        <span>Shuffle</span>
                    </button>
                </div>
                <div id="playlist-header-row-7">
                    <p>No Description</p>
                    <button className="btn-icon">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
            </section>
            <section id="playlist-section">
                <button className="btn-sort">
                    <i className="fa-solid fa-signal"></i>
                    <span>Sort</span>
                </button>
                <ul>
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                    <PlaylistItem />
                </ul>
            </section>
        </main>
    );
}

const VISIBILITY_OPTION = {
    VISIBLE: { ICON: "fa-regular fa-eye", TEXT: "Show unavailable videos" },
    NOT_VISIBLE: { ICON: "fa-regular fa-eye-slash", TEXT: "Hide unavailable videos" },
};

function PlaylistOptionBtn() {
    const [visibilityOption, setVisibilityOption] = useState(VISIBILITY_OPTION.NOT_VISIBLE);

    function toggleVisibilityOption() {
        if (visibilityOption === VISIBILITY_OPTION.NOT_VISIBLE) setVisibilityOption(VISIBILITY_OPTION.VISIBLE);
        else setVisibilityOption(VISIBILITY_OPTION.NOT_VISIBLE);
    }

    return (
        <DropdownContainer btnConfig={{ className: "btn-round", icon1: "fa-solid fa-ellipsis-vertical" }}>
            <li onClick={toggleVisibilityOption}>
                <i class={visibilityOption.ICON}></i>
                <span>{visibilityOption.TEXT}</span>
            </li>
            <li>
                <i class="fa-solid fa-plus"></i>
                <span>Add videos</span>
            </li>
            <li>
                <i class="fa-solid fa-folder-plus"></i>
                <span>Add all to...</span>
            </li>
            <li>
                <i class="fa-solid fa-users"></i>
                <span>Collaborate</span>
            </li>
            <li>
                <i class="fa-solid fa-gear"></i>
                <span>Playlist Settings</span>
            </li>
            <li>
                <i class="fa-solid fa-trash-can"></i>
                <span>Delete playlist</span>
            </li>
        </DropdownContainer>
    );
}

function PlaylistItem() {
    return (
        <li className="playlist-item">
            <div className="index-container">
                <i className="fa-solid fa-grip-lines"></i>
            </div>
            <div>
                <img src="/images/dog.jpg" alt="" className="thumbnail" />
                <DetailsContainer>
                    <h3 className="details-container-title">Do in non sit irure ea sunt.</h3>
                    <InfoContainer size={"small"}>
                        <Link>Jeikage</Link>
                        <span>27M views</span>
                        <span>5 years ago</span>
                    </InfoContainer>
                </DetailsContainer>
                <button className="btn-icon">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div>
        </li>
    );
}
