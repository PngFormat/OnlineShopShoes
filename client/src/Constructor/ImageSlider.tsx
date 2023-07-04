import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelection = (option) => {
        setSelectedOption(option);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '300px' // Измените отступы по своему усмотрению
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <Slider {...settings}>
                <div>
                    <button onClick={() => handleSelection('option1')}>
                        <img
                            width={100}
                            height={100}
                            src="https://www.pngplay.com/wp-content/uploads/3/Shoelaces-PNG-Background.png"
                            alt="Upper Part Option 1"
                        />
                    </button>
                </div>
                <div>
                    <button onClick={() => handleSelection('option2')}>
                        <img
                            width={100}
                            height={100}
                            src="https://imgpng.ru/d/shoelaces_PNG28.png"
                            alt="Upper Part Option 2"
                        />
                    </button>
                </div>
                <div>
                    <button onClick={() => handleSelection('option3')}>
                        <img
                            width={100}
                            height={100}
                            src="https://example.com/image3.png"
                            alt="Upper Part Option 3"
                        />
                    </button>
                </div>
                <div>
                    <button onClick={() => handleSelection('option3')}>
                        <img
                            width={100}
                            height={100}
                            src="https://example.com/image3.png"
                            alt="Upper Part Option 3"
                        />
                    </button>
                </div>
                {/* Добавьте другие кнопки с изображениями, если нужно */}
            </Slider>
            {selectedOption && <p>Selected option: {selectedOption}</p>}
        </div>
    );
};

export default ImageSlider;
