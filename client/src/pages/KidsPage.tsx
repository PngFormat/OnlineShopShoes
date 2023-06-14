import React from 'react';
import AppFooter from "../components/AppFooter";
import styles from "../style/ManShoes.module.scss";
import {UnauthorisedPath} from "../utils/Path";
import {NavLink} from "react-router-dom";

const KidsPage = () => {
    return (
        <div>
            <NavLink className = {styles.navLink} to = {UnauthorisedPath.DEVICE_ROUTE}>Дитяче взуття</NavLink>
            <section>
                <h1>Детская обувь</h1>
                <h2>Новые коллекции</h2>
                <p>Здесь может быть информация о новых коллекциях детской обуви.</p>
            </section>

            <section>
                <h2>Летняя коллекция</h2>
                <p>Познакомьтесь с нашей новой летней коллекцией обуви для детей. Яркие цвета, удобство и качество - всё это в нашей коллекции.</p>
                <img src="summer-shoes.jpg" alt="Летняя обувь"></img>
            </section>

            <section>
                <h2>Зимняя коллекция</h2>
                <p>Готовьтесь к зиме вместе с нами! Мы предлагаем широкий ассортимент зимней обуви для детей: сапоги, угги, ботинки и многое другое.</p>
                <img src="winter-shoes.jpg" alt="Зимняя обувь"></img>
                <AppFooter></AppFooter>
            </section>

        </div>
    );
};

export default KidsPage;