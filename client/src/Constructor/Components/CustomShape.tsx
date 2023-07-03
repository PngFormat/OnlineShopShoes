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
            const image = new Image();
            image.onload = () => {
                setUploadedImage(backgroundImage);
            };
            image.src = backgroundImage;
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



// import React, { useState } from 'react';
//
// interface ICustomShape {
//     className: string;
//     backgroundColor?: string;
//     style?: React.CSSProperties;
//     backgroundImage?: string;
// }
//
// const CustomShape: React.FC<ICustomShape> = ({ className, backgroundColor, style, backgroundImage }) => {
//     const [uploadedImage, setUploadedImage] = useState<string | undefined>(backgroundImage);
//
//     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setUploadedImage(reader.result as string);
//             };
//             reader.readAsDataURL(file);
//         }
//     };
//
//     const containerStyle: React.CSSProperties = {
//         ...style,
//         backgroundColor,
//     };
//
//     const imageStyle: React.CSSProperties = {
//         backgroundImage: uploadedImage ? `url(${uploadedImage})` : undefined,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//     };
//
//     return (
//         <div className={className} style={containerStyle}>
//             <div className="back"></div>
//             <div className="bottom"></div>
//             <div className="sole"></div>
//             <input type="file" accept="image/*" onChange={handleImageUpload} />
//             {uploadedImage && <img src={uploadedImage} alt="Selected Image" style={imageStyle} />}
//         </div>
//     );
// };
//
// export default CustomShape;
