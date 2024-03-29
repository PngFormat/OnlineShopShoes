import React, { useState, useRef } from 'react';
import styles from "../style/CustomShoes.module.scss";
import CustomShape from "./Components/CustomShape";
import ImageSlider from "./ImageSlider";
import {useCustomPageContextProvider} from "../Context/CustomPageContext";


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
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedImages, setSelectedImages] = useState({
        laces: '',
        back: '',
        front: '',
        piece: ''
    });
    const context = useCustomPageContextProvider();



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

            // Update selected images directly in the context for each part
            switch (imageType) {
                case 'laces':
                     setSelectedImages((prevState) => ({
                                 ...prevState,
                                      [imageType]: imageURL,
                                  }));
                    context.setSelectedImageURL(imageURL);
                    break;
                case 'back':
                    setSelectedImages((prevState) => ({
                        ...prevState,
                        [imageType]: imageURL,
                    }));
                    context.setSelectedImageBack(imageURL);
                    break;
                case 'front':
                    setSelectedImages((prevState) => ({
                        ...prevState,
                        [imageType]: imageURL,
                    }));

                    context.setSelectedImageFront(imageURL);
                    break;
                case 'piece':
                    setSelectedImages((prevState) => ({
                        ...prevState,
                        [imageType]: imageURL,
                    }));
                    context.setSelectedImagePiece(imageURL);
                    break;
                default:
                    break;
            }
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
            {/*<ImageSlider images={images} onSelectColor={handleColorSelect} />*/}
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

