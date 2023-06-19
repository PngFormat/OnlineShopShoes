import React from 'react';

interface ISelectedPartsDisplay {
    selectedParts: {
        upperPart?: {
            option: string;
            imageSrc: string;
        };
        laces?: {
            option: string;
            imageSrc: string;
        };
        // Add more properties for other selected parts
    };
    clearSelection?: () => void;
    onLacesImageClick?: () => void;
    onUpperPartImageClick?: () => void;
}

const SelectedPartsDisplay: React.FC<ISelectedPartsDisplay> = ({
                                                                   selectedParts,
                                                                   clearSelection,
                                                                   onLacesImageClick,
                                                                   onUpperPartImageClick,
                                                               }) => {
    const handleClearSelection = () => {
        clearSelection?.();
    };

    const handleLacesImageClick = () => {
        onLacesImageClick?.();
    };

    const handleUpperPartImageClick = () => {
        onUpperPartImageClick?.();
    };

    return (
        <div>
            <h3>Обране</h3>
            {selectedParts.upperPart && (
                <div>
                    <h4>Upper Part:</h4>
                    <img
                        width={100}
                        height={100}
                        src={selectedParts.upperPart.imageSrc}
                        alt={selectedParts.upperPart.option}
                        onClick={handleUpperPartImageClick}
                    />
                </div>
            )}

            {selectedParts.laces && (
                <div>
                    <h4>Laces:</h4>
                    <img
                        width={100}
                        height={100}
                        src={selectedParts.laces.imageSrc}
                        alt={selectedParts.laces.option}
                        onClick={handleLacesImageClick}
                    />
                </div>
            )}

            {/* Add more conditional rendering for other selected parts */}
            <button onClick={handleClearSelection}>Видалити обране</button>
        </div>
    );
};

export default SelectedPartsDisplay;
