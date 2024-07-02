import "./UploadVideoForm.css";

export default function UploadVideoForm({ setIsUploadVideoFormVisible }) {
    function closeForm(e) {
        setIsUploadVideoFormVisible(false);
    }
    function handeClick(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div id="upload-video-form" onClick={closeForm}>
            <form onClick={(e) => handeClick(e)}>
                <div id="upload-video-form-header">
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
                <div id="upload-video-container">
                    <button className="btn-blue-bg">
                        <span>SELECT FILES</span>
                    </button>
                </div>
                <p>
                    By submitting your videos to YT Bones, you acknowledge that you agree to YT Bone's Terms of Service
                    and Community Guidelines.
                </p>
                <p>Please be sure not to violate others' copyright or privacy rights. Learn more</p>
            </form>
        </div>
    );
}
