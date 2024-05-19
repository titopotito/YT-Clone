import { Link } from "react-router-dom";
import "./StudioSidebar.css";

export default function StudioSidebar() {
    return (
        <nav id="studio-sidebar">
            <div>
                <div className="profile-pic big">J</div>
                <b>Your channel</b>
                <span>Jeikage</span>
            </div>
            <div id="studio-sidebar-nav-items">
                <Link>
                    <i class="fa-solid fa-table-columns"></i>
                    <span>Dashboard</span>
                </Link>
                <Link>
                    <i class="fa-brands fa-youtube"></i>
                    <span>Content</span>
                </Link>
                <Link>
                    <i class="fa-solid fa-chart-bar"></i>
                    <span>Analytics</span>
                </Link>
                <Link>
                    <i class="fa-regular fa-comment-dots"></i>
                    <span>Comments</span>
                </Link>
                <Link>
                    <i class="fa-regular fa-closed-captioning"></i>
                    <span>Subtitles</span>
                </Link>
                <Link>
                    <i class="fa-regular fa-copyright"></i>
                    <span>Copyright</span>
                </Link>
                <Link>
                    <i class="fa-solid fa-dollar-sign"></i>
                    <span>Earn</span>
                </Link>
                <Link>
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    <span>Customization</span>
                </Link>
                <Link>
                    <i class="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </Link>
                <Link>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <span>Send Feedback</span>
                </Link>
            </div>
        </nav>
    );
}
