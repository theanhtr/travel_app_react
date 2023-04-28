import React from "react";
import "../../css/Main_components/Booking.css"
import BookingNavButton from './BookingNavButton'
import image_test from '../../images/header/nav_bar_top/book_mark.png'

export default function Booking() {
    return (
        <div className="booking--container">
            <div className="booking--nav">
                <BookingNavButton backgroundColor="#F2F3F3" backgroundColorHover="white" height="10px" imageSrc={image_test} text="ok"/>
                <BookingNavButton backgroundColor="#F2F3F3" backgroundColorHover="white" height="10px" imageSrc={image_test} text="ok"/>
                <BookingNavButton backgroundColor="#F2F3F3" backgroundColorHover="white" height="10px" imageSrc={image_test} text="ok"/>
                <BookingNavButton backgroundColor="#F2F3F3" backgroundColorHover="white" height="10px" imageSrc={image_test} text="ok"/>
                <BookingNavButton backgroundColor="#F2F3F3" backgroundColorHover="white" height="10px" imageSrc={image_test} text="ok"/>
                <BookingNavButton backgroundColor="#F2F3F3" backgroundColorHover="white" height="10px" imageSrc={image_test} text="ok"/>
            </div>
            <div className="booking--main">

            </div>
        </div>
    );
}