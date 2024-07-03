import { useState } from "react";
import DropdownContainer from "../../../../../../components/DropdownContainer/DropdownContainer";
import "./UploadVideoForm.css";

export default function UploadVideoForm({ setIsUploadVideoFormVisible }) {
    const [isForm2Visible, setIsForm2Visible] = useState(false);
    const [videoFile, setVideoFile] = useState(null);
    const [videoFileURL, setVideoFileURL] = useState(null);

    function closeForm(e) {
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

    return (
        <>
            <div id="upload-video-form" onClick={closeForm}>
                {!isForm2Visible ? (
                    <form onClick={(e) => handeClick(e)} method="post" encType="multipart/form-data" className="form1">
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
                    <form onClick={(e) => handeClick(e)} action="" className="form2">
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
                                    <input type="text" placeholder="title" />
                                    <textarea name="" id="" placeholder="description"></textarea>
                                </div>
                                <div>
                                    <h3>Thumbnail</h3>
                                    <p>Set a thumbnail that stands out and draws viewers' attention.</p>
                                    <label htmlFor="thumbnail-upload-btn" className="btn-thumbnail-upload">
                                        <i class="fa-solid fa-file-arrow-up"></i>
                                        <span>Upload File</span>
                                    </label>
                                    <input
                                        type="file"
                                        id="btn-thumbnail-upload"
                                        name="btn-thumbnail-upload"
                                        accept="image/png, image/jpeg"
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
                                        <input type="radio" id="radio-btn-private" name="radio-btn-visibility" />
                                        <label htmlFor="radio-btn-private">Private</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="radio-btn-public" name="radio-btn-visibility" />
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
