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
    const [currentFocus, setCurrentFocus] = React.useState(-1);
    const arrayButtonFocus = ["email", "password", "login-button", "register-button", "forgot-password-button", "facebook-button", "google-button"];
    

    //lắng nghe sự kiện enter
    function handlePressKey(event) {
        let key = event.key;

        if(key === 'Tab') {
            event.preventDefault();

            let nextFocus = currentFocus + 1;

            if (nextFocus >= arrayButtonFocus.length) {
                nextFocus = 0;
            }

            document.getElementById(arrayButtonFocus[nextFocus]).focus();

            setCurrentFocus(nextFocus);
        } else if (key === 'Enter') {
            if(currentFocus >= 0 && currentFocus < arrayButtonFocus.length) {
                event.preventDefault();

                document.getElementById(arrayButtonFocus[currentFocus]).click();
            }
        }
    }

    function changeCurrentFocus(newFocus) {
        setCurrentFocus(newFocus);
    }

    React.useEffect(() => {
        document.addEventListener("keydown", handlePressKey);
        
        return () => {
            document.removeEventListener("keydown", handlePressKey);
        };
    });

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
        const fetchUserInformation = async () => {
            try {
                api.get('/my-information',
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                      }
                })
                    .then(response => {
                        localStorage.setItem('user_first_name', response.data.data.first_name);
                        localStorage.setItem('user_last_name', response.data.data.last_name);
                        localStorage.setItem('user_avatar_path', response.data.data.avatar);
                    })
                    .catch(error => {
                        console.log('get information error: ' + error.response.data.message);
                    });
              } catch (err) {

              }
        }

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

                        fetchUserInformation();
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
                setLoading(false);

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

            <LoginInput focusNumber={0} onChangeCurrentFocus={changeCurrentFocus} inputType="text" label="Email" height="35px" width="100%" name="email" fontSize="18px" haveSetHidden={false} onChange={setEmailInput}/>
            <LoginInput focusNumber={1} onChangeCurrentFocus={changeCurrentFocus} inputType="text" label="Password" height="35px" width="100%" name="password" fontSize="18px" haveSetHidden={true} onChange={setPasswordInput}/>

            <div style={{marginTop: "10px", paddingLeft: "10px", color:"red", height: "30px"}}>
                {error && "Thông tin đăng nhập chưa chính xác"}
            </div>
            <SampleButton name="login-button" onClick={loginWithPassword} backgroundColor="#0194F3" backgroundColorHover="#007CE8" width="100%" height="35px" textColor="white" text={"Đăng Nhập"}/>

            <div className="nav_bar_top-login--support">
                <SampleButton name="register-button" onClick={login} backgroundColor="#0194F3" backgroundColorHover="#007CE8" width="45%" height="35px" textColor="white" text="Đăng Ký"/>
                <div style={{width:"5%"}}></div>
                <SampleButton name="forgot-password-button" onClick={login} backgroundColor="#0194F3" backgroundColorHover="#007CE8" width="45%" height="35px" textColor="white" text="Quên mật khẩu"/>
            </div>

            <div style={{height: "15px"}}></div>

            <div className="nav_bar_top-login--social">
                <div>Hoặc đăng nhập bằng: </div>
                <div className="nav_bar_top-login--support">
                    <SampleButton name="facebook-button" onClick={login} backgroundColor="#0194F3" backgroundColorHover="#007CE8" width="45%" height="35px" textColor="white" text="Facebook"/>
                    <div style={{width:"5%"}}></div>
                    <SampleButton name="google-button" onClick={login} backgroundColor="#0194F3" backgroundColorHover="#007CE8" width="45%" height="35px" textColor="white" text="Google"/>
                </div>
            </div>
        </div>
    );  
}