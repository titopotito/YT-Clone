import CommentSection from "./components/CommentSection/CommentSection";
import MainContent from "./components/MainContent/MainContent";
import VideoList from "../../components/VideoList/VideoList";
import "./Watch.css";

export default function Watch() {
    return (
        <div id="watch-page-container">
            <div>
                <div>
                    <MainContent />
                    <CommentSection />
                </div>
                <div>
                    <figure className="banner">
                        <img src="/images/sample_banner.jpg" alt="" />
                    </figure>
                    <VideoList />
                </div>
            </div>
        </div>
    );
}
