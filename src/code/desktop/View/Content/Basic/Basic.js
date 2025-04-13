import React from "react";
import './Basic.css';

export const Basic = ({ data }) => {
    if (!data) {
        return <div>Loading...</div>;
    }

    return(
        <div className="BasicContainer">
            <div className="title"><b>{data.post_title}</b></div>
            <div className="description">{data.post_description}</div>
            <div className="basicDetailsView">
                <div className="category">{data.post_category}</div>
            </div>
        </div>
    )
}