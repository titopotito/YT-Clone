import { Link } from "react-router-dom";
import DefaultPageContainer from "../../components/DefaultPageContainer/DefaultPageContainer";
import "./Playlist.css";
import InfoContainer from "../../components/InfoContainer/InfoContainer";
import DetailsContainer from "../../components/DetailsContainer/DetailsContainer";
export default function Playlist({ isSidebarVisible }) {
    return (
        <DefaultPageContainer isSidebarVisible={isSidebarVisible} id={"playlist-page"}>
            <section></section>
            <section>
                <button>Sort</button>
                <ul>
                    <li>
                        <div className="index-container">
                            <i className="fa-solid fa-grip-lines"></i>
                        </div>
                        {/* <img src="/images/dog.jpg" alt="" /> */}
                        <DetailsContainer>
                            <h3 className="details-container-title">Do in non sit irure ea sunt.</h3>
                            <InfoContainer size={"small"}>
                                <Link>Jeikage</Link>
                                <span>27M views</span>
                                <span>5 years ago</span>
                            </InfoContainer>
                        </DetailsContainer>
                        <button className="btn-icon">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    </li>
                </ul>
            </section>
        </DefaultPageContainer>
    );
}
