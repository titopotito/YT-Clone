import VideoGrid from "../../components/VideoGrid/VideoGrid";
import "./Home.css";

export default function Home() {
    return (
        <main id="home-page">
            <section id="feed-section">
                <VideoGrid />
            </section>
        </main>
    );
}
