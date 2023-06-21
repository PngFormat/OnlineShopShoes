import React, { useState } from 'react';
import styles from '../style/CustomShoes.module.scss';
import Constructor from "../Constructor/Constructor";
import CustomShape from "../Constructor/Components/CustomShape";

const CustomPage = () => {
    const [selectedLaceColor, setSelectedLaceColor] = useState('');
    const [selectedSoleColor, setSelectedSoleColor] = useState('');
    const [selectedSoleBottomColor, setSelectedSoleBottomColor] = useState('');
    const shapes = [];
    const topStart = 110;
    const leftStart = 317;
    const width = "35px";
    const height = "35px";
    const color = selectedLaceColor;
    const shapeCoordinates = "polygon(40% 0%, 100% 25%, 55% 100%, 10% 100%)";

    for (let i = 0; i < 6; i++) {
        const top = `${topStart + i * 13.1}px`;
        const left = `${leftStart + i * 32.5}px`;

        shapes.push({
            top,
            left,
            width,
            height,
            color,
            shapeCoordinates,
        });
    }

    const shapesSole = [];
    const topStartSole = 240;
    const leftStartSole = 5;
    const widthSole = "220px";
    const heightSole = "70px";
    const colorSole = selectedSoleColor;
    const shapeCoordinatesSole = "polygon(10% -15%, 100% 15%, 100% 93%, 10% 78%)";

    for (let i = 0; i < 1; i++) {
        const top = `${topStartSole + i * 10}px`;
        const left = `${leftStartSole + i * 200.5}px`

        shapesSole.push({
            top,
            left,
            width: widthSole,
            height: heightSole,
            color: colorSole,
            shapeCoordinates: shapeCoordinatesSole,
        });
    }



    const handleLacesColorSelect = (color) => {
        setSelectedLaceColor(color);

    };

    const handleSoleColorSelect = (colorSole) => {
        setSelectedSoleBottomColor(colorSole);
    };

    const handleSoleBottomColorSelect = (colorSoleBottom) => {
        setSelectedSoleColor(colorSoleBottom);
    };

    console.log(selectedSoleColor)
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

                {shapesSole.map((shapesed, i) => (
                    <CustomShape key={i} {...shapesed} />
                ))}
            </div>

            <div
                className={styles.laces}
                style={{
                    position: 'absolute',
                    top: '415px',
                    left: '185px',
                    width: '440px',
                    height: '70px',
                    backgroundColor: selectedSoleColor,
                    clipPath: 'polygon(10% 7% , 100% 10% , 75% 70% , 10% 75%,10% 0%,90% 30%)', // Define your custom shape using coordinates

                }}
            ></div>

            <div
                style={{
                    position: 'absolute',
                    top: '460px',
                    left: '-60px',
                    width: '675px',
                    height: '20px',
                    backgroundColor: selectedSoleBottomColor,
                    clipPath: 'polygon(10% 50% , 100% 10% , 90% 70% , 45% 75%,10% 0%,50% 30%)', // Define your custom shape using coordinates

                }}
            ></div>
            <div className={styles.mainBlock}>
                <Constructor
                    onSoleColorSelect={handleSoleColorSelect}
                    onSoleBottomColorSelect={handleSoleBottomColorSelect}
                    onLacesColorSelect={handleLacesColorSelect} />
            </div>
        </div>
    );
};

export default CustomPage;
