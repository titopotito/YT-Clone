import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import StudioSidebar from "../../components/StudioSidebar/StudioSidebar";

export default function Studio() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    function toggleSidebarVisibility() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <MainHeader toggleSidebarVisibility={toggleSidebarVisibility} />

            <div id="default-layout">
                <StudioSidebar />
                <Outlet />
            </div>
        </>
    );
}
