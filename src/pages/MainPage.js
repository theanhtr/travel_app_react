import React from "react";
import '../css/Page/MainPage.css'
import MyCarousel from "../components/MyCarousel";
import Booking from "../components/Main_components/Booking";
import api from '../api/BaseAxios'
import { useLoaderData } from "react-router-dom";
import PopularDestinations from '../components/Main_components/PopularDestinations'


export default function MainPage() {
    const [promotionImages, setPromotionImages] = React.useState([]);

    React.useEffect(() => {
        const promotionImagesLink = ["https://ik.imagekit.io/tvlk/image/imageResource/2022/12/16/1671178107214-dbeb159eef7ff3edf28a6fecffc3e9fb.jpeg?tr=h-230,q-75,w-472", "https://ik.imagekit.io/tvlk/image/imageResource/2023/02/16/1676541934785-e298a8078752c09865da53cc0ea80c6c.png?tr=h-230,q-75,w-472", "https://ik.imagekit.io/tvlk/image/imageResource/2023/02/24/1677241355474-7600499dd8000f1cdd4ae1ad3b779a9a.jpeg?tr=h-230,q-75,w-472", "https://ik.imagekit.io/tvlk/image/imageResource/2023/03/01/1677661873042-189aa79575715e669ae2335fdb50109b.png?tr=h-230,q-75,w-472", "https://ik.imagekit.io/tvlk/image/imageResource/2023/01/05/1672895303799-b606809bc4a9a275e517bddc86ae252c.png?tr=h-230,q-75,w-472"];

        const promotionImagesElement = promotionImagesLink.map((promotionImageLink, index) => {
            return <img src={promotionImageLink} alt="error" key={index}/>
        });

        setPromotionImages(promotionImagesElement);
    }, []);


    return (
        <div id="main_page">
            <div className="main_page--background-search">
                <div className="promotion">
                    <MyCarousel arrayElement={promotionImages} width={472}/>
                </div>
                <Booking />
            </div>

            <PopularDestinations />
        </div>
    );
}