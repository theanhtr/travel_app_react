import React from "react";
import "../../css/Header_css/NavBarBottomChildComponet.css"
import order from "../../images/header/nav_bar_top/order.png"
import NavBarButton from "./NavBarButton";

export default function NavBarBottomStay() {
    return (
        <div className="nav_bar_bottom-childComponent">
            <NavBarButton imageSrc={order} text="Khách sạn" haveArrow={false} linkRedirect="#"/>
            <NavBarButton imageSrc={order} text="Khách sạn" haveArrow={false} linkRedirect="#"/>
            <NavBarButton imageSrc={order} text="Khách sạn" haveArrow={false} linkRedirect="#"/>
        </div>
    );  
}