import VideoDetails from "../VideoDetails/VideoDetails";
import "./VideoGridItem.css";

export default function VideoGridItem() {
    return (
        <li className="video-grid-item">
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
