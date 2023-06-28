import React, {FC} from 'react';

interface ICustomShape {
    className: string;
    backgroundColor: string;
    style?: {};
    backgroundImage?: string;
}


const CustomShape: React.FC<ICustomShape> = ({className, backgroundColor,style}) => {
    return (
        <div className={className} style={{ ...style, backgroundColor }}>
            <div className="back"></div>
            <div className="bottom"></div>
            <div className="sole"></div>
        </div>
)};

export default CustomShape;