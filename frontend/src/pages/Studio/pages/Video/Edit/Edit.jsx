import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropdownContainer from "../../../../../components/DropdownContainer/DropdownContainer.jsx";
import { BasicFormGroup, BorderedFormGroup } from "../../../../../components/Form/Form.jsx";
import { BasicDetailContainer } from "../../../../../components/DetailContainer/DetailContainer.jsx";
import * as APIHandler from "../../../../../js/apiHandler.js";
import "./Edit.css";

export default function Edit() {
    const [video, setVideo] = useState("");

    useEffect(() => {
        async function fetchVideo() {
            const response = await APIHandler.get("videos/19");
            setVideo(response);
        }
        fetchVideo();
    }, []);

    const VISIBILITY = {
        PUBLIC: "Public",
        PRIVATE: "Private",
    };

    return (
        <main id="update-video-form">
            <div className="header">
                <h2>Video Details</h2>
                <div className="edit-btn-container">
                    <button className="btn-round">
                        <span>Undo changes</span>
                    </button>
                    <button className="btn-round">
                        <span>Save</span>
                    </button>
                    <button className="btn-icon">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>
            </div>
            <div>
                <div className="video-detail-col-1">
                    <BorderedFormGroup>
                        <label htmlFor="title">Title &#40;required&#41;</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Add a title that describes your video"
                            defaultValue={video.title}
                        />
                    </BorderedFormGroup>
                    <BorderedFormGroup>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" placeholder="Tell viewers about your video" rows={7}>
                            {video.description}
                        </textarea>
                    </BorderedFormGroup>
                    <BasicFormGroup>
                        <h3>Thumbnail</h3>
                        <p>Set a thumbnail that stands out and draws viewers' attention.</p>
                        <img src={video.thumbnail} alt="" className="sample-thumbnail-display" />
                        <div>
                            <label htmlFor="thumbnail" className="btn-thumbnail-upload">
                                <i className="fa-solid fa-file-arrow-up"></i>
                                <span>Upload File</span>
                            </label>
                            <input
                                type="file"
                                id="thumbnail"
                                name="thumbnail"
                                accept="image/png, image/jpeg"
                                // onChange={uploadThumbnail}
                            />
                        </div>
                    </BasicFormGroup>

                    <BasicFormGroup>
                        <h3>Playlists</h3>
                        <p>Add your video to one or more playlists to organize your content for viewers.</p>
                        <DropdownContainer
                            btnConfig={{
                                className: "btn-round",
                                text: "Select",
                                icon2: "fa-solid fa-chevron-down",
                            }}
                            hideOnClick={false}
                        >
                            <li>
                                <span>Playlist 1</span>
                            </li>
                            <li>
                                <span>Playlist 2</span>
                            </li>
                            <li>
                                <span>Playlist 3</span>
                            </li>
                            <li>
                                <span>Playlist 4</span>
                            </li>
                        </DropdownContainer>
                    </BasicFormGroup>
                    <BasicFormGroup>
                        <h3>Tags</h3>
                        <p>
                            Tags can be useful if content in your video is commonly misspelled. Otherwise, tags play a
                            minimal role in helping viewers find your video.
                        </p>
                        <input type="text" />
                        <p>Enter a comma after each tag</p>
                    </BasicFormGroup>
                    <BasicFormGroup>
                        <h3>Visibility</h3>
                        <p>Choose who can see your video</p>
                        <div>
                            <input type="radio" id="radio-btn-private" name="visibility" value={VISIBILITY.PRIVATE} />
                            <label htmlFor="radio-btn-private">Private</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="radio-btn-public"
                                name="visibility"
                                value={VISIBILITY.PUBLIC}
                                defaultChecked
                            />
                            <label htmlFor="radio-btn-public">Public</label>
                        </div>
                    </BasicFormGroup>
                </div>
                <div className="video-detail-col-2">
                    <video src={video.video} controls="control" type="video/mp4" width="400px" height="200px"></video>
                    <BasicDetailContainer>
                        <p>Video link</p>
                        <Link>https://yt-bone/sdfsdijfsdfklsdf</Link>
                    </BasicDetailContainer>
                    <BasicDetailContainer>
                        <p>Filename</p>
                        <p>Genshin Impact something something</p>
                    </BasicDetailContainer>
                </div>
            </div>
        </main>
    );
}
