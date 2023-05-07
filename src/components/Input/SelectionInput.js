import React from "react";
import "../../css/Input/SelectionInput.css";
import { CSSTransition } from "react-transition-group";
import "../../css/Trantision.css"
import {FaAngleDown} from "react-icons/fa"
import SelectionInputChild from "./Child_components/SelectionInputChild";

export default function SelectionInput(props) {
    const [componentOptionsShow, setComponentOptionsShow] = React.useState(false);
    const ref = React.useRef(null);

    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setComponentOptionsShow(false);
            setFocus(false);
          }
        }

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    function showComponentOptions() {
        setComponentOptionsShow(componentOptionsShow ? false : true);
        setFocus(focus ? false : true);
    }
    
    const [focus, setFocus] = React.useState(false);
    let currentSelected = props.arrayOptions.find(item => item.value === props.selectedValue);
    
    const styleDivSelectionInput = {
        width: "100%",
        height: props.height,
        border: focus ? "2px solid blue" : "1px solid black",
        cursor: "pointer"
    }

    function changeSelected(newSelectedValue) {
        setComponentOptionsShow(false);
        setFocus(false);
        props.onChange(newSelectedValue);
    }
    
    //options: title, value is required; sub_title is not required
    return (
        <div ref={ref} className="selection-input" style={{width: props.width}}>
            <label onClick={showComponentOptions} style={{fontSize: props.fontSize, fontWeight: 600, marginBottom: "8px", marginTop: "15px"}}>{props.label}</label>
            <div onClick={showComponentOptions} className="selection-input--container" style={styleDivSelectionInput} onFocus={() => {setFocus(true)}} onBlur={() => {setFocus(false)}}>
                {props.haveIcon && 
                    <div style={{fontSize: props.fontSize}} className="selection-input--icon">
                        {props.icon}
                    </div>
                }

                <div style={{fontSize: props.fontSize}} className="selection-input--selected-value">
                    <span>{currentSelected ? currentSelected.title : ""}</span>
                </div>

                <div style={{fontSize: props.fontSize}} className="selection-input--icon-arrow">
                    {<FaAngleDown size={16}/>}
                </div>
            </div>

            <CSSTransition
                in={componentOptionsShow}
                timeout={300}
                classNames="element--opacity-1--transition"
                unmountOnExit
            >
                {
                    <div className="selection-input--options-container">
                        {props.arrayOptions.map((option) => 
                            <SelectionInputChild onClick={changeSelected} isSelected={option.value === props.selectedValue} key={option.value} value={option.value} backgroundColorHover="#F2F3F3" backgroundColor="white" fontSizeTitle="16px" title={option.title} subTitle={option.sub_title ? option.sub_title : ""} fontSizeSubTitle="14px"/>
                        )}
                    </div>
                }
            </CSSTransition>
        </div>
    );  
}