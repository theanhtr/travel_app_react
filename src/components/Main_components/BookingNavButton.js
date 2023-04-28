import React from "react";

export default function BookingNavButton(props) {
    const [hover, setHover] = React.useState(false);
    const [active, setActive] = React.useState(false);

    const buttonStyle = {
        backgroundColor: active ? "white" : (hover ? props.backgroundColorHover : props.backgroundColor),
        height: props.height,
    };
    
    const handleMouseOver = () => {
        setHover(true);
      };
    
      const handleMouseOut = () => {
        setHover(false);
      };

    return (
        <div className="booking_nav-button" style={buttonStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={props.imageSrc} alt="error" className="nav_bar_top-button--image"/>
            <p className="booking_nav-button--text" style={{color: "black", marginLeft: "10px"}}> {props.text} </p>
        </div>
    );
}