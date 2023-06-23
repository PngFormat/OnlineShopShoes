import React from 'react';

const CustomShape = ({ top, left, width, height, color, shapeCoordinates}) => {
    return (
        <div
            style={{
                position: 'absolute',
                top,
                left,
                width,
                height,
                backgroundColor: color,
                clipPath: shapeCoordinates,
            }}
        ></div>
    );
};

export default CustomShape;