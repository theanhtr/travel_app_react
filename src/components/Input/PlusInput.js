import React from "react";
import "../../css/Input/PlusInput.css";
import {FaPlus, FaMinus} from "react-icons/fa"

export default function PlusInput(props) {
    const styleDivPlusInput = {
        width: props.width,
        height: props.height,
    }

    let styleMinusOperator = {
        color: props.value === 1 ? "#CDD0D1" : "#2EA6F4",
        cursor: props.value === 1 ? "" : "pointer",
    }

    function minusValue() {
        props.onChange(props.value - 1);
    }

    function plusValue() {
        props.onChange(props.value + 1);
    }

    function dontDoAnyThing() {}

    return (
        <div className="plus-input--container" style={styleDivPlusInput}>
            <div style={{fontSize: props.fontSize}} className="plus-input--label-container">
                {props.haveIcon && 
                    <div className="plus-input--icon">
                        {props.icon}
                    </div>
                }

                <div className="plus-input--label">
                    <span>{props.label}</span>
                </div>
            </div>

            <div style={{fontSize: props.fontSize}} className="plus-input--data-update">
                <div className="plus-input--operator" onClick={props.value > 1 ? minusValue : dontDoAnyThing} style={styleMinusOperator}>
                    <FaMinus size={16}/>
                </div>

                <div className="plus-input--current-value">
                    {props.value}
                </div>
                
                <div className="plus-input--operator" onClick={plusValue} style={{color: "#2EA6F4", cursor: "pointer"}}>
                    <FaPlus size={16}/>
                </div>
            </div>
        </div>
    );  
}