import React from 'react';

interface ISelectedPartsDisplay {
    selectedParts: any;
    clearSelection?: () => void;
    laceImageSrc?: string | undefined;
    onLacesImageClick?: () => void;
}

const SelectedPartsDisplay: React.FC<ISelectedPartsDisplay> = ({
                                                                   selectedParts,
                                                                   clearSelection,
                                                                   laceImageSrc,
                                                                   onLacesImageClick,
                                                               }) => {
    const handleClearSelection = () => {
        clearSelection?.();
    };

    const handleLacesImageClick = () => {
        onLacesImageClick?.();
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
                        alt={selectedParts.upperPart.name}
                    />
                </div>
            )}

            {laceImageSrc && (
                <div>
                    <h4>Laces:</h4>
                    <img
                        width={100}
                        height={100}
                        src={laceImageSrc}
                        alt="Laces"
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
