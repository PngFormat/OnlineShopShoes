import React from 'react'
import { Container,Col,Image,Row,Button,Card } from 'react-bootstrap'
//import deviceStore from '../store/deviceStore'
import AppFooter from "../components/AppFooter";
// import AppFooter from "../components/AppFooter";
import styles from "../style/ManShoes.module.scss"
import {NavLink} from "react-router-dom";
import {UnauthorisedPath} from "../utils/Path";
import {useCart} from "../Context/cartContext";


const ManShoes = () => {

    const {gender, setGender} = useCart()

    const updateGender = () => {
        setGender('Male')
        console.log(gender)

    }

    return(
        <div className={styles.mainblock}>
            <div className={styles.firstimg}>
                <NavLink className = {styles.navLink} to={UnauthorisedPath.DEVICE_ROUTE + '?gender=Male'}>Чоловіче взуття</NavLink>

                    <p className={styles.text}>Стильная мужская обувь может быть и красивой, и комфортной.  </p>
                    <p className={styles.text}> Как ни крути, выбирая пару, именно удобство - главное преимущество.</p>
            </div>

            <div className={styles.marquee}><span>Стильная обувь - залог всего вашего образа.Ваша обувь - ваше лицо,должна быть новая</span>
            </div>
            <hr className={styles.line}></hr>


            <div className={styles.number}>

                <div className={styles.back}>
                    <h2 className={styles.run}>30 млн людей бегает прямо сейчас</h2>

                    <h2 className={styles.shoes}>Ежегодно производится 10 млрд пар обуви</h2>

                    <h2 className={styles.shoes2}>В мире существует приблизительно 100000 разлинчых моделей обуви</h2>
                </div>

            </div>
            <div className={styles.footer}>
                <AppFooter/>
            </div>

        </div>




    )


}

export default ManShoes
