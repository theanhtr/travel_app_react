import React from "react";
import "../../css/Header_css/NavBarTopButton.css"
import {FaAngleDown} from 'react-icons/fa';
import { CSSTransition } from "react-transition-group";

export default function NavBarTopButton(props) {
    return (
        <div className="nav_bar_top-button" onClick={props.onClick}>
            <img src={props.imageSrc} alt="error" className="nav_bar_top-button--image"/>
            <p className="nav_bar_top-button--text"> {props.text} </p>
            {props.haveArrow && <FaAngleDown size={16}/>}
        </div>
    );  
}