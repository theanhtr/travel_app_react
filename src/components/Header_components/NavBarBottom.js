import React from "react";
import '../../css/Header_css/NavBarBottom.css'
import NavBarButton from "./NavBarButton";
import NavBarBottomStay from "./NavBarBottomStay";

export default function NavBarBottom() {
    const navBarBottomStay = <NavBarBottomStay />

    return (
        <div className="nav_bar_bottom">
            <div className="nav_bar_bottom--content">
                <NavBarButton textSize="18px" text="Chỗ ở" haveArrow={true} componentChild={navBarBottomStay}/>
                <NavBarButton textSize="18px" text="Sản phẩm bổ sung" haveArrow={true} componentChild={navBarBottomStay}/>
            </div>
        </div>
    );
}