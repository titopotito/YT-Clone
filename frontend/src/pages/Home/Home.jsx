import { useEffect } from "react";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import * as APIHandler from "../../js/apiHandler.js";
import "./Home.css";

export default function Home() {
    useEffect(() => {
        APIHandler.get("videos").then((response) => {
            console.log(response);
        });
    });

    return (
        <main id="home-page">
            <VideoGrid />
        </main>
    );
}
