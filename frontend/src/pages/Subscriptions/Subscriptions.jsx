import { Link } from "react-router-dom";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import "./Subscriptions.css";

export default function Subscriptions() {
    return (
        <main id="subscriptions-page">
            <div id="subscriptions-page-header">
                <h3>Latest</h3>
                <div>
                    <Link to={"/channels"} className="btn-blue">
                        <span>Manage</span>
                    </Link>

                    <button className="btn-icon">
                        <i className="fa-solid fa-grip"></i>
                    </button>
                    <button className="btn-icon">
                        <i className="fa-solid fa-list"></i>
                    </button>
                </div>
            </div>
            <section>
                <VideoGrid />
            </section>
        </main>
    );
}
