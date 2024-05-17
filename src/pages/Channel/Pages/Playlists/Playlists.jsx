import { Link } from "react-router-dom";
import DetailsContainer from "../../../../components/DetailsContainer/DetailsContainer";
import InfoContainer from "../../../../components/InfoContainer/InfoContainer";
import PlaylistThumbnail from "../../../Playlists/PlaylistThumbnail/PlaylistThumbnail";
import "./Playlists.css";

export default function Playlists() {
    return (
        <div id="channel-page-playlists">
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
            </ul>
        </div>
    );
}

function PlaylistItem() {
    return (
        <li>
            <Link>
                <PlaylistThumbnail />
            </Link>
            <DetailsContainer>
                <h5 className="details-container-title-small">
                    <Link>This is the the title of the video and the video is about a dogaaaaadsf dsfsdfsdfsdf</Link>
                </h5>
                <InfoContainer size={"small"}>
                    <Link>View full playlist</Link>
                </InfoContainer>
            </DetailsContainer>
        </li>
    );
}
