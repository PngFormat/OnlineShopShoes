
import React, {useEffect, useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = () => {
    const images = [
        "https://static.vecteezy.com/system/resources/previews/017/339/634/original/puma-transparent-background-free-png.png",
        "https://www.pngplay.com/wp-content/uploads/9/Adidas-Background-PNG-Image.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Reebok_logo19.png/800px-Reebok_logo19.png",
        "https://i.pinimg.com/originals/55/f6/8e/55f68e1fbbfb3a97de3447dea15fbe28.png",
        "https://www.pngplay.com/wp-content/uploads/9/Adidas-Background-PNG-Image.png",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === images.length - 1 ? 0 : prevSlide + 1
            );
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <div>
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} width={500} height={300} />
        </div>
    );
};
export default ImageSlider;