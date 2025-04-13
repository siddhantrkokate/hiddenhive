import React from "react";
import './AddNewButton.css';
import {Link} from "react-router-dom";

export const AddNewButton = () => {
    return(
        <Link to={'/AddNew'}>
            <div className="AddNewButtonHeader">
                <span className="AddButtonText">Create Discussion </span>
                <span className="material-icons-add">add</span>
            </div>
        </Link>
    )
}