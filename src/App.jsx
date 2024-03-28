import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import "./App.css";

function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    function toggleSidebarVisibility() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <MainHeader toggleSidebarVisibility={toggleSidebarVisibility} />
            <div className="flex-container">
                <Sidebar isSidebarVisible={isSidebarVisible} />

                <div>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
