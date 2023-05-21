import { observer } from 'mobx-react-lite'
import React, {useContext, useState} from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import { IDevice } from '../types/deviceTypes'
import DeviceItem from './DeviceItem'
import {useCart} from "../Context/cartContext";
import {useSearch} from "../Context/searchContext";
import { BrowserRouter, Router, Route } from "react-router-dom";
import FavoritePage from "../pages/FavoritePage";




const DeviceList = observer((items) => {
    const {searchValue} = useSearch();
    const {setCartItems, favorites, setFavorites} = useCart();
    const {device} = useContext(Context)


    const onAddToCart = (id,title,price,imageUrl) => {
        setCartItems(prev => [...prev,{id,title,price,imageUrl}]);
    }

    const onAddToFavorite = (id,title,price,imageUrl) => {
        setFavorites(prev => [...prev,{id,title,price,imageUrl}]);

    }
    console.log(device.devices)
    return (

        <Row className=''>

            {device.devices

                .filter((device) => device.name.toLowerCase().includes(searchValue))
                .map((device: IDevice) => (
                    <DeviceItem
                        onPlus={(id,title, price, imageUrl) => onAddToCart(id,title,price,imageUrl)}
                        onFavorite={(id,title, price, imageUrl) => onAddToFavorite(id,title, price, imageUrl)}
                        key={device.id}
                        device={device}
                    />


                ))}



        </Row>
    )
})

export default DeviceList
