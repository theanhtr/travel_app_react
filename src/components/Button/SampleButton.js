import React from "react";
import "../../css/Button/SampleButton.css"

export default function SampleButton(props) {
    const [hover, setHover] = React.useState(false);
    const [focus, setFocus] = React.useState(false);

    const buttonStyle = {
        backgroundColor: hover ? props.backgroundColorHover : props.backgroundColor,
        height: props.height,
        width: props.width,
        margin: props.margin,
        border: focus ? "2px solid red" : "",
    };
    
    const handleMouseOver = () => {
        setHover(true);
      };
    
      const handleMouseOut = () => {
        setHover(false);
      };

    const handleFocusButton = () => {
        setFocus(true);
      };
    
      const handleBlurButton = () => {
        setFocus(false);
      };

    return (
        <div id={props.name} name={props.name} tabIndex="0" className="sample_button" onFocus={handleFocusButton} onBlur={handleBlurButton} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={props.onClick} style={buttonStyle}>
            <p className="sample_button--text" style={{color: props.textColor}}> {props.text} </p>
        </div>
    );  
}