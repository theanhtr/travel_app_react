import React from "react";
import '../../css/Header_css/Header.css'
import NavBarTop from './NavBarTop';
import NavBarBottom from './NavBarBottom';

export default function Header() {
    return (
        <div id="header">
            <NavBarTop />
            <NavBarBottom />            
        </div>
    );
}