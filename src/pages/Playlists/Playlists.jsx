import { useState } from "react";
import DefaultPageContainer from "../../components/DefaultPageContainer/DefaultPageContainer";
import Playlist from "./Playlist/Playlist";
import "./Playlists.css";
import DropdownContainer from "../../components/DropdownContainer/DropdownContainer";

const OPTIONS = { RECENTLY_ADDED: "Recently added", A_Z: "A-Z" };

export default function Playlists({ isSidebarVisible }) {
    const [sortOption, setSortOption] = useState(OPTIONS.RECENTLY_ADDED);
    const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false);

    function handeClick(option) {
        setIsSortDropdownVisible(false);
        setSortOption(option);
    }

    return (
        <DefaultPageContainer isSidebarVisible={isSidebarVisible} id={"playlists-page"}>
            <h2>Playlists</h2>
            <DropdownContainer
                btnConfig={{ className: "btn-round", text: sortOption, icon2: "fa-solid fa-chevron-down" }}
            >
                <li onClick={() => handeClick(OPTIONS.A_Z)}>{OPTIONS.A_Z}</li>
                <li onClick={() => handeClick(OPTIONS.RECENTLY_ADDED)}>{OPTIONS.RECENTLY_ADDED}</li>
            </DropdownContainer>

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
