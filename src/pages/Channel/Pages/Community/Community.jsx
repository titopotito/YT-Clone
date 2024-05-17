import "./Community.css";

export default function Community() {
    return (
        <div id="channel-page-community">
            <ul>
                <CommunityPost />
                <CommunityPost />
                <CommunityPost />
                <CommunityPost />
                <CommunityPost />
                <CommunityPost />
                <CommunityPost />
                <CommunityPost />
                <CommunityPost />
                <CommunityPost />
                <CommunityPost />
            </ul>
        </div>
    );
}

function CommunityPost() {
    return (
        <li className="community-post">
            <div>
                <img src="/images/default_user_image.jpg" alt="" className="profile-img" />
            </div>
            <div>
                <div className="community-post-details">
                    <a href="">Jesmar</a> <span>1 year ago</span>
                </div>
                <div className="community-post-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus, incidunt, totam
                        consequuntur, rem necessitatibus quos sit blanditiis inventore praesentium iusto id vitae animi
                        et eum dolorem asperiores itaque consectetur.
                    </p>
                </div>
                <img src="/images/dog.jpg" alt="" className="community-post-img" />
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
                            <i class="fa-regular fa-comment-dots"></i>
                            <span>12</span>
                        </button>
                    </span>
                </div>
            </div>
        </li>
    );
}
