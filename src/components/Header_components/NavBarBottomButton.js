import React from "react";
import "../../css/Header_css/NavBarBottomButton.css"
import {FaSortDown} from 'react-icons/fa';

export default function NavBarBottomButton(props) {
    return (
        <div className="nav_bar_bottom-button" onClick={props.onClick}>
            <p className="nav_bar_bottom-button--text"> {props.text} </p>
            <FaSortDown size={16}/>
        </div>
    );  
}