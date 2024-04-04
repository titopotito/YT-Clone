import { Link } from "react-router-dom";
import DefaultPageContainer from "../../components/DefaultPageContainer/DefaultPageContainer";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import "./Subscriptions.css";

export default function Subscriptions({ isSidebarVisible }) {
    return (
        <DefaultPageContainer isSidebarVisible={isSidebarVisible} id={"subscriptions-page"}>
            <div id="subscriptions-page-header">
                <h3>Latest</h3>
                <div>
                    <button className="btn-blue">
                        <Link to={"/channels"}>Manage</Link>
                    </button>
                    <button className="btn-icon">
                        <i className="fa-solid fa-grip"></i>
                    </button>
                    <button className="btn-icon">
                        <i className="fa-solid fa-list"></i>
                    </button>
                </div>
            </div>
            <VideoGrid />
        </DefaultPageContainer>
    );
}
