import { Link } from "react-router-dom";
import DetailsContainer from "../../../DetailsContainer/DetailsContainer";
import InfoContainer from "../../../InfoContainer/InfoContainer";
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
                <DetailsContainer>
                    <h3 className="details-container-title">Video Title</h3>
                    <InfoContainer>
                        <span>Jeikage</span>
                    </InfoContainer>
                    <InfoContainer>
                        <span>15K Views</span>
                        <span>1 hour ago</span>
                    </InfoContainer>
                </DetailsContainer>
            </div>
        </li>
    );
}
