import React, { useRef, useState } from 'react';
import styles from "../style/CustomShoes.module.scss";
import CustomShape from "./Components/CustomShape";

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
                                                                    onImageURLSelect
                                                                }) => {
    const fileInputRefs = useRef<HTMLInputElement[]>([]);

    const [selectedImageBack, setSelectedImageBack] = useState<string>('');
    const [selectedImageSole, setSelectedImageSole] = useState<string>('');
    const [selectedImageLaces, setSelectedImageLaces] = useState<string>('');
    const [selectedImageSoleBottom, setSelectedImageSoleBottom] = useState<string>('');

    const handleImageUpload = (event, setStateFunction) => {
        const file = event.target.files?.[0];

        if (file) {
            const imageURL = URL.createObjectURL(file);
            setStateFunction(imageURL);
        } else {
            setStateFunction('');
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

    return (
        <div>
            <h3>Колір боків підошви</h3>
            <input type="color" onChange={(e) => handleSoleBottomColorSelect(e.target.value)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                name="bottom"
                accept="image/*"
                onChange={(event) => handleImageUpload(event, setSelectedImageSoleBottom)}
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
                onChange={(event) => handleImageUpload(event, setSelectedImageSole)}
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
                onChange={(event) => handleImageUpload(event, setSelectedImageLaces)}
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
                name="back"
                onChange={(event) => handleImageUpload(event, setSelectedImageBack)}
                ref={(ref) => (fileInputRefs.current[3] = ref)}
            />
            <div>
                {selectedImageBack && <img src={selectedImageBack} alt="Selected Image" />}
                {selectedImageSole && <img src={selectedImageSole} alt="Selected Image" />}
            </div>
            <CustomShape
                className={styles.pieceBack}
                backgroundImage={selectedImageBack ? selectedImageBack : undefined}
                style={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            />

            <CustomShape
                className={styles.bottom}
                backgroundImage={selectedImageSoleBottom ? selectedImageSoleBottom : undefined}
                style={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            />
        </div>
    );
};

export default BottomPartSelector;
