import DefaultPageContainer from "../../components/DefaultPageContainer/DefaultPageContainer";
import ChannelListItem from "./components/ChanelListItem/ChannelListItem";
import "./Channels.css";

export default function Channels({ isSidebarVisible }) {
    return (
        <DefaultPageContainer isSidebarVisible={isSidebarVisible} id={"channels-page"}>
            <ul id="channels-list">
                <ChannelListItem />
                <ChannelListItem />
                <ChannelListItem />
                <ChannelListItem />
                <ChannelListItem />
                <ChannelListItem />
                <ChannelListItem />
                <ChannelListItem />
                <ChannelListItem />
                <ChannelListItem />
            </ul>
        </DefaultPageContainer>
    );
}
