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
                    <div>
                        <h3 className="video-title">Video Title</h3>
                        <div>
                            <a className="video-creator-username">Jeikage</a>
                        </div>
                        <div>
                            <span className="video-views">15k Views</span>-
                            <span className="video-timestamp">1 hour ago</span>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    );
}
