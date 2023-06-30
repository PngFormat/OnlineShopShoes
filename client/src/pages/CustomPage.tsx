import React, { useEffect, useState } from 'react';
import styles from '../style/CustomShoes.module.scss';
import Constructor from '../Constructor/Constructor';
import CustomShape from '../Constructor/Components/CustomShape';
import { Image } from 'react-bootstrap';
import BottomPartSelector from "../Constructor/BottomPartSelector";

const CustomPage = () => {
    const [selectedLaceColor, setSelectedLaceColor] = useState('');
    const [selectedSoleColor, setSelectedSoleColor] = useState('');
    const [selectedSoleBottomColor, setSelectedSoleBottomColor] = useState('');
    const [selectedSideBottomColor, setSelectedSideBottomColor] = useState('');
    const [selectedBackColor, setSelectedBackColor] = useState('');
    const [selectedFrontColor, setSelectedFrontColor] = useState('');
    const [selectedPieceColor, setSelectedPieceColor] = useState('');
    const [selectedBackFrontColor, setBackFrontColor] = useState('');

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [selectedImageURL, setSelectedImageURL] = useState<string>('');
    console.log(selectedImageURL);

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

    console.log(selectedImageURL);

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
                backgroundColor={selectedLaceColor}
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

            <div>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" />}
            </div>

            <div className={styles.mainBlock}>

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
