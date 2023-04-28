import React from "react";
import '../css/Page/MainPage.css'
import MyCarousel from "../components/MyCarousel";
import Booking from "../components/Main_components/Booking";

export default function MainPage() {
    const [promotionImages, setPromotionImages] = React.useState([]);
    console.log("1");

    React.useEffect(() => {
        const promotionImagesLink = ["https://ik.imagekit.io/tvlk/image/imageResource/2023/04/21/1682070726164-3efa59be21736c30ab345628f280a70f.jpeg?tr=h-230,q-75,w-472", "https://ik.imagekit.io/tvlk/image/imageResource/2023/04/14/1681468768961-2181c800b9c00bb9091e7889ac518c93.jpeg?tr=h-230,q-75,w-472", "https://ik.imagekit.io/tvlk/image/imageResource/2023/04/26/1682502154422-0d163cdf2431660b055d152004bf55af.jpeg?tr=h-230,q-75,w-472", "https://ik.imagekit.io/tvlk/image/imageResource/2023/04/06/1680750745270-36c2a983d9813200951eac3023d10f3b.png?tr=h-230,q-75,w-472", "https://ik.imagekit.io/tvlk/image/imageResource/2023/04/12/1681268942702-5fedbf6fda604956f4e8acf4ee16fa74.png?tr=h-230,q-75,w-472", "https://ik.imagekit.io/tvlk/image/imageResource/2022/12/22/1671695840325-dabe663df8eba4b6c45a8dcf6c3c03a9.png?tr=h-230,q-75,w-472"];

        const promotionImagesElement = promotionImagesLink.map((promotionImageLink) => {
            return <img src={promotionImageLink} alt="error"/>
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
        </div>
    );
}