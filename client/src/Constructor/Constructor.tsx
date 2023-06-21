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

const Constructor: React.FC<IConstructorProps> = ({ onLacesColorSelect, onSoleColorSelect, onSoleBottomColorSelect }) => {
    const [selectedParts, setSelectedParts] = useState<IConstructorState>({
        upperPart: {
            option: '',
            imageSrc: '',
        },
        laces: undefined,
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
                imageSrc: imageUrl,
            },
        }));
    };

    const clearSelection = () => {
        setSelectedParts({
            upperPart: {
                option: '',
                imageSrc: '',
            },
            laces: undefined,
        });
    };

    return (
        <div>
            <UpperPartSelector onSelect={handlePartSelection} onLacesColorSelect={onLacesColorSelect} />

            <BottomPartSelector onSoleColorSelect={onSoleColorSelect} onSoleBottomColorSelect={onSoleBottomColorSelect} />
            <SelectedPartsDisplay clearSelection={clearSelection} selectedParts={selectedParts} />

            <SaveAndOrderButton selectedParts={selectedParts} />
        </div>
    );
};

export default Constructor;
