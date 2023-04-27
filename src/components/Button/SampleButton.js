import React from "react";
import "../../css/Header_css/NavBarTopButton.css"
import {FaAngleDown} from 'react-icons/fa';

export default function NavBarTopButton(props) {

    return (
        <div className="sample_button" onClick={props.onClick} style={{backgroundColor: props.backgroundColor}}>
            <img src={props.src} alt="error" className="sample_button--image"/>
            <p className="sample_button--text" color={props.textColor}> {props.text} </p>
            {props.haveArrow && <FaAngleDown size={16}/>}
        </div>
    );  
}