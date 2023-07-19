import React, { useState, useEffect } from 'react';

interface ICustomShapeProps {
    className: string;
    backgroundColor?: string;
    style?: React.CSSProperties;
    backgroundImage?: string;
}

const CustomShape: React.FC<ICustomShapeProps> = ({ className, backgroundColor, style, backgroundImage }) => {
    const [uploadedImage, setUploadedImage] = useState<string | undefined>(backgroundImage);

    useEffect(() => {
        if (backgroundImage) {
            // Check if the image URL is a Blob URL
            const isBlobUrl = backgroundImage.startsWith('blob:');
            if (isBlobUrl) {
                fetch(backgroundImage)
                    .then((response) => response.blob())
                    .then((blob) => {
                        const blobUrl = URL.createObjectURL(blob);
                        setUploadedImage(blobUrl);
                    })
                    .catch((error) => {
                        console.error('Error fetching Blob URL:', error);
                    });
            } else {
                const image = new Image();
                image.onload = () => {
                    setUploadedImage(backgroundImage);
                };
                image.src = backgroundImage;
            }
        }
    }, [backgroundImage]);
    const containerStyle: React.CSSProperties = {
        ...style,
        backgroundColor,
        backgroundImage: uploadedImage ? `url(${uploadedImage})` : undefined,
    };

    return (
        <div className={className} style={containerStyle}>
            <div className="back"></div>
            <div className="bottom"></div>
            <div className="sole"></div>
        </div>
    );
};

export default CustomShape;
