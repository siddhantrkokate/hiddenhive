import React from "react";
import './Comment.css';

export const CommentsGrid = ({ data }) => {
    return(
        <div className="CommentGridContainer">
            <div className="comment-text">{data.text}</div>
            <div className="iconComment">
                <span className="material-icons-comment">reply</span>
                <span className="replyText">Reply</span>
            </div>
        </div>
    )
}