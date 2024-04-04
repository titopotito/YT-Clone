import DefaultPageContainer from "../../components/DefaultPageContainer/DefaultPageContainer";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import "./Home.css";

export default function ({ isSidebarVisible }) {
    return (
        <DefaultPageContainer isSidebarVisible={isSidebarVisible} id={"home-page"}>
            <section id="feed-section">
                <VideoGrid />
            </section>
        </DefaultPageContainer>
    );
}
