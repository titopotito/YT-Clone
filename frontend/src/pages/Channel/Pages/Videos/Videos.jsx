import { Link } from "react-router-dom";
import DetailsContainer from "../../../../components/DetailsContainer/DetailsContainer";
import InfoContainer from "../../../../components/InfoContainer/InfoContainer";
import "./Videos.css";

export default function Videos() {
    return (
        <div id="channel-page-videos">
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
                        <span>14 hours ago</span>
                    </Link>
                </InfoContainer>
            </DetailsContainer>
        </li>
    );
}
