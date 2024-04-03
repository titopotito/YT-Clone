import "./ItemActions.css";

export default function ItemActions() {
    return (
        <>
            <div className="comment-actions">
                <span className="btn-like-no-bg">
                    <button>
                        <i className="fa-regular fa-thumbs-up"></i>
                    </button>
                    <span>276</span>
                </span>
                <span className="btn-dislike-no-bg">
                    <button>
                        <i className="fa-regular fa-thumbs-up"></i>
                    </button>
                    <span>276</span>
                </span>
                <span className="btn-open-reply-form ">
                    <button className="btn-round-no-bg">
                        <span>Reply</span>
                    </button>
                </span>
            </div>
            <div>
                <button className="btn-blue">
                    <i className="fa-solid fa-caret-down"></i>
                    <span>3 replies</span>
                </button>
            </div>
        </>
    );
}
