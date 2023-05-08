import React from "react";
import "../../css/Input/LoginInput.css";
import { FaEyeSlash, FaEye } from "react-icons/fa"

export default function LoginInput(props) {
    const [hidden, setHidden] = React.useState(true);

    const styleDivLoginInput = {
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
    }

    function setTextHidden() {
        setHidden(hidden ? false : true);
    }

    function onChangeInput(event) {
        props.onChange(event.target.value);
    }

    function handleOnChangeCurrentFocus() {
        props.onChangeCurrentFocus(props.focusNumber);
    }

    return (
        <>
            <label htmlFor={props.name} style={{fontWeight: 600, marginBottom: "8px", marginTop: "15px"}}>{props.label}</label>
            <div onClick={handleOnChangeCurrentFocus} className="login-input--container" style={styleDivLoginInput}>
                <input onChange={onChangeInput} type={!props.haveSetHidden ? props.inputType : (hidden ? "password" : props.inputType)} className="login-input--container-input" id={props.name} name={props.name}/>

                {props.haveSetHidden && 
                    <div className="login-input--hidden-icon" onClick={setTextHidden}>
                        {hidden ? <FaEye size={props.fontSize}/> : <FaEyeSlash size={props.fontSize}/>}
                    </div>
                }
            </div>
        </>
    );  
}