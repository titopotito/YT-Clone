import CommentSection from "./components/CommentSection/CommentSection";
import MainContent from "./components/MainContent/MainContent";
import "./Watch.css";

export default function Watch() {
    return (
        <div id="main-container">
            <div>
                <MainContent />
                <CommentSection />
            </div>
            <div></div>
        </div>
    );
}
