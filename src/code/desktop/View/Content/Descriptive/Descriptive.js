import React from "react";
import './Descriptive.css';

export const Descriptive = ({ data }) => {
    if (!data) {
        return <div>Loading...</div>;
    }

    return(
        <div className="DescriptiveContainer">
            <div className="headingDescriptiveBox" style={{ fontWeight: 'bold'}}>Post: </div>
            <div className="Content" dangerouslySetInnerHTML={{ __html: data.post_content }}>
            </div>
        </div>
    )
}