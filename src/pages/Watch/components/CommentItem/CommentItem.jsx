import ItemActions from "../ItemActions/ItemActions";
import ReplyList from "../ReplyList/ReplyList";
import "./CommentItem.css";

export default function CommentItem() {
    return (
        <li className="comment-item">
            <img src="/images/default_user_image.jpg" alt="" className="profile-img" />
            <div>
                <div className="comment-details">
                    <a href="">@Jesmar</a> <span>1 year ago</span>
                </div>
                <div className="comment-text">
                    <p>
                        Nostrud elit anim occaecat labore ipsum. Et quis id in nisi amet amet nisi. Exercitation
                        reprehenderit est occaecat nulla veniam.
                    </p>
                </div>
                <ItemActions />
                <ReplyList />
            </div>
        </li>
    );
}
