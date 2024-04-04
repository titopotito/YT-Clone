import { useState } from "react";
import DefaultPageContainer from "../../components/DefaultPageContainer/DefaultPageContainer";
import Playlist from "./Playlist/Playlist";
import "./Playlists.css";

export default function Playlists({ isSidebarVisible }) {
    const SortOptions = { RECENTLY_ADDED: "Recently added", A_Z: "A-Z" };
    const [sortOption, setSortOption] = useState(SortOptions.RECENTLY_ADDED);
    const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false);

    function toggleSortDropdownVisibility() {
        setIsSortDropdownVisible(!isSortDropdownVisible);
    }

    return (
        <DefaultPageContainer isSidebarVisible={isSidebarVisible} id={"playlists-page"}>
            <h2>Playlists</h2>
            <div className="dropdown-container">
                <button className="btn-round" onClick={() => toggleSortDropdownVisibility()}>
                    <span>{sortOption}</span>
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
                {isSortDropdownVisible ? (
                    <Dropdown
                        SortOptions={SortOptions}
                        toggleSortDropdownVisibility={toggleSortDropdownVisibility}
                        setSortOption={setSortOption}
                    />
                ) : (
                    <></>
                )}
            </div>
            <ul id="playlists">
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
            </ul>
        </DefaultPageContainer>
    );
}

function Dropdown({ SortOptions, toggleSortDropdownVisibility, setSortOption }) {
    function handeClick(option) {
        toggleSortDropdownVisibility();
        setSortOption(option);
    }
    return (
        <ul className="dropdown">
            <li onClick={() => handeClick(SortOptions.A_Z)}>{SortOptions.A_Z}</li>
            <li onClick={() => handeClick(SortOptions.RECENTLY_ADDED)}>{SortOptions.RECENTLY_ADDED}</li>
        </ul>
    );
}
