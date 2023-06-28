import React, {useState,useRef} from 'react';

interface IUpperPartSelectorProps {
    onSelect?: (partType: string, selectedOption: string, imageUrl: string) => void;
    onUpperPartImageClick?: () => void;
    onBackColorSelect?: (color: string) => void;
    onLacesColorSelect?: (color: string) => void;
    onFrontColorSelect?: (color: string) => void;
    onPieceColorSelect?: (color: string) => void;
    onImageUploadLaces?: (event: any) => void;
}

const UpperPartSelector: React.FC<IUpperPartSelectorProps> = ({
                                                                  onSelect,
                                                                  onUpperPartImageClick,
                                                                  onBackColorSelect,
                                                                  onLacesColorSelect,
                                                                  onFrontColorSelect,
                                                                  onPieceColorSelect

                                                              }) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const handleSelection = (selectedOption: string) => {
        if (selectedOption === 'custom') {
            onUpperPartImageClick?.();
        } else {
            const imageUrl = getUpperPartImageSrc(selectedOption);
            onSelect('upperPart', selectedOption, imageUrl);
        }
    };


    const getUpperPartImageSrc = (option: string) => {
        if (option === 'custom') {
            // Return the URL of the custom uploaded image
            return selectedImage ? URL.createObjectURL(selectedImage) : '';
        }

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

    const handleBackColorSelect = (color: string) => {
        onBackColorSelect?.(color);
    };
    const handleLacesColorSelect = (color: string) => {
        onLacesColorSelect?.(color);
    };

    const handleFrontColorSelect = (color: string) => {
        onFrontColorSelect?.(color);
    };

    const handlePieceColorSelect = (color: string) => {
        onPieceColorSelect?.(color);
    };

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = () => {
        const file = fileInputRef.current?.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result as string;
                onSelect?.('custom', 'Custom Image', imageUrl);
            };
            reader.readAsDataURL(file);
        }
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

            <h3>Колір задника</h3>
            <input type="color" onChange={(e) => handleBackColorSelect(e.target.value)} />

            <h3>Бік кросівка</h3>
            <input type="color" onChange={(e) => handleFrontColorSelect(e.target.value)} />

            <h3>Полоса</h3>
            <input type="color" onChange={(e) => handlePieceColorSelect(e.target.value)} />

            {/*<button onClick={() => handleSelection('custom')}>*/}
            {/*    Upload Custom Image*/}
            {/*</button>*/}
        </div>
    );
};

export default UpperPartSelector;
