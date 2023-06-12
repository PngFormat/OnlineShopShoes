import React, {useState} from 'react'
import styles from '../style/BasketPage.module.scss'
import {AuthorisedPath, UnauthorisedPath} from "../utils/Path";
import {useHistory} from "react-router-dom";

const Basket = ({onClickClose,onRemove, items }) => {

    const history = useHistory();
    const itemsPrice = items.reduce((acc, item) => acc += Number(item.price), 0 )
    // const itemsPrice = items.reduce((acc, item) => acc + Number(item.price), 0);
    // history.push({
    //     state: { itemsPrice }
    // });

    console.log(itemsPrice)
    return (
            <div>
                <div className='wrapper-clear'>
                    <div style={{display:'block'}} className={styles.overlay} >
                        <div className={styles.drawer}>
                            <h3 >Корзина товаров   <img onClick={onClickClose} className={styles.removeBtn} src='https://www.freeiconspng.com/thumbs/remove-icon-png/remove-icon-png-7.png'></img>
                            </h3>
                            {items.length > 0 ?
                                <div className={styles.items}>
                                    <div className='d-flex flex-wrap'>
                                        {
                                            items.map((obj) => (

                                                <div key={items} style={{display:"flex",alignItems:"center"}} className={styles.cartItem}>
                                                    <img className={styles.imgCart} src={obj.imageUrl} height='120' width='120' alt='Sneakers'/>
                                                    <div className={styles.block}>
                                                        <p className={styles.title}>{obj.title}</p>
                                                        <b>{obj.price} грн</b>

                                                    </div>

                                                    <img onClick={() => onRemove(obj.id)} className={styles.removeBtn} src='https://www.freeiconspng.com/thumbs/remove-icon-png/remove-icon-png-7.png'></img>
                                                </div>
                                            ))}
                                    </div>
                                    <div className={styles.cartTotalBlock}>
                                        <ul>
                                            <li>
                                                <span>Итого</span>
                                                <div></div>
                                                <b>{itemsPrice} {' '}грн</b>
                                            </li>
                                            <li >
                                                <span>Налог 20%</span>
                                                <div></div>
                                                <b>{itemsPrice * 0.2} {' '}грн</b>
                                            </li>
                                        </ul>
                                        <div className={styles.greenButton}>
                                            <button onClick={() => {
                                                onClickClose()
                                                // UnauthorisedPath.PAYMENTPAGE_ROUTE
                                                history.push({
                                                    pathname: UnauthorisedPath.PAYMENTPAGE_ROUTE,
                                                    state: {itemsPrice}
                                                })}}>
                                                Оформить заказ
                                                <img src='https://pngimg.com/uploads/red_arrow/red_arrow_PNG49.png' width='70' height='60'></img>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                :
                                <div className="carEmpty">
                                    <img className='mb-20' width={120} height={120}  src='https://imgpng.ru/d/box_PNG84.png'>
                                    </img>
                                    <h2>Корзина пустая</h2>
                                    <p className='opacity-6'>Добавьте хотя бы одну пару,чтобы сделать заказ</p>
                                    <div className={styles.greenButton}>
                                        <button onClick={onClickClose}>Вернуться назад <img src='https://pngimg.com/uploads/red_arrow/red_arrow_PNG49.png' width='70' height='60'></img> </button>
                                    </div>
                                </div>

                            }
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default Basket
