import React from "react";
import './Grid.css';
import { useNavigate } from "react-router-dom";

export const Grid = ({ post_id, contentTitle, description, post_category, post_emoji }) => {
  const navigate = useNavigate();
  const url = '/view?ID=' + post_id;
  return (
    <div className="GridContainer" title="Open: Why people laughs on somone?" onClick={() => navigate(url)}>
      <div className="GridTime">2nd Feb 25</div>
      <div className="GridTitle">{contentTitle}</div>
      <div className="GridDescription">{description}</div>
      <div className="GridFooter">
        <div className="GridCategory">{post_category}</div>
        <div className="GridReactionShow">
          <span className="GridReactionEmoji">{post_emoji}</span>
          {/* <span className="GridReactionCount">234</span> */}
        </div>
      </div>
      <div className="readBtn">Open</div>
    </div>
  );
};