import React from 'react';
import styles from '../style/CustomShoes.module.scss';
import CustomShape from "./CustomShape";

const DoneCustomShoes = ({
                                   selectedImageColor,
                                   selectedLaceColor,
                                   selectedBackColor,
                                   selectedSoleColor,
                                   selectedSoleBottomColor,
                                   selectedSideBottomColor,
                                   selectedFrontColor,
                                   selectedPieceColor,
                                   selectedBackFrontColor,
                                   selectedImageURL,
                               }) => {
    return (
        <div>
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
        </div>
    );
};

export default DoneCustomShoes;
