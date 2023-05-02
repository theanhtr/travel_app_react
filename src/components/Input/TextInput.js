import React from "react";
import "../../css/Input/TextInput.css";
import { FaEyeSlash, FaEye } from "react-icons/fa"

export default function TextInput(props) {
    const [hidden, setHidden] = React.useState(true);

    const styleDivTextInput = {
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

    return (
        <>
            <label htmlFor={props.name} style={{fontWeight: 600, marginBottom: "8px", marginTop: "15px"}}>{props.label}</label>
            <div className="text-input--container" style={styleDivTextInput}>
                <input onChange={onChangeInput} type={!props.haveSetHidden ? "text" : (hidden ? "password" : "text")} className="text-input--container-input" id={props.name} name={props.name}/>

                {props.haveSetHidden && 
                    <div className="text-input--hidden-icon" onClick={setTextHidden}>
                        {hidden ? <FaEye size={props.fontSize}/> : <FaEyeSlash size={props.fontSize}/>}
                    </div>
                }
            </div>
        </>
    );  
}