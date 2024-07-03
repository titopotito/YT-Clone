import ShortsListItem from "./components/ShortsListItem/ShortsListItem";
import "./Shorts.css";

export default function Shorts() {
    return (
        <main id="shorts-page">
            <ul id="shorts-list">
                <ShortsListItem />
                <ShortsListItem />
                <ShortsListItem />
                <ShortsListItem />
                <ShortsListItem />
                <ShortsListItem />
                <ShortsListItem />
                <ShortsListItem />
            </ul>
        </main>
    );
}
