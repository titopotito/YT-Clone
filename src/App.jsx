import { useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    function toggleSidebarVisibility() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <MainHeader toggleSidebarVisibility={toggleSidebarVisibility} />
            <Sidebar isSidebarVisible={isSidebarVisible} />

            {/* <div>
                <main>
                    <ul>
                        <li>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h3>
                                        <a href="">Video Title</a>
                                    </h3>
                                    <div>
                                        <span>Creator</span>
                                    </div>
                                    <div>
                                        <span>15k Views</span>-<span>1 hour ago</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </main>
            </div> */}
        </>
    );
}

export default App;
