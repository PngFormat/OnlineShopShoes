import React from 'react';

const LacesPartSelector = ({ availableOptions, selectedOption, onOptionSelect }) => {
    return (
        <div>
            <h3>Laces</h3>
            <select value={selectedOption} onChange={event => onOptionSelect(event.target.value)}>
                <option value="">Select Laces</option>
                {availableOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default LacesPartSelector;