import DetailsContainer from "../../../DetailsContainer/DetailsContainer";
import InfoContainer from "../../../InfoContainer/InfoContainer";
import "./VideoItem.css";

export default function VideoItem() {
    return (
        <li className="video-item">
            <img src="/images/dog.jpg" alt="" />
            <DetailsContainer>
                <h3 className="details-container-title-small">Video Title</h3>
                <InfoContainer size={"small"}>
                    <span>Jeikage</span>
                </InfoContainer>
                <InfoContainer size={"small"}>
                    <span>15K Views</span>
                    <span>1 hour ago</span>
                </InfoContainer>
            </DetailsContainer>
        </li>
    );
}
