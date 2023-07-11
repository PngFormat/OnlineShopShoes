import React from 'react';
import CustomShoesDisplay from "../Constructor/CustomShoesDisplay";
import ContextProviderCustom from "../Context/CustomPageContext";

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
            <ContextProviderCustom>
            <CustomShoesDisplay
            />
            </ContextProviderCustom>
        </div>
    );
};

export default CustomShoesPage;
