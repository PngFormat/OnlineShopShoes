import React, {useEffect, useState} from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from "../components/BrandBar";
import DeviceList from '../components/DeviceList';
import { observer} from 'mobx-react-lite';
import {fetchTypes,fetchBrands,fetchDevices} from '../http/deviceApi';
import { Context } from '../index';
import Paginatio from "../components/Pagination"
import {IPagi} from '../types/deviceTypes';
import styles from "../style/ShopPage.module.scss"
import {useSearch} from "../Context/searchContext";


const Shop = observer(() => {

    const {device} = React.useContext(Context)
    const {searchValue, setSearchValue} = useSearch();
    // const onChangeSearchInput = (event) => {
    //     setSearchValue(event.target.value);
    // }

    useEffect(() =>{
      fetchTypes().then((data: string[]) => device.setTypes(data));
      fetchBrands().then((data: string[]) => device.setBrands(data));
      fetchDevices().then((data: IPagi) => {
          device.setDevices(data?.rows);
          device.setTotalCount(data?.count)
      });
    }, [])
    useEffect(() =>{
        try {
            fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 5).then((data: IPagi) => {
                device.setDevices(data?.rows);
                device.setTotalCount(data?.count)
            })
        } catch (e) {
            console.log(e)
        }
    },[device.page, device.selectedType, device.selectedBrand,device])

    return (

        <Container className={styles.container} >
            <Paginatio />
            <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}</h1>
            <div className='m-lg-3 d-flex align-items-center justify-content-end mb-40'>
                <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' alt="Search" width='60'></img>

                <input height='30' width='30' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={styles.search_block}  placeholder='Поиск...'/>
                {searchValue && (<img onClick={() => setSearchValue('')} className={styles.clear} src='https://www.freeiconspng.com/thumbs/remove-icon-png/remove-icon-png-7.png' alt='Clear'></img>)}
            </div>
         <Row>
             <Col xs={2} sm={2} md={2} lg={2}>
                <TypeBar  />
             </Col>
             <Col  xs={10} sm={10} md={10} lg={10}>

                <BrandBar  />
                <DeviceList />


             </Col>

         </Row>

        </Container>
    )
})

export default Shop
