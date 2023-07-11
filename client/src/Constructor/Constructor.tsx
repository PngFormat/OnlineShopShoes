import React, { useState } from 'react';
import UpperPartSelector from './UpperPartSelector';
import LacesPartSelector from './LacesPartSelector';
import SelectedPartsDisplay from './SelectedPartsDisplay';
import SaveAndOrderButton from './SaveAndOrderButton';
import BottomPartSelector from "./BottomPartSelector";

interface IConstructorProps {
    onLacesColorSelect: (color: string) => void;
    onSoleColorSelect: (color: string) => void;
    onSoleBottomColorSelect: (color: string) => void;
    onSideBottomColorSelect: (color: string) => void;
    onBackColorSelect: (color: string) => void;
    onFrontColorSelect: (color: string) => void;
    onPieceColorSelect: (color: string) => void;
    onBackFrontColorSelect: (color: string) => void;
}

interface IConstructorState {
    upperPart: {
        option: string;
        imageSrc: string;
    };
    laces?: {
        option: string;
        imageSrc: string;
    };
    // Add more properties for other selected parts
}

const Constructor: React.FC<IConstructorProps> = ({
                                                      onLacesColorSelect,
                                                      onSoleColorSelect,
                                                      onSoleBottomColorSelect,
                                                      onSideBottomColorSelect,
                                                      onBackColorSelect,
                                                      onFrontColorSelect,
                                                      onPieceColorSelect,
                                                      onBackFrontColorSelect,
                                                  }) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [selectedParts, setSelectedParts] = useState<IConstructorState>({
        upperPart: {
            option: '',
            imageSrc: ''
        },
        laces: undefined
    });


    const handlePartSelection = (
        partType: keyof IConstructorState,
        selectedOption: string,
        imageUrl: string
    ) => {
        setSelectedParts((prevState) => ({
            ...prevState,
            [partType]: {
                option: selectedOption,
                imageSrc: imageUrl
            }
        }));
    };

    const clearSelection = () => {
        setSelectedParts({
            upperPart: {
                option: '',
                imageSrc: ''
            },
            laces: undefined
        });
    };



    return (
        <div>
            <UpperPartSelector
                onSelect={handlePartSelection}
                onBackColorSelect={onBackColorSelect}
                onLacesColorSelect={onLacesColorSelect}
                onFrontColorSelect={onFrontColorSelect}
                onPieceColorSelect={onPieceColorSelect}

            />

            <BottomPartSelector
                onSoleColorSelect={onSoleColorSelect}
                onSoleBottomColorSelect={onSoleBottomColorSelect} // Corrected prop name
                onBackFrontColorSelect={onBackFrontColorSelect}
                onSideColorSelect={onSideBottomColorSelect}
            />
            <SelectedPartsDisplay
                clearSelection={clearSelection}
                selectedParts={selectedParts}
            />

            <SaveAndOrderButton selectedParts={selectedParts} />
        </div>
    );
};

export default Constructor;
