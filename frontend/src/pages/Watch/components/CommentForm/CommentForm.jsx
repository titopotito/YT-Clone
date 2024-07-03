import "./CommentForm.css";

export default function CommentForm() {
    return (
        <div className="comment-form">
            <div className="profile-pic">J</div>
            <form action="">
                <input type="text" placeholder="Add a comment..." />
                <div className="comment-form-btns">
                    <div>
                        <button className="btn-round-no-bg">
                            <i className="fa-regular fa-face-smile"></i>
                        </button>
                    </div>
                    <div>
                        <button className="btn-round-no-bg">
                            <span>Cancel</span>
                        </button>
                        <button className="btn-round-no-bg" disabled>
                            <span>Reply</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
