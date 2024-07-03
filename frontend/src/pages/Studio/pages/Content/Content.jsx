import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UploadVideoForm from "./components/UploadVideoForm/UploadVideoForm";
import "./Content.css";

export default function Content() {
    const [isUploadVideoFormVisible, setIsUploadVideoFormVisible] = useState(false);

    const [testVideos, setTestVideos] = useState([{ id: 0, title: "sample title" }]);

    useEffect(() => {
        // setTestVideos(null);
        setTestVideos([
            {
                id: 1,
                thumbnail: "thumbnail",
                title: "this is the title",
                description: "sample description here",
                visibility: "public",
                restrictions: "None",
                date: "Jun 16, 2024",
                views: 100,
                comments: 200,
                likesAndDislikes: 0.9,
            },
            {
                id: 2,
                thumbnail: "thumbnail 2",
                title: "this is the title number 2",
                description: null,
                visibility: "draft",
                restrictions: "None",
                date: "Jun 17, 2024",
                views: null,
                comments: null,
                likesAndDislikes: null,
            },
        ]);
    }, []);

    function toggleUploadVideoFormVisibility() {
        setIsUploadVideoFormVisible(!isUploadVideoFormVisible);
    }

    return (
        <>
            <main id="studio-content-page">
                <h2>Channel content</h2>
                <div className="tab-container">
                    <button className={location.pathname === "/channel/videos" ? "btn-tab active" : "btn-tab"}>
                        <Link to={"/channel/videos"}>Videos</Link>
                    </button>
                    <button className={location.pathname === "/channel/shorts" ? "btn-tab active" : "btn-tab"}>
                        <Link to={"/channel/shorts"}>Shorts</Link>
                    </button>
                    <button className={location.pathname === "/channel/live" ? "btn-tab active" : "btn-tab"}>
                        <Link to={"/channel/live"}>Live</Link>
                    </button>
                    <button className={location.pathname === "/channel/playlists" ? "btn-tab active" : "btn-tab"}>
                        <Link to={"/channel/playlists"}>Playlists</Link>
                    </button>
                    <button className="btn-tab">
                        <Link onClick={toggleUploadVideoFormVisibility}>Create</Link>
                    </button>
                </div>
                <div className="content-filter-header">
                    <button>
                        <i className="fa-solid fa-filter"></i>
                    </button>
                    <span>Filter</span>
                </div>
                <div className="content-table-header">
                    <div>
                        <input type="checkbox" />
                        <span>Video</span>
                    </div>
                    <div>
                        <span>Visibility</span>
                    </div>
                    <div>
                        <span>Restrictions</span>
                    </div>
                    <div>
                        <span>Date </span>
                        <i className="fa-solid fa-arrow-down"></i>
                    </div>
                    <div>
                        <span>Views</span>
                    </div>
                    <div>
                        <span>Comments</span>
                    </div>
                    <div>
                        <span>Likes &#40;vs. dislikes&#41;</span>
                    </div>
                </div>
                {testVideos ? (
                    <ul>
                        {testVideos.map((testVideo) => {
                            return (
                                <>
                                    <li className="video-content-list-item" key={testVideo.id}>
                                        <div className="video-content">
                                            <input type="checkbox" />
                                            <img src="/images/dog.jpg" alt="" className="small-thumbnail" />
                                            <div>
                                                <h4>{testVideo.title}</h4>
                                                <p className="video-item-description">{testVideo.description}</p>
                                                <div className="video-item-hover-items">
                                                    <button className="btn-icon">
                                                        <i class="fa-solid fa-pen"></i>
                                                    </button>
                                                    <button className="btn-icon">
                                                        <i class="fa-brands fa-square-youtube"></i>
                                                    </button>
                                                    <button className="btn-icon">
                                                        <i class="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{testVideo.visibility}</p>
                                        </div>
                                        <div>
                                            <p>{testVideo.restrictions}</p>
                                        </div>
                                        <div>
                                            <p>{testVideo.date}</p>
                                        </div>
                                        <div>
                                            <p>{testVideo.views}</p>
                                        </div>
                                        <div>
                                            <p>{testVideo.comments}</p>
                                        </div>
                                        <div>
                                            <p>{testVideo.likesAndDislikes}</p>
                                        </div>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                ) : (
                    <div className="empty-video-content-list">
                        <button className="btn-blue-bg" onClick={toggleUploadVideoFormVisibility}>
                            <span>UPLOAD VIDEOS</span>
                        </button>
                    </div>
                )}
                <div></div>
            </main>
            {isUploadVideoFormVisible ? (
                <UploadVideoForm setIsUploadVideoFormVisible={setIsUploadVideoFormVisible} />
            ) : (
                <></>
            )}
        </>
    );
}
