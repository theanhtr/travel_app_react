import React from "react";
import "../../css/Header_css/NavBarTopChangeLanguage.css";
import "../../css/Header_css/NavBarButton.css"
import vn from "../../images/header/nav_bar_top/vn.png"

function ChangeLanguageButton(props) {
    return <div className="nav_bar_top-button--container" onClick={props.onCLick}>
                <img src={props.imageSrc} alt="error" className="nav_bar_top-button--image"/>
                <p className="nav_bar_top-button--text"> {props.text} </p>
            </div>
}

export default function NavBarTopChangeLanguage() {
    function changeLanguage() {
        console.log("change language");
    }

    return (
        <div className="nav_bar_top-changle-language">
            <div className="nav_bar_top-changle-language--title">
                <p className="nav_bar_top-changle-language--title-text"> Chọn ngôn ngữ </p>
            </div>
            <div className="nav_bar_top-changle-language--options">
                <ChangeLanguageButton imageSrc={vn} text="VN" haveArrow={false} onCLick={changeLanguage}/>
                <ChangeLanguageButton imageSrc={vn} text="ENG" haveArrow={false} onCLick={changeLanguage}/>
            </div>
        </div>
    );  
}