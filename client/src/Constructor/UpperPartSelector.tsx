import React from 'react';

interface IUpperPartSelectorProps {
    onSelect?: (partType: string, selectedOption: string, imageUrl: string) => void;
    onUpperPartImageClick?: () => void;
    onLacesColorSelect?: (color: string) => void;
}

const UpperPartSelector: React.FC<IUpperPartSelectorProps> = ({
                                                                  onSelect,
                                                                  onUpperPartImageClick,
                                                                  onLacesColorSelect,
                                                              }) => {
    const handleSelection = (selectedOption: string) => {
        const imageUrl = getUpperPartImageSrc(selectedOption);
        onSelect('upperPart', selectedOption, imageUrl);
    };

    const getUpperPartImageSrc = (option: string) => {
        const upperPartImages: { [key: string]: string } = {
            option1:
                'https://www.pngplay.com/wp-content/uploads/3/Shoelaces-PNG-Background.png',
            option2: 'https://imgpng.ru/d/shoelaces_PNG28.png',
            // Add links for each upper part option
        };

        return upperPartImages[option] || '';
    };

    const clearSelectedOption = () => {
        onSelect('upperPart', '', '');
    };

    const handleLacesColorSelect = (color: string) => {
        onLacesColorSelect?.(color);
    };


    return (
        <div>
            <h3>Верхня частина</h3>
            <button onClick={() => handleSelection('option1')}>
                <img
                    width={100}
                    height={100}
                    src="https://www.pngplay.com/wp-content/uploads/3/Shoelaces-PNG-Background.png"
                    alt="Upper Part Option 1"
                />
            </button>
            <button onClick={() => handleSelection('option2')}>
                <img
                    width={100}
                    height={100}
                    src="https://imgpng.ru/d/shoelaces_PNG28.png"
                    alt="Upper Part Option 2"
                />
            </button>
            {/* Add more buttons for other upper part options */}

            <button onClick={clearSelectedOption}>Очистити</button>
            <h3>Колір шнурків</h3>
            <input type="color" onChange={(e) => handleLacesColorSelect(e.target.value)} />


        </div>
    );
};

export default UpperPartSelector;
