import React from "react";
import "../../css/Input/CalendarInput.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function CalendarInput(props) {
    const [focus, setFocus] = React.useState(false);

    let copyDate = props.selectedDate;
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = copyDate.toLocaleDateString('vi-VN', options);

    const styleDivCalendarInput = {
        width: "100%",
        height: props.height,
        border: focus ? "2px solid blue" : "1px solid black",
        cursor: "pointer"
    }

    function onChangeInput(date, event) {
        props.onChange(date.toJSON());
        setFocus(false);
    }

    function focusToInput() {
        document.getElementById(props.name).focus();
    }

    return (
        <div className="calendar-input" style={{width: props.width}}>
            <label htmlFor={props.name} style={{fontSize: props.fontSize, fontWeight: 600, marginBottom: "8px", marginTop: "15px"}}>{props.label}</label>
            <div className="calendar-input--container" style={styleDivCalendarInput} onFocus={() => {setFocus(true)}} onBlur={() => {setFocus(false)}}>
                {props.haveIcon && 
                    <div style={{fontSize: props.fontSize}} className="calendar-input--icon" onClick={focusToInput}>
                        {props.icon}
                    </div>
                }

                <DatePicker 
                    shouldCloseOnSelect={true}
                    dateFormat="cccc, MMMM dd, yyyy"
                    minDate={new Date()}
                    onChange={(date, event) => onChangeInput(date, event)}
                    className="calendar-input--container-input"
                    name={props.name}
                    id={props.name}
                    wrapperClassName="calendar-input--container-input--wrapper"
                    />

                <div className="calendar-input--data-str" onClick={focusToInput} style={{fontSize: "15px"}}><span>{formattedDate}</span></div>
            </div>
        </div>
    );  
}