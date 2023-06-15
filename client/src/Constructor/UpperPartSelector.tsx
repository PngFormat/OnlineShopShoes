import React from 'react';

const UpperPartSelector = ({ onSelect }) => {
    // Функція для обробки вибору опції
    const handleSelection = (selectedOption) => {
        onSelect('upperPart', selectedOption);
    };

    // Рендерінг селектора для верхньої частини
    return (
        <div>
            {/* Варіанти для верхньої частини */}
            {/* Наприклад: <button onClick={() => handleSelection('option1')}>Option 1</button> */}
            {/* Наприклад: <button onClick={() => handleSelection('option2')}>Option 2</button> */}
            {/* ... */}
        </div>
    );
};

export default UpperPartSelector;