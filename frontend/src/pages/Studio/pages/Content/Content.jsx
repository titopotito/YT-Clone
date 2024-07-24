import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UploadVideoForm from "./components/UploadVideoForm/UploadVideoForm";
import * as APIHandler from "../../../../js/apiHandler.js";
import "./Content.css";

export default function Content() {
    const [videoList, setVideoList] = useState(null);
    const [isUploadVideoFormVisible, setIsUploadVideoFormVisible] = useState(false);

    useEffect(() => {
        async function fetchVideos() {
            const response = await APIHandler.get("videos");
            setVideoList(response);
        }
        fetchVideos();
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
                {videoList ? (
                    <ul id="uploaded-video-list">
                        {videoList.map((uploadedVideo) => {
                            return (
                                <li className="video-content-list-item" key={uploadedVideo.pk}>
                                    <div className="video-content">
                                        <input type="checkbox" />
                                        <img src={uploadedVideo.thumbnail} alt="" className="small-thumbnail" />
                                        <div>
                                            <h4>{uploadedVideo.title}</h4>
                                            <p className="video-item-description">{uploadedVideo.description}</p>
                                            <div className="video-item-hover-items">
                                                <button className="btn-icon">
                                                    <i className="fa-solid fa-pen"></i>
                                                </button>
                                                <button className="btn-icon">
                                                    <i className="fa-brands fa-square-youtube"></i>
                                                </button>
                                                <button className="btn-icon">
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{uploadedVideo.visibility}</p>
                                    </div>
                                    <div>
                                        <p>{uploadedVideo.restrictions}</p>
                                    </div>
                                    <div>
                                        <p>{uploadedVideo.date}</p>
                                    </div>
                                    <div>
                                        <p>{uploadedVideo.views}</p>
                                    </div>
                                    <div>
                                        <p>{uploadedVideo.comments}</p>
                                    </div>
                                    <div>
                                        <p>{String(uploadedVideo.likes / uploadedVideo.dislikes)}</p>
                                    </div>
                                </li>
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
