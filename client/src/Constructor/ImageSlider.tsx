import React, { useState } from 'react';
import styles from '../style/BasketPage.module.scss';

const ImageSlider = ({ images, onSelectColor }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleImageClick = () => {
        const selectedColor = images[currentImageIndex].color;
        onSelectColor(selectedColor);
        console.log(selectedColor)
    };
    return (
        <div>
            <img
                className={styles.onClick}
                width={90}
                height={65}
                src='https://cdn-icons-png.flaticon.com/512/44/44765.png'
                onClick={goToPrevious}
            />
            <img
                width={200}
                height={200}
                src={images[currentImageIndex].src}
                alt="carousel-image"
                style={{ backgroundColor: images[currentImageIndex].color }}
                onClick={handleImageClick}
                className={styles.onClickPhoto}
            />
            <img
                className={styles.onClick}
                width={90}
                height={80}
                src='https://cdn-icons-png.flaticon.com/512/57/57116.png'
                onClick={goToNext}
            />
        </div>
    );
};

export default ImageSlider;
