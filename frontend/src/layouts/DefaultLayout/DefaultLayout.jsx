import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./DefaultLayout.css";

export default function DefaultLayout() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    function toggleSidebarVisibility() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <MainHeader toggleSidebarVisibility={toggleSidebarVisibility} />

            <div id="default-layout">
                <Sidebar isSidebarVisible={isSidebarVisible} />
                <Outlet />
            </div>
        </>
    );
}
