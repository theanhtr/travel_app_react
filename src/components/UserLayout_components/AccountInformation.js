import React from 'react'
import "../../css/UserLayout_components/AccountInformation_components/AccountInformation.css"

export default function AccountInformation() {
  const [currentChildComponentActive, setCurrentChildComponentActive] = React.useState("");

  

  return (
    <div className='account-information--container'>
        <div className='account-information--label'>
            Cài đặt tài khoản
        </div>

        <div className='account-information--nav'>
            <div className='account-information--nav-title account-information--nav-title-active'>Thông tin tài khoản</div>
            <div className='account-information--nav-title'>Mật khẩu</div>
        </div>
    </div>
  )
}
