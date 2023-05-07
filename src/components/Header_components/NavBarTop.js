import React from "react";
import {FaBars} from "react-icons/fa";
import logo_travel from "../../images/logo_travel.png"
import '../../css/Header_css/NavBarTop.css'
import shake_hand from "../../images/header/nav_bar_top/shake_hand.png"
import book_mark from "../../images/header/nav_bar_top/book_mark.png"
import human from "../../images/header/nav_bar_top/human.png"
import download from "../../images/header/nav_bar_top/download.png"
import order from "../../images/header/nav_bar_top/order.png"
import vn from "../../images/header/nav_bar_top/vn.png"
import NavBarButton from "./NavBarButton"
import SampleButton from "../Button/SampleButton";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition, Transition } from "react-transition-group";
import NavBarTopDownload from './NavBarTopDownload';
import NavBarTopChangeLanguage from "./NavBarTopChangeLanguage";
import NavBarTopLogin from "./NavBarTopLogin";
import NavBarTopInformation from "./NavBarTopInformation";

export default function NavBarTop() {
    const [barMenuShow, setBarMenuShow] = React.useState(false);
    let isLoginLocalStorage = 'false';

    try {
        isLoginLocalStorage = localStorage.getItem('isLogin');
    } catch (error) {
        console.log('local storage error');
    }

    const [isLogin, setIsLogin] = React.useState(isLoginLocalStorage);

    const navBarTopDownload = <NavBarTopDownload />
    const navBarTopChangeLanguage = <NavBarTopChangeLanguage />
    
    function clickBarIcon() {
        setBarMenuShow(true);
    }

    function closeBarMenu() {
        setBarMenuShow(false);
    }

    function userLogin() {
        setIsLogin('true');
    }

    function userLogout() {
        setIsLogin('false');
    }

    function sampleButtonClick() {
        console.log("sample button");
    }

    function renderUserChildComponent() {
        if(isLogin === 'true') {
            return <NavBarTopInformation onLogout={userLogout}/>;
        } else {
            return <NavBarTopLogin onLogin={userLogin}/>;
        }
    }

    return (
        <div className="nav_bar_top">
            <div className="nav_bar_top--left">
                <FaBars color="#1BA0E2" size={24} className="bar_icon" onClick={clickBarIcon}/>
                <CSSTransition
                    in={barMenuShow}
                    timeout={300}
                    classNames="element--opacity-0-8--transition"
                    unmountOnExit
                >
                    <div className="bar_icon--menu-overlay" onClick={closeBarMenu}></div>
                </CSSTransition>

                <CSSTransition
                    in={barMenuShow}
                    timeout={300}
                    classNames="element--tran-X-minus-100-left--transition"
                    unmountOnExit
                >
                    <div className="bar_icon--menu-main">
                        <div className="bar_icon--menu-close" onClick={closeBarMenu} style={{cursor: "pointer"}}>
                            <AiOutlineClose size={40} style={{position: "absolute", left: "22vw"}}/>
                        </div>

                        <NavBarButton imageSrc={order} text="Đặt chỗ của tôi" haveArrow={false} linkRedirect="#"/>
                        <NavBarButton imageSrc={order} text="Đặt chỗ của tôi" haveArrow={false} linkRedirect="#"/>
                        <NavBarButton imageSrc={order} text="Đặt chỗ của tôi" haveArrow={false} linkRedirect="#"/>
                        <NavBarButton imageSrc={order} text="Đặt chỗ của tôi" haveArrow={false} linkRedirect="#"/>
                        
                    </div>
                    
                </CSSTransition>
                    
                <img src={logo_travel} alt="not found" width={135}/>
            </div>
        
            <div className="nav_bar_top--right">
                <NavBarButton imageSrc={download} text="Tải ứng dụng" haveArrow={true} componentChild={navBarTopDownload}/>
                <NavBarButton imageSrc={book_mark} text="Thông tin thêm" haveArrow={false} linkRedirect="about"/>
                <NavBarButton imageSrc={shake_hand} text="Hợp tác với chúng tôi" haveArrow={false} linkRedirect="#"/>
                <NavBarButton imageSrc={book_mark} text="Đã lưu" haveArrow={false} linkRedirect="#"/>
                <NavBarButton imageSrc={order} text="Đặt chỗ của tôi" haveArrow={false} linkRedirect="#"/>
                <NavBarButton imageSrc={vn} text="VN" haveArrow={true} componentChild={navBarTopChangeLanguage}/>
                <NavBarButton imageSrc={human} text="Đăng nhập" haveArrow={true} componentChild={renderUserChildComponent}/>
                <SampleButton onClick={sampleButtonClick} backgroundColor="#0194F3" backgroundColorHover="#007CE8" height="20px" textColor="white" text="Đăng ký"/>
            </div>
        </div>
    );
}