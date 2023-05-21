import styles from "../style/WomanShoes.module.scss";
import React, {useContext} from "react";
import {Row} from "react-bootstrap";
import {useCart} from "../Context/cartContext";
import DeviceList from "../components/DeviceList";
import DeviceItem from "../components/DeviceItem";

const FavoritePage = () => {

    const {favorites} = useCart();

    return(
        <div>
            <Row className='w-100'>
                <h1>Список избранного</h1>
                {
                    favorites.map( (item) => {
                        console.log(item)
                        const modifiedItem = {...item, img: item.imageUrl, name: item.title}
                        return(

                            <DeviceItem
                            key={item.id}
                            device={modifiedItem}
                            favorited={true}/>

                        )


                    })
                }



            </Row>
        </div>
    )


}

export default FavoritePage
