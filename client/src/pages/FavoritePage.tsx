import styles from "../style/WomanShoes.module.scss";

import React, {useContext} from "react";
import {Row} from "react-bootstrap";
import {IDevice} from "../types/deviceTypes";
import DeviceItem from "../components/DeviceItem";
import {Context} from "../index";
const FavoritePage = ({items}) => {

    const {device} = useContext(Context)
    return(
        <Row className=''>
            <h1>Список избранного</h1>

            {console.log(items)}
                {items && items
                    .map((item,index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>

                        </div>
                        // <DeviceItem key={index}
                        //     title={item.name}
                        //
                        //     device={device}
                        // />
                    ))}


        </Row>
    )


}

export default FavoritePage
