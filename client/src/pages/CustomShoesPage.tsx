import React from 'react';
import CustomShoesDisplay from "../Constructor/CustomShoesDisplay";

const CustomShoesPage = ({
                             selectedBackColor,
                             selectedBackFrontColor,
                             selectedFrontColor,
                             selectedImageColor,
                             selectedImageURL,
                             selectedLaceColor,
                             selectedPieceColor,
                             selectedSideBottomColor,
                             selectedSoleBottomColor,
                             selectedSoleColor,
                         }) => {
    return (
        <div>
            <h1>Custom Shoes Page</h1>
            <CustomShoesDisplay
                selectedBackColor={selectedBackColor}
                selectedBackFrontColor={selectedBackFrontColor}
                selectedFrontColor={selectedFrontColor}
                selectedImageColor={selectedImageColor}
                selectedImageURL={selectedImageURL}
                selectedLaceColor={selectedLaceColor}
                selectedPieceColor={selectedPieceColor}
                selectedSideBottomColor={selectedSideBottomColor}
                selectedSoleBottomColor={selectedSoleBottomColor}
                selectedSoleColor={selectedSoleColor}
            />
        </div>
    );
};

export default CustomShoesPage;
