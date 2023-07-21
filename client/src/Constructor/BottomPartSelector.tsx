import React, { useRef, useState } from 'react';
import styles from "../style/CustomShoes.module.scss";
import CustomShape from "./Components/CustomShape";
import {useCustomPageContextProvider} from "../Context/CustomPageContext";

interface IBottomPartSelectorProps {
    onSelect?: (partType: string, selectedOption: string, imageUrl: string) => void;
    onSoleColorSelect?: (color: string) => void;
    onSoleBottomColorSelect?: (color: string) => void;
    onSideColorSelect?: (color: string) => void;
    onBackFrontColorSelect?: (color: string) => void;
    onImageURLSelect?: (color: string) => void;
}

const BottomPartSelector: React.FC<IBottomPartSelectorProps> = ({
                                                                    onSelect,
                                                                    onSoleColorSelect,
                                                                    onSoleBottomColorSelect,
                                                                    onSideColorSelect,
                                                                    onBackFrontColorSelect,

                                                                }) => {
    const fileInputRefs = useRef<HTMLInputElement[]>([]);
    const [selectedImages, setSelectedImages] = useState({
        backBottom: '',
        sole: '',
        side: '',
        bottom: ''
    });
    const context = useCustomPageContextProvider();


    const handleImageUpload = (event, imageType) => {
        const file = event.target.files?.[0];

        if (file) {
            const imageURL = URL.createObjectURL(file);

            // Update selected images directly in the context for each part
            switch (imageType) {
                case 'backBottom':
                    setSelectedImages((prevState) => ({
                        ...prevState,
                        [imageType]: imageURL,
                    }));
                    context.setSelectedImageBackSide(imageURL);
                    break;
                case 'sole':
                    setSelectedImages((prevState) => ({
                        ...prevState,
                        [imageType]: imageURL,
                    }));
                    context.setSelectedImageSole(imageURL);
                    break;
                case 'side':
                    setSelectedImages((prevState) => ({
                        ...prevState,
                        [imageType]: imageURL,
                    }));

                    context.setSelectedImageSide(imageURL);
                    break;
                case 'bottom':
                    setSelectedImages((prevState) => ({
                        ...prevState,
                        [imageType]: imageURL,
                    }));
                    context.setSelectedImageBottom(imageURL);
                    break;
                default:
                    break;
            }
        }
    };

    const handleSoleColorSelect = (color: string) => {
        onSoleColorSelect?.(color);
    };

    const handleSoleBottomColorSelect = (color: string) => {
        onSoleBottomColorSelect?.(color);
    };

    const handleSideColorSelect = (color: string) => {
        onSideColorSelect?.(color);
    };

    const handleBackFrontColorSelect = (color: string) => {
        onBackFrontColorSelect?.(color);
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
            <h3>Колір боків підошви</h3>
            <input type="color" onChange={(e) => handleSoleBottomColorSelect(e.target.value)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                name="bottom"
                accept="image/*"
                onChange={(event) => handleImageUpload(event, 'bottom')}
                ref={(ref) => (fileInputRefs.current[0] = ref)}
            />
            <div>
                <hr />
            </div>
            <h3>Колір підошви</h3>
            <input type="color" onChange={(e) => handleSoleColorSelect(e.target.value)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                name="sole"
                onChange={(event) => handleImageUpload(event, 'sole')}
                ref={(ref) => (fileInputRefs.current[1] = ref)}
            />
            <div>
                <hr />
            </div>
            <h3>Колір боків</h3>
            <input type="color" onChange={(e) => handleSideColorSelect(e.target.value)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                name="side"
                onChange={(event) => handleImageUpload(event, 'side')}
                ref={(ref) => (fileInputRefs.current[2] = ref)}
            />

            <div>
                <hr />
            </div>
            <h3>Колір ззаду</h3>
            <input type="color" onChange={(e) => handleBackFrontColorSelect(e.target.value)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                name="backBottom"
                onChange={(event) => handleImageUpload(event, 'backBottom')}
                ref={(ref) => (fileInputRefs.current[3] = ref)}
            />

            {renderCustomShape(styles.pieceBack, 'backBottom')}
            {renderCustomShape(styles.bottom, 'bottom')}
            {renderCustomShape(styles.sideBottom, 'side')}
            {renderCustomShape(styles.sole, 'sole')}
        </div>
    );
};

export default BottomPartSelector;
