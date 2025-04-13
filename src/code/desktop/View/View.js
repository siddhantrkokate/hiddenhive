import React from "react";
import './View.css'
import {Content} from './Content/Content.js'
import {Comments} from './Comments/Comments.js'

export const View = () => {
    return(
        <div className="ViewContainer">
            <Content />
            <Comments />
        </div>
    )
}