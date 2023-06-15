import React from 'react';

const SelectedPartsDisplay = ({selectedParts}) => {
    return (
        <div>
            <h3>Обрані частини</h3>
            <p>Верхня частина(шнурки) {selectedParts.upperPart}</p>
            <p>Нижня частина(підошва,колір кросівка) {selectedParts.solePart} </p>
        </div>
    );
};

export default SelectedPartsDisplay;