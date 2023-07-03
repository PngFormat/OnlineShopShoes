import React, { useState, useRef } from 'react';
import styles from "../style/CustomShoes.module.scss";
import CustomShape from "./Components/CustomShape";

interface IUpperPartSelectorProps {
    onSelect?: (partType: string, selectedOption: string, imageUrl: string) => void;
    onUpperPartImageClick?: () => void;
    onBackColorSelect?: (color: string) => void;
    onLacesColorSelect?: (color: string) => void;
    onFrontColorSelect?: (color: string) => void;
    onPieceColorSelect?: (color: string) => void;
}

const UpperPartSelector: React.FC<IUpperPartSelectorProps> = ({
                                                                  onSelect,
                                                                  onUpperPartImageClick,
                                                                  onBackColorSelect,
                                                                  onLacesColorSelect,
                                                                  onFrontColorSelect,
                                                                  onPieceColorSelect
                                                              }) => {
    const fileInputRefs = useRef<HTMLInputElement[]>([]);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const [selectedImages, setSelectedImages] = useState({
        laces: '',
        back: '',
        front: '',
        piece: ''
    });

    const handleSelection = (selectedOption: string) => {
        if (selectedOption === 'custom') {
            onUpperPartImageClick?.();
        } else {
            const imageUrl = getUpperPartImageSrc(selectedOption);
            onSelect?.('upperPart', selectedOption, imageUrl);
        }
    };

    const getUpperPartImageSrc = (option: string) => {
        if (option === 'custom') {
            return selectedImage ? URL.createObjectURL(selectedImage) : '';
        }

        const upperPartImages: { [key: string]: string } = {
            option1: 'https://www.pngplay.com/wp-content/uploads/3/Shoelaces-PNG-Background.png',
            option2: 'https://imgpng.ru/d/shoelaces_PNG28.png',
            // Add links for each upper part option
        };

        return upperPartImages[option] || '';
    };

    const clearSelectedOption = () => {
        onSelect?.('upperPart', '', '');
    };

    const handleColorSelect = (color: string, selectHandler: (color: string) => void) => {
        selectHandler?.(color);
    };

    const handleImageUpload = (event, imageType) => {
        const file = event.target.files?.[0];

        if (file) {
            const imageURL = URL.createObjectURL(file);
            setSelectedImages(prevState => ({
                ...prevState,
                [imageType]: imageURL
            }));
        } else {
            setSelectedImages(prevState => ({
                ...prevState,
                [imageType]: ''
            }));
        }
    };

    const renderCustomShape = (className: string, imageType: string) => (
        <CustomShape
            className={className}
            backgroundImage={selectedImages[imageType] ? selectedImages[imageType] : undefined}
            style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        />
    );

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
            <input type="color" onChange={(e) => handleColorSelect(e.target.value, onLacesColorSelect)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImageUpload(event, 'laces')}
                ref={(ref) => (fileInputRefs.current[0] = ref)}
                name="shape"
            />
            <div>
                <hr />
            </div>
            <h3>Колір задника</h3>
            <input type="color" onChange={(e) => handleColorSelect(e.target.value, onBackColorSelect)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImageUpload(event, 'back')}
                ref={(ref) => (fileInputRefs.current[1] = ref)}
                name="back"
            />
            <div>
                <hr />
            </div>
            <h3>Бік кросівка</h3>
            <input type="color" onChange={(e) => handleColorSelect(e.target.value, onFrontColorSelect)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImageUpload(event, 'front')}
                ref={(ref) => (fileInputRefs.current[2] = ref)}
                name="front"
            />
            <div>
                <hr />
            </div>
            <h3>Полоса</h3>
            <input type="color" onChange={(e) => handleColorSelect(e.target.value, onPieceColorSelect)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImageUpload(event, 'piece')}
                ref={(ref) => (fileInputRefs.current[3] = ref)}
                name="piece"
            />
            {renderCustomShape(styles.shape, 'laces')}
            {renderCustomShape(styles.back, 'back')}
            {renderCustomShape(styles.front, 'front')}
            {renderCustomShape(styles.piece, 'piece')}
            <div>
                <hr />
            </div>
        </div>
    );
};

export default UpperPartSelector;
