import React, { useState } from "react";
import {FaBars} from "react-icons/fa";
import logo_travel from "../../images/logo_travel.png"
import '../../css/Header_css/NavBarTop.css'
import shake_hand from "../../images/header/nav_bar_top/shake_hand.png"
import book_mark from "../../images/header/nav_bar_top/book_mark.png"
import human_no_image from "../../images/header/nav_bar_top/human_no_image.png"
import download from "../../images/header/nav_bar_top/download.png"
import order from "../../images/header/nav_bar_top/order.png"
import vn from "../../images/header/nav_bar_top/vn.png"
import NavBarTopButton from "./NavBarTopButton"
import SampleButton from "../Button/SampleButton";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition, Transition } from "react-transition-group";
import NavBarTopDownload from './NavBarTopDownload';


export default function NavBarTop() {
    const [barMenuShow, setBarMenuShow] = useState(false);
    const navBarTopDownload = <NavBarTopDownload />
    
    function clickBarIcon() {
        setBarMenuShow(true);
    }

    function closeBarMenu() {
        setBarMenuShow(false);
    }


    function buttonNoArrowClick() {
        console.log("redirect");
    }

    function buttonHaveArrowClick() {
        console.log("show");
    }

    function sampleButtonClick() {
        console.log("sample button");
    }

    return (
        <div className="nav_bar_top">
            <div className="nav_bar_top--left">
                <FaBars color="#1BA0E2" size={24} className="bar_icon" onClick={clickBarIcon}/>
                <CSSTransition
                    in={barMenuShow}
                    timeout={300}
                    classNames="bar--menu-overlay-transition"
                    unmountOnExit
                >
                    <div className="bar_icon--menu-overlay" onClick={closeBarMenu}></div>
                </CSSTransition>

                <CSSTransition
                    in={barMenuShow}
                    timeout={300}
                    classNames="bar--menu-main-transition"
                    unmountOnExit
                >
                    <div className="bar_icon--menu-main">
                        <div className="bar_icon--menu-close" onClick={closeBarMenu} style={{cursor: "pointer"}}>
                            <AiOutlineClose size={40} style={{position: "absolute", left: "20vw"}}/>
                        </div>

                        <NavBarTopButton imageSrc={order} text="Đặt chỗ của tôi" onClick={buttonNoArrowClick} haveArrow={false}/>
                        <NavBarTopButton imageSrc={order} text="Đặt chỗ của tôi" onClick={buttonNoArrowClick} haveArrow={false}/>
                        <NavBarTopButton imageSrc={order} text="Đặt chỗ của tôi" onClick={buttonNoArrowClick} haveArrow={false}/>
                        <NavBarTopButton imageSrc={order} text="Đặt chỗ của tôi" onClick={buttonNoArrowClick} haveArrow={false}/>
                        
                    </div>
                    
                </CSSTransition>
                    
                <img src={logo_travel} alt="not found" width={135}/>
            </div>
        
            <div className="nav_bar_top--right">
                <NavBarTopButton imageSrc={download} text="Tải ứng dụng" componentChild={navBarTopDownload} haveArrow={true}/>
                <NavBarTopButton imageSrc={shake_hand} text="Hợp tác với chúng tôi" onClick={buttonNoArrowClick} haveArrow={false}/>
                <NavBarTopButton imageSrc={book_mark} text="Đã lưu" onClick={buttonNoArrowClick} haveArrow={false}/>
                <NavBarTopButton imageSrc={order} text="Đặt chỗ của tôi" onClick={buttonNoArrowClick} haveArrow={false}/>
                <NavBarTopButton imageSrc={vn} text="VND" onClick={buttonHaveArrowClick} haveArrow={true}/>
                <NavBarTopButton imageSrc={book_mark} text="Đăng nhập" onClick={buttonHaveArrowClick} haveArrow={true}/>
                <SampleButton onClick={sampleButtonClick} backgroundColor="#0194F3" backgroundColorHover="#007CE8" height="20px" textColor="white" text="Đăng ký"/>
            </div>
        </div>
    );
}