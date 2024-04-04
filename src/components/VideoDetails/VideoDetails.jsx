import { Link } from "react-router-dom";
import "./VideoDetails.css";

export default function VideoDetails() {
    return (
        <div className="video-details">
            <Link to={"/watch"}>
                <h3 className="video-title">Video Title</h3>
            </Link>
            <Link className="video-creator-username">Jeikage</Link>
            <Link to={"/watch"}>
                <span className="video-views">15k Views</span>
                <i className="fa-solid fa-circle dot"></i>
                <span className="video-timestamp">1 hour ago</span>
            </Link>
        </div>
    );
}
