import React from "react";
import "../../css/Input/OnlyNumberInput.css";

export default function OnlyNumberInput(props) {
    const inputRef = React.useRef(null);
    const [focus, setFocus] = React.useState(false);

    const styleDivOnlyNumberInput = {
        width: "100%",
        height: props.height,
        border: focus ? "2px solid blue" : "1px solid black",
    }

    function changeToFormat(strNumber) {
        if(strNumber === null) {
            return null;
        }

        if (strNumber.length <= 3) {
            return strNumber;
        }

        strNumber = String(changeToNumber(strNumber));

        let strNumberReturn = "";
        let countComma = 1;

        for(let i = strNumber.length - 1; i >= 0; i--) {
            if(countComma === 3) {
                if (i !== 0) {
                    strNumberReturn = "." + strNumber[i] + strNumberReturn;
                } else {
                    strNumberReturn = strNumber[i] + strNumberReturn;
                }

                countComma = 1;
            } else {
                strNumberReturn = strNumber[i] + strNumberReturn;
                countComma++;
            }
        }

        return strNumberReturn;
    }

    function changeToNumber(strNumber) {
        if (strNumber.length <= 3) {
            return Number(strNumber);
        }

        let strNumberReturn = "";

        for(let i = strNumber.length - 1; i >= 0; i--) {
            if(strNumber[i] !== ".") {
                strNumberReturn = strNumber[i] + strNumberReturn;
            }
        }

        return Number(strNumberReturn);
    }

    function handleOnInput(event) {
        let strValue = String(event.target.value);
        let strNumber = String(changeToNumber(strValue));

        if(!Number(strNumber)) {
            event.target.value = strValue.slice(0, strValue.length - 1);
        } else {
            event.target.value = changeToFormat(strValue);
        }

        props.onChange(changeToNumber(event.target.value));
    }

    return (
        <div className="only-number-input" style={{width: props.width}}>
            <label htmlFor={props.name} style={{fontSize: props.fontSize, fontWeight: 600, marginBottom: "8px", marginTop: "15px"}}>{props.label}</label>
            <div className="only-number-input--container" style={styleDivOnlyNumberInput} onFocus={() => {setFocus(true)}} onBlur={() => {setFocus(false)}}>
                {props.haveIcon && 
                    <div style={{fontSize: props.fontSize}} className="only-number-input--icon" onClick={() => inputRef.current.focus()}>
                        {props.icon}
                    </div>
                }

                <input onInput={handleOnInput} style={{fontSize: props.fontSize}} placeholder="1.000" ref={inputRef} type="text" className="only-number-input--container-input" id={props.name} name={props.name}/>
            </div>
        </div>
    );  
}