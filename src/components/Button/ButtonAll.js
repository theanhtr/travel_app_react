import React from "react";
import "../../css/Button/ButtonAll.css"
import "../../css/Trantision.css"
import {FaAngleDown} from 'react-icons/fa';
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

export default function ButtonAll(props) {
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
        <div ref={componentChildShow === true ? ref : null} className="button-all">
            <div className="button-all--container" onClick={props.onClick ? props.onClick : (props.haveArrow ? showComponentChild : redirectToLink)}>
              <img src={props.imageSrc} height={18} className="button-all--image"/>
              <p className="button-all--text" style={{fontSize: props.textSize ?? "14px", margin: "0px 3px"}}> {props.text} </p>
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