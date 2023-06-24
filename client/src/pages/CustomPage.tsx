import React, { useState } from 'react';
import styles from '../style/CustomShoes.module.scss';
import Constructor from "../Constructor/Constructor";
import CustomShape from "../Constructor/Components/CustomShape";
import {Image} from "react-bootstrap";

const CustomPage = () => {
    const [selectedLaceColor, setSelectedLaceColor] = useState('');
    const [selectedSoleColor, setSelectedSoleColor] = useState('');
    const [selectedSoleBottomColor, setSelectedSoleBottomColor] = useState('');

    const handleLacesColorSelect = (color) => {
        setSelectedLaceColor(color);

    };

    const handleSoleColorSelect = (colorSole) => {
        setSelectedSoleBottomColor(colorSole);
    };

    const handleSoleBottomColorSelect = (colorSoleBottom) => {
        setSelectedSoleColor(colorSoleBottom);
    };


    console.log(selectedSoleBottomColor)
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
            </div>

            <div
                className={styles.back}
                style={{ backgroundColor: selectedLaceColor }}
            ></div>

            <div
                className={styles.bottom}
                style={{ backgroundColor: selectedSoleColor }}
            ></div>
            <div
                className={styles.sole}
                style={{ backgroundColor: selectedSoleBottomColor }}
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
