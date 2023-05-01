import React, { useState } from "react";
import "../../css/Header_css/NavBarTopButton.css"
import {FaAngleDown} from 'react-icons/fa';
import { CSSTransition } from "react-transition-group";

export default function NavBarTopButton(props) {
    const [componentChildShow, setComponentChildShow] = React.useState(false);

    function showComponentChild() {
        setComponentChildShow(componentChildShow ? false : true);
    }

    return (
        <div className="nav_bar_top-button" onClick={showComponentChild}>
            <img src={props.imageSrc} alt="error" className="nav_bar_top-button--image"/>
            <p className="nav_bar_top-button--text"> {props.text} </p>
            {props.haveArrow && <FaAngleDown size={16}/>}

            <CSSTransition
                    in={componentChildShow}
                    timeout={300}
                    classNames="nav_bar_top-button--childComponent--transition"
                    unmountOnExit
                >
                    <div className="nav_bar_top-button--childComponent">
                        {props.componentChild}
                    </div>
            </CSSTransition>
        </div>
    );  
}