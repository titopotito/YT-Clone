import VideoGridItem from "./components/VideoGridItem/VideoGridItem";
import "./VideoGrid.css";

export default function VideoGrid() {
    return (
        <div id="video-grid-container">
            <ul id="video-grid">
                <VideoGridItem />
                <VideoGridItem />
                <VideoGridItem />
                <VideoGridItem />
                <VideoGridItem />
                <VideoGridItem />
                <VideoGridItem />
                <VideoGridItem />
                <VideoGridItem />
                <VideoGridItem />
            </ul>
        </div>
    );
}
