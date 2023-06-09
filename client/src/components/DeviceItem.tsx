import React, {useState} from 'react';
import { Col,Card,Image } from 'react-bootstrap';
import {IDevice} from "../types/deviceTypes";
import styles from "../style/DeviceItem.module.scss";
import {useHistory} from "react-router-dom";
import { UnauthorisedPath } from '../utils/Path';
import star from "../assets/star.png"
import * as console from "console";

interface DeviceItemProps {
    device?: IDevice;
    onPlus?: (id, title, price, imageUrl) => void;
    onFavorite?: (id, title, price, imageUrl) => void;
    favorited?: boolean;
    items?: [...any];
    title?:string;
    id?:number;
    price?:number;
    imageUrl?:string;

}

const DeviceItem: React.FC<DeviceItemProps> = ({device,onPlus,onFavorite,favorited}) => {
 
    const history = useHistory();

    const [isAdded, setIsAdded] = useState(false);

    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus(device.id,device.name,device.price,device.image);
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite(device.id,device.name,device.price,device.image);
        setIsFavorite(!isFavorite)
    }


    return (
        <Col xs={3} sm={3} md={3} lg={3} xl={3} className='mt-3' >
             <Card className={styles.card} border={"dark"}>
                <Image onClick={() => history.push(UnauthorisedPath.DEVICE_ROUTE + '/' + device.id)} className={styles.image} src={'https://images.shafastatic.net/175118176'}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Shoes...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>


                        <Image width={18} height={18} src={star}/>
                        <img onClick={onClickPlus}  className={styles.plus}
                             src={isAdded ? 'https://www.kindpng.com/picc/m/19-191997_plus-png-plus-icon-png-flat-transparent-png.png'
                                 : 'https://www.pngplay.com/wp-content/uploads/12/Plus-PNG-HD-Quality.png' } width={60} height={60} alt='plus'></img>
                    </div>
                </div>

                <div>{device.name}</div>
                 <div className='favorite'>
                     <img onClick={onClickFavorite}  className='p-1 mb-0' src={isFavorite ? ' https://freesvg.org/img/heart_jon_phillips_01.png'
                         : 'https://cdn.onlinewebfonts.com/svg/img_491354.png' } alt='Unliked' width='40'></img>
                 </div>
            </Card>


        </Col>
    )
}

export default DeviceItem
