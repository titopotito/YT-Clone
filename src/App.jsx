import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";
import "./App.css";

function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    function toggleSidebarVisibility() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <MainHeader toggleSidebarVisibility={toggleSidebarVisibility} />
            <Routes>
                <Route path="/" element={<Home isSidebarVisible={isSidebarVisible} />} />
                <Route path="/watch" element={<Watch />} />
            </Routes>
        </>
    );
}

export default App;
