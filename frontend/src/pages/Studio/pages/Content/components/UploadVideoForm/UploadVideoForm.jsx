import { useEffect, useState } from "react";
import DropdownContainer from "../../../../../../components/DropdownContainer/DropdownContainer";
import * as APIHandler from "../../../../../../js/apiHandler.js";
import "./UploadVideoForm.css";

export default function UploadVideoForm({ setIsUploadVideoFormVisible, addVideoFromList }) {
    const [isForm2Visible, setIsForm2Visible] = useState(false);
    const [thumbnail, setThumbnail] = useState("");
    const [thumbnailURL, setThumbnailURL] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [videoFileURL, setVideoFileURL] = useState(null);

    const VISIBILITY = {
        PUBLIC: "Public",
        PRIVATE: "Private",
    };

    function closeForm(e) {
        e.preventDefault();
        setIsUploadVideoFormVisible(false);
    }

    function handeClick(e) {
        e.stopPropagation();
    }

    function uploadVideo(e) {
        setVideoFile(e.target.files[0]);
        setVideoFileURL(URL.createObjectURL(e.target.files[0]));
        setIsForm2Visible(true);
    }

    function uploadThumbnail(e) {
        setThumbnailURL(URL.createObjectURL(e.target.files[0]));
        setThumbnail(e.target.files[0]);
    }

    async function fetchPost(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("owner", "awaw");
        data.append("video", videoFile);
        try {
            const response = await APIHandler.post("videos", data);
            if (!response.isSuccess) return console.log(response.errors);
            addVideoFromList(response.data);
            setIsUploadVideoFormVisible(false);
        } catch {
            console.log("Encountered an error.");
        }
    }

    return (
        <>
            <div id="upload-video-form" onClick={closeForm}>
                {!isForm2Visible ? (
                    <form onClick={handeClick} method="post" encType="multipart/form-data" className="form1">
                        <div id="upload-video-form1-header">
                            <h2>Upload videos</h2>
                            <button className="btn-icon">
                                <span>
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                </span>
                            </button>
                            <button className="btn-icon" onClick={closeForm}>
                                <span>
                                    <i className="fa-solid fa-xmark"></i>
                                </span>
                            </button>
                        </div>
                        <div id="select-files-container">
                            <label htmlFor="video-upload-btn" className="btn-blue-bg">
                                SELECT FILES
                            </label>
                            <input
                                type="file"
                                name="video-upload-btn"
                                id="video-upload-btn"
                                accept="video/*"
                                onChange={uploadVideo}
                            />
                        </div>
                        <p>
                            By submitting your videos to YT Bones, you acknowledge that you agree to YT Bone's Terms of
                            Service and Community Guidelines.
                        </p>
                        <p>Please be sure not to violate others' copyright or privacy rights. Learn more</p>
                    </form>
                ) : (
                    <form onClick={handeClick} className="form2" onSubmit={fetchPost}>
                        <div id="upload-video-form2-header">
                            <h2>{videoFile.name}</h2>
                            <button className="btn-icon" onClick={closeForm}>
                                <span>
                                    <i className="fa-solid fa-xmark"></i>
                                </span>
                            </button>
                        </div>
                        <div id="form2-main">
                            <div>
                                <div>
                                    <h3>Details</h3>
                                    <input type="text" placeholder="title" name="title" />
                                    <textarea name="description" placeholder="description"></textarea>
                                </div>
                                <div>
                                    <h3>Thumbnail</h3>
                                    <p>Set a thumbnail that stands out and draws viewers' attention.</p>
                                    <img src={thumbnailURL} alt="" className="sample-thumbnail-display" />

                                    <label htmlFor="thumbnail" className="btn-thumbnail-upload">
                                        <i className="fa-solid fa-file-arrow-up"></i>
                                        <span>Upload File</span>
                                    </label>
                                    <input
                                        type="file"
                                        id="thumbnail"
                                        name="thumbnail"
                                        accept="image/png, image/jpeg"
                                        onChange={uploadThumbnail}
                                    />
                                </div>
                                <div>
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
                                </div>
                                <div>
                                    <h3>Tags</h3>
                                    <p>
                                        Tags can be useful if content in your video is commonly misspelled. Otherwise,
                                        tags play a minimal role in helping viewers find your video.
                                    </p>
                                    <input type="text" />
                                    <p>Enter a comma after each tag</p>
                                </div>
                                <div>
                                    <h3>Visibility</h3>
                                    <p>Choose who can see your video</p>
                                    <div>
                                        <input
                                            type="radio"
                                            id="radio-btn-private"
                                            name="visibility"
                                            value={VISIBILITY.PRIVATE}
                                        />
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
                                </div>
                            </div>
                            <div>
                                <video
                                    src={videoFileURL}
                                    controls="control"
                                    type="video/mp4"
                                    width="400px"
                                    height="200px"
                                ></video>
                            </div>
                        </div>
                        <div className="form2-footer">
                            <button className="btn-round" type="submit">
                                <span>Save</span>
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
}
