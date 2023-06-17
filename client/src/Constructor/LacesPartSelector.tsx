
import React, { useState } from 'react';
import SelectedPartsDisplay from './SelectedPartsDisplay';

interface ILacesPartSelector {
    availableOptions: string[];
    selectedOption: string | null;
    onOptionSelect: (option: string, imageUrl: string) => void;
}

const LacesPartSelector: React.FC<ILacesPartSelector> = ({
                                                             availableOptions,
                                                             selectedOption,
                                                             onOptionSelect,
                                                         }) => {
    const [selectedLacesOption, setSelectedLacesOption] = useState('');

    const handleOptionSelect = (option: string) => {
        const imageUrl = getLacesImageSrc(option);
        setSelectedLacesOption(option);
        onOptionSelect(option, imageUrl);
    };

    const getLacesImageSrc = (option: string) => {
        const lacesImages: { [key: string]: string } = {
            'Option 1': 'https://www.pngplay.com/wp-content/uploads/3/Shoelaces-PNG-Background.png',
            'Option 2': 'https://imgpng.ru/d/shoelaces_PNG8.png',
            // Add links for each laces option
        };

        return lacesImages[option] || '';
    };

    const clearChoosen = () => {
        setSelectedLacesOption('');
    };

    const selectedLacesImage = getLacesImageSrc(selectedLacesOption); // Get the selected laces image URL
    console.log(selectedLacesImage);

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
                selectedParts={{
                    laces: {
                        option: selectedLacesOption,
                        imageSrc: selectedLacesImage,
                    },
                }}
                onLacesImageClick={clearChoosen}
            />

            <button onClick={clearChoosen}>Очистити</button>
        </div>
    );
};

export default LacesPartSelector;