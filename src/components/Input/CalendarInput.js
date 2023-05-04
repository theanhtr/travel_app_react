import React from "react";
import "../../css/Input/CalendarInput.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function CalendarInput(props) {
    const inputRef = React.useRef(null);
    const [focus, setFocus] = React.useState(false);

    const styleDivCalendarInput = {
        width: "100%",
        height: props.height,
        border: focus ? "2px solid blue" : "1px solid black",
    }

    function onChangeInput(date) {
        // props.onChange(date);
        console.log(date);
    }

    return (
        <div className="calendar-input" style={{width: props.width}}>
            <label htmlFor={props.name} style={{fontSize: props.fontSize, fontWeight: 600, marginBottom: "8px", marginTop: "15px"}}>{props.label}</label>
            <div className="calendar-input--container" style={styleDivCalendarInput} onFocus={() => {setFocus(true)}} onBlur={() => {setFocus(false)}}>
                {props.haveIcon && 
                    <div style={{fontSize: props.fontSize}} className="calendar-input--icon" onClick={() => inputRef.current.focus()}>
                        {props.icon}
                    </div>
                }

                {/* <input style={{fontSize: props.fontSize}} placeholder="Hà Nội" onChange={onChangeInput} type="text" id={props.name} name={props.name}/> */}
                <DatePicker 
                    ref={inputRef} 
                    minDate={new Date()}
                    onChange={(date) => onChangeInput(date)}
                    dateFormat='dd, MM, yyyy'
                    className="calendar-input--container-input"
                    name={props.name}
                    wrapperClassName="calendar-input--container-input--wrapper"
                    />

            </div>
        </div>
    );  
}