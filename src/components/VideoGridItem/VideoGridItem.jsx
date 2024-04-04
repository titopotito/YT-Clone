import { Link } from "react-router-dom";
import VideoDetails from "../VideoDetails/VideoDetails";
import "./VideoGridItem.css";

export default function VideoGridItem() {
    return (
        <li className="video-grid-item">
            <Link to={"/watch"}>
                <figure>
                    <img src="/images/dog.jpg" alt="" className="video-thumbnail" />
                </figure>
            </Link>
            <div className="video-details-wrapper">
                <Link>
                    <img src="/images/default_user_image.jpg" alt="" className="profile-img" />
                </Link>
                <VideoDetails />
            </div>
        </li>
    );
}
