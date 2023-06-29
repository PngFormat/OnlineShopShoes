import React, { useState, useRef } from 'react';

interface IBottomPartSelectorProps {
    onSelect?: (partType: string, selectedOption: string, imageUrl: string) => void;
    onSoleColorSelect?: (color: string) => void;
    onSoleBottomColorSelect?: (color: string) => void;
    onSideColorSelect?: (color: string) => void;
    onBackFrontColorSelect?: (color: string) => void;
}

const BottomPartSelector: React.FC<IBottomPartSelectorProps> = ({
                                                                    onSelect,
                                                                    onSoleColorSelect,
                                                                    onSoleBottomColorSelect,
                                                                    onSideColorSelect,
                                                                    onBackFrontColorSelect,
                                                                }) => {
    const fileInputRefs = useRef<HTMLInputElement[]>([]);

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

    const handleImageUpload = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
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
            <h3>Колір боків підошви</h3>
            <input type="color" onChange={(e) => handleSoleBottomColorSelect(e.target.value)} />
            <h3>Завантажити власний дизайн</h3>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload(0)}
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
                onChange={handleImageUpload(1)}
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
                onChange={handleImageUpload(2)}
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
                onChange={handleImageUpload(3)}
                ref={(ref) => (fileInputRefs.current[3] = ref)}
            />
        </div>
    );
};

export default BottomPartSelector;
