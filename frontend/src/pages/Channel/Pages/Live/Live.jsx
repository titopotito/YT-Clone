import { Link } from "react-router-dom";
import DetailsContainer from "../../../../components/DetailsContainer/DetailsContainer";
import InfoContainer from "../../../../components/InfoContainer/InfoContainer";
import "./Live.css";

export default function Live() {
    return (
        <div id="channel-page-live">
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
                        <span>Streamed 14 hours ago</span>
                    </Link>
                </InfoContainer>
            </DetailsContainer>
        </li>
    );
}
