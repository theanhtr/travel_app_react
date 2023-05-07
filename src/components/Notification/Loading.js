import React from "react";
import "../../css/Notification/Loading.css"
import progressImage from "../../images/progress_animation.png"

export default function Loading(props) {
    return (
        <div className="loading--container">
            <img src={progressImage} className="loading--container-image"/>
        </div>
    );
}