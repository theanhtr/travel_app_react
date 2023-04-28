import React from "react";
import '../../css/Header_css/NavBarBottom.css'
import NavBarBottomButton from "./NavBarBottomButton";

export default function NavBarBottom() {
    function navBarBottomButtonClick() {
        console.log("bottom click");
    }
    return (
        <div className="nav_bar_bottom">
            <div className="nav_bar_bottom--content">
                <NavBarBottomButton onClick={navBarBottomButtonClick} text="Vận chuyển"/>
                <NavBarBottomButton onClick={navBarBottomButtonClick} text="Chỗ ở"/>
                <NavBarBottomButton onClick={navBarBottomButtonClick} text="Hoạt động và giải trí"/>
                <NavBarBottomButton onClick={navBarBottomButtonClick} text="Sản phẩm bổ sung"/>
            </div>
        </div>
    );
}