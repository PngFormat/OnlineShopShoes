import React, {useRef, useState} from 'react';
import styles from "../style/CustomShoes.module.scss";
import CustomShape from "./Components/CustomShape";

interface IBottomPartSelectorProps {
    onSelect?: (partType: string, selectedOption: string, imageUrl: string) => void;
    onSoleColorSelect?: (color: string) => void;
    onSoleBottomColorSelect?: (color: string) => void;
    onSideColorSelect?: (color: string) => void;
    onBackFrontColorSelect?: (color: string) => void;
    onImageURLSelect?:(color: string) => void;
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
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [selectedImageURL, setSelectedImageURL] = useState<string>('');

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



    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedImage(file);

        if (file) {
            const imageURL = URL.createObjectURL(file);
            setSelectedImageURL(imageURL);
        } else {
            setSelectedImageURL('');
        }
    };
    console.log(onSelect)

    return (
        <div>
            <h3>Колір боків підошви</h3>
            <input type="color" onChange={(e) => handleSoleBottomColorSelect(e.target.value)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={(ref) => (fileInputRefs.current[0] = ref)}
            />
            <div>
                <hr/>
            </div>
            <h3>Колір підошви</h3>
            <input type="color" onChange={(e) => handleSoleColorSelect(e.target.value)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={(ref) => (fileInputRefs.current[1] = ref)}
            />
            <div>
                <hr/>
            </div>
            <h3>Колір боків</h3>
            <input type="color" onChange={(e) => handleSideColorSelect(e.target.value)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={(ref) => (fileInputRefs.current[2] = ref)}
            />

            <div>
                <hr/>
            </div>
            <h3>Колір ззаду</h3>
            <input type="color" onChange={(e) => handleBackFrontColorSelect(e.target.value)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={(ref) => (fileInputRefs.current[3] = ref)}
            />
            <div>
                {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" />}
            </div>
            <CustomShape
                className={styles.pieceBack}
                backgroundImage={selectedImage ? URL.createObjectURL(selectedImage) : undefined}
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
