import React from "react";
import "../../../css/Input/Child_components/SelectionInputChild.css";
import {GoPrimitiveDot} from "react-icons/go"

export default function SelectionInputChild(props) {
    const [hover, setHover] = React.useState(false);

    const styleDivSelectionInputChild = {
        backgroundColor: props.isSelected ? props.backgroundColorHover : (hover ? props.backgroundColorHover : props.backgroundColor),
        cursor: "pointer",
        color: props.isSelected ? "#2E98DD" : "black"
    }

  const handleMouseOver = () => {
      setHover(true);
    };
  
    const handleMouseOut = () => {
      setHover(false);
    };

    function onClick() {
      props.onClick(props.value);
    }

    return (
        <div className="selection-child--container" style={styleDivSelectionInputChild} onClick={onClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {(props.isSelected || hover) &&
              <div className="selection-child--icon-selected">
                <GoPrimitiveDot size={props.fontSizeTitle} />
              </div>
            }

            <div className="selection-child--data" style={{marginLeft: props.isSelected ? "0" : (hover ? "0" : "10%")}}>
              <div style={{fontSize: props.fontSizeTitle}} className="selection-child--title">{props.title}</div>
              
              {
                props.subTitle !== "" &&
                <div style={{fontSize: props.fontSizeSubTitle}} className="selection-child--subtitle">{props.subTitle}</div>
              }

            </div>
        </div>
    );  
}