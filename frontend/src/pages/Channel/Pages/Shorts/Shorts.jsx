import { Link } from "react-router-dom";
import DetailsContainer from "../../../../components/DetailsContainer/DetailsContainer";
import InfoContainer from "../../../../components/InfoContainer/InfoContainer";
import "./Shorts.css";

export default function Shorts() {
    return (
        <ul id="channel-page-shorts">
            <ShortItem />
            <ShortItem />
            <ShortItem />
            <ShortItem />
            <ShortItem />
            <ShortItem />
            <ShortItem />
            <ShortItem />
            <ShortItem />
        </ul>
    );
}

function ShortItem() {
    return (
        <li>
            <img src="/images/dog.jpg" alt="" />
            <DetailsContainer>
                <h5 className="details-container-title-small">
                    <Link>This is the the title of the video and the video is about a dogaaaaadsf dsfsdfsdfsdf</Link>
                </h5>
                <InfoContainer size={"small"}>
                    <Link>
                        <span>1.3K views</span>
                    </Link>
                </InfoContainer>
            </DetailsContainer>
        </li>
    );
}
