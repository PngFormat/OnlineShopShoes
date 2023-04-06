import React from 'react'
import { Container,Col,Image,Row,Button,Card } from 'react-bootstrap'
//import deviceStore from '../store/deviceStore'
import bigStar from "../assets/bigStar.png"
import { IDevice } from '../types/deviceTypes'
import { useParams } from 'react-router'
import { fetchOneDevice } from '../http/deviceApi'
import styles from "../style/MainPage.module.scss"


const MainPage = () => {

    return(
        <div className={styles.mainblock}>
            <h1 className={styles.h1}>We are better with you</h1>
            <div className={styles.backImg}>
                <div className={styles.information}>

                </div>

            </div>


        </div>

    )


}

export default MainPage
