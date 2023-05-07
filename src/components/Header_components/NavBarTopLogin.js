import React from "react";
import "../../css/Header_css/NavBarTopLogin.css";
import LoginInput from "../Input/LoginInput";
import SampleButton from "../Button/SampleButton";
import api from "../../api/BaseAxios";
import * as yup from 'yup';
import Loading from "../Notification/Loading";

export default function NavBarTopLogin(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
      });

    function setEmailInput(value) {
        setEmail(value);
    }

    function setPasswordInput(value) {
        setPassword(value);
    }

    function loginWithPassword() { 
        const fetchData = async () => {
            try {
                setLoading(true);

                schema.validateSync({ email, password });
    
                api.post('/auth/login', {
                    email: email,
                    password: password
                })
                    .then(response => {
                        localStorage.setItem('token', response.data.data.token);
                        localStorage.setItem('isLogin', true);
                        localStorage.setItem('email', response.data.data.email);

                        setLoading(false);
    
                        props.onLogin();
                    })
                    .catch(error => {
                        console.log('login error: ' + error.response.data.message);
                        setLoading(false);
                        setError(true);
                        setTimeout(() => {
                            setError(false);
                        }, 2000);
                    });
              } catch (err) {
                console.log("Login error: " + err);

                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 2000);
              }
          };

        fetchData();
    }

    function login() {
        console.log("login");
    }

    return (
        <div className="nav_bar_top-login">
            { 
                loading && 
                <Loading />
            }
            <div className="nav_bar_top-login--title">
                <p className="nav_bar_top-login--title-text" style={{fontSize: "18px", fontWeight: "650"}}> Đăng nhập tài khoản </p>
            </div>

            <LoginInput inputType="text" label="Email" height="35px" width="100%" name="email" fontSize="18px" haveSetHidden={false} onChange={setEmailInput}/>
            <LoginInput inputType="text" label="Password" height="35px" width="100%" name="password" fontSize="18px" haveSetHidden={true} onChange={setPasswordInput}/>

            <div style={{marginTop: "10px", paddingLeft: "10px", color:"red", height: "30px"}}>
                {error && "Thông tin đăng nhập chưa chính xác"}
            </div>
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