import React from "react";
import "../../css/Input/HaveChildComponentInput.css";
import { CSSTransition } from "react-transition-group";
import "../../css/Trantision.css"
import {FaAngleDown} from "react-icons/fa"

export default function HaveChildComponentInput(props) {
    const [componentChildShow, setComponentChildShow] = React.useState(false);
    const ref = React.useRef(null);

    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setComponentChildShow(false);
            setFocus(false);
          }
        }

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    function showComponentChild() {
        setComponentChildShow(componentChildShow ? false : true);
        setFocus(focus ? false : true);
    }
    
    const [focus, setFocus] = React.useState(false);
    
    const styleDivHaveChildComponentInput = {
        width: "100%",
        height: props.height,
        border: focus ? "2px solid blue" : "1px solid black",
        cursor: "pointer"
    }
    
    //Child: title, value is required; sub_title is not required
    return (
        <div ref={ref} className="have-child-input" style={{width: props.width}}>
            <label onClick={showComponentChild} style={{fontSize: props.fontSize, fontWeight: 600, marginBottom: "8px", marginTop: "15px"}}>{props.label}</label>
            <div onClick={showComponentChild} className="have-child-input--container" style={styleDivHaveChildComponentInput} onFocus={() => {setFocus(true)}} onBlur={() => {setFocus(false)}}>
                {props.haveIcon && 
                    <div style={{fontSize: props.fontSize}} className="have-child-input--icon">
                        {props.icon}
                    </div>
                }

                <div style={{fontSize: props.fontSize}} className="have-child-input--current-data">
                    <span>{props.currentData}</span>
                </div>

                <div style={{fontSize: props.fontSize}} className="have-child-input--icon-arrow">
                    <FaAngleDown size={16}/>
                </div>
            </div>

            <CSSTransition
                in={componentChildShow}
                timeout={300}
                classNames="element--opacity-1--transition"
                unmountOnExit
            >
                {
                    <div className="have-child-input--child-container">
                        {props.childComponent}
                    </div>
                }
            </CSSTransition>
        </div>
    );  
}