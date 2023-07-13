import React from 'react';
import CustomShoesDisplay from "../Constructor/CustomShoesDisplay";
import ContextProviderCustom, {useCustomPageContextProvider} from "../Context/CustomPageContext";

const CustomShoesPage = () => {
    const {
        selectedLaceColor,
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
            <h1>Готове взуття</h1>
                <CustomShoesDisplay selectedSoleColor={selectedSoleColor}
                                    selectedSoleBottomColor={selectedSoleBottomColor}
                                    selectedSideBottomColor={selectedSideBottomColor}
                                    selectedPieceColor={selectedPieceColor}
                                    selectedLaceColor={selectedLaceColor}
                                    selectedImageURL={selectedImageURL}
                                    selectedImageColor={selectedImageColor}
                                    selectedFrontColor={selectedFrontColor}
                                    selectedBackFrontColor={selectedBackFrontColor}
                                    selectedBackColor={selectedBackColor}
                />
        </div>
    );
};

export default CustomShoesPage;
