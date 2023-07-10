import React, { useEffect, useState } from 'react';
import styles from '../style/CustomShoes.module.scss';
import Constructor from '../Constructor/Constructor';
import CustomShape from '../Constructor/Components/CustomShape';

import ImageSlider from "../Constructor/ImageSlider";

import { CustomPageContextProvider } from "../Context/CustomPageContext";

const CustomPage = () => {
    const [selectedLaceColor, setSelectedLaceColor] = useState('');
    const [selectedSoleColor, setSelectedSoleColor] = useState('');
    const [selectedSoleBottomColor, setSelectedSoleBottomColor] = useState('');
    const [selectedSideBottomColor, setSelectedSideBottomColor] = useState('');
    const [selectedBackColor, setSelectedBackColor] = useState('');
    const [selectedFrontColor, setSelectedFrontColor] = useState('');
    const [selectedPieceColor, setSelectedPieceColor] = useState('');
    const [selectedBackFrontColor, setBackFrontColor] = useState('');

    const [selectedImageColor, setSelectedImageColor] = useState('');

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [selectedImageURL, setSelectedImageURL] = useState<string>('');




    useEffect(() => {
        if (selectedImageURL) {
            URL.revokeObjectURL(selectedImageURL);
        }
    }, [selectedImageURL]);

    const handleImageUpload = (imageURL) => {
        setSelectedImageURL(imageURL);
    };


    const handleLacesColorSelect = (color) => {
        setSelectedLaceColor(color);
    };

    const handleSoleColorSelect = (colorSole) => {
        setSelectedSoleBottomColor(colorSole);
    };

    const handleSoleBottomColorSelect = (colorSoleBottom) => {
        setSelectedSoleColor(colorSoleBottom);
    };

    const handleSideBottomColorSelect = (colorSideBottom) => {
        setSelectedSideBottomColor(colorSideBottom);
    };

    const handleBackColorSelect = (colorBack) => {
        setSelectedBackColor(colorBack);
    };

    const handleFrontColorSelect = (colorBack) => {
        setSelectedFrontColor(colorBack);
    };

    const handlePieceColorSelect = (colorPiece) => {
        setSelectedPieceColor(colorPiece);
    };

    const handleBackFrontColorSelect = (colorPiece) => {
        setBackFrontColor(colorPiece);
    };
    const handleColorSelect = (color: string, selectHandler: (color: string) => void) => {
        selectHandler?.(color);
    };
    const handleColorSelectProp = (color) => {
        setSelectedImageColor(color);
    };



    const images = [
        { src: 'https://www.pngplay.com/wp-content/uploads/3/Shoelaces-PNG-Background.png', color: '#000000' },
        { src: 'https://images.prom.ua/2895375213_w640_h640_shnurki-dlya-obuvi.jpg', color: '#ffd000' },
        { src: 'https://content2.rozetka.com.ua/goods/images/big/84310538.jpg', color: '#ff0025' }
    ];
    console.log(selectedImageColor)
    return (
        <div>
            <h1>Кастомізація взуття</h1>
            <div
                className={styles.imageContainer}
                style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
            >

                <img
                    width={650}
                    height={400}
                    className={styles.customImage}
                    src="https://img.freepik.com/premium-vector/outline-cool-sneakers-shoes-sneaker-outline-drawing-vector-sneakers-drawn-in-a-sketch-style_681139-169.jpg"
                    alt="Кастом"
                />
            </div>

            <CustomShape
                className={styles.shape}
                style={{
                    height: 500,
                    width: 970,
                    top: 47,
                    left: 690,
                    backgroundImage: `url("../img/Dots.png")`,
                }}
                backgroundColor={selectedImageColor ? selectedImageColor : selectedLaceColor}
            />

            <CustomShape className={styles.back} backgroundColor={selectedBackColor} />

            <CustomShape className={styles.bottom} backgroundColor={selectedSoleColor} />

            <CustomShape
                className={styles.sole}
                backgroundColor={selectedSoleBottomColor}
                style={{
                    backgroundImage: selectedImageURL ? `url("${selectedImageURL}")` : 'не выбрано',
                    backgroundSize: 'cover',
                }}
            />

            <CustomShape
                className={styles.sideBottom}
                backgroundColor={selectedSideBottomColor}
                style={{
                    backgroundImage: selectedImageURL ? `url("${selectedImageURL}")` : '',
                    backgroundSize: 'cover',
                }}
            />

            <CustomShape className={styles.front} backgroundColor={selectedFrontColor} />

            <CustomShape className={styles.piece} backgroundColor={selectedPieceColor} />

            <CustomShape className={styles.pieceBack} backgroundColor={selectedBackFrontColor} />



            <div className={styles.mainBlock}>
                <ImageSlider images={images} onSelectColor={handleColorSelect} />
                <Constructor
                    onSoleColorSelect={handleSoleColorSelect}
                    onSoleBottomColorSelect={handleSoleBottomColorSelect}
                    onSideBottomColorSelect={handleSideBottomColorSelect}
                    onLacesColorSelect={handleLacesColorSelect}
                    onBackColorSelect={handleBackColorSelect}
                    onFrontColorSelect={handleFrontColorSelect}
                    onPieceColorSelect={handlePieceColorSelect}
                    onBackFrontColorSelect={handleBackFrontColorSelect}
                />



            </div>


        </div>
    );
};

export default CustomPage;
