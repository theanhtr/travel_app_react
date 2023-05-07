import React from "react";
import "../../css/Header_css/NavBarButton.css"
import "../../css/Trantision.css"
import {FaAngleDown} from 'react-icons/fa';
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

export default function NavBarButton(props) {
    //for router
    let navigate = useNavigate();

    const [componentChildShow, setComponentChildShow] = React.useState(false);
    const ref = React.useRef(null);

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
          setComponentChildShow(false);
        }
      }

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      });

    function showComponentChild() {
        setComponentChildShow(componentChildShow ? false : true);
    }

    function redirectToLink() {
        navigate(props.linkRedirect);
    }

    return (
        <div ref={componentChildShow === true ? ref : null} className="nav_bar_top-button">
            <div className="nav_bar_top-button--container" onClick={props.haveArrow ? showComponentChild : redirectToLink}>
              <img src={props.imageSrc} className="nav_bar_top-button--image"/>
              <p className="nav_bar_top-button--text" style={{fontSize: props.textSize ?? "14px", margin: "0px 3px"}}> {props.text} </p>
              {props.haveArrow && <FaAngleDown size={16}/>}
            </div>
            {props.haveArrow 
                && <CSSTransition
                    in={componentChildShow}
                    timeout={300}
                    classNames="element--opacity-1--transition"
                    unmountOnExit
                >
                    {props.componentChild}
              </CSSTransition>
            }
        </div>
    );  
}