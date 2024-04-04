import Sidebar from "../Sidebar/Sidebar";
import "./DefaultPageContainer.css";

export default function DefaultPageContainer({ children, isSidebarVisible, id }) {
    return (
        <div id="page-container">
            <Sidebar isSidebarVisible={isSidebarVisible} />
            <main id={id}>{children}</main>
        </div>
    );
}
