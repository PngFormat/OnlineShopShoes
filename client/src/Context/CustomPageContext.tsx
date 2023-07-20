import React, { createContext, useState } from "react";


export const CustomPageContext = createContext(null);

export const useCustomPageContextProvider = () => {
    const context = React.useContext(CustomPageContext);
    if (context === undefined) {
        throw new Error(
            "useCustomPageContextProvider must be used within a CustomPageContextProvider"
        );
    }
    return context;
};

CustomPageContext.displayName = "CustomContext";

const ContextProviderCustom: React.FC = ({ children }) => {
    const [selectedBackColor, setSelectedBackColor] = useState("");
    const [selectedBackFrontColor, setSelectedBackFrontColor] = useState("");
    const [selectedFrontColor, setSelectedFrontColor] = useState("");
    const [selectedImageColor, setSelectedImageColor] = useState("");
    const [selectedImageURL, setSelectedImageURL] = useState("");
    const [selectedLaceColor, setSelectedLaceColor] = useState("");
    const [selectedPieceColor, setSelectedPieceColor] = useState("");
    const [selectedSideBottomColor, setSelectedSideBottomColor] = useState("");
    const [selectedSoleBottomColor, setSelectedSoleBottomColor] = useState("");
    const [selectedSoleColor, setSelectedSoleColor] = useState("");
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedImageBack, setSelectedImageBack] = useState("");
    const [selectedImageFront, setSelectedImageFront] = useState("");
    const [selectedImagePiece, setSelectedImagePiece] = useState("");

    const value = {
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
        selectedImage,
        selectedImageBack,
        selectedImageFront,
        selectedImagePiece,
        setSelectedBackColor,
        setSelectedBackFrontColor,
        setSelectedFrontColor,
        setSelectedImageColor,
        setSelectedImageURL,
        setSelectedLaceColor,
        setSelectedPieceColor,
        setSelectedSideBottomColor,
        setSelectedSoleBottomColor,
        setSelectedSoleColor,
        setSelectedImage,
        setSelectedImageBack,
        setSelectedImageFront,
        setSelectedImagePiece
    };
    console.log(selectedImageURL)
    return (
        <CustomPageContext.Provider value={value}>
            {children}
        </CustomPageContext.Provider>
    );
};

export default ContextProviderCustom;
