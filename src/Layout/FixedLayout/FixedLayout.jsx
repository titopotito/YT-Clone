import MainHeader from "../../components/MainHeader/MainHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./FixedLayout.css";

export default function FixedLayout() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    function toggleSidebarVisibility() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <MainHeader toggleSidebarVisibility={toggleSidebarVisibility} />

            <div id="fixed-layout">
                <ToggleSidebar isSidebarVisible={isSidebarVisible} toggleSidebarVisibility={toggleSidebarVisibility} />
                <Outlet />
            </div>
        </>
    );
}

function ToggleSidebar({ isSidebarVisible, toggleSidebarVisibility }) {
    if (isSidebarVisible) {
        return (
            <>
                <Sidebar isSidebarVisible={isSidebarVisible} />
                <div id="overlay-mask" onClick={toggleSidebarVisibility}></div>
            </>
        );
    }
}
