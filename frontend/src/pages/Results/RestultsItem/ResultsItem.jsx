import { Link } from "react-router-dom";
import DetailsContainer from "../../../components/DetailsContainer/DetailsContainer";
import InfoContainer from "../../../components/InfoContainer/InfoContainer";
import "./ResultsItem.css";
import DropdownContainer from "../../../components/DropdownContainer/DropdownContainer";

export default function ResultsItem() {
    return (
        <li className="search-result-item">
            <Link>
                <img src="/images/dog.jpg" alt="" className="search-result-thumbnail" />
            </Link>
            <DetailsContainer>
                <Link>
                    <h3 className="details-container-title">Video Title</h3>
                </Link>
                <InfoContainer className="search-result-details" size={"small"}>
                    <span>629K views</span>
                    <span>8 hours ago</span>
                </InfoContainer>
                <Link className="search-result-creator">
                    <img src="/images/default_user_image.jpg" alt="" className="profile-img" />

                    <span>Jeikage</span>
                </Link>
                <InfoContainer className="search-result-description" size={"small"}>
                    <p>
                        Nisi officia mollit anim excepteur culpa. Est duis officia eiusmod fugiat id nisi labore ea
                        adipisicing eu exercitation. Sit nulla officia veniam aliquip qui cillum elit et veniam. Do
                        dolore ad aliqua non est laboris fugiat est. Est sint sint ea cillum dolor tempor minim sunt
                        officia duis nulla. Ullamco amet Lorem aute aute aliquip deserunt dolore irure sit. Occaecat
                        amet in laboris proident nulla sit ad labore eu eu ex exercitation ea.
                    </p>
                </InfoContainer>
            </DetailsContainer>
            <div>
                <DropdownContainer btnConfig={{ className: "btn-icon", icon1: "fa-solid fa-ellipsis-vertical" }}>
                    <li>
                        <i class="fa-solid fa-list-check"></i>
                        <span>Add to queue</span>
                    </li>
                    <li>
                        <i class="fa-regular fa-clock"></i>
                        <span>Save to Watch later</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-list"></i>
                        <span>Save to playlist</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-download"></i>
                        <span>Download</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-share"></i>
                        <span>Share</span>
                    </li>
                    <li>
                        <i class="fa-regular fa-flag"></i>
                        <span>Report</span>
                    </li>
                </DropdownContainer>
            </div>
        </li>
    );
}
