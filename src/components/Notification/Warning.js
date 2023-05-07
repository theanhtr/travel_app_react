import React from "react";
import "../../css/Notification/Warning.css"

export default function Warning(props) {
    let styleWarning = {
        backgroundColor: "#DF440F",
        color: "white",
        width: props.width,
        height: props.height,
        top: props.top,
        left: props.left
    }

    return (
        <div className="warning--container" style={styleWarning}>
            {props.content}
        </div>
    );
}