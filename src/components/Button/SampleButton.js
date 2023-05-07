import React from "react";
import "../../css/Button/SampleButton.css"

export default function SampleButton(props) {
    const [hover, setHover] = React.useState(false);

    const buttonStyle = {
        backgroundColor: hover ? props.backgroundColorHover : props.backgroundColor,
        height: props.height,
        width: props.width,
        margin: props.margin,
    };
    
    const handleMouseOver = () => {
        setHover(true);
      };
    
      const handleMouseOut = () => {
        setHover(false);
      };

    return (
        <div className="sample_button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={props.onClick} style={buttonStyle}>
            <p className="sample_button--text" style={{color: props.textColor}}> {props.text} </p>
        </div>
    );  
}