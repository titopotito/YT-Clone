import DetailsContainer from "../../components/DetailsContainer/DetailsContainer";
import InfoContainer from "../../components/InfoContainer/InfoContainer";
import "./History.css";

export default function History() {
    return (
        <div id="history-page">
            <h1>Watch history</h1>
            <div>
                <div id="history-list">
                    <ul>
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                    </ul>
                </div>
                <div id="history-page-action-items">
                    <form action="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search watch history" />
                    </form>
                    <button className="btn-round-no-bg">
                        <i class="fa-regular fa-trash-can"></i>
                        <span>Clear all watch history</span>
                    </button>
                    <button className="btn-round-no-bg">
                        <i class="fa-solid fa-pause"></i>
                        <span>Pause watch history</span>
                    </button>
                    <button className="btn-round-no-bg">
                        <i class="fa-solid fa-gear"></i>
                        <span>Manage all history</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

function VideoItem() {
    return (
        <li className="history-video-item">
            <img src="/images/dog.jpg" alt="" />
            <div>
                <DetailsContainer>
                    <h3 className="details-container-title">This is the title of the video</h3>
                    <InfoContainer size={"small"}>
                        <span>Jeikage </span>
                        <span>27K views</span>
                    </InfoContainer>
                    <InfoContainer size={"small"}>
                        <p>
                            Irure do aliqua veniam ipsum sit sunt ad sit nostrud mollit proident. Lorem velit aliquip
                            reprehenderit irure velit magna. Exercitation occaecat cupidatat sit commodo. Cupidatat quis
                            laboris adipisicing enim anim et voluptate minim occaecat laborum cupidatat sit sunt sint.
                        </p>
                    </InfoContainer>
                </DetailsContainer>
            </div>
        </li>
    );
}
