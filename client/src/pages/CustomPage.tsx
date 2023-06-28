import React, {useEffect, useState} from 'react';
import styles from '../style/CustomShoes.module.scss';
import Constructor from "../Constructor/Constructor";
import CustomShape from "../Constructor/Components/CustomShape";
import {Image} from "react-bootstrap";

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

    console.log(selectedImageURL)
    useEffect(() => {
        if (selectedImageURL) {
            URL.revokeObjectURL(selectedImageURL);
        }
    }, [selectedImageURL]);

    // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files[0];
    //     setSelectedImage(file);
    //     setSelectedImageURL(URL.createObjectURL(file));
    // };
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedImage(file);

        if (file) {
            const imageURL = URL.createObjectURL(file);
            setSelectedImageURL(imageURL);
        } else {
            setSelectedImageURL('');
        }
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

    console.log(selectedImageURL)

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

            <CustomShape
                className={styles.shape}
                style={{
                    height: 500,
                    width: 970,
                    top: 107,
                    left: 465,
                    // backgroundImage: selectedImageURL ? `url(${selectedImageURL})` : '',
                    backgroundImage: `url("../img/Dots.png")`,
                }}
                backgroundColor={selectedLaceColor}
            />

            <CustomShape
                className={styles.shape}
                style={{
                    height: 500,
                    width: 970,
                    top: 107,
                    left: 465,
                    backgroundImage: `url("../img/Dots.png")`,
                    maskImage: `url("../img/Sole.png")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',

                }}
                backgroundColor={selectedLaceColor}
            />





            <CustomShape
                className={styles.back}
                backgroundColor={selectedBackColor}
            />

            <CustomShape
                className={styles.bottom}
                backgroundColor={selectedSoleColor}
            />
            <CustomShape
                className={styles.sole}
                backgroundColor={selectedSoleBottomColor}
                style={{
                    backgroundImage: selectedImageURL ? `url("${selectedImageURL}")` : '',
                }}
            />

            <CustomShape
                className={styles.sideBottom}
                backgroundColor={selectedSideBottomColor}
            />

            <CustomShape
                className={styles.front}
                backgroundColor={selectedFrontColor}
            />

            <CustomShape
                className={styles.piece}
                backgroundColor={selectedPieceColor}
            />

            <CustomShape
                className={styles.pieceBack}
                backgroundColor={selectedBackFrontColor}
            />

            {/*<input type="file" accept="image/*" onChange={handleImageUpload} />*/}
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
                <div>
                    {selectedImage && (
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Selected Image"
                        />
                    )}
                </div>


            </div>

            <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
    );
};

export default CustomPage;
