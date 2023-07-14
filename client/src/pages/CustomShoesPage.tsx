import React from 'react';
import CustomShoesDisplay from "../Constructor/CustomShoesDisplay";
import ContextProviderCustom, {useCustomPageContextProvider} from "../Context/CustomPageContext";
import html2canvas from 'html2canvas';


const CustomShoesPage = () => {

        const handleScreenshot = () => {
            html2canvas(document.body).then(canvas => {
                const screenshot = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = screenshot;
                link.download = 'screenshot.png';
                link.click();
            });
        };


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
                                    selectedImageColor={selectedImageColor}
                                    selectedFrontColor={selectedFrontColor}
                                    selectedBackFrontColor={selectedBackFrontColor}
                                    selectedBackColor={selectedBackColor}
                />
            <button onClick={handleScreenshot}>
                Take Screenshot
            </button>
        </div>
    );
};

export default CustomShoesPage;
