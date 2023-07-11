// CustomPageContext.js
import React, {createContext,useState} from "react";

export const CustomPageContext = createContext(null);

export const useCustomPageContextProvider = () => {
    const context = React.useContext(CustomPageContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

CustomPageContext.displayName = "CustomContext";

const ContextProviderCustom: React.FC = ({ children }) => {
    const [selectedBackColor, setSelectedBackColor] = useState('');
    const [selectedBackFrontColor, setSelectedBackFrontColor] = useState('');
    const [selectedFrontColor, setSelectedFrontColor] = useState('');
    const [selectedImageColor, setSelectedImageColor] = useState('');
    const [selectedImageURL, setSelectedImageURL] = useState('');
    const [selectedLaceColor, setSelectedLaceColor] = useState('');
    const [selectedPieceColor, setSelectedPieceColor] = useState('');
    const [selectedSideBottomColor, setSelectedSideBottomColor] = useState('');
    const [selectedSoleBottomColor, setSelectedSoleBottomColor] = useState('');
    const [selectedSoleColor, setSelectedSoleColor] = useState('');


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
    };

    return (
        <CustomPageContext.Provider
            value={value}
        >
            {children}
        </CustomPageContext.Provider>
    );
};

export default ContextProviderCustom;


