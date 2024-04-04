import Sidebar from "../../components/Sidebar/Sidebar";
import ChannelListItem from "./components/ChanelListItem/ChannelListItem";
import "./Channels.css";

export default function Channels({ isSidebarVisible }) {
    return (
        <div id="channels-page-container">
            <Sidebar isSidebarVisible={isSidebarVisible} />
            <main>
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
            </main>
        </div>
    );
}
