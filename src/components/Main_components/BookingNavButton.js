import React from "react";

export default function BookingNavButton(props) {
    const [hover, setHover] = React.useState(false);

    const buttonStyle = {
        backgroundColor: props.bookingName === props.currentBooking ? "#69A9E1" : (hover ? props.backgroundColorHover : props.backgroundColor),
        height: props.height,
    };
    
    const handleMouseOver = () => {
        setHover(true);
      };
    
      const handleMouseOut = () => {
        setHover(false);
      };

    function clickButton() {
        props.changeCurrentBooking(props.bookingName);
    }

    return (
        <div className="booking_nav-button" onClick={clickButton} style={buttonStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={props.imageSrc} alt="error" className="nav_bar_top-button--image"/>
            <p className="booking_nav-button--text" style={{color: "black", marginLeft: "10px"}}> {props.text} </p>
        </div>
    );
}