import React, { useState } from 'react';
import UpperPartSelector from './UpperPartSelector';

import LacesPartSelector from './LacesPartSelector';
import SelectedPartsDisplay from './SelectedPartsDisplay';
import SaveAndOrderButton from './SaveAndOrderButton';

const Constructor = () => {
    const [selectedParts, setSelectedParts] = useState({
        upperPart: '',
        laces: '',
    });


    const handlePartSelection = (partType, selectedOption) => {
        setSelectedParts((prevState) => ({
            ...prevState,
            [partType]: selectedOption,
        }));
    };

    const clearSelection = () => {
        setSelectedParts({
            upperPart: '',
            laces: ''});
    };

    return (
        <div>
            <UpperPartSelector onSelect={handlePartSelection}/>
            <LacesPartSelector
                availableOptions={['Option 1', 'Option 2', 'Option 3']}
                selectedOption={selectedParts.laces}
                onOptionSelect={option => handlePartSelection('laces', option)}
            />

            <SelectedPartsDisplay clearSelection={clearSelection} selectedParts={selectedParts } />

            <SaveAndOrderButton selectedParts={selectedParts} />

        </div>
    );
};

export default Constructor;