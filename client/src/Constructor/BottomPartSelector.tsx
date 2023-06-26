import React, {useState} from 'react';

interface IBottomPartSelectorProps {
    onSelect?: (partType: string, selectedOption: string, imageUrl: string) => void;
    onSoleColorSelect?: (color: string) => void;
    onSoleBottomColorSelect?: (color: string) => void;
    onSideBottomColorSelect?: (color: string) => void;
    onBackFrontColorSelect?: (color: string) => void;
}


const BottomPartSelector: React.FC<IBottomPartSelectorProps> = ({
                                                                   onSoleColorSelect,
                                                                    onSoleBottomColorSelect,
                                                                    onSideBottomColorSelect,
                                                                    onBackFrontColorSelect
                                                               }) => {


    const handleSoleColorSelect = (color: string) => {
        onSoleColorSelect?.(color);
    };
    const handleSoleBottomColorSelect = (color: string) => {
        onSoleBottomColorSelect?.(color);
    };
    const handleSideColorSelect = (color: string) => {
        onSideBottomColorSelect?.(color);
    };
    const handleBackFrontColorSelect = (color: string) => {
        onBackFrontColorSelect?.(color);
    };

    return (
        <div>
            <h3>Колір боків підошви</h3>
            <input  type="color" onChange={(e) => handleSoleBottomColorSelect(e.target.value)} />


            <h3>Колір підошви</h3>
            <input type="color"  onChange={(e) => handleSoleColorSelect(e.target.value)} />

            <h3>Колір боків</h3>
            <input type="color"  onChange={(e) => handleSideColorSelect(e.target.value)} />

            <h3>Колір ззаду</h3>
            <input type="color"  onChange={(e) => handleBackFrontColorSelect(e.target.value)} />
        </div>
    );
};

export default BottomPartSelector;