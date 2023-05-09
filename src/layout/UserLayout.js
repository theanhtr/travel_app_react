import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../css/layout/UserLayout.css"
import UserInformation from '../components/UserLayout_components/UserInformation'
import Line from '../components/Support/Line'
import ButtonAll from '../components/Button/ButtonAll'
import orderImage from "../images/header/nav_bar_top/order.png"
import humanImage from "../images/header/nav_bar_top/human.png"
import logoutImage from "../images/header/nav_bar_top/logout.png"

export default function UserLayout() {
  return (
    <div className='user-layout'>
        <div className='user-layout--nav'>
          <UserInformation />
          
          <Line width="100%" height="1px" color="black" />
          
          <ButtonAll imageSrc={orderImage} text="Đặt chỗ của tôi" haveArrow={false} linkRedirect="mybooking"/>
          <ButtonAll imageSrc={humanImage} text="Cài đặt tài khoản" haveArrow={false} linkRedirect="account"/>

          <Line width="90%" height="1px" color="black" />

          <ButtonAll imageSrc={logoutImage} text="Đăng xuất" haveArrow={false} linkRedirect="/"/>

        </div>

        <div className='user-layout--content'>
          <Outlet />
        </div>
    </div>
  )
}
