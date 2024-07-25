import { useRef } from "react";
import DetailsContainer from "../../../../../../components/DetailsContainer/DetailsContainer";
import InfoContainer from "../../../../../../components/InfoContainer/InfoContainer";
import * as APIHandler from "../../../../../../js/apiHandler.js";
import "./DeleteVideoForm.css";

export default function DeleteVideoForm({
    setIsDeleteVideoFormVisible,
    setVideoToBeDeleted,
    videoToBeDeleted,
    removeVideoFromList,
}) {
    const deleteBtnRef = useRef(null);

    function closeForm(e) {
        e.preventDefault();
        setVideoToBeDeleted(null);
        setIsDeleteVideoFormVisible(false);
    }

    function handeClick(e) {
        e.stopPropagation();
    }

    function toggleDeleteBtn(e) {
        const isCheckboxChecked = e.target.checked;
        deleteBtnRef.current.disabled = !isCheckboxChecked;
    }

    async function fetchDelete(e) {
        e.preventDefault();
        try {
            const response = await APIHandler.del(`videos/${videoToBeDeleted.pk}/delete`);
            if (!response.isSuccess) return console.log(response.errors);
            console.log(response.message);
            removeVideoFromList(videoToBeDeleted);
            setIsDeleteVideoFormVisible(false);
        } catch {
            console.log("Encountered an error.");
        }
    }

    return (
        <>
            <div id="delete-video-form" onClick={closeForm}>
                <form onClick={handeClick} onSubmit={fetchDelete}>
                    <h4>Permanently delete this video?</h4>
                    <div className="delete-video-thumbnail-container">
                        <img src={videoToBeDeleted.thumbnail} alt="" className="small-thumbnail" />
                        <DetailsContainer>
                            <h5 className="details-container-title-small">{videoToBeDeleted.title}</h5>
                            <InfoContainer size={"small"}>
                                <span>{videoToBeDeleted.datetime_uploaded}</span>
                            </InfoContainer>
                            <InfoContainer size={"small"}>
                                <span>{videoToBeDeleted.views} views</span>
                            </InfoContainer>
                        </DetailsContainer>
                    </div>
                    <div className="delete-video-warning-container">
                        <input type="checkbox" id="confirm-delete-checkbox" onClick={toggleDeleteBtn} />

                        <label htmlFor="confirm-delete-checkbox">
                            I understand that deleting this video is permanent and I will lose all access to audience
                            and video analytics
                        </label>
                    </div>
                    <div className="delete-video-btn-container">
                        <div>
                            <button className="btn-round">
                                <span>Download video</span>
                            </button>
                        </div>
                        <div>
                            <button className="btn-round" onClick={closeForm}>
                                <span>Cancel</span>
                            </button>

                            <button className="btn-round" type="submit" id="delete-btn" disabled ref={deleteBtnRef}>
                                <span>Delete Forever</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
