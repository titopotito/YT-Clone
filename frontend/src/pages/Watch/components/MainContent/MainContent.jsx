import { Link } from "react-router-dom";
import "./MainContent.css";

export default function MainContent() {
    return (
        <main id="main-content">
            <video src="/videos/marmar.mp4" width="780" height="440" id="main-video">
                Your browser does not support the video tag.
            </video>
            <h3 id="main-video-title">Marmar</h3>
            <div id="action-row">
                <div>
                    <div id="owner-details">
                        <img src="/images/default_user_image.jpg" alt="" className="profile-img" />
                        <div>
                            <Link id="owner">Web Dev Simplified</Link>
                            <span id="owner-subscribers">1.5M subscribers</span>
                        </div>
                    </div>
                    <button className="btn-round">
                        <i className="fa-regular fa-bell"></i>
                        <span> Subscribe</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                <div id="actions">
                    <div>
                        <button id="btn-like">
                            <i className="fa-regular fa-thumbs-up"></i>
                            <span>13k</span>
                        </button>

                        <button id="btn-dislike">
                            <i className="fa-regular fa-thumbs-up"></i>
                        </button>
                    </div>
                    <button className="btn-round">
                        <i className="fa-solid fa-share"></i>
                        <span>Share</span>
                    </button>
                    <button className="btn-round">
                        <i className="fa-solid fa-download"></i>
                        <span>Download</span>
                    </button>
                    <button className="btn-round">
                        <i className="fa-solid fa-ellipsis"></i>
                    </button>
                </div>
            </div>
            <div id="main-details">
                <div>
                    <span>494,961</span>
                    <span> views - </span>
                    <span>Aug. 3, 2022</span>
                </div>
                <p>
                    Sint pariatur proident exercitation dolor qui dolore. Sit elit cillum magna anim enim est ipsum
                    excepteur ullamco ea non adipisicing laborum. Aliquip fugiat labore esse excepteur et ex. Aliquip
                    deserunt cillum cupidatat commodo laboris consectetur. Ex deserunt consequat magna qui consectetur
                    enim minim ea. In mollit nulla eu laborum laborum. Nisi duis cillum ipsum ipsum incididunt cupidatat
                    sint esse ut in non nisi reprehenderit ullamco. Cupidatat excepteur enim aliqua ullamco sit irure
                    tempor nostrud enim. Tempor ad pariatur cupidatat amet cupidatat excepteur ut. Minim voluptate minim
                    anim incididunt officia non ea nisi quis non do occaecat anim. Excepteur mollit ea qui culpa
                    proident duis qui ea. Amet incididunt enim fugiat eu non labore Lorem minim pariatur adipisicing
                    tempor et ipsum ea. Aliqua sint excepteur ut Lorem enim aliquip veniam deserunt ullamco cillum
                    reprehenderit sint ut. Occaecat do qui labore deserunt reprehenderit est laboris duis incididunt
                    nostrud proident aute.
                </p>
                <button>Show More</button>
            </div>
        </main>
    );
}
