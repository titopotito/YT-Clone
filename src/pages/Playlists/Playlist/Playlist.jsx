import DetailsContainer from "../../../components/DetailsContainer/DetailsContainer";
import InfoContainer from "../../../components/InfoContainer/InfoContainer";
import PlaylistThumbnail from "../PlaylistThumbnail/PlaylistThumbnail";
import "./Playlist.css";

export default function Playlist() {
    return (
        <li className="playlist">
            <a href="">
                <PlaylistThumbnail src={"/images/dog.jpg"} />
                <DetailsContainer>
                    <h3 className="details-container-title-small">Liked Videos</h3>
                    <InfoContainer size={"small"}>
                        <span>Private</span>
                        <span>Playlist</span>
                    </InfoContainer>
                    <InfoContainer size={"small"}>
                        <span>Updated today</span>
                    </InfoContainer>
                </DetailsContainer>
            </a>
            <InfoContainer size={"small"}>
                <a href="">View full playlist</a>
            </InfoContainer>
        </li>
    );
}
