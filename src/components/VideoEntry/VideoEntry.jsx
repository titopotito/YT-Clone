import VideoDetails from "../VideoDetails/VideoDetails";
import "./VideoEntry.css";

export default function VideoEntry() {
    return (
        <li className="video-entry">
            <a href="">
                <figure>
                    <img src="/images/dog.jpg" alt="" className="video-thumbnail" />
                </figure>
                <div className="video-details-wrapper">
                    <img src="/images/default_user_image.jpg" alt="" className="profile-img" />
                    <VideoDetails />
                </div>
            </a>
        </li>
    );
}
