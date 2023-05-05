import React from "react";
import "../../../css/Main_components/Booking/HotelBooking.css"
import SuggestionInput from "../../Input/SuggestionInput";
import {FaSearchLocation, FaRegCalendarAlt, FaMoon} from "react-icons/fa"
import CalendarInput from "../../Input/CalendarInput";
import OnlyNumberInput from "../../Input/OnlyNumberInput";
import SelectionInput from "../../Input/SelectionInput";

export default function HotelBooking() {
    //location
    const [searchLocation, setSearchLocation] = React.useState({
        "province_id": null,
        "district_id": null,
        "sub_district_id": null
    });

    function changeSearchLocation(searchLocationString) {
        console.log(searchLocationString);
    }

    //booking time

    //set default value for check_in_date and check_out_date
    let date = new Date();
    let dateTemp = new Date(date);
    let checkOutDateDefault = new Date(dateTemp.setDate(date.getDate() + 1));

    const [currentDay, setCurrentDay] = React.useState(date.toJSON());

    const [bookingTime, setBookingTime] = React.useState({
        "check_in_date": currentDay,
        "nights_number": 1,
        "check_out_date": checkOutDateDefault.toJSON(),
    });

    //update check_in_date then update check_out_date
    let copyDate = new Date(bookingTime.check_out_date);
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = copyDate.toLocaleDateString('vi-VN', options);

    function changeCheckInDate(newDate) {
        let newCheckInDate = new Date(newDate);
        let newDateTemp = new Date(newCheckInDate);
        let newCheckOutDate = new Date(newDateTemp.setDate(newCheckInDate.getDate() + bookingTime.nights_number));
        
        setBookingTime({
            ...bookingTime,
            "check_in_date": newDate,
            "check_out_date": newCheckOutDate.toJSON(),
        });
    }

    //update nights_number
    const [arrayNightsNumberOptions, setArrayNightsNumberOptions] = React.useState([]);
    
    React.useEffect(() => {
        let arrayNightsNumberOptionsTemp = new Array(30);

        let checkInDateTemp = new Date(bookingTime.check_in_date);
        let calDateNightsNumberTemp = new Date(checkInDateTemp);

        for(let i = 1; i <= 30; i++) {
            let calDateNightsNumber = new Date(calDateNightsNumberTemp.setDate(checkInDateTemp.getDate() + i));
            const formattedCalDateNightsNumber = calDateNightsNumber.toLocaleDateString('vi-VN', options);
            let nightsNumberOption = {
                title: i + " đêm",
                sub_title: formattedCalDateNightsNumber,
                value: i
            };
    
            arrayNightsNumberOptionsTemp[i - 1] = nightsNumberOption;
        }

        setArrayNightsNumberOptions(arrayNightsNumberOptionsTemp);
    }, [bookingTime]);

    function changeNightsNumber(newNightsNumber) {
        // setBookingTime({
        //     ...bookingTime,
        //     "check_in_date": newDate,
        //     "check_out_date": newCheckOutDate.toJSON(),
        // });

        console.log(newNightsNumber);
    }

    //bookingDetail
    const [bookingDetail, setBookingDetail] = React.useState({
        "guest_number": 2,
        "rooms_number": 1,
    });

    //test only number input
    const [onlyNumberValue, setOnlyNumberValue] = React.useState(null);
    function changeOnlyNumberValue(onlyNumberValue) {
        setOnlyNumberValue(onlyNumberValue);
    }

    return (
        <div className="hotel-booking--container">
            <div className="hotel-booking--location-container">
                <SuggestionInput width="90%" height="40px" fontSize="16px" onChange={changeSearchLocation} name="location-input" label="Thành phố, địa điểm: " haveIcon={true} icon={<FaSearchLocation size="16px"/>} />
            </div>

            <div className="hotel-booking--time-container" style={{width: "90%", display: "flex", justifyContent: "space-between"}}>
                <CalendarInput selectedDate={new Date(bookingTime.check_in_date)} width="40%" height="40px" fontSize="16px" onChange={changeCheckInDate} name="start-date-input" label="Ngày nhận phòng: " haveIcon={true} icon={<FaRegCalendarAlt size="16px"/>} />
                
                <SelectionInput selectedValue={bookingTime.nights_number} arrayOptions={arrayNightsNumberOptions} width="30%" height="40px" fontSize="16px" onChange={changeNightsNumber} name="nights-number-input" label="Số đêm: " haveIcon={true} icon={<FaMoon size="16px"/>} />

                <div className="check-out-date--container">
                    <label style={{fontSize: "16px", fontWeight: 600, marginBottom: "16px"}}>Ngày trả phòng:</label>

                    <div style={{fontSize: "15px"}}>
                        {formattedDate}
                    </div>
                </div>
            </div>
            
            <div className="hotel-booking--detail-container">
                <OnlyNumberInput width="90%" height="40px" fontSize="16px" valueCurrent={onlyNumberValue} onChange={changeOnlyNumberValue} name="only-number-input" label="Test only number: " haveIcon={true} icon={<FaSearchLocation size="16px"/>} />
            </div>
        </div>
    );
}