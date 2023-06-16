import React, { useState } from 'react';
import SelectedPartsDisplay from './SelectedPartsDisplay';

const LacesPartSelector = ({ availableOptions, selectedOption, onOptionSelect }) => {
    const [selectedLacesOption, setSelectedLacesOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedLacesOption(option);
        onOptionSelect(option);
    };

    const getLacesImageSrc = (option) => {
        const lacesImages = {
            option1: 'https://www.pngplay.com/wp-content/uploads/3/Shoelaces-PNG-Background.png',
            option2: 'https://imgpng.ru/d/shoelaces_PNG8.png',
            // Add links for each laces option
        };

        return lacesImages[option];
    };

    const clearChoosen = () => {
        setSelectedLacesOption('');
    };

    return (
        <div>
            <h3>Шнурки</h3>
            <select value={selectedLacesOption} onChange={(event) => handleOptionSelect(event.target.value)}>
                <option value="">Select Laces</option>
                {availableOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {selectedLacesOption && (
                <img width={100} height={100} src={getLacesImageSrc(selectedLacesOption)} alt="Laces" />
            )}

            {/* Pass the selected laces option and image source to SelectedPartsDisplay */}
            <SelectedPartsDisplay
                clearSelection={clearChoosen}
                selectedParts={selectedLacesOption}
                laceImageSrc={getLacesImageSrc(selectedLacesOption)}
                onLacesImageClick={clearChoosen} // Add the click handler here
            />

            <button onClick={clearChoosen}>Очистити</button>
        </div>
    );
};

export default LacesPartSelector;
