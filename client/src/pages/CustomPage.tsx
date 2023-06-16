import React from 'react';
import styles from '../style/CustomShoes.module.scss'
import Constructor from "../Constructor/Constructor";

const CustomPage = () => {
    return (
        <div>
            <h1>Кастомізація взуття</h1>
            <img width={650} height={400} className="d-flex justify-content-center align-items-center" src='https://img.freepik.com/premium-vector/outline-cool-sneakers-shoes-sneaker-outline-drawing-vector-sneakers-drawn-in-a-sketch-style_681139-169.jpg' alt='Кастом'></img>
            <div className={styles.mainBlock}>
                <Constructor/>
            </div>
        </div>
    );
};


export default CustomPage;