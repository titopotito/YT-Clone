import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import StudioSidebar from "../../components/StudioSidebar/StudioSidebar";
import "./StudioLayout.css";

export default function StudioLayout() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    function toggleSidebarVisibility() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <MainHeader toggleSidebarVisibility={toggleSidebarVisibility} />

            <div id="studio-layout">
                <StudioSidebar />
                <Outlet />
            </div>
        </>
    );
}
