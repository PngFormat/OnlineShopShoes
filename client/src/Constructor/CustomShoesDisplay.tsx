import React from 'react';
import CustomShape from "./Components/CustomShape";
import styles from '../style/CustomShoes.module.scss';
import {useCustomPageContextProvider} from "../Context/CustomPageContext";

const CustomShoesDisplay = () => {
    const {selectedLaceColor,
        selectedBackColor,
        selectedBackFrontColor,
        selectedFrontColor,
        selectedImageColor,
        selectedImageURL,
        selectedPieceColor,
        selectedSideBottomColor,
        selectedSoleBottomColor,
        selectedSoleColor
    } = useCustomPageContextProvider()
    console.log(selectedLaceColor)


    return (
        <div>
            <div
                className={styles.imageContainer}
                style={{ marginLeft:200, position: 'fixed', top: 0, left: 0, zIndex: -1 }}
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
                    margin:30,
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
        </div>
    );
};

export default CustomShoesDisplay;
