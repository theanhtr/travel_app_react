import React from "react";
import "../../css/Header_css/NavBarTopLogin.css";
import LoginInput from "../Input/LoginInput";
import SampleButton from "../Button/SampleButton";

export default function NavBarTopLogin() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function setEmailInput(value) {
        setEmail(value);
    }

    function setPasswordInput(value) {
        setPassword(value);
    }

    function loginWithPassword() {
        console.log(email);
        console.log(password);
    }

    function login() {
        console.log("login");
    }

    return (
        <div className="nav_bar_top-login">
            <div className="nav_bar_top-login--title">
                <p className="nav_bar_top-login--title-text" style={{fontSize: "18px", fontWeight: "650"}}> Đăng nhập tài khoản </p>
            </div>

            <LoginInput inputType="text" label="Email" height="35px" width="100%" name="email" fontSize="18px" haveSetHidden={false} onChange={setEmailInput}/>
            <LoginInput inputType="text" label="Password" height="35px" width="100%" name="password" fontSize="18px" haveSetHidden={true} onChange={setPasswordInput}/>

            <div style={{height: "30px"}}></div>
            <SampleButton onClick={loginWithPassword} backgroundColor="#0194F3" backgroundColorHover="#007CE8" width="100%" height="35px" textColor="white" text="Đăng Nhập"/>

            <div className="nav_bar_top-login--support">
                <SampleButton onClick={login} backgroundColor="#0194F3" backgroundColorHover="#007CE8" width="45%" height="35px" textColor="white" text="Đăng Ký"/>
                <div style={{width:"5%"}}></div>
                <SampleButton onClick={login} backgroundColor="#0194F3" backgroundColorHover="#007CE8" width="45%" height="35px" textColor="white" text="Quên mật khẩu"/>
            </div>

            <div style={{height: "15px"}}></div>

            <div className="nav_bar_top-login--social">
                <div>Hoặc đăng nhập bằng: </div>
                <div className="nav_bar_top-login--support">
                    <SampleButton onClick={login} backgroundColor="#0194F3" backgroundColorHover="#007CE8" width="45%" height="35px" textColor="white" text="Facebook"/>
                    <div style={{width:"5%"}}></div>
                    <SampleButton onClick={login} backgroundColor="#0194F3" backgroundColorHover="#007CE8" width="45%" height="35px" textColor="white" text="Google"/>
                </div>
            </div>
        </div>
    );  
}