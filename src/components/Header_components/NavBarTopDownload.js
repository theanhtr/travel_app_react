import React from "react";
import "../../css/Header_css/NavBarTopDownload.css";
import { FaArrowDown } from "react-icons/fa";

export default function NavBarTopDownload() {
    return (
        <div className="nav_bar_top-download">
            <div className="nav_bar_top-download--title">
                <FaArrowDown width={18}/>
                <p className="nav_bar_top-download--title-text"> Quét mã QR để tải xuống </p>
            </div>
            <img className="nav_bar_top-download--qrcode" src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/20/1621505512045-e090f5237022cf86afd98eb132f19086.png?tr=h-116,q-75,w-116" alt="get qrcode error"/>
            <div className="nav_bar_top-download--googlePlay"></div>
            <div className="nav_bar_top-download--appleStore"></div>
        </div>
    );  
}