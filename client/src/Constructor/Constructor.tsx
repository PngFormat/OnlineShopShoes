import React, { useState } from 'react';
import UpperPartSelector from './UpperPartSelector';
import LacesPartSelector from './LacesPartSelector';
import SelectedPartsDisplay from './SelectedPartsDisplay';
import SaveAndOrderButton from './SaveAndOrderButton';

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

const Constructor = () => {
    const [selectedParts, setSelectedParts] = useState<IConstructorState>({
        upperPart: {
            option: '',
            imageSrc: '',
        },
        laces: undefined,
    });

    const handlePartSelection = (partType: keyof IConstructorState, selectedOption: string, imageUrl: string) => {
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
            <UpperPartSelector onSelect={handlePartSelection} />

            {/*<LacesPartSelector*/}
            {/*    availableOptions={['Option 1', 'Option 2', 'Option 3']}*/}
            {/*    selectedOption={selectedParts.laces?.option || ''}*/}
            {/*    onOptionSelect={(option, imageUrl) => handlePartSelection('laces', option, imageUrl)}*/}
            {/*/>*/}

            <SelectedPartsDisplay
                clearSelection={clearSelection}
                selectedParts={selectedParts}
            />

            <SaveAndOrderButton selectedParts={selectedParts} />
        </div>
    );
};

export default Constructor;
