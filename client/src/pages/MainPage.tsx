
import React, { useState } from 'react';

import styles from "../style/MainPage.module.scss"
import AppFooter from "../components/AppFooter";
import ImageSlider from "../components/Sliders"
// import AppFooter from "../components/AppFooter";


const MainPage = () => {
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEq5fRpbI-ALMTHVJKBhroqlA5VX_PXxdSCQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v_jKzSubxup8bEsivIPT6wdxPoz9-ZbonunUBKJtIWzQRwzzk8dsA7FPIoO7rwv6uks&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkn7SXn1_vq4pciAON-jW8fF3sgB57Bw3bLQ&usqp=CAU',
    ];

    return(
        <div className={styles.mainblock}>
            <h1 className={styles.h1}>We are better with you</h1>
            <div className='d-flex justify-content-between'>
                <h2 className='mt-5'>Підкресліть свій стиль з нашою колекцією взуття</h2>
                <ImageSlider></ImageSlider>
                <h2 className='mt-5'>Наше взуття - ваш найкращий вибір для активного життя</h2>
            </div>

            <div className={styles.spaceEvenly}>
            <div className={styles.backImg}>
                <div className={styles.information}>

                        <div className={styles.posterimages}>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9Gc
                            S9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>

                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>
                            </a>
                        </div>

                    {/*</div>*/}

                </div>

            </div>
                <div className={styles.backImg2}>
                    <div className={styles.posterimages2}>
                        <div className={styles.posterimages}>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiCp3ZatojUcUjUMjrLgAkN4h6TO8NPULNQ&usqp=CAU" alt="Фото 1"/>

                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiCp3ZatojUcUjUMjrLgAkN4h6TO8NPULNQ&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiCp3ZatojUcUjUMjrLgAkN4h6TO8NPULNQ&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiCp3ZatojUcUjUMjrLgAkN4h6TO8NPULNQ&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiCp3ZatojUcUjUMjrLgAkN4h6TO8NPULNQ&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiCp3ZatojUcUjUMjrLgAkN4h6TO8NPULNQ&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiCp3ZatojUcUjUMjrLgAkN4h6TO8NPULNQ&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>
                            </a>
                            <a href="#link">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s6w-I5M1Wj7-TiMuMM1eWqVzzdldW_0twSMe993q3lD51bK5Jl5lgZerf0gTgwnO-Dw&usqp=CAU" alt="Фото 1"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.footer}>
                <AppFooter/>
            </div>

        </div>


    )


}

export default MainPage
