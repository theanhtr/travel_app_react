import React from 'react'
import '../../css/UserLayout_components/UserInformation.css'

export default function UserInformation() {
  return (
    <div className='user-information--container'>
        <div className='user-information--avatar'>
          <img src={localStorage.getItem('user_avatar_path')} alt='load...'/>
        </div>

        <div className='user-information--title'>
            <div className='user-information--title-name'>
              {localStorage.getItem('user_first_name') + " " + localStorage.getItem('user_last_name')}
            </div>

            <div className='user-information--title-email'>
              {localStorage.getItem('email')}
            </div>
        </div>
    </div>
  )
}
