import React from "react";
import "../../css/Main_components/Booking.css"
import BookingNavButton from './BookingNavButton'
import image_test from '../../images/header/nav_bar_top/book_mark.png'
import HotelBooking from "./Booking/HotelBooking";

export default function Booking() {
    const [currentBooking, setCurrentBooking] = React.useState("khach-san");

    function changeCurrentBooking(changeBookingName) {
        setCurrentBooking(changeBookingName);
    }

    function renderCurrentBooking() {
        switch (currentBooking) {
            case "dia-diem-du-lich":
                return <div>dia diem du lich</div>

            case "khach-san":
                return <HotelBooking />

            case "ok": 
                return <div>ok</div>
        
            default:
                return <div>error</div>
        }
    }

    return (
        <div className="booking--container">
            <div className="booking--nav">
                <BookingNavButton changeCurrentBooking={changeCurrentBooking} currentBooking={currentBooking} bookingName="ok" backgroundColor="#F2F3F3" backgroundColorHover="white" height="10px" imageSrc={image_test} text="ok"/>
                <BookingNavButton changeCurrentBooking={changeCurrentBooking} currentBooking={currentBooking} bookingName="dia-diem-du-lich" backgroundColor="#F2F3F3" backgroundColorHover="white" height="10px" imageSrc={image_test} text="Địa điểm du lịch"/>
                <BookingNavButton changeCurrentBooking={changeCurrentBooking} currentBooking={currentBooking} bookingName="khach-san" backgroundColor="#F2F3F3" backgroundColorHover="white" height="10px" imageSrc="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d27f082b7bccc8a5eff371779e020b83.svg" text="Khách sạn"/>
            </div>
            <div className="booking--main">
                {
                    renderCurrentBooking() 
                }
            </div>
        </div>
    );
}