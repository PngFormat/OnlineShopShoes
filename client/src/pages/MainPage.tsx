import React from 'react'
import { Container,Col,Image,Row,Button,Card } from 'react-bootstrap'
//import deviceStore from '../store/deviceStore'
import bigStar from "../assets/bigStar.png"
import { IDevice } from '../types/deviceTypes'
import { useParams } from 'react-router'
import { fetchOneDevice } from '../http/deviceApi'
import styles from "../style/MainPage.module.scss"
import AppFooter from "../components/AppFooter";
// import AppFooter from "../components/AppFooter";


const MainPage = () => {

    return(
        <div className={styles.mainblock}>
            <h1 className={styles.h1}>We are better with you</h1>
            <div className={styles.spaceEvenly}>
            <div className={styles.backImg}>
                <div className={styles.information}>
                    {/*<div className={styles.blockInfo}>*/}
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
