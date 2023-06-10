import React, {useEffect, useState} from 'react';
import { Col,Card,Image } from 'react-bootstrap';
import {IDevice} from "../types/deviceTypes";
import styles from "../style/DeviceItem.module.scss";
import {useHistory} from "react-router-dom";
import { UnauthorisedPath } from '../utils/Path';
import star from "../assets/star.png"
import * as console from "console";
import ContentLoader from "react-content-loader";

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
    loading?:boolean;

}

const DeviceItem: React.FC<DeviceItemProps> = ({device,onPlus,onFavorite,favorited,loading}) => {

    const history = useHistory();
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);
    const [isLoading, setIsLoading] = useState(true);
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        // Имитация задержки загрузки
        const timer = setTimeout(() => {
            setShowCard(true);
            setIsLoading(false);
        }, 1000);

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timer);
    }, []);

    const onClickPlus = () => {
        onPlus(device.id, device.name, device.price, device.image);
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite(device.id, device.name, device.price, device.image);
        setIsFavorite(!isFavorite);
    };

    return (
        <Col xs={3} sm={3} md={3} lg={3} xl={3} className='mt-3'>
            {isLoading ? (
                <ContentLoader
                    speed={2}
                    width={600}
                    height={460}
                    viewBox="0 0 200 460"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="12" ry="12" width="150" height="150" />
                    <rect x="-2" y="165" rx="0" ry="0" width="51" height="17" />
                    <rect x="0" y="263" rx="0" ry="0" width="28" height="23" />
                    <rect x="0" y="197" rx="0" ry="0" width="150" height="17" />
                    <rect x="0" y="229" rx="0" ry="0" width="47" height="17" />
                    <rect x="65" y="164" rx="0" ry="0" width="28" height="19" />
                    <rect x="113" y="163" rx="0" ry="0" width="28" height="19" />
                </ContentLoader>
            ) : showCard ? (
                <Card className={styles.card} border='dark'>
                    {/* Контент для отображения после загрузки */}
                    <Image
                        onClick={() => history.push(UnauthorisedPath.DEVICE_ROUTE + '/' + device.id)}
                        className={styles.image}
                        src={device.image}
                    />
                    <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                        <div>Shoes...</div>
                        <div className='d-flex align-items-center'>
                            <div>{device.rating}</div>
                            <Image width={18} height={18} src={star} />
                            <img
                                onClick={onClickPlus}
                                className={styles.plus}
                                src={
                                    isAdded
                                        ? 'https://www.kindpng.com/picc/m/19-191997_plus-png-plus-icon-png-flat-transparent-png.png'
                                        : 'https://www.pngplay.com/wp-content/uploads/12/Plus-PNG-HD-Quality.png'
                                }
                                width={60}
                                height={60}
                                alt='plus'
                            />
                        </div>
                    </div>
                    <div>{device.name}</div>
                    <div className='btn-primary'>
                        <h5>
                            {device.price} {''} грн
                        </h5>
                    </div>
                    <div className='favorite'>
                        <img
                            onClick={onClickFavorite}
                            className='p-1 mb-0'
                            src={
                                isFavorite
                                    ? 'https://freesvg.org/img/heart_jon_phillips_01.png'
                                    : 'https://cdn.onlinewebfonts.com/svg/img_491354.png'
                            }
                            alt='Unliked'
                            width='40'
                        ></img>
                    </div>
                </Card>
            ) : null}
        </Col>
    );
};

export default DeviceItem;

