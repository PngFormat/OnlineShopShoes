import React, { useState } from 'react';
import styles from '../style/CustomShoes.module.scss';
import Constructor from "../Constructor/Constructor";
import CustomShape from "../Constructor/Components/CustomShape";

const CustomPage = () => {
    const [selectedLaceColor, setSelectedLaceColor] = useState('');
    const shapes = [
        {
            top: "110px",
            left: "317px",
            width: "35px",
            height: "35px",
            color: selectedLaceColor,
            shapeCoordinates: "polygon(40% 0%, 100% 25%, 55% 100%, 10% 100%)",
        },
        {
            top: "122px",
            left: "347px",
            width: "35px",
            height: "35px",
            color: selectedLaceColor,
            shapeCoordinates: "polygon(40% 0%, 100% 25%, 55% 100%, 10% 100%)",
        },
        {
            top: "135px",
            left: "379px",
            width: "35px",
            height: "35px",
            color: selectedLaceColor,
            shapeCoordinates: "polygon(40% 0%, 100% 25%, 55% 100%, 10% 100%)",
        },
        {
            top: "150px",
            left: "412px",
            width: "35px",
            height: "35px",
            color: selectedLaceColor,
            shapeCoordinates: "polygon(40% 0%, 100% 25%, 55% 100%, 10% 100%)",
        },
        {
            top: "165px",
            left: "444px",
            width: "35px",
            height: "35px",
            color: selectedLaceColor,
            shapeCoordinates: "polygon(40% 0%, 100% 25%, 55% 100%, 10% 100%)",
        },
        {
            top: "177px",
            left: "479px",
            width: "35px",
            height: "35px",
            color: selectedLaceColor,
            shapeCoordinates: "polygon(40% 0%, 100% 25%, 55% 100%, 10% 100%)",
        },
    ];

    const handleLacesColorSelect = (color) => {
        setSelectedLaceColor(color);
    };

    return (
        <div>
            <h1>Кастомізація взуття</h1>
            <div className={styles.imageContainer} style={{ position: 'relative' }}>
                <img
                    width={650}
                    height={400}
                    className={styles.customImage}
                    src='https://img.freepik.com/premium-vector/outline-cool-sneakers-shoes-sneaker-outline-drawing-vector-sneakers-drawn-in-a-sketch-style_681139-169.jpg'
                    alt='Кастом'
                />
                {shapes.map((shape, index) => (
                    <CustomShape key={index} {...shape} />
                ))}
            </div>
            <div className={styles.mainBlock}>
                <Constructor onLacesColorSelect={handleLacesColorSelect} />
            </div>
        </div>
    );
};

export default CustomPage;
