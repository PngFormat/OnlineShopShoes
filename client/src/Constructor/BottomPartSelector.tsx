import React, {useState} from 'react';

interface IBottomPartSelectorProps {
    onSelect?: (partType: string, selectedOption: string, imageUrl: string) => void;
    onSoleColorSelect?: (color: string) => void;
    onSoleBottomColorSelect?: (color: string) => void;
}


const BottomPartSelector: React.FC<IBottomPartSelectorProps> = ({
                                                                   onSoleColorSelect,
                                                                    onSoleBottomColorSelect
                                                               }) => {
    const [soleColorTop, setSoleColorTop] = useState('#000000'); // Локальное состояние для цвета боков левой підошви
    const [soleColorBottom, setSoleColorBottom] = useState('#000000'); // Локальное состояние для цвета боков правой підошви
    const handleSoleColorSelect = (color: string) => {
        onSoleColorSelect?.(color);
    };
    const handleSoleBottomColorSelect = (color: string) => {
        onSoleBottomColorSelect?.(color);
    };

    return (
        <div>
            <h3>Колір боків підошви</h3>
            <input  type="color" value={soleColorBottom} onChange={(e) => handleSoleBottomColorSelect(e.target.value)} />


            <h3>Колір підошви</h3>
            <input type="color" value={soleColorTop} onChange={(e) => handleSoleColorSelect(e.target.value)} />
        </div>
    );
};

export default BottomPartSelector;