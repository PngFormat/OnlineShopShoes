import React, { useState } from 'react';
import SelectedPartsDisplay from './SelectedPartsDisplay';

const UpperPartSelector = ({ onSelect }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelection = (selectedOption) => {
        setSelectedOption(selectedOption);
        onSelect('upperPart', selectedOption);
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
        </div>
    );
};

export default UpperPartSelector;