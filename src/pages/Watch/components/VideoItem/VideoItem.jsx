import VideoDetails from "../../../../components/VideoDetails/VideoDetails";
import "./VideoItem.css";

export default function VideoItem() {
    return (
        <li className="video-item">
            <a href="">
                <img src="/images/dog.jpg" alt="" />
                <VideoDetails />
            </a>
        </li>
    );
}
