import React, { useEffect, useState } from 'react';
import styles from '../style/CustomShoes.module.scss';
import Constructor from '../Constructor/Constructor';
import CustomShape from '../Constructor/Components/CustomShape';
import CustomShoesPage from "./CustomShoesPage";
import ImageSlider from "../Constructor/ImageSlider";
import ContextProviderCustom, {useCustomPageContextProvider} from "../Context/CustomPageContext";
import {AuthorisedPath} from "../utils/Path";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";


const CustomPage = () => {
    const history = useHistory();
    const {selectedLaceColor, setSelectedLaceColor,
        selectedSoleColor, setSelectedSoleColor,
        selectedSoleBottomColor, setSelectedSoleBottomColor,
        selectedSideBottomColor, setSelectedSideBottomColor,
        selectedBackColor, setSelectedBackColor,
        selectedFrontColor, setSelectedFrontColor,
        selectedPieceColor, setSelectedPieceColor,
        selectedBackFrontColor, setSelectedBackFrontColor,
        selectedImageColor, setSelectedImageColor,
        selectedImageURL, setSelectedImageURL} = useCustomPageContextProvider();



    useEffect(() => {
        localStorage.setItem('selectedLaceColor', selectedLaceColor);
        localStorage.setItem('selectedSoleColor', selectedSoleColor);
        localStorage.setItem('selectedSoleBottomColor', selectedSoleBottomColor);
        localStorage.setItem('selectedSideBottomColor', selectedSideBottomColor);
        localStorage.setItem('selectedBackColor', selectedBackColor);
        localStorage.setItem('selectedFrontColor', selectedFrontColor);
        localStorage.setItem('selectedPieceColor', selectedPieceColor);
        localStorage.setItem('selectedBackFrontColor', selectedBackFrontColor);
    }, [
        selectedLaceColor,
        selectedSoleColor,
        selectedSoleBottomColor,
        selectedSideBottomColor,
        selectedBackColor,
        selectedFrontColor,
        selectedPieceColor,
        selectedBackFrontColor
    ]);



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
        setSelectedBackFrontColor(colorPiece);
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

    console.log(selectedImageURL)

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
                    backgroundColor={selectedImageColor ? selectedImageColor : selectedLaceColor}
                />

                <CustomShape className={styles.back}
                             style={{
                                 backgroundImage: selectedImageURL ? `url("${selectedImageURL}")` : 'не выбрано',
                             }}
                             backgroundColor={selectedBackColor} />

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
                        backgroundImage: selectedImageURL ? `url("${selectedImageURL}")` : '', /*// Колір боків*/
                        backgroundSize: 'cover',
                    }}

                />

                <CustomShape className={styles.front}
                             style={{
                                 backgroundImage: selectedImageURL ? `url("${selectedImageURL}")` : '',
                                 backgroundSize: 'cover',
                             }}
                              backgroundColor={selectedFrontColor} />


                <CustomShape className={styles.piece}
                             style={{
                                 backgroundImage: selectedImageURL ? `url("${selectedImageURL}")` : '',
                                 backgroundSize: 'cover',
                             }}
                             backgroundColor={selectedPieceColor} />

                <CustomShape className={styles.pieceBack}
                             style={{
                                 backgroundImage: selectedImageURL ? `url("${selectedImageURL}")` : '',
                                 backgroundSize: 'cover',
                             }}
                             backgroundColor={selectedBackFrontColor} />

                <div className={styles.mainBlock}>
                    <Button onClick={() => history.push(AuthorisedPath.DONECUSTOM_ROUTE)} variant={'dark'}>Виконати</Button>
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
