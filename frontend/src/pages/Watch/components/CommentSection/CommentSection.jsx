import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import "./CommentSection.css";

export default function CommentSection() {
    return (
        <section>
            <div id="comment-header">
                <h3>
                    <span>518</span> Comments
                </h3>
                <button className="btn-sort">
                    <i className="fa-solid fa-signal"></i>
                    <span>Sort by</span>
                </button>
            </div>
            <CommentForm />
            <CommentList />
        </section>
    );
}
