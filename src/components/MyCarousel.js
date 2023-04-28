import React from "react";
import 'react-multi-carousel/lib/styles.css';
import "../css/Carousel.css"
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import Carousel from 'react-multi-carousel';

export default function MyCarousel(props) {
    const [elements, setElements] = React.useState([]);

    React.useEffect(() => {
        setElements(props.arrayElement)
    }, [props.arrayElement]);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      const itemClassVar = "carousel-item width-" + props.width + "px"
      
      return (<Carousel
        renderArrowsWhenDisabled={false}
        swipeable={false}
        draggable={false}
        slidesToSlide={1}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass={itemClassVar}
        sliderClass="carousel-slider"
        autoPlay={true}
        pauseOnHover={true}
      >
        {elements}
      </Carousel>);
}
