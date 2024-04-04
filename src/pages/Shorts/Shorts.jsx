import Sidebar from "../../components/Sidebar/Sidebar";
import ShortsListItem from "./components/ShortsListItem/ShortsListItem";
import "./Shorts.css";

export default function Shorts({ isSidebarVisible }) {
    return (
        <div id="shorts-page-container">
            <Sidebar isSidebarVisible={isSidebarVisible} />
            <main>
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
        </div>
    );
}
