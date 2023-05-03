import React from "react";
import "../../../css/Main_components/Booking/HotelBooking.css"

export default function HotelBooking() {
    const [currentDay, setCurrentDay] = React.useState("");

    React.useEffect(() => {
        let date = new Date();
        setCurrentDay(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());    
    }, [])

    const [searchLocation, setSearchLocation] = React.useState({
        "province_id": null,
        "district_id": null,
        "sub_district_id": null
    });

    const [bookingTime, setBookingTime] = React.useState({
        "check_in_date": currentDay,
        "nights_number": 1,
        "check_out_date": null,
    });

    const [bookingDetail, setBookingDetail] = React.useState({
        "guest_number": 2,
        "rooms_number": 1,
    })


    return (
        <div className="booking--container">
            
        </div>
    );
}