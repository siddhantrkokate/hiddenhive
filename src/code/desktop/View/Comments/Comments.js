import React, { useState, useEffect } from "react";
import './Comments.css';
import { CommentsGrid } from "./Grid/Comment.js";
import { useLocation } from "react-router-dom";

export const Comments = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const post_id = queryParams.get('ID');

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim() !== '') {
            try {
                const response = await fetch('https://siddhantrkokate.tech/hiddenhive/add-comment.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        post_id: post_id,
                        text: comment
                    })
                });
                const result = await response.json();
                if (result.success) {
                    setComment('');
                    fetchComments();
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://siddhantrkokate.tech/hiddenhive/get-comments.php?post_id=${post_id}`);
            const result = await response.json();
            setComments(result.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [post_id]);

    return(
        <div className="CommentsContainer">
            <div className="commentsHeading">Responses and Reactions</div>
            <div className="commentBoxContainerMobile">
                <input type="text" className="commentBoxMobile" placeholder="Type comment here.." value={comment} onChange={(e) => setComment(e.target.value)} />
                <div className="sendCommentMobile material-icons" onClick={handleCommentSubmit}>send</div>
            </div>
            {comments.map((comment, index) => (
                <CommentsGrid key={index} data={comment} />
            ))}
            <div className="commentBoxContainer">
                <input type="text" className="commentBox" placeholder="Enter Comment here.." value={comment} onChange={(e) => setComment(e.target.value)} />
                <div className="sendComment material-icons" onClick={handleCommentSubmit}>send</div>
            </div>
        </div>
    )
}