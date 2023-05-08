import React from 'react'
import "../../../css/Main_components/PopularDestinations/PopularDestinationChild.css"

export default function PopularDestinationChild(props) {
  const [hover, setHover] = React.useState(false);

  function onClick() {
    console.log('ok');
  }

  return (
    <div className='popular-destinations--child-container' onClick={onClick} onMouseEnter={() => {setHover(true)}} onMouseOut={() => {setHover(false)}}>
      <img width="100%" height="100%" src={props.imagePath} alt="load error" className='popular-destinations--child-image'/>
      <div onMouseEnter={() => {setHover(true)}} onMouseOut={() => {setHover(false)}} className='popular-destinations--child-overlay' style={{opacity: hover ? "0.6" : "0.4"}}></div>
      {
        hover ? <div onMouseEnter={() => {setHover(true)}} onMouseOut={() => {setHover(false)}} className='popular-destinations--child-suggest'>Xem khách sạn tại đây</div> : ""
      }
      <div onMouseEnter={() => {setHover(true)}} onMouseOut={() => {setHover(false)}} className='popular-destinations--child-title'>{props.provinceName}</div>
    </div>
  )
}
