import React from "react";
import "../../css/Header_css/NavBarTopInformation.css";
import api from "../../api/BaseAxios";
import NavBarButton from "./NavBarButton";
import orderImage from "../../images/header/nav_bar_top/order.png"
import humanImage from "../../images/header/nav_bar_top/human.png"
import logoutImage from "../../images/header/nav_bar_top/logout.png"
import Loading from "../Notification/Loading";


export default function NavBarTopInformation(props) {
    const [loading, setLoading] = React.useState(false);

    function logout() {  
        const fetchData = async () => {
            try {
                setLoading(true);

                api.post('/auth/logout', {
                    allDevice: false
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                      }
                })
                    .then(response => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('email');
                        localStorage.setItem('isLogin', false);

                        localStorage.removeItem('user_first_name');
                        localStorage.removeItem('user_last_name');
                        localStorage.removeItem('user_avatar_path');

                        setLoading(false);
                        
                        props.onLogout();
                    })
                    .catch(error => {
                        console.log('logout error: ' + error.response.data.message);
                        setLoading(false);
                    });
    
              } catch (err) {
                console.log("Logout error: " + err);
              }
          };

        fetchData();
    }

    return (
        <div className="nav_bar_top-information">
            { 
                loading && 
                <Loading />
            }

            <div className="nav_bar_top-information--title">
                <p className="nav_bar_top-information--title-text" style={{fontSize: "18px", fontWeight: "650"}}> Tài khoản </p>
                <p className="nav_bar_top-information--title-name" style={{fontSize: "18px", fontWeight: "650"}}> {localStorage.getItem('email')} </p>
            </div>

            <div className="nav_bar_top-information--button-container">
                <NavBarButton textSize="16px" imageSrc={humanImage} text="Chỉnh sửa hồ sơ" haveArrow={false} linkRedirect="#"/>
                <NavBarButton textSize="16px" imageSrc={orderImage} text="Đặt chỗ của tôi" haveArrow={false} linkRedirect="#"/>
                <NavBarButton onClick={logout} textSize="16px" imageSrc={logoutImage} text="Đăng xuất" haveArrow={false}/>
            </div>
        </div>
    );  
}