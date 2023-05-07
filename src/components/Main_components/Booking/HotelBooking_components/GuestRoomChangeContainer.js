import React from "react";
import "../../../../css/Main_components/Booking/HotelBooking_components/GuestRoomChangeContainer.css"
import PlusInput from "../../../Input/PlusInput";
import {BsFillPeopleFill, BsFillDoorOpenFill} from "react-icons/bs"
import Warning from "../../../Notification/Warning";

export default function GuestRoomChangeContainer(props) {
    const [showWarningRoomGreaterThanPeople, setShowWarningRoomGreaterThanPeople] = React.useState(false);

    function onChangeGuestNumber(newValue) {
        if(newValue < props.roomsNumber) {
            setShowWarningRoomGreaterThanPeople(true);

            setTimeout(() => {
                setShowWarningRoomGreaterThanPeople(false);
            }, 2000);
        } else {
            props.changeGuestNumber(newValue);
        }
    }

    function onChangeRoomsNumber(newValue) {
        if(newValue > props.guestNumber) {
            setShowWarningRoomGreaterThanPeople(true);
            
            setTimeout(() => {
                setShowWarningRoomGreaterThanPeople(false);
            }, 2000);
        } else {
            props.changeRoomsNumber(newValue);
        }
    }

    return (
        <div className="guest-room-change--container">
            {
                showWarningRoomGreaterThanPeople&&
                <Warning left="10%" top="-90%" width="auto" height="30px" content="Số phòng không thể nhiều hơn số khách"/>
            }

            <PlusInput onChange={onChangeGuestNumber} value={props.guestNumber} label="Số khách" width="100%" height="auto" fontSize="16px" haveIcon="true" icon={<BsFillPeopleFill />}/>
            <PlusInput onChange={onChangeRoomsNumber} value={props.roomsNumber} label="Số phòng" width="100%" height="auto" fontSize="16px" haveIcon="true" icon={<BsFillDoorOpenFill />}/>
        </div>
    );
}