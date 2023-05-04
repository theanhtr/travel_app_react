import React from "react";
import "../../../css/Main_components/Booking/HotelBooking.css"
import SuggestionInput from "../../Input/SuggestionInput";
import {FaSearchLocation, FaRegCalendarAlt} from "react-icons/fa"
import CalendarInput from "../../Input/CalendarInput";

export default function HotelBooking() {
    const [currentDay, setCurrentDay] = React.useState("");

    React.useEffect(() => {
        let date = new Date();
        setCurrentDay(date.toISOString());    
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
    });

    function chagneSearchLocation(searchLocationString) {
        console.log(searchLocationString);
    }

    return (
        <div className="hotel-booking--container">
            <div className="hotel-booking--location-container">
                <SuggestionInput width="90%" height="40px" fontSize="16px" onChange={chagneSearchLocation} name="location-input" label="Thành phố, địa điểm: " haveIcon={true} icon={<FaSearchLocation size="16px"/>} />
            </div>

            <div className="hotel-booking--time-container" style={{width: "90%", display: "flex", justifyContent: "space-between"}}>
                <CalendarInput selectedDate={new Date(currentDay)} width="30%" height="40px" fontSize="16px" onChange={chagneSearchLocation} name="start-date-input" label="Ngày nhận phòng: " haveIcon={true} icon={<FaRegCalendarAlt size="16px"/>} />
                <CalendarInput width="30%" height="40px" fontSize="16px" onChange={chagneSearchLocation} name="location-input" label="Thành phố, địa điểm: " haveIcon={true} icon={<FaRegCalendarAlt size="16px"/>} />
                <CalendarInput width="30%" height="40px" fontSize="16px" onChange={chagneSearchLocation} name="location-input" label="Thành phố, địa điểm: " haveIcon={true} icon={<FaRegCalendarAlt size="16px"/>} />
            </div>
            
            <div className="hotel-booking--detail-container">
                <SuggestionInput width="90%" height="40px" fontSize="16px" onChange={chagneSearchLocation} name="location-input" label="Thành phố, địa điểm: " haveIcon={true} icon={<FaSearchLocation size="16px"/>} />
            </div>
        </div>
    );
}