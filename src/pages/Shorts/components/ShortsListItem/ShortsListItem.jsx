import "./ShortsListItem.css";

export default function ShortsListItem() {
    return (
        <li className="shorts-list-item">
            <video src="/videos/marmar.mp4"></video>
            <div>
                <span>
                    <button className="btn-round">
                        <i class="fa-solid fa-thumbs-up"></i>
                    </button>
                    <span>2.4M</span>
                </span>
                <span>
                    <button className="btn-round">
                        <i class="fa-solid fa-thumbs-up dislike"></i>
                    </button>
                    <span>Dislike</span>
                </span>

                <span>
                    <button className="btn-round">
                        <i class="fa-solid fa-comment-dots"></i>
                    </button>
                    <span>14K</span>
                </span>
                <span>
                    <button className="btn-round">
                        <i class="fa-solid fa-share"></i>
                    </button>
                    <span>Share</span>
                </span>
                <span>
                    <button className="btn-round">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </span>

                <img src="/images/default_user_image.jpg" alt="" className="profile-img" />
            </div>
        </li>
    );
}
