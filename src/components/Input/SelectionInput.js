import React from "react";
import "../../css/Input/SelectionInput.css";
import { CSSTransition } from "react-transition-group";
import "../../css/Trantision.css"
import {FaAngleDown} from "react-icons/fa"

import "react-datepicker/dist/react-datepicker.css";

export default function SelectionInput(props) {
    const [focus, setFocus] = React.useState(false);
    let currentSelected = props.arrayOptions.find(item => item.value === props.selectedValue);
    
    const styleDivSelectionInput = {
        width: "100%",
        height: props.height,
        border: focus ? "2px solid blue" : "1px solid black",
        cursor: "pointer"
    }
    
    function onChangeInput(event) {
        console.log(event);
        setFocus(false);
    }
    
    function focusToInput() {
        document.getElementById(props.name).focus();
    }
    
    //options: title, value is required; sub_title is not required
    return (
        <div className="selection-input" style={{width: props.width}}>
            <label htmlFor={props.name} style={{fontSize: props.fontSize, fontWeight: 600, marginBottom: "8px", marginTop: "15px"}}>{props.label}</label>
            <div className="selection-input--container" style={styleDivSelectionInput} onFocus={() => {setFocus(true)}} onBlur={() => {setFocus(false)}}>
                {props.haveIcon && 
                    <div style={{fontSize: props.fontSize}} className="selection-input--icon" onClick={focusToInput}>
                        {props.icon}
                    </div>
                }

                <div style={{fontSize: props.fontSize}} className="selection-input--selected-value" onClick={focusToInput}>
                    <span>{currentSelected ? currentSelected.title : ""}</span>
                </div>

                <div style={{fontSize: props.fontSize}} className="selection-input--icon-arrow" onClick={focusToInput}>
                    {<FaAngleDown size={16}/>}
                </div>
            </div>

                {/* <CSSTransition
                    in={componentChildShow}
                    timeout={300}
                    classNames="element--opacity-1--transition"
                    unmountOnExit
                >
                    {props.componentChild}
              </CSSTransition> */}
        </div>
    );  
}