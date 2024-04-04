import DefaultPageContainer from "../../components/DefaultPageContainer/DefaultPageContainer";
import Sidebar from "../../components/Sidebar/Sidebar";
import ShortsListItem from "./components/ShortsListItem/ShortsListItem";
import "./Shorts.css";

export default function Shorts({ isSidebarVisible }) {
    return (
        <DefaultPageContainer isSidebarVisible={isSidebarVisible} id={"shorts-page"}>
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
        </DefaultPageContainer>
    );
}
