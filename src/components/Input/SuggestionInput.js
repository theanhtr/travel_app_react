import React from "react";
import "../../css/Input/SuggestionInput.css";

export default function SuggestionInput(props) {
    const inputRef = React.useRef(null);
    const [focus, setFocus] = React.useState(false);

    const styleDivSuggestionInput = {
        width: "100%",
        height: props.height,
        border: focus ? "2px solid blue" : "1px solid black",
    }

    function onChangeInput(event) {
        props.onChange(event.target.value);
    }

    return (
        <div className="suggestion-input" style={{width: props.width}}>
            <label htmlFor={props.name} style={{fontSize: props.fontSize, fontWeight: 600, marginBottom: "8px", marginTop: "15px"}}>{props.label}</label>
            <div className="suggestion-input--container" style={styleDivSuggestionInput} onFocus={() => {setFocus(true)}} onBlur={() => {setFocus(false)}}>
                {props.haveIcon && 
                    <div style={{fontSize: props.fontSize}} className="suggestion-input--icon" onClick={() => inputRef.current.focus()}>
                        {props.icon}
                    </div>
                }

                <input style={{fontSize: props.fontSize}} placeholder="Hà Nội" ref={inputRef} onChange={onChangeInput} type="text" className="suggestion-input--container-input" id={props.name} name={props.name}/>
            </div>
        </div>
    );  
}